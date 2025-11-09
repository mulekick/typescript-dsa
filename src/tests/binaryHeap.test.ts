/**
 * @jest-environment node
 */

// import primitives
import console from "node:console";

// import modules
import {describe, it, expect} from "@jest/globals";
import {MaxHeap} from "../structures/binaryHeap.ts";
import {createArray, rnd, timeExecution} from "../helpers.ts";

// import types
import type {sampleObject} from "../interfaces.ts";

try {

    // input array size
    const inputSizes: Array<number> = [ 1e1, 1e3, 1e5, 1e6 ];
    // heap consistency check interval
    const HEAP_CONSISTENCY_CHECK_INTERVAL = 1.5e5;
    // create max heap
    const sampleMaxHeap = new MaxHeap();
    // node insertion benchmarking
    const benchmarkInsertion = (heap: MaxHeap, arr: Array<sampleObject>): void => {
        for (let i = 0; i < arr.length; i++)
            // insert
            heap.insert(arr[i]);
    };
    // node deletion benchmarking
    const benchmarkDeletion = (heap: MaxHeap, arr: Array<sampleObject>): void => {
        for (let i = 0; i < arr.length; i++) {
            // remove values ...
            heap.delete();
            // check heap consistency
            if (i > 0 && i % HEAP_CONSISTENCY_CHECK_INTERVAL === 0) {
                it(`max heap still valid after ${ String(i) } values deletion, ${ String(arr.length - i) } values remaining.`, (): void => {
                    // variation ...
                    expect(heap.verifyHeap()).toBe(true);
                });
            }
        }
    };

    // arraylist based max heap
    describe(`===== ARRAYLIST BASED MAX HEAP O(log n) =====`, () => {
        // benchmark
        describe.each(inputSizes)(`input: set of %i objects`, (x: number): void => {

            // input : pool of objects
            const input = createArray(x, () => ({prop: rnd(0, 65535)})) as Array<{prop: number}>;

            // benchmark heap creation
            describe(`create a max heap of ${ String(input.length) } nodes`, (): void => {
                // define function
                const {time} = timeExecution(benchmarkInsertion.bind(null, sampleMaxHeap, input));

                it(`inserted ${ String(input.length) } nodes in ${ String(time) }ms`, (): void => {
                    expect(true).toBe(true);
                });
            });

            // benchmark validity verification
            describe(`verify the integrity of the heap`, (): void => {
                // define function
                // @ts-expect-error function w/ no argument
                const {time, result} = timeExecution(sampleMaxHeap.verifyHeap.bind(sampleMaxHeap));

                it(`verified heap integrity in ${ String(time) }ms`, (): void => {
                    // variation ...
                    expect(result).toBe(true);
                });
            });

            // benchmark values deletion
            describe(`delete all inserted values from the heap`, (): void => {
                // define function
                const {time} = timeExecution(benchmarkDeletion.bind(null, sampleMaxHeap, input));

                it(`removed ${ String(input.length) } nodes in ${ String(time) }ms`, (): void => {
                    expect(true).toBe(true);
                });
            });
        });
    });

} catch (err: unknown) {
    console.log(`error: ${ err instanceof Error ? err.message : `unknown` }`);
}