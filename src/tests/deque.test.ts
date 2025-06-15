/**
 * @jest-environment node
 */

// import primitives
import console from "node:console";

// import modules
import {describe, expect, it} from "@jest/globals";
import {OtherArray} from "../structures/deque.ts";
import {formatNumber, numbersMatch, rnd, timeExecution, unformatNumber} from "../helpers.ts";

// push elements
const benchmarkPush = (r: OtherArray<number> | Array<number>, n: Array<number>): void => {
    for (let i = 0; i < n.length; i++)
        r.push(n[i]);
};
// push elements
const benchmarkPop = (r: OtherArray<number> | Array<number>, n: Array<number>): void => {
    for (let i = 0; i < n.length; i++)
        r.pop();
};
// unshift elements
const benchmarkUnshift = (r: OtherArray<number> | Array<number>, n: Array<number>): void => {
    for (let i = 0; i < n.length; i++)
        r.unshift(n[i]);
};
// shift elements
const benchmarkShift = (r: OtherArray<number> | Array<number>, n: Array<number>): void => {
    for (let i = 0; i < n.length; i++)
        r.shift();
};

try {

    // input array size
    const inputSizes: Array<number> = [ 1e1, 1e3, 1e5, 2.5e5 ];
    // deque based array
    const array = new OtherArray<number>(1, 2, formatNumber, unformatNumber, numbersMatch);
    // js native array
    const native = [] as Array<number>;

    // binary search
    describe(`===== DOUBLE ENDED QUEUE =====`, () => {
        // benchmark
        describe.each(inputSizes)(`input: array of numbers of length %i`, (x: number): void => {

            // input : array of numbers
            const input = new Array(x).fill(null).map(() => rnd(0, 65535));

            // flush array
            array.flush();

            // define function
            let execution = timeExecution(benchmarkPush.bind(null, array, input));
            it(`pushed ${ String(x) } values into the array, execution time is ${ String(execution.time) }ms`, (): void => {
                expect(true).toBe(true);
            });

            // define function
            execution = timeExecution(benchmarkPop.bind(null, array, input));
            it(`popped ${ String(x) } values from the array, execution time is ${ String(execution.time) }ms`, (): void => {
                expect(true).toBe(true);
            });

            // define function
            execution = timeExecution(benchmarkUnshift.bind(null, array, input));
            it(`unshifted ${ String(x) } values into the array, execution time is ${ String(execution.time) }ms`, (): void => {
                expect(true).toBe(true);
            });

            // define function
            execution = timeExecution(benchmarkShift.bind(null, array, input));
            it(`shifted ${ String(x) } values from the array, execution time is ${ String(execution.time) }ms`, (): void => {
                expect(true).toBe(true);
            });
        });
    });

    // binary search
    describe(`===== JS NATIVE ARRAY =====`, () => {
        // benchmark
        describe.each(inputSizes)(`input: array of numbers of length %i`, (x: number): void => {

            // input : sorted array of numbers
            const input = new Array(x).fill(null).map(() => rnd(0, 65535));

            // flush array
            native.length = 0;

            // define function
            let execution = timeExecution(benchmarkPush.bind(null, native, input));
            it(`pushed ${ String(x) } values into the array, execution time is ${ String(execution.time) }ms`, (): void => {
                expect(true).toBe(true);
            });

            // define function
            execution = timeExecution(benchmarkPop.bind(null, native, input));
            it(`popped ${ String(x) } values from the array, execution time is ${ String(execution.time) }ms`, (): void => {
                expect(true).toBe(true);
            });

            // define function
            execution = timeExecution(benchmarkUnshift.bind(null, native, input));
            it(`unshifted ${ String(x) } values into the array, execution time is ${ String(execution.time) }ms`, (): void => {
                expect(true).toBe(true);
            });

            // define function
            execution = timeExecution(benchmarkShift.bind(null, native, input));
            it(`shifted ${ String(x) } values from the array, execution time is ${ String(execution.time) }ms`, (): void => {
                expect(true).toBe(true);
            });
        });
    });

} catch (err: unknown) {
    console.log(`error: ${ err instanceof Error ? err.message : `unknown` }`);
}