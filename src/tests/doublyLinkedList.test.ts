/**
 * @jest-environment node
 */

/* eslint-disable @stylistic/max-statements-per-line */

// import primitives
import console from "node:console";

// import modules
import {describe, it, expect} from "@jest/globals";
import {DoublyLinkedList} from "../structures/doublyLinkedList.ts";
import {timeExecution, getRandomChar, stringsMatch, createArray} from "../helpers.ts";

// !!! FINSH AND REDESIGN TESTS !!!

try {

    // input array size
    const inputSizes: Array<number> = [ 1e1, 1e3, 1e5 ];

    // doubly linked list basic operations
    describe(`===== DOUBLY LINKED LIST =====`, () => {
        // benchmark prepend
        describe.each(inputSizes)(`input: set of %i unicode basic latin characters`, (x: number): void => {
            // input : pool of characters
            const input = createArray(x, () => getRandomChar()) as Array<string>;
            // run all tests on the same list ...
            const sampleList = new DoublyLinkedList<string>(stringsMatch);

            // pattern monkaS
            let time = 0;

            // define function
            const benchmarkPrepend = function(i: Array<string>, l: DoublyLinkedList<string>) {i.forEach(c => {l.prepend(c);});};
            ({time} = timeExecution(benchmarkPrepend.bind(null, input, sampleList)));

            it(`prepend ${ String(x) } characters in ${ String(time) }ms`, (): void => {
                expect(true).toBe(true);
            });

            // define function
            const benchmarkAppend = function(i: Array<string>, l: DoublyLinkedList<string>) {i.forEach(c => {l.append(c);});};
            ({time} = timeExecution(benchmarkAppend.bind(null, input, sampleList)));

            it(`append ${ String(x) } characters in ${ String(time) }ms`, (): void => {
                expect(true).toBe(true);
            });

            // define function
            const benchmarkRemoveByIndex = function(i: Array<string>, l: DoublyLinkedList<string>) {i.forEach(() => {l.removeAt(0);});};
            ({time} = timeExecution(benchmarkRemoveByIndex.bind(null, input, sampleList)));

            it(`removed ${ String(x) } characters by index in ${ String(time) }ms`, (): void => {
                expect(true).toBe(true);
            });

            // define function
            const benchmarkRemoveByValue = function(i: Array<string>, l: DoublyLinkedList<string>) {i.forEach(c => {l.remove(c);});};
            ({time} = timeExecution(benchmarkRemoveByValue.bind(null, input, sampleList)));

            it(`removed ${ String(x) } characters by value in ${ String(time) }ms`, (): void => {
                expect(true).toBe(true);
            });
        });
    });

} catch (err: unknown) {
    console.log(`error: ${ err instanceof Error ? err.message : `unknown` }`);
}