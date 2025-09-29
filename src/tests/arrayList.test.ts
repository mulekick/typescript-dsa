/**
 * @jest-environment node
 */

// import primitives
import console from "node:console";

// import modules
import {describe, it, expect} from "@jest/globals";
// modules dependency graph requires this for jest transpilation ...
import {ObjectStack, rnd, timeExecution, benchmarkStack} from "../helpers.ts";

try {

    // input array size
    const inputSizes: Array<number> = [ 1e1, 1e3, 1e5, 1e7 ];

    // arraylist based stack
    describe(`===== ARRAYLIST OBJECT STACK O(1) =====`, () => {
        // benchmark
        describe.each(inputSizes)(`input: pool of %i objects storing random numbers between 0 and 65535`, (x: number): void => {
            // input : pool of objects
            const input = new Array(x).fill(null).map(() => ({prop: rnd(0, 65535)}));
            // define function
            const {time} = timeExecution(benchmarkStack.bind(null, new ObjectStack(), input));

            // call function with current input, log result
            it(`pushed ${ String(x) } objects and popped ${ String(Math.floor(x / 2)) } objects, execution time is ${ String(time) }ms`, (): void => {
                expect(true).toBe(true);
            });
        });
    });

} catch (err: unknown) {
    console.log(`error: ${ err instanceof Error ? err.message : `unknown` }`);
}