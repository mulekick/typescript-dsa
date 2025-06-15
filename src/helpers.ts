// import primitives
import {endianness} from "node:os";
import {Buffer} from "node:buffer";

// import modules
import {ObjectStack} from "./structures/arrayList.ts";
import {StringQueue} from "./structures/singlyLinkedList.ts";
import {Graph} from "./structures/graph.ts";

// import types
import type {
    QueueType,
    StackType,
    SampleObject,
    comparatorSignature,
    matcherSignature,
    GraphVertexByDistance,
    formatterSignature,
    unformatterSignature
} from "./interfaces.ts";

// ========= UTILS ===========

// shuffle array elements
export const shuffle = (a: Array<unknown>): Array<unknown> => {
    // array length
    let len: number = a.length;

    // while elements remain to shuffle...
    while (len >= 0) {
        // pick one of the remaining elements at random...
        const rand: number = Math.floor(Math.random() * --len);
        // and swap it with the current element.
        const tmp: unknown = a[len];
        a[len] = a[rand];
        a[rand] = tmp;
    }
    return a;
};

// pick a random number between 2 indices
export const rnd = (lb: number, ub: number): number => lb + Math.round(Math.random() * (ub - lb));

// output a single random character (unicode basic latin)
export const getRandomChar = (): string => String.fromCharCode(rnd(32, 128));

// ====== FORMATTERS =========

// store objects w/ number prop between 0 and 65535
export const formatSampleObject: formatterSignature<SampleObject> = (v: SampleObject | undefined): Buffer => {
    // allocate memory
    const formatted = Buffer.alloc(2);
    // read value to persist (zero if value is removed)
    const value = v && v.prop ? v.prop : 0;
    // throw if value is too high
    if (value > 65535)
        throw new RangeError(`failed to write: prop value exceeds 65535`);
    // read system endianness and write
    if (endianness() === `LE`)
        formatted.writeUInt16LE(value, 0);
    else
        formatted.writeUInt16BE(value, 0);
    // return
    return formatted;
};

// store objects w/ number prop between 0 and 2 ** length - 1
export const unformatSampleObject: unformatterSignature<SampleObject> = (b: Buffer): SampleObject => {
    // read system endianness and value
    const value = endianness() === `LE` ? b.readUInt16LE(0) : b.readUInt16BE(0);
    // return
    return {prop: value};
};

// store a number between 0 and 65535
export const formatNumber: formatterSignature<number> = (v: number | undefined): Buffer => {
    // allocate memory
    const formatted = Buffer.alloc(2);
    // read value to persist (zero if value is removed)
    const value = v || 0;
    // throw if value is too high
    if (value > 65535)
        throw new RangeError(`failed to write: value exceeds 65535`);
    // read system endianness and write
    if (endianness() === `LE`)
        formatted.writeUInt16LE(value, 0);
    else
        formatted.writeUInt16BE(value, 0);
    // return
    return formatted;

};

// read a number between 0 and 65535 on 2 bytes
export const unformatNumber: unformatterSignature<number> = (b: Buffer): number => {
    // read system endianness and value
    const value = endianness() === `LE` ? b.readUInt16LE(0) : b.readUInt16BE(0);
    // return
    return value;
};

// store vertex index on 2 bytes (65535 max), total weight on 4 bytes (4294967295 max)
export const formatVertexByDistance: formatterSignature<GraphVertexByDistance> = (v: GraphVertexByDistance | undefined): Buffer => {
    // allocate memory
    const formatted = Buffer.alloc(6);
    // read value to persist (zero if value is removed)
    const {index, distance} = v || {index: 0, distance: 0};
    // throw if value is too high
    if (index > Graph.MAX_VERTICES || distance > Graph.INFINITY)
        throw new RangeError(`failed to write: invalid vertex / distance`);
    // read system endianness and write
    if (endianness() === `LE`) {
        formatted.writeUInt16LE(index, 0);
        formatted.writeUInt32LE(distance, 2);

    } else {
        formatted.writeUInt16BE(index, 0);
        formatted.writeUInt32BE(distance, 2);
    }
    // return
    return formatted;
};

export const unformatVertexByDistance: unformatterSignature<GraphVertexByDistance> = (b: Buffer): GraphVertexByDistance => {
    // read system endianness and value
    const [ index, distance ] = endianness() === `LE` ? [ b.readUInt16LE(0), b.readUInt32LE(2) ] : [ b.readUInt16BE(0), b.readUInt32BE(2) ];
    // return
    return {index, distance};
};

// ===== COMPARATORS =========

// comparator returns 1 if a is greater, -1 if b is greater and 0 if a and b are equal

// sample objects comparator function
export const compareSampleObjects: comparatorSignature<SampleObject> = (a: SampleObject, b: SampleObject): 0 | 1 | -1 => {
    // a greater than b
    if (a.prop > b.prop)
        return 1;
    // a smaller than b
    else if (a.prop < b.prop)
        return -1;
    // values match
    return 0;
};

// compare numbers
export const compareNumbers = (a: number, b: number): 0 | 1 | -1 => (Number(a) > Number(b) ? 1 : Number(a) < Number(b) ? -1 : 0);

// compare vertices by distance and not by adjacence ...
export const compareVertexDistanceFromOrigin = (a: GraphVertexByDistance, b: GraphVertexByDistance): 0 | 1 | -1 => {
    // distance origin to a > distance origin to b
    if (a.distance > b.distance)
        // return 1
        return 1;
    // distance origin to a < distance origin to b
    if (a.distance < b.distance)
        // return -1
        return -1;
    // values match
    return 0;
};

// ====== MATCHERS ===========

// sample objects matcher function, return true if stringified values are equal
export const objectsMatch: matcherSignature<unknown> = (a: unknown, b: unknown): boolean => JSON.stringify(a) === JSON.stringify(b);

// values match
export const stringsMatch: matcherSignature<string> = (a: string, b: string): boolean => a === b;

// numbers match
export const numbersMatch: matcherSignature<number> = (a: number, b: number): boolean => Number(a) === Number(b);

// ====== BENCHMARKS =========

// measure function execution time
export const timeExecution = (f: (...args: Array<unknown>)=> unknown): {time: number; result: unknown} => {
    // init start time
    const st = new Date().getTime();
    // call function
    const result = f();
    // return end time minus start time in milliseconds and result
    return {time: new Date().getTime() - st, result};
};

// enqueue / dequeue benchmarking function
export const benchmarkQueue = (q: QueueType, arr: Array<string> | Array<SampleObject>): void => {
    arr.forEach((x: string | SampleObject, i: number) => {
        // enqueue
        if (q instanceof StringQueue)
            q.enqueue(x as string);
        else
            q.enqueue(x as SampleObject);
        // dequeue on every other iteration
        if (i % 2 === 1)
            q.dequeue();
    });
};

// push / pop benchmarking function
export const benchmarkStack = (q: StackType, arr: Array<string> | Array<SampleObject>): void => {
    arr.forEach((x: string | SampleObject, i: number) => {
        // push
        if (q instanceof ObjectStack)
            q.push(x as SampleObject);
        else
            q.push(x as string);
        // pop on every other iteration
        if (i % 2 === 1)
            q.pop();
    });
};

// exports
export {dict} from "./dict.ts";
export {
    translateMatrixToList,
    translateListToMatrix,
    reorder,
    sequence,
    reduceToVerticesList,
    reduceToTotalDistance,
    coordsMatch,
    createUnweightedGraphFromMaze,
    cities,
    distances
} from "./graphs.ts";
export {
    drawMazeSolution,
    simpleMaze,
    simpleMazeStartingCoords,
    simpleMazeExitCoords,
    midLevelMaze,
    midLevelMazeStartingCoords,
    midLevelMazeExitCoords,
    advancedMaze,
    advancedMazeStartingCoords,
    advancedMazeExitCoords,
    hugeMaze,
    hugeMazeStartingCoords,
    hugeMazeExitCoords
} from "./maze.ts";