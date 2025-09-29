// import modules
import {Queue} from "./singlyLinkedList.ts";
import {BinaryHeap} from "./binaryHeap.ts";
import {
    translateMatrixToList,
    translateListToMatrix,
    compareVertexDistanceFromOrigin,
    numbersMatch,
    objectsMatch,
    reorder,
    sequence,
    formatVertexByDistance,
    unformatVertexByDistance
} from "../helpers.ts";

// import types
import type {
    Vertices,
    AdjacencyList,
    GraphVertexByDistance,
    matcherSignature,
    AdjacencyMatrix,
    GraphEdge,
    LineGraphVertex
} from "../interfaces.ts";

export class Graph<T> {

    // ##############################################################
    // #                       GRAPH CONSTANTS                      #
    // ##############################################################

    // define vertices maximum index - max value that fits in 2 bytes
    public static MAX_VERTICES: number = 65535;
    // define infinite distance (absence of edge) - max value that fits in 4 bytes since
    public static INFINITY: number = 4294967295;

    // ##############################################################
    // #                       GRAPH VARIABLES                      #
    // ##############################################################

    // store graph vertices values
    private vertices: Vertices<T>;
    // store graph edges adjacency list
    private edges: AdjacencyList;
    // reuse the same min heap for each traversal
    private queue: Queue<number>;
    // reuse the same min heap for each traversal
    private heap: BinaryHeap<GraphVertexByDistance>;
    // declare internal vertice matcher function
    public match: matcherSignature<T>;

    // do not pass a default value for matchers and comparators since it would "abstract" the current use case ...
    constructor(vertices: Vertices<T>, edges: AdjacencyList | AdjacencyMatrix, m: matcherSignature<T>) {
        // init vertices
        this.vertices = vertices;
        // init edges
        this.edges = edges.length && edges[0].length ? typeof edges[0][0] === `number` ? translateMatrixToList(edges as AdjacencyMatrix) : edges as AdjacencyList : [];
        // init vertices queue
        this.queue = new Queue<number>(numbersMatch);
        // init vertices min heap (matcher declared for compliance since no remove by value operation is performed on the min heap)
        this.heap = new BinaryHeap(false, 6, formatVertexByDistance, unformatVertexByDistance, objectsMatch, compareVertexDistanceFromOrigin);
        // initialize matcher function
        this.match = m;
    }

    // ##############################################################
    // #                       GRAPH PROPERTIES                     #
    // ##############################################################

    // extract strongly connected components from a directed graph
    public get components(): Array<Array<T>> {
        // init components per vertex array, fill w/ undefined
        const components = new Array(this.vertices.length) as Array<number>;

        // extract component for current vertex
        const getComponent = (vertex: number, component: number): void => {
            // 1. BASE CASE
            // current vertex is already part of a component
            if (typeof components[vertex] !== `undefined`)
                // return
                return;

            // 2. PRE
            // start a new component from current vertex
            components[vertex] = component;

            // 3. RECURSION
            // for each edge e connected to current vertex (thus part of the same component)
            for (let e = 0; e < this.edges[vertex].length; e++) {
                // if connection from current vertex to current edge is bidirectional
                const {edge} = this.edges[vertex][e];
                if (this.edges[edge].some(f => f.edge === vertex))
                    // recurse on edge
                    getComponent(edge, component);
            }

            // 4. POST
            // ...

            // 5. RETURN
            // ...
        };

        // for each vertex v
        for (let v = 0; v < this.vertices.length; v++)
            // extract component for v
            getComponent(v, v);

        // init components list
        const result: Array<Array<T>> = new Array(this.vertices.length).fill(null)
            .map(() => []);

        // reconstruct components from array
        for (let v = 0; v < this.vertices.length; v++)
            result[components[v]].push(this.vertices[v]);

        // filter and return
        return result.filter(x => x.length > 0);
    }

    // extract vertices indegrees and outdegrees
    public get degrees(): Array<[T, {ind: number; out: number}]> {
        // store degrees by vertices ...
        const degrees: Array<[T, {ind: number; out: number}]> = new Array(this.vertices.length).fill(null)
            .map((_, i) => [ this.vertices[i], {ind: 0, out: 0} ]);

        // count vertice degrees ...
        for (let vertex = 0; vertex < this.vertices.length; vertex++) {
            for (let e = 0; e < this.edges[vertex].length; e++) {
                // increment out degrees
                degrees[vertex][1].out += 1;
                // increment in degrees for edge
                degrees[this.edges[vertex][e].edge][1].ind += 1;
            }
        }

        // return
        return degrees;
    }

    // return graph edges count
    public get edgesCount(): number {
        // eslint-disable-next-line no-param-reassign
        return this.degrees.reduce((r, x) => (r += x[1].ind + x[1].out), 0) / 2;
    }

    // return whether graph is connected
    public get isConnected(): boolean {
        return this.components.length === 1;

    }

    // return whether graph is complete
    public get isComplete(): boolean {
        return this.edgesCount === this.vertices.length * (this.vertices.length - 1);
    }

    // create line graph for current graph ...
    public get lineGraph(): Graph<LineGraphVertex> {
        // init adjacency matrix for the original graph
        const original = translateListToMatrix(this.edges);
        // init edges to line graph vertices mappings matrix
        const mappings: AdjacencyMatrix = new Array(this.edges.length).fill(null)
            .map(() => new Array<number>(this.vertices.length).fill(Graph.INFINITY));
        // create vertices array for the line graph
        const edges: Array<LineGraphVertex> = [];

        // loop over original graph vertices
        for (let vertex = 0; vertex < original.length; vertex++) {
            // loop over original graph edges
            for (let edge = 0; edge < original[vertex].length; edge++) {
                // if current edge distance is not infinity
                // (ie. edge exists in the original graph)
                if (original[vertex][edge] !== Graph.INFINITY) {
                    // add current edge to the line graph vertices
                    edges.push({from: vertex, to: edge, weight: original[vertex][edge]});
                    // map line graph vertex to current edge
                    mappings[vertex][edge] = edges.length - 1;
                }
            }
        }

        // init adjacency matrix for the line graph
        // (ie. length equals number of edges)
        const lineg: AdjacencyMatrix = new Array(edges.length).fill(null)
            .map(() => new Array(edges.length).fill(Graph.INFINITY) as Array<number>);

        // loop over line graph vertices
        for (let vertex = 0; vertex < edges.length; vertex++) {
            // loop over current line graph vertex's head edges in the original graph
            for (let edge = 0; edge < original[edges[vertex].to].length; edge++) {
                // if current edge distance is not infinity
                // (ie. vertex connects 2 edges in the original graph)
                if (original[edges[vertex].to][edge] !== Graph.INFINITY) {
                    // read connected line graph vertex from mappings
                    const connected = mappings[edges[vertex].to][edge];
                    // create edge in the line graph matrix (add weights)
                    lineg[vertex][connected] = edges[vertex].weight + edges[connected].weight;
                }
            }
            // loop over original graph vertices
            for (let orig = 0; orig < original.length; orig++) {
                // if vertex distance to current line graph vertex's tail is not infinity
                // (ie. vertex connects 2 edges in the original graph)
                if (original[orig][edges[vertex].from] !== Graph.INFINITY) {
                    // read connected line graph vertex from mappings
                    const connected = mappings[orig][edges[vertex].from];
                    // create edge in the line graph matrix (add weights)
                    lineg[connected][vertex] = edges[vertex].weight + edges[connected].weight;
                }
            }
        }

        // return line graph (JSON compare vertices value)
        return new Graph(edges, lineg, objectsMatch);
    }

    // ##############################################################
    // #                         PATH FINDING                       #
    // ##############################################################

    // perform DFS on adjacency list
    public depthFirstSearch(from: T, to: T): Array<GraphEdge> | undefined {

        // read source and sink indexes in vertices array
        const [ initial, final ] = [ this.vertices.findIndex(this.match.bind(null, from)), this.vertices.findIndex(this.match.bind(null, to)) ];

        // return undefined if not found
        if (initial < 0 || final < 0)
            return undefined;

        // init result = []
        const result: Array<number> = [];
        // set visited = new array(vertices.length) boolean
        const visited = new Array(this.vertices.length).fill(false) as Array<boolean>;
        // recursive processing of vertex v
        const traverse = (current: number): boolean => {
            // 1. BASE CASE
            // current vertex index === final, return true
            if (current === final)
                return true;
            // current vertex already visited, return false
            if (visited[current])
                return false;

            // 2. PRE
            // flag current vertex index as visited
            visited[current] = true;
            // push current vertex index into result
            result.push(current);

            // 3. RECURSION
            // init boolean accumulator, loop over vertices current vertex points to
            const acc = this.edges[current].reduce((r, x) => {
                // return immediately if path was found
                if (r)
                    return true;
                // perform a recursive call and aggregate returned value into the accumulator
                // eslint-disable-next-line no-param-reassign
                r ||= traverse(x.edge);
                // return
                return r;
            }, false);

            // 4. POST
            // if accumulator === false
            if (!acc)
                // pop current vertex from result
                result.pop();

            // 5. RETURN
            // return accumulator
            return acc;
        };
        // init recursion on origin vertex
        const found = traverse(initial);

        if (found)
            // append to result
            result.push(final);

        // return solution or null if empty ...
        return result.length ? sequence(result, this.edges) : undefined;
    }

    // perform BFS on adjacency list
    public breadthFirstSearch(from: T, to: T): Array<GraphEdge> | undefined {

        // read source and sink indexes in vertices array
        const [ initial, final ] = [ this.vertices.findIndex(this.match.bind(null, from)), this.vertices.findIndex(this.match.bind(null, to)) ];

        // return undefined if not found
        if (initial < 0 || final < 0)
            return undefined;

        // set visited = new array(vertices.length) boolean
        const visited = new Array(this.vertices.length).fill(false) as Array<boolean>;
        // set previous = new array(vertices.length) number
        const previous = new Array(this.vertices.length).fill(undefined) as Array<number | undefined>;

        // enqueue index from
        this.queue.enqueue(initial);

        // set current = dequeue
        let current = this.queue.dequeue();

        // while current !== undefined
        while (current !== undefined) {
            // if current === to
            if (current === final) {
                // discard remaining nodes
                this.queue.flush();
                // reorder previous array, extract sequence and return
                return sequence(reorder(previous, initial, final), this.edges);
            }
            // for i = 0 to edges[current].length
            for (let i = 0; i < this.edges[current].length; i++) {
                // if visited[edges[current][i].edge] === false
                if (!visited[this.edges[current][i].edge]) {
                    // previous[edges[current][i].edge] = current
                    previous[this.edges[current][i].edge] = current;
                    // enqueue edges[current][i].edge
                    this.queue.enqueue(this.edges[current][i].edge);
                }
            }
            // visited[current] = true
            visited[current] = true;
            // set current = dequeue
            current = this.queue.dequeue();
        }

        // return undefined
        return undefined;

    }

    // when using a queue to traverse the graph, nodes are processed according to their degree of adjacence from the origin node
    // when using a min heap w/ update to traverse the graph, nodes are processed closest first according to their distance from the origin node
    public DijkstraShortestPath(from: T, to: T): Array<GraphEdge> | undefined {

        // read source and sink indexes in vertices array
        const [ initial, final ] = [ this.vertices.findIndex(this.match.bind(null, from)), this.vertices.findIndex(this.match.bind(null, to)) ];

        // return undefined if not found
        if (initial < 0 || final < 0)
            return undefined;

        // set previous = new array(edges.length) number
        const previous = new Array(this.vertices.length).fill(undefined) as Array<number | undefined>;
        // set distances = new array(list.length) number or undefined
        const distances = new Array(this.vertices.length).fill(Graph.INFINITY) as Array<number>;

        // set distance[initial] = 0
        distances[initial] = 0;

        // push all vertices in heap
        for (let i = 0; i < this.vertices.length; i++)
            this.heap.insert({index: i, distance: i === initial ? 0 : Graph.INFINITY});

        // set current = pop from heap
        let current = this.heap.delete();

        // while current !== undefined
        while (current !== undefined) {
            // for i = 0 to edges[current.edge].length - 1
            for (let i = 0; i < this.edges[current.index].length; i++) {
                // read edge and weight from edges[current.edge][i]
                const {edge, weight} = this.edges[current.index][i];
                // set distance = distances[current.edge] + edges[current.edge][i].weight
                const distance = distances[current.index] === Graph.INFINITY ? weight : distances[current.index] + weight;
                // if distance < distances[edge]
                if (distance < distances[edge]) {
                    // set previous[edge] = current
                    previous[edge] = current.index;
                    // update min heap node for edge
                    this.heap.update({index: edge, distance: distances[edge]}, {index: edge, distance});
                    // set distances[edge] = distance
                    distances[edge] = distance;
                }
            }
            // set current = pop from heap
            current = this.heap.delete();
        }

        // !!! no need to flush the heap at this stage since path calculation does not stop once final is found !!!

        // throw if no shortest path was found for destination
        if (typeof previous[final] === `undefined`)
            throw new Error(`broken Dijkstra implentation.`);

        // reconstruct path for index final and return
        return sequence(reorder(previous, initial, final), this.edges);
    }

}