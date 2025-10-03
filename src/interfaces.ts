/**
 * Shared types and interfaces.
 * @module
 * @showCategories
 * @categoryDescription Async queue
 * - Types used for the rate-limited async queue implementation.
 * @categoryDescription Object signatures
 * - Types used with data structures that handle objects.
 * @categoryDescription Function signatures
 * - Generic signatures types for data structures related functions.
 * @categoryDescription Node based structures
 * - Types used by node based data structures (stacks and queues).
 * @categoryDescription Tree structures
 * - Types used by tree data structures.
 * @categoryDescription Graph structures
 * - Types used by graphs data structures.
*/

// import primitives
import {Buffer} from "node:buffer";

// import modules
import {StringStack, StringQueue} from "./structures/singlyLinkedList.ts";
import {ObjectStack} from "./structures/arrayList.ts";
import {ObjectQueue} from "./structures/ringBuffer.ts";
import {OtherObjectQueue} from "./structures/deque.ts";

// ##############################################################
// #                        ASYNC QUEUE                         #
// ##############################################################

/**
 * Network request object.
 * @category Async queue
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
 * sample object signature for object storage in data structures.
 * @category Object signatures
 * @interface
 */
export interface SampleObject {
    prop: number;
}

/**
 * cell coords for recursion algorithm.
 * @category Object signatures
 * @interface
 */
export interface coords {
    y: number;
    x: number;
}

// ##############################################################
// #                    FUNCTION SIGNATURES                     #
// ##############################################################

/**
 * formatting function signature.
 * @category Function signatures
 * @typeParam T data type to format into a buffer.
 * @useDeclaredType
 * @remarks
 * - Max length allowed for storage is use case specific and must be consistent across background array constructor and formatter functions.
 */
export type formatterSignature<T> = (v: T | undefined)=> Buffer;

/**
 * unformatting function signature.
 * @category Function signatures
 * @typeParam T data type to read from a buffer.
 * @useDeclaredType
 * @remarks
 * - Max length allowed for storage is use case specific and must be consistent across background array constructor and formatter functions.
 */
export type unformatterSignature<T> = (b: Buffer)=> T;

/**
 * node comparison function signature.
 * @category Function signatures
 * @typeParam T data type stored in the nodes.
 * @useDeclaredType
 * @remarks
 * - Used to compare nodes for ordering.
 */
export type comparatorSignature<T> = (a: T, b: T)=> 1 | -1 | 0;

/**
 * node matching function signature.
 * @category Function signatures
 * @typeParam T data type stored in the nodes.
 * @useDeclaredType
 * @remarks
 * - Used to match nodes values for update and deletion.
 */
export type matcherSignature<T> = (a: T, b: T)=> boolean;

// ##############################################################
// #                   NODE BASED STRUCTURES                    #
// ##############################################################

/**
 * Composing types for linked lists based structures benchmarks.
 * @category Node based structures
 * @useDeclaredType
 */
export type StackType = StringStack | ObjectStack;
export type QueueType = StringQueue | ObjectQueue | OtherObjectQueue;

// ##############################################################
// #                      TREE STRUCTURES                       #
// ##############################################################

/**
 * depth first traversal types.
 * @category Tree structures
 * @useDeclaredType
 */
export type depthTraversalType = `PRE` | `IN` | `POST`;

/**
 * binary node (doubly linked).
 * @category Tree structures
 * @typeParam T data type stored in the node.
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
 * function signatures for node visit.
 * @category Tree structures
 * @typeParam T data type stored in the node.
 * @useDeclaredType
 */
export type visitNodeSignature<T> = (node: BinaryNode<T>)=> unknown;

/**
 * trie node.
 * @category Tree structures
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
 * rename for clarity's sake.
 * @category Graph structures
 * @typeParam T data type stored in the vertex.
 * @useDeclaredType
 */
export type Vertices<T> = Array<T>;

/**
 * graph edge in an adjacency list.
 * @category Graph structures
 * @interface
 */
export interface GraphEdge {
    // connected vertex
    edge: number;
    // edge weight
    weight: number;
}

/**
 * Adjacency matrix.
 * @category Graph structures
 * @useDeclaredType
 * @remarks
 * - It is assessed that all the graphs are weighted.
 * - Unweighted graphs are represented as weighted graphs with all edges weights equal to 1.
 */
export type AdjacencyMatrix = Array<Array<number>>;

/**
 * Adjacency list.
 * @category Graph structures
 * @useDeclaredType
 * @remarks
 * - It is assessed that all the graphs are weighted.
 * - Unweighted graphs are represented as weighted graphs with all edges weights equal to 1.
 */
export type AdjacencyList = Array<Array<GraphEdge>>;

/**
 * vertex in a line graph.
 * @category Graph structures
 * @interface
 */
export interface LineGraphVertex {
    from: number;
    to: number;
    weight: number;
}

/**
 * vertex by distance.
 * @category Graph structures
 * @interface
 * @remarks
 * - Used to store vertices distance to origin in a min heap for Dijkstra's shortest path
 */
export interface GraphVertexByDistance {
    index: number;
    distance: number;
}