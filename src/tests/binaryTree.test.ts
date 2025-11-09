/**
 * @jest-environment node
 */

// import primitives
import console from "node:console";

// import modules
import {describe, it, expect} from "@jest/globals";
import {BinarySearchTree} from "../structures/binaryTree.ts";
import {rnd, timeExecution, shuffle, numbersMatch, compareNumbers} from "../helpers.ts";

// import types
import type {traversalType} from "../interfaces.ts";

try {

    // total tree nodes (max value before heap out of memory error ...)
    const nodesCount = 2 ** 20;
    // max node value
    const MAX_NODE_VALUE = 1e20;
    // tree consistency check interval
    const TREE_CONSISTENCY_CHECK_INTERVAL = 1.5e5;
    // store inserted values ...
    const insertedValues: Array<number> = [];
    // create binary search tree
    const sampleBinaryTree = new BinarySearchTree<number>(numbersMatch, compareNumbers);
    // node insertion benchmarking
    const benchmarkInsertion = function(nodes: number, maxValue: number, values: Array<number>, tree: BinarySearchTree<number>): void {
        for (let i = 0; i < nodes; i++) {
            const v = rnd(1, maxValue);
            // insert values ...
            values.push(v);
            tree.insert(v);
        }
    };
    // node deletion benchmarking
    const benchmarkDeletion = function(nodes: number, toRemove: Array<number>, tree: BinarySearchTree<number>): void {
        for (let i = 0; i < toRemove.length; i++) {
            // remove values ...
            const removed = tree.remove(toRemove[i]);
            if (typeof removed === `undefined`)
                throw new Error(`broken tree implementation.`);
            // check tree consistency
            if (i > 0 && i % TREE_CONSISTENCY_CHECK_INTERVAL === 0) {
                it(`binary tree still valid after ${ String(i) } nodes removals, ${ String(nodes - i) } nodes remaining.`, (): void => {
                    // variation ...
                    expect(tree.verifyTree()).toBe(true);
                });
            }
        }
    };

    describe(`===== BINARY SEARCH TREE =====`, () => {

        // benchmark tree creation
        describe(`create a binary search tree of ${ String(nodesCount) } nodes`, (): void => {
            // define function
            const {time} = timeExecution(benchmarkInsertion.bind(null, nodesCount, MAX_NODE_VALUE, insertedValues, sampleBinaryTree));

            it(`inserted ${ String(nodesCount) } nodes in ${ String(time) }ms`, (): void => {
                expect(true).toBe(true);
            });
        });

        // benchmark tree validity verification
        describe(`verify the integrity of the tree`, (): void => {
            // define function
            // @ts-expect-error function w/ no argument
            const {time, result} = timeExecution(sampleBinaryTree.verifyTree.bind(sampleBinaryTree));

            it(`verified tree integrity in ${ String(time) }ms`, (): void => {
                // variation ...
                expect(result).toBe(true);
            });
        });

        // benchmark depth first tree traversals
        describe.each([ `PRE`, `IN`, `POST` ])(`perform a depth first %s traversal of the tree`, (x: string): void => {
            // define function
            const {time} = timeExecution(sampleBinaryTree.traverseDepth.bind(sampleBinaryTree, () => null, x as traversalType));

            it(`${ x }:\t${ String(nodesCount) } nodes traversed in ${ String(time) }ms`, (): void => {
                expect(true).toBe(true);
            });
        });

        // benchmark breadth first tree traversal
        describe(`perform a breadth first traversal of the tree`, (): void => {
            // define function
            const {time} = timeExecution(sampleBinaryTree.traverseBreadth.bind(sampleBinaryTree, () => null));

            it(`BFS:\t${ String(nodesCount) } nodes traversed in ${ String(time) }ms`, (): void => {
                expect(true).toBe(true);
            });
        });

        // benchmark values deletion
        describe(`delete all inserted values from the tree`, (): void => {
            // define function
            const {time} = timeExecution(benchmarkDeletion.bind(null, nodesCount, shuffle(insertedValues) as Array<number>, sampleBinaryTree));

            it(`removed ${ String(nodesCount) } nodes in ${ String(time) }ms`, (): void => {
                expect(true).toBe(true);
            });
        });
    });

} catch (err: unknown) {
    console.log(`error: ${ err instanceof Error ? err.message : `unknown` }`);
}