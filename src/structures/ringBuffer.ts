/**
 * Ringbuffer based data structures.
 * @module
 */

// import modules
import {BarebonesArray} from "./array.ts";
import {formatSampleObject, objectsMatch, unformatSampleObject} from "../helpers.ts";

// import types
import type {sampleObject, formatter, matcher, unformatter} from "../interfaces.ts";

/**
 * Ringbuffer implementation over generic type.
 * @class
 * @typeParam T Data type stored in ArrayList elements.
 * - Ringbuffers are array based structures and can't be made truly generic.
 */
export class RingBuffer<T> {

    // store current size (total capacity)
    private size: number;
    // current head index
    private head: number;
    // current tail index
    private tail: number;
    // store current length (total elements stored)
    public length: number;
    // store background array
    private array: BarebonesArray;
    // max element length in bytes
    private MAX_ELEMENT_LENGTH: number;
    // formatting function
    private format: formatter<T>;
    // unformatting function
    private unformat: unformatter<T>;
    // declare internal node matcher function as public for combined use with other data structures
    public match: matcher<T>;

    // do not pass a default value for formatters, matchers and comparators since it would "abstract" the current use case ...
    constructor(f: formatter<T>, u: unformatter<T>, m: matcher<T>, size: number = 1, maxElementLength: number = 1) {
        // init length
        this.length = 0;
        // init size
        this.size = size;
        // init max element length
        this.MAX_ELEMENT_LENGTH = maxElementLength;
        // init background array
        this.array = new BarebonesArray(this.size, this.MAX_ELEMENT_LENGTH);
        // init formatters
        this.format = f;
        this.unformat = u;
        // init matcher function (useless here bc ringbuffer does not implement remove by value)
        this.match = m;
        // init tail and head indexes
        this.head = 0;
        this.tail = 0;
    }

    // ##############################################################
    // #                      ARRAY INTERNALS                       #
    // ##############################################################

    // resize background array O(n) -> copy a variable number of bytes
    private resize() {
        // create a new empty array and double the size
        const array = new BarebonesArray(this.size * 2, this.MAX_ELEMENT_LENGTH);
        // actual current head index
        const head = this.head % this.size;
        // actual current tail index
        const tail = this.tail % this.size;
        // if tail % size < head % size
        if (tail < head) {
            // copy elements from head to size into new array starting at 0
            array.write(this.array.read(head, this.size - head), 0);
            // copy elements from 0 to tail into new array starting at size - head
            array.write(this.array.read(0, tail + 1), this.size - head);
        // else
        } else {
            // copy elements from 0 to length into new array starting at 0
            array.write(this.array.read(0, this.length), 0);
        }
        // update head to 0
        this.head = 0;
        // update tail to length - 1
        this.tail = this.length - 1;
        // update array
        this.array = array;
        // update size
        this.size *= 2;
    }

    // ##############################################################
    // #                      APPEND ELEMENTS                       #
    // ##############################################################

    // use js array aliases to not conflict with subclass methods ...
    public push(item: T): void {
        // blank call the format() function before altering the state so it throws in the event item is invalid ...
        this.format(item);
        // if length === size
        if (this.length === this.size)
            // resize
            this.resize();
        if (this.length > 0)
            // increment tail
            this.tail += 1;
        // insert item at tail % size
        this.array.write(this.format(item), this.tail % this.size);
        // increment length
        this.length += 1;
    }

    // ##############################################################
    // #                      REMOVE ELEMENTS                       #
    // ##############################################################

    // use js array aliases to not conflict with subclass methods ...
    public shift(): T | undefined {
        // if length is zero
        if (this.length === 0)
            // return
            return undefined;
        // read value at head % size (index 0 ...)
        const value = this.get(0);
        // zero out value at head % size
        this.array.write(this.format(undefined), this.head % this.size);
        if (this.length > 1)
            // increment head
            this.head += 1;
        // decrement length
        this.length -= 1;
        // return value
        return value;
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

}

/**
 * Ringbuffer based object queue.
 * @class
 */
export class ObjectQueue extends RingBuffer<sampleObject> {
    // constructor
    constructor() {
        // store a number between 0 and 65535 on 2 bytes
        super(formatSampleObject, unformatSampleObject, objectsMatch, 1, 2);
    }

    // O(1) : enqueue value (if no resize)
    enqueue(o: sampleObject): void {
        this.push(o);
    }

    // O(1) : dequeue value
    dequeue(): sampleObject | undefined {
        // read value and return
        return this.shift();
    }

    // O(1) : get value
    peek(index: number): sampleObject | undefined {
        // read value and return
        return this.get(index);
    }
}