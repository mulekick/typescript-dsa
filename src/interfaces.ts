/**
 * Shared types and interfaces.
 * @module
 * @showCategories
 * @categoryDescription 1. Async queue
 * - Types used for the rate-limited async queue implementation.
 * @categoryDescription 2. Object signatures
 * - Types used with data structures that handle objects.
 * @categoryDescription 3. Function signatures
 * - Generic signatures types for data structures related functions.
 * @categoryDescription 4. Node based structures
 * - Types used by node based data structures (stacks and queues).
 * @categoryDescription 5. Tree structures
 * - Types used by tree data structures.
 * @categoryDescription 6. Graph structures
 * - Types used by graphs data structures.
*/

// import types
import type {Buffer} from "node:buffer";
import type {StringStack, StringQueue} from "./structures/singlyLinkedList.ts";
import type {ObjectStack} from "./structures/arrayList.ts";
import type {ObjectQueue} from "./structures/ringBuffer.ts";
import type {OtherObjectQueue} from "./structures/deque.ts";
import type {Graph} from "./structures/graph.ts";

// ##############################################################
// #                        ASYNC QUEUE                         #
// ##############################################################

/**
 * Network request object.
 * @category 1. Async queue
 * @interface
 */
export interface NetworkRequest {
    // url to request
    url: string;
    // identify results with an uuid
    uuid: string;
    // sequence number
    num: number;
}

// ##############################################################
// #                     OBJECT SIGNATURES                      #
// ##############################################################

/**
 * Sample object signature for object storage in data structures.
 * @category 2. Object signatures
 * @interface
 */
export interface sampleObject {
    prop: number;
}

/**
 * Cell coords for recursion algorithm.
 * @category 2. Object signatures
 * @interface
 */
export interface coords {
    y: number;
    x: number;
}

/**
 * Type used for maze description.
 * @category 6. Graph structures
 * @interface
 * @remarks
 * - Used for tests
 */
export interface mazeObject {
    level: string;
    maze: Array<string>;
    wall: string;
    length: number;
    start: coords;
    exit: coords | string;
}

// ##############################################################
// #                    FUNCTION SIGNATURES                     #
// ##############################################################

/**
 * Formatting function signature.
 * @category 3. Function signatures
 * @typeParam T Data type to format into a buffer.
 * @useDeclaredType
 * @remarks
 * - Max length allowed for storage is use case specific and must be consistent across background array constructor and formatter functions.
 */
export type formatter<T> = (v?: T)=> Buffer;

/**
 * Unformatting function signature.
 * @category 3. Function signatures
 * @typeParam T Data type to read from a buffer.
 * @useDeclaredType
 * @remarks
 * - Max length allowed for storage is use case specific and must be consistent across background array constructor and formatter functions.
 */
export type unformatter<T> = (b: Buffer)=> T;

/**
 * Node comparison function signature.
 * @category 3. Function signatures
 * @typeParam T Data type stored in the nodes.
 * @useDeclaredType
 * @remarks
 * - Used to compare nodes for ordering.
 */
export type comparator<T> = (a: T, b: T)=> 1 | -1 | 0;

/**
 * Node matching function signature.
 * @category 3. Function signatures
 * @typeParam T Data type stored in the nodes.
 * @useDeclaredType
 * @remarks
 * - Used to match nodes values for update and deletion.
 */
export type matcher<T> = (a: T, b: T)=> boolean;

// ##############################################################
// #                   NODE BASED STRUCTURES                    #
// ##############################################################

/**
 * Composing types for linked lists based structures benchmarks.
 * @category 4. Node based structures
 * @useDeclaredType
 */
export type StackType = StringStack | ObjectStack;
export type QueueType = StringQueue | ObjectQueue | OtherObjectQueue;

// ##############################################################
// #                  LIST / TREE STRUCTURES                    #
// ##############################################################

/**
 * List node (doubly linked).
 * @typeParam T Data type stored in the node.
 * @interface
 * @remarks
 * - We use the same node structure for singly and doubly linked lists.
 * - The `prev` property is undefined when used with singly linked lists.
 */
export interface Node<T> {
    // pointer to previous node
    prev?: Node<T>;
    // pointer to next node
    next?: Node<T>;
    // store value
    value: T;
}

/**
 * Depth first traversal types.
 * @category 5. Tree structures
 * @useDeclaredType
 */
export type traversalType = `PRE` | `IN` | `POST`;

/**
 * Binary node (doubly linked).
 * @category 5. Tree structures
 * @typeParam T Data type stored in the node.
 * @interface
 */
export interface BinaryNode<T> {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
    // store reference to parent node for use in BST
    parent: BinaryNode<T> | null;
}

/**
 * Function signatures for node visit.
 * @category 5. Tree structures
 * @typeParam T Data type stored in the node.
 * @useDeclaredType
 */
export type visitor<T> = (node: BinaryNode<T>)=> unknown;

/**
 * Trie node.
 * @category 5. Tree structures
 * @interface
 */
export interface TrieNode {
    // current character
    value: string;
    // next characters array
    next: Array<TrieNode | undefined>;
    // actual number of child nodes vs undefined values
    childNodes: number;
    // end of word flag
    isWord: boolean;
}

// ##############################################################
// #                     GRAPHS STRUCTURES                      #
// ##############################################################

/**
 * Rename for clarity's sake.
 * @category 6. Graph structures
 * @typeParam T Data type stored in the vertex.
 * @useDeclaredType
 */
export type Vertices<T> = Array<T>;

/**
 * Graph edge in an adjacency list.
 * @category 6. Graph structures
 * @interface
 */
export interface Edge {
    // connected vertex
    edge: number;
    // edge weight
    weight: number;
}

/**
 * Adjacency matrix.
 * @category 6. Graph structures
 * @useDeclaredType
 * @remarks
 * - It is assessed that all the graphs are weighted.
 * - Unweighted graphs are represented as weighted graphs with all edges weights equal to 1.
 */
export type AdjacencyMatrix = Array<Array<number>>;

/**
 * Adjacency list.
 * @category 6. Graph structures
 * @useDeclaredType
 * @remarks
 * - It is assessed that all the graphs are weighted.
 * - Unweighted graphs are represented as weighted graphs with all edges weights equal to 1.
 */
export type AdjacencyList = Array<Array<Edge>>;

/**
 * Vertex in a line graph.
 * @category 6. Graph structures
 * @interface
 */
export interface LineGraphVertex {
    from: number;
    to: number;
    weight: number;
}

/**
 * Vertex by distance.
 * @category 6. Graph structures
 * @interface
 * @remarks
 * - Used to store vertices distance to origin in a min heap for Dijkstra's shortest path.
 */
export interface VertexByDistance {
    index: number;
    distance: number;
}

/**
 * Graph properties.
 * @category 6. Graph structures
 * @interface
 * @remarks
 * - Used for tests
 */
export interface GraphProperties<T> {
    connected: boolean;
    edges: number;
    components: Array<Array<T>>;
    lineGraph: Graph<LineGraphVertex>;
}