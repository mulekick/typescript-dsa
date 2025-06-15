/**
 * @jest-environment node
 */

/* eslint-disable @stylistic/object-curly-newline */

// import primitives
import console from "node:console";

// import modules
import {describe, it, expect} from "@jest/globals";
import {Graph} from "../structures/graph.ts";
import {
    rnd,
    stringsMatch,
    coordsMatch,
    cities,
    distances,
    createUnweightedGraphFromMaze,
    reduceToVerticesList,
    timeExecution,
    reduceToTotalDistance,
    simpleMaze,
    simpleMazeStartingCoords,
    simpleMazeExitCoords,
    midLevelMaze,
    midLevelMazeStartingCoords,
    midLevelMazeExitCoords,
    advancedMaze,
    advancedMazeStartingCoords,
    advancedMazeExitCoords,
    hugeMaze,
    hugeMazeStartingCoords,
    hugeMazeExitCoords,
    drawMazeSolution
} from "../helpers.ts";

// import types
import type {coords, GraphEdge, LineGraphVertex} from "../interfaces.ts";

interface mazeBenchmarkSignature {
    level: string;
    maze: Array<string>;
    wall: string;
    length: number;
    start: coords;
    exit: coords;
}

interface GraphProperties<T> {
    connected: boolean;
    edges: number;
    components: Array<Array<T>>;
    lineGraph: Graph<LineGraphVertex>;
}

try {

    // pick source and sink
    const [ from, to ] = [ cities[rnd(0, cities.length - 1)], cities[rnd(0, cities.length - 1)] ];
    // mazes to benchmark against
    const mazes = [
        {level: `SIMPLE`, maze: simpleMaze, wall: `#`, length: simpleMaze.join(``).length, start: simpleMazeStartingCoords, exit: simpleMazeExitCoords},
        {level: `MID-LEVEL`, maze: midLevelMaze, wall: `#`, length: midLevelMaze.join(``).length, start: midLevelMazeStartingCoords, exit: midLevelMazeExitCoords},
        {level: `ADVANCED`, maze: advancedMaze, wall: `#`, length: advancedMaze.join(``).length, start: advancedMazeStartingCoords, exit: advancedMazeExitCoords},
        {level: `HUGE`, maze: hugeMaze, wall: `#`, length: hugeMaze.join(``).length, start: hugeMazeStartingCoords, exit: hugeMazeExitCoords}
    ];
    // create strings based graph (replace zero by infinity in the distances array)
    const sgraph = new Graph<string>(cities, distances, stringsMatch);
    // read graph properties
    const graphProperties = <T>(graph: Graph<T>): GraphProperties<T> => ({
        connected: graph.isConnected,
        edges: graph.edgesCount,
        components: graph.components,
        lineGraph: graph.lineGraph
    });

    // graphs
    describe(`===== GRAPH TRAVERSALS =====`, () => {

        // benchmark graph properties
        describe(`should read graph properties`, (): void => {
            // define function
            const {time, result} = timeExecution((graphProperties<string>).bind(null, sgraph));

            it(`read the following graph properties in ${ String(time) }ms:\n\tconnected graph: ${ String((result as GraphProperties<string>).connected) }\n\tedges: ${ String((result as GraphProperties<string>).edges) }\n\tcomponents: ${ String((result as GraphProperties<string>).components.length) }\n\tedges in line graph: ${ String((result as GraphProperties<string>).lineGraph.edgesCount) }\n`, (): void => {
                expect(true).toBe(true);
            });
        });

        // benchmark DFS
        describe(`should find the path from ${ from } to ${ to } using DFS on graph edges`, (): void => {
            // define function
            const {time, result} = timeExecution(sgraph.depthFirstSearch.bind(sgraph, from, to));

            it(`calculated the following path in ${ String(time) }ms: (total distance ${ String(reduceToTotalDistance(result as Array<GraphEdge>)) } km)\n\t${ reduceToVerticesList(cities, result as Array<GraphEdge>).join(`\n\t`) }`, (): void => {
                expect(true).toBe(true);
            });
        });

        // benchmark BFS
        describe(`should find the path from ${ from } to ${ to } using BFS on graph edges`, (): void => {
            // define function
            const {time, result} = timeExecution(sgraph.breadthFirstSearch.bind(sgraph, from, to));

            it(`calculated the following path in ${ String(time) }ms: (total distance ${ String(reduceToTotalDistance(result as Array<GraphEdge>)) } km)\n\t${ reduceToVerticesList(cities, result as Array<GraphEdge>).join(`\n\t`) }`, (): void => {
                expect(true).toBe(true);
            });
        });

        // benchmark Dijkstra
        describe(`should find the path from ${ from } to ${ to } using Dijkstra's shortest path`, (): void => {
            // define function
            const {time, result} = timeExecution(sgraph.DijkstraShortestPath.bind(sgraph, from, to));

            it(`calculated the following path in ${ String(time) }ms: (total distance ${ String(reduceToTotalDistance(result as Array<GraphEdge>)) } km)\n\t${ reduceToVerticesList(cities, result as Array<GraphEdge>).join(`\n\t`) }`, (): void => {
                expect(true).toBe(true);
            });
        });
    });

    // maze solving Dijkstra
    describe(`===== MAZE SOLVING USING DIJKSTRA'S SHORTEST PATH =====`, () => {
        // benchmark
        describe.each(mazes)(`input: $level maze (input length is $length) =====`, (x: mazeBenchmarkSignature): void => {
            // extract
            const {maze, wall, start, exit} = x;
            // translate maze to graph
            const [ vertices, list ] = createUnweightedGraphFromMaze(maze, wall);
            // create coords based graph
            const cgraph = new Graph<coords>(vertices, list, coordsMatch);
            // define function
            const {time, result} = timeExecution(cgraph.DijkstraShortestPath.bind(cgraph, start, exit));
            // remap edge path to vertices
            const solution = (result as Array<GraphEdge>).map((cell: GraphEdge) => vertices[cell.edge]);

            it(`solved, execution time is ${ String(time) }ms\n${ drawMazeSolution(maze, solution) }`, (): void => {
                expect(true).toBe(true);
            });
        });
    });

} catch (err: unknown) {
    console.log(`error: ${ err instanceof Error ? err.message : `unknown` }`);
}