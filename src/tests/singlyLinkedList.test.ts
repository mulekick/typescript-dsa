/**
 * @jest-environment node
 */

// import primitives
import console from "node:console";

// import modules
import {describe, it, expect} from "@jest/globals";
import {StringQueue, StringStack} from "../structures/singlyLinkedList.ts";
import {getRandomChar, timeExecution, benchmarkQueue, benchmarkStack} from "../helpers.ts";

try {

    // input array size
    const inputSizes: Array<number> = [ 1e1, 1e3, 1e5 ];

    // singly linked list queue
    describe(`===== SINGLY LINKED LIST BASED QUEUE O(1) =====`, () => {
        // benchmark
        describe.each(inputSizes)(`input: pool of %i unicode basic latin characters`, (x: number): void => {
            // input : pool of characters
            const input = new Array(x).fill(null).map(() => getRandomChar());
            // define function
            const {time} = timeExecution(benchmarkQueue.bind(null, new StringQueue(), input));

            // call function with current input, log result
            it(`queued ${ String(x) } characters and dequeued ${ String(Math.floor(x / 2)) } characters, execution time is ${ String(time) }ms`, (): void => {
                expect(true).toBe(true);
            });
        });
    });

    // singly linked list queue
    describe(`===== SINGLY LINKED LIST BASED STACK O(1) =====`, () => {
        // benchmark
        describe.each(inputSizes)(`input: pool of %i unicode basic latin characters`, (x: number): void => {
            // input : pool of characters
            const input = new Array(x).fill(null).map(() => getRandomChar());
            // define function
            const {time} = timeExecution(benchmarkStack.bind(null, new StringStack(), input));

            // call function with current input, log result
            it(`pushed ${ String(x) } characters and popped ${ String(Math.floor(x / 2)) } characters, execution time is ${ String(time) }ms`, (): void => {
                expect(true).toBe(true);
            });
        });
    });

} catch (err: unknown) {
    console.log(`error: ${ err instanceof Error ? err.message : `unknown` }`);
}