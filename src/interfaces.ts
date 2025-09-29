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

// sample object signature for object storage in data structures
export interface SampleObject {
    prop: number;
}

// cell coords for recursion algorithm
export interface coords {
    y: number;
    x: number;
}

// ##############################################################
// #                    FUNCTION SIGNATURES                     #
// ##############################################################

// max length allowed for storage is use case specific and must be consistent
// across background array constructor and formatter functions ...
export type formatterSignature<T> = (v: T | undefined)=> Buffer;
export type unformatterSignature<T> = (b: Buffer)=> T;

// function signature for node comparison for ordering
export type comparatorSignature<T> = (a: T, b: T)=> 1 | -1 | 0;

// function signature for node value matching for update and deletion
export type matcherSignature<T> = (a: T, b: T)=> boolean;

// ##############################################################
// #                   NODE BASED STRUCTURES                    #
// ##############################################################

// composing types for linked lists based structures benchmarks
export type StackType = StringStack | ObjectStack;
export type QueueType = StringQueue | ObjectQueue | OtherObjectQueue;

// ##############################################################
// #                      TREE STRUCTURES                       #
// ##############################################################

// depth first traversal types
export type depthTraversalType = `PRE` | `IN` | `POST`;

// binary node (doubly linked)
export interface BinaryNode<T> {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
    // store reference to parent node for use in BST
    parent: BinaryNode<T> | null;
}

// function signatures for node visit
export type visitNodeSignature<T> = (node: BinaryNode<T>)=> unknown;

// trie node
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

// for clarity's sake ...
export type Vertices<T> = Array<T>;

// graph edge in an adjacency list
export interface GraphEdge {
    // connected vertex
    edge: number;
    // edge weight
    weight: number;
}

// we'll assess that all the graphs are weighted - if needed, unweighted graphs
// will be represented as weighted graphs with all edges weights equal to 1 ...
export type AdjacencyMatrix = Array<Array<number>>;
export type AdjacencyList = Array<Array<GraphEdge>>;

// vertex in a line graph
export interface LineGraphVertex {
    from: number;
    to: number;
    weight: number;
}

// store vertices distance to origin in a min heap for Dijkstra's shortest path
export interface GraphVertexByDistance {
    index: number;
    distance: number;
}