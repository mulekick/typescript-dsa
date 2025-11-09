/**
 * @jest-environment node
 */

// import primitives
import console from "node:console";

// import modules
import {describe, it, expect} from "@jest/globals";
import {linearSearch, binarySearch, twoCrystalBalls, quickSort, bubbleSort} from "../algorithms/array.ts";
import {createArray, rnd, timeExecution} from "../helpers.ts";

try {

    // input array size
    const inputSizes: Array<number> = [ 1e1, 1e3, 1e5, 1e7 ];

    // linear search
    describe(`===== LINEAR SEARCH O(n) =====`, () => {
        // benchmark
        describe.each(inputSizes)(`input: unsorted array of %i numbers`, (x: number): void => {
            // pick a random value, relevant to the input size, can be in the array or not
            const searchValue = Math.floor(x / 3);
            // input : unsorted array of numbers
            const input = createArray(x, () => rnd(0, x)) as Array<number>;
            // define function
            const {result, time} = timeExecution(linearSearch.bind(null, input, searchValue));

            // call function with current input, log result
            it(`value ${ String(searchValue) } ${ result ? `found` : `not found` } in array in ${ String(time) }ms`, (): void => {
                expect(true).toBe(true);
            });
        });
    });

    // binary search
    describe(`===== BINARY SEARCH O(log n) =====`, () => {
        // benchmark
        describe.each(inputSizes)(`input: sorted array of %i numbers`, (x: number): void => {
            // pick a random value, relevant to the input size, is in the array
            const searchValue = Math.floor(x / 3);
            // input : sorted array of numbers
            const input = createArray(x, (_, i) => i) as Array<number>;
            // define function
            const {result, time} = timeExecution(binarySearch.bind(null, input, searchValue));

            // call function with current input, log result
            it(`value ${ String(searchValue) } ${ result ? `found` : `not found` } in array in ${ String(time) }ms`, (): void => {
                expect(true).toBe(true);
            });
        });
    });

    // two crystal balls
    describe(`===== TWO CRYSTAL BALLS SEARCH O(sqrt(n)) =====`, () => {
        // benchmark
        describe.each(inputSizes)(`input: sorted array of %i booleans`, (x: number): void => {
            // index of first true value has to be relevant to the input size
            const firstTrueValue = Math.floor(x / 3);
            // input : sorted array of booleans
            const input = createArray(x, (_, i) => (i as number) >= firstTrueValue) as Array<boolean>;
            // define function
            const {result, time} = timeExecution(twoCrystalBalls.bind(null, input));

            // call function with current input, log result
            it(`value ${ String(firstTrueValue) } ${ result as number >= 0 ? `found at index ${ String(result) }` : `not found` } in array in ${ String(time) }ms`, (): void => {
                expect(true).toBe(true);
            });
        });
    });

    // quick sort
    describe(`===== QUICK SORT O(n * log(n)) =====`, () => {
        // benchmark
        describe.each(inputSizes)(`input: unsorted array of %i numbers`, (x: number): void => {
            // input : unsorted array of numbers
            const input = createArray(x, () => rnd(0, x)) as Array<number>;
            // define function
            const {result, time} = timeExecution(quickSort.bind(null, input));

            // call function with current input, log result
            it(`array sorted from ${ String((result as Array<number>)[0]) } to ${ String((result as Array<number>).pop()) } in ${ String(time) }ms`, (): void => {
                expect(true).toBe(true);
            });
        });
    });

    // bubble sort
    describe(`===== BUBBLE SORT O(n ** 2) =====`, () => {
        // benchmark (skip 1e7 input ...)
        describe.each(inputSizes.slice(0, 3))(`input: unsorted array of %i numbers`, (x: number): void => {
            // input : unsorted array of numbers
            const input = createArray(x, () => rnd(0, x)) as Array<number>;
            // define function
            const {result, time} = timeExecution(bubbleSort.bind(null, input));

            // call function with current input, log result
            it(`array sorted from ${ String((result as Array<number>)[0]) } to ${ String((result as Array<number>).pop()) } in ${ String(time) }ms`, (): void => {
                expect(true).toBe(true);
            });
        });
    });

} catch (err: unknown) {
    console.log(`error: ${ err instanceof Error ? err.message : `unknown` }`);
}