/**
 * @jest-environment node
 */

// import primitives
import console from "node:console";

// import modules
import {describe, it, expect} from "@jest/globals";
import {ObjectQueue} from "../structures/ringBuffer.ts";
import {OtherObjectQueue} from "../structures/deque.ts";
import {rnd, timeExecution, benchmarkQueue, createArray} from "../helpers.ts";

try {

    // input array size
    const inputSizes: Array<number> = [ 1e1, 1e3, 1e5, 0.5e7 ];

    // ringbuffer based queue
    describe(`===== RINGBUFFER BASED QUEUE O(1) =====`, () => {
        // benchmark
        describe.each(inputSizes)(`input: set of %i objects`, (x: number): void => {
            // input : pool of objects
            const input = createArray(x, () => ({prop: rnd(0, 65535)})) as Array<{prop: number}>;
            // define function
            const {time} = timeExecution(benchmarkQueue.bind(null, new ObjectQueue(), input));

            // call function with current input, log result
            it(`queued ${ String(x) } objects and dequeued ${ String(Math.floor(x / 2)) } objects in ${ String(time) }ms`, (): void => {
                expect(true).toBe(true);
            });
        });
    });

    // deque based queue
    describe(`===== DEQUE BASED QUEUE O(1) =====`, () => {
        // benchmark
        describe.each(inputSizes)(`input: set of %i objects`, (x: number): void => {
            // input : pool of objects
            const input = createArray(x, () => ({prop: rnd(0, 65535)})) as Array<{prop: number}>;
            // define function
            const {time} = timeExecution(benchmarkQueue.bind(null, new OtherObjectQueue(), input));

            // call function with current input, log result
            it(`queued ${ String(x) } objects and dequeued ${ String(Math.floor(x / 2)) } objects in ${ String(time) }ms`, (): void => {
                expect(true).toBe(true);
            });
        });
    });

} catch (err: unknown) {
    console.log(`error: ${ err instanceof Error ? err.message : `unknown` }`);
}