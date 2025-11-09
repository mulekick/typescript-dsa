/**
 * Deque based data structures.
 * @module
 * @remarks
 * - Deque is a ringbuffer based double ended queue.
 */

// import modules
import {BarebonesArray} from "./array.ts";
import {formatSampleObject, objectsMatch, unformatSampleObject} from "../helpers.ts";

// import types
import type {formatterSignature, unformatterSignature, matcherSignature, SampleObject} from "../interfaces.ts";

// ringbuffer based double ended queue

/**
 * Deque implementation over generic type.
 * @class
 * @typeParam T Data type stored in Deque elements.
 * @remarks
 * - Deques are array based structures and can't be made truly generic.
 */
export class Deque<T> {

    // store current size (total capacity)
    private size: number;
    // store initial size for flushing
    private initial: number;
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
    private format: formatterSignature<T>;
    // unformatting function
    private unformat: unformatterSignature<T>;
    // declare internal node matcher function as public for combined use with other data structures
    public match: matcherSignature<T>;

    // do not pass a default value for formatters, matchers and comparators since it would "abstract" the current use case ...
    constructor(size: number, maxElementLength: number, f: formatterSignature<T>, u: unformatterSignature<T>, m: matcherSignature<T>) {
        // init length
        this.length = 0;
        // init size and initial size
        this.size = size || 1;
        this.initial = size || 1;
        // init max element length
        this.MAX_ELEMENT_LENGTH = maxElementLength || 1;
        // init background array
        this.array = new BarebonesArray(this.size, this.MAX_ELEMENT_LENGTH);
        // init formatters
        this.format = f;
        this.unformat = u;
        // init matcher function
        this.match = m;
        // init tail and head indexes
        this.head = 0;
        this.tail = 0;
    }

    // ##############################################################
    // #                      ARRAY INTERNALS                       #
    // ##############################################################

    // read actual head and tail indices
    private ends(): [number, number] {
        return [ this.head % this.size, this.tail % this.size ];
    }

    // resize background array O(n) -> copy a variable number of bytes
    private resize(): void {
        // create a new empty array and double the size
        const array = new BarebonesArray(this.size * 2, this.MAX_ELEMENT_LENGTH);
        // read actual head and tail index
        const [ head, tail ] = this.ends();
        // if tail < head
        if (tail < head) {
            // copy elements from head to size into new array starting zero
            array.write(this.array.read(head, this.size - head), 0);
            // copy elements from 0 to tail into new array starting at size - head
            array.write(this.array.read(0, tail + 1), this.size - head);
        // else
        } else {
            // copy elements from 0 to length into new array starting at zero
            array.write(this.array.read(0, this.length), 0);
        }
        // update head to zero
        this.head = 0;
        // update tail to head + length - 1
        this.tail = this.head + this.length - 1;
        // update array
        this.array = array;
        // update size *= 2
        this.size *= 2;
    }

    // read position in background array from index O(1)
    private readPosition(index: number): number {
        // read actual head and tail index
        const [ head, tail ] = this.ends();
        // if tail < head
        if (tail < head)
            // return (head + index) % size
            return (head + index) % this.size;
        // return head + index
        return head + index;
    }

    // flush all elements O(1)
    public flush(): void {
        // reset size to initial size
        this.size = this.initial;
        // reset array to initial state
        this.array = new BarebonesArray(this.size, this.MAX_ELEMENT_LENGTH);
        // reset length, head and tail to zero
        this.length = 0;
        this.head = 0;
        this.tail = 0;
    }

    // ##############################################################
    // #                      APPEND ELEMENTS                       #
    // ##############################################################

    // append
    public append(item: T): void {this.insertAt(item, this.length);}

    // prepend
    public prepend(item: T): void {this.insertAt(item, 0);}

    // insert before element at index idx O(n) -> copy a variable number of bytes
    // O(1) if inserting at tail or head ...
    public insertAt(item: T, index: number): void {
        // if throw if index > length or negative
        if (index < 0 || index > this.length)
            throw new RangeError(`insertion index is invalid`);
        // blank call the format() function before altering the state so it throws in the event item is invalid ...
        this.format(item);
        // if length === size
        if (this.length === this.size)
            // resize
            this.resize();
        // read actual head and tail index
        const [ head, tail ] = this.ends();
        // if length > 0
        if (this.length > 0) {
            // if index === 0
            if (index === 0) {
                // decrement head
                this.head = head === 0 ? this.head + this.size - 1 : this.head - 1;
            // else if idx === length
            } else if (index === this.length) {
                // increment tail
                this.tail += 1;
            // else
            } else {
                // get insertion position pos depending on head and tail
                const pos = this.readPosition(index);
                // let condition1 = tail < head and pos >= head (non contiguous elements, pos is between head and size)
                const c1 = tail < head && pos >= head;
                // let condition2 = tail >= head and tail === size - 1 (contiguous elements, tail is the last array element)
                const c2 = tail >= head && tail === this.size - 1;
                // if condition1 or condition2 are true
                if (c1 || c2) {
                    // left shift elements from head to pos
                    this.array.write(this.array.read(head, pos - head), head - 1);
                    // decrement head
                    this.head = head === 0 ? this.head + this.size - 1 : this.head - 1;
                // else
                } else {
                    // right shift elements from pos to tail
                    this.array.write(this.array.read(pos, tail - pos), pos + 1);
                    // increment tail
                    this.tail += 1;
                }
            }
        }
        // set element at index
        this.set(index, item);
        // increase length
        this.length += 1;
    }

    // ##############################################################
    // #                      REMOVE ELEMENTS                       #
    // ##############################################################

    // remove element at idx O(n) -> copy a variable number of bytes
    // O(1) if popping from tail or head ...
    public removeAt(index: number): T | undefined {
        // if index >= length or negative
        if (index < 0 || index >= this.length)
            // return undefined
            return undefined;

        // read value
        const value = this.get(index);
        // read actual head and tail index
        const [ head, tail ] = this.ends();

        // if length === 1
        if (this.length === 1) {
            // zero out head element
            this.set(0, undefined);
        // else if index === 0
        } else if (index === 0) {
            // zero out head element
            this.set(0, undefined);
            // increment head
            this.head += 1;
        // else if idx === length - 1
        } else if (index === this.length - 1) {
            // zero out tail element
            this.set(this.length - 1, undefined);
            // decrement tail
            this.tail = tail === 0 ? this.tail + this.size - 1 : this.tail - 1;
        // else
        } else {
            // get removal position pos depending on head and tail
            const pos = this.readPosition(index);
            // let condition1 = tail < head and pos >= head (non contiguous elements, pos is between head and size)
            const c1 = tail < head && pos >= head;
            // if condition1 is true
            if (c1) {
                // right shift elements from head to pos
                this.array.write(this.array.read(head, pos - head), head + 1);
                // zero out head element
                this.set(0, undefined);
                // increment head
                this.head += 1;
            // else
            } else {
                // left shift elements from pos to tail
                this.array.write(this.array.read(pos + 1, tail - pos), pos);
                // zero out tail element
                this.set(this.length - 1, undefined);
                // decrement tail
                this.tail = tail === 0 ? this.tail + this.size - 1 : this.tail - 1;
            }
        }
        // decrease length
        this.length -= 1;
        // return value
        return value;
    }

    // remove specific element O(n) -> copy a variable number of bytes
    public remove(item: T): T | undefined {
        // loop over elements
        for (let i = 0; i < this.length; i++) {
            // if current element is a match
            if (this.match(this.get(i) as T, item))
                // remove item and return
                return this.removeAt(i);
        }
        // return undefined
        return undefined;
    }

    // ##############################################################
    // #                      ACCESS ELEMENTS                       #
    // ##############################################################

    // get
    public get(index: number): T | undefined {
        // if idx >= length or negative
        if (index < 0 || index >= this.length)
            // return undefined
            return undefined;
        // get read position depending on head and tail
        const pos = this.readPosition(index);
        // read value at idx, unformat and return - O(1) since item has a max size
        return this.unformat(this.array.read(pos, 1));
    }

    // set element value O(1) -> overwrite
    public set(index: number, item?: T): void {
        // throw if idx > length or negative
        if (index < 0 || index > this.length)
            throw new RangeError(`write index exceeds current array length`);
        // get write position depending on head and tail
        const pos = this.readPosition(index);
        // set element at idx
        this.array.write(this.format(item), pos);
    }
}

/**
 * Deque based object queue.
 * @class
 */
export class OtherObjectQueue extends Deque<SampleObject> {
    // constructor
    constructor() {
        // store a number between 0 and 65535 on 2 bytes
        super(1, 2, formatSampleObject, unformatSampleObject, objectsMatch);
    }

    // O(1) : enqueue value (if no resize)
    enqueue(o: SampleObject): void {
        this.append(o);
    }

    // O(1) : dequeue value
    dequeue(): SampleObject | undefined {
        // read value and return
        return this.removeAt(0);
    }

    // O(1) : get value
    peek(index: number): SampleObject | undefined {
        // read value and return
        return this.get(index);
    }
}

/**
 * Deque based JS array-like implementation.
 * @class
 * @remarks
 * - Maps native JS array methods to deque methods.
 */
export class OtherArray<T> extends Deque<T> {
    public push(item: T): void {this.append(item);}
    public pop(): T | undefined {return this.removeAt(this.length - 1);}
    public unshift(item: T): void {this.prepend(item);}
    public shift(): T | undefined {return this.removeAt(0);}
}