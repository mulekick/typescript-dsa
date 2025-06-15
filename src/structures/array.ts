// import primitives
import {Buffer} from "node:buffer";

// actual implementation of an array as a javascript class ...
export class BarebonesArray {
    // declare memory, number of bytes per element and offset
    private memory: Buffer;
    private BYTES_PER_ELEMENT: number;
    private ARRAY_START_OFFSET: number;
    private ARRAY_LENGTH: number;

    // init computer memory
    public constructor(arrayLength: number, bytesPerElement: number) {
        // add length property ...
        this.ARRAY_LENGTH = arrayLength;
        // store x bytes by array element
        this.BYTES_PER_ELEMENT = bytesPerElement;
        // init internal buffer and fill with zeroes
        this.memory = Buffer.alloc(this.ARRAY_LENGTH * this.BYTES_PER_ELEMENT);
        // in-memory offset of the stored array
        this.ARRAY_START_OFFSET = 0;
    }

    // O(1) : declare memory access function (read x array elements starting at offset i)
    public read(i: number, x: number): Buffer {return this.memory.subarray(this.ARRAY_START_OFFSET + i * this.BYTES_PER_ELEMENT, this.ARRAY_START_OFFSET + (i + x) * this.BYTES_PER_ELEMENT);}

    // O(n) : write (write entire buffer contents into memory at offset i)
    public write(w: Buffer, i: number): number {return w.copy(this.memory, this.ARRAY_START_OFFSET + i * this.BYTES_PER_ELEMENT, 0, w.length);}

    // O(1) : dump
    public dump(): string {return this.memory.toString(`utf8`);}

    // O(1) : return length / total number of elements
    public get length(): number {return this.ARRAY_LENGTH;}
}