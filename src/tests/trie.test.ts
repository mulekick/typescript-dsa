/**
 * @jest-environment node
 */

// import primitives
import console from "node:console";

// import modules
import {describe, it, expect} from "@jest/globals";
import {Trie} from "../structures/trie.ts";
import {dict, timeExecution} from "../helpers.ts";

try {

    // input words list size (63993 max)
    const inputSizes: Array<number> = [ 1e1, 1e3, 1e5 ].map(x => Math.floor(x * dict.length / 1e5));
    // insert / delete benchmarking function
    const benchmarkTrie = (t: Trie, arr: Array<string>): void => {
        // insert word
        arr.forEach(x => {t.insert(x);});
        // delete every other word
        arr.forEach((x: string, i: number) => {
            if (i % 2 === 1)
                t.delete(x);
        });
    };

    // arraylist based stack
    describe(`===== TRIE BASED DICTIONARY O(1) =====`, () => {
        // benchmark
        describe.each(inputSizes)(`input: set of %i lowercase words`, (x: number): void => {
            // input : list of words
            const input = dict.slice(0, x);
            // define function
            const {time} = timeExecution(benchmarkTrie.bind(null, new Trie(), input));

            // call function with current input, log result
            it(`inserted ${ String(input.length) } words and deleted ${ String(Math.floor(input.length / 2)) } words in ${ String(time) }ms`, (): void => {
                expect(true).toBe(true);
            });
        });
    });

} catch (err: unknown) {
    console.log(`error: ${ err instanceof Error ? err.message : `unknown` }`);
}