/**
 * ArrayList based data structures.
 * @module
 */

// import modules
import {BarebonesArray} from "./array.ts";
import {formatSampleObject, objectsMatch, unformatSampleObject} from "../helpers.ts";

// import types
import type {SampleObject, formatterSignature, matcherSignature, unformatterSignature} from "../interfaces.ts";

/**
 * ArrayList implementation over generic type.
 * @class
 * @typeParam T Data type stored in ArrayList elements.
 * - ArrayLists are array based structures and can't be made truly generic.
 */
export class ArrayList<T> {

    // store current size (total capacity)
    private size: number;
    // store current length (total elements stored)
    public length: number;
    // store background array
    private array: BarebonesArray;
    // max element length in bytes
    private MAX_ELEMENT_LENGTH: number;
    // formatting function
    private format: formatterSignature<T>;
    // unformatting function
    private unformat: unformatterSignature<T>;
    // declare internal node matcher function as public for combined use with other data structures
    public match: matcherSignature<T>;

    // do not pass a default value for formatters, matchers and comparators since it would "abstract" the current use case ...
    constructor(size: number, maxElementLength: number, f: formatterSignature<T>, u: unformatterSignature<T>, m: matcherSignature<T>) {
        // init length
        this.length = 0;
        // init size
        this.size = size || 1;
        // init max element length
        this.MAX_ELEMENT_LENGTH = maxElementLength || 1;
        // init background array
        this.array = new BarebonesArray(this.size, this.MAX_ELEMENT_LENGTH);
        // init formatters
        this.format = f;
        this.unformat = u;
        // init matcher function
        this.match = m;
    }

    // ##############################################################
    // #                      ARRAY INTERNALS                       #
    // ##############################################################

    // resize background array O(n) -> copy a variable number of bytes
    private resize() {
        // create a new empty array and double the size
        const array = new BarebonesArray(this.size * 2, this.MAX_ELEMENT_LENGTH);
        // copy elements from 0 to length into new array starting at 0
        array.write(this.array.read(0, this.length), 0);
        // update array
        this.array = array;
        // update size
        this.size *= 2;
    }

    // ##############################################################
    // #                      APPEND ELEMENTS                       #
    // ##############################################################

    // append item to array O(1) -> copy a constant number of bytes
    public append(item: T): void {this.insertAt(item, this.length);}

    // prepend item to array O(n) -> copy a variable number of bytes
    public prepend(item: T): void {this.insertAt(item, 0);}

    // insert before element at index idx O(n) -> copy a variable number of bytes
    // O(1) when pushing new last element ...
    public insertAt(item: T, idx: number): void {
        // if idx > length
        if (idx > this.length)
            // throw
            throw new RangeError(`insertion index exceeds current array length`);
        // blank call the format() function before altering the state so it throws in the event item is invalid ...
        this.format(item);
        // if length equals size
        if (this.length === this.size)
            // resize
            this.resize();
        // if idx !== length
        if (idx !== this.length)
            // right shift elements from idx to length - 1
            this.array.write(this.array.read(idx, this.length - idx), idx + 1);
        // set element at idx
        this.set(item, idx);
        // increase length
        this.length += 1;
    }

    // ##############################################################
    // #                      REMOVE ELEMENTS                       #
    // ##############################################################

    // remove element at idx O(n) -> copy a variable number of bytes
    // O(1) when popping last element (tests confirmed ...)
    public removeAt(idx: number): T | undefined {
        // if idx >= length
        if (idx >= this.length)
            // return undefined
            return undefined;
        // read value
        const value = this.get(idx);
        // if idx !== length - 1
        if (idx !== this.length - 1)
            // left shift elements from idx + 1 to length - 1
            this.array.write(this.array.read(idx + 1, this.length - (idx + 1)), idx);
        // zero out last element
        this.set(undefined, this.length - 1);
        // decrease length
        this.length -= 1;
        // return
        return value;
    }

    // remove specific element O(n) -> copy a variable number of bytes
    public remove(item: T): T | undefined {
        // loop over elements
        for (let idx = 0; idx < this.length; idx++) {
            // if current element is a match
            if (this.match(this.get(idx) as T, item)) {
                // remove and return
                this.removeAt(idx);
                return item;
            }
        }
        // not found
        return undefined;
    }

    // ##############################################################
    // #                      ACCESS ELEMENTS                       #
    // ##############################################################

    // get element value O(1) -> read only
    public get(idx: number): T | undefined {
        // if idx >= length
        if (idx >= this.length)
            // return undefined
            return undefined;
        // read value at idx, unformat and return - O(1) since item has a max size
        return this.unformat(this.array.read(idx, 1));
    }

    // set element value O(1) -> overwrite
    public set(item: T | undefined, idx: number): void {
        // if idx > length
        if (idx > this.length)
            // throw
            throw new RangeError(`write index exceeds current array length`);
        // set element at idx
        this.array.write(this.format(item), idx);
    }
}

/**
 * ArrayList based object stack.
 * @class
 */
export class ObjectStack extends ArrayList<SampleObject> {
    // constructor
    constructor() {
        // store a number between 0 and 65535 on 2 bytes
        super(1, 2, formatSampleObject, unformatSampleObject, objectsMatch);
    }

    // O(1) : push value (if no resize)
    push(o: SampleObject): void {
        this.append(o);
    }

    // O(1) : pop value
    pop(): SampleObject | undefined {
        // read value and return
        return this.removeAt(this.length - 1);
    }

    // O(1) : get value
    peek(index: number): SampleObject | undefined {
        // read value and return
        return this.get(index);
    }
}