/**
 * Shared helper functions.
 * @module
 * @showCategories
 * @categoryDescription 1. Utils
 * - Generic utilities functions.
 * @categoryDescription 2. Formatters
 * - Format values for in-memory storage.
 * @categoryDescription 3. Comparators
 * - Custome comparison functions for values ordering.
 * @categoryDescription 4. Matchers
 * - Custom equality functions for values matching.
 * @categoryDescription 5. Benchmarks
 * - Generic benchmarking related functions.
 * @categoryDescription 6. Miscellaneous
 * - Miscellaneous functions / variables and reexports.
 * @remarks
 * - Comparators return 1 if a is greater, -1 if b is greater and 0 if a and b are equal.
 * - Matchers return true if values match, false otherwise.
 */

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
    sampleObject,
    comparator,
    matcher,
    VertexByDistance,
    formatter,
    unformatter
} from "./interfaces.ts";

// ##############################################################
// #                           UTILS                            #
// ##############################################################

/**
 * Shuffle array elements.
 * @category 1. Utils
 */
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

/**
 * Pick a random number between 2 values.
 * @category 1. Utils
 */
export const rnd = (lb: number, ub: number): number => lb + Math.round(Math.random() * (ub - lb));

/**
 * Output a single random character (unicode basic latin).
 * @category 1. Utils
 */
export const getRandomChar = (): string => String.fromCharCode(rnd(32, 128));

/**
 * Populate a new array.
 * @category 5. Benchmarks
 */
export const createArray = (len: number, fn: (...args: Array<unknown>)=> unknown): Array<unknown> => new Array(len).fill(undefined).map(fn);

// ##############################################################
// #                         FORMATTERS                         #
// ##############################################################

/**
 * Store object w/ number prop between 0 and 65535.
 * @category 2. Formatters
 */
export const formatSampleObject: formatter<sampleObject> = (v?: sampleObject): Buffer => {
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

/**
 * Read object w/ number prop between 0 and 65535.
 * @category 2. Formatters
 */
export const unformatSampleObject: unformatter<sampleObject> = (b: Buffer): sampleObject => {
    // read system endianness and value
    const value = endianness() === `LE` ? b.readUInt16LE(0) : b.readUInt16BE(0);
    // return
    return {prop: value};
};

/**
 * Store a number between 0 and 65535.
 * @category 2. Formatters
 */
export const formatNumber: formatter<number> = (v: number = 0): Buffer => {
    // allocate memory
    const formatted = Buffer.alloc(2);
    // read value to persist (zero if value is removed)
    const value = v;
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

/**
 * Read a number between 0 and 65535.
 * @category 2. Formatters
 */
export const unformatNumber: unformatter<number> = (b: Buffer): number => {
    // read system endianness and value
    const value = endianness() === `LE` ? b.readUInt16LE(0) : b.readUInt16BE(0);
    // return
    return value;
};

/**
 * Store vertex index on 2 bytes (65535 max), total weight on 4 bytes (4294967295 max).
 * @category 2. Formatters
 */
export const formatVertexByDistance: formatter<VertexByDistance> = (v: VertexByDistance = {index: 0, distance: 0}): Buffer => {
    // allocate memory
    const formatted = Buffer.alloc(6);
    // read value to persist (zero if value is removed)
    const {index, distance} = v;
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

/**
 * Read vertex index and distance.
 * @category 2. Formatters
 */
export const unformatVertexByDistance: unformatter<VertexByDistance> = (b: Buffer): VertexByDistance => {
    // read system endianness and value
    const [ index, distance ] = endianness() === `LE` ? [ b.readUInt16LE(0), b.readUInt32LE(2) ] : [ b.readUInt16BE(0), b.readUInt32BE(2) ];
    // return
    return {index, distance};
};

// ##############################################################
// #                        COMPARATORS                         #
// ##############################################################

/**
 * Sample objects comparator function.
 * @category 3. Comparators
 */
export const compareSampleObjects: comparator<sampleObject> = (a: sampleObject, b: sampleObject): 0 | 1 | -1 => {
    // a greater than b
    if (a.prop > b.prop)
        return 1;
    // a smaller than b
    else if (a.prop < b.prop)
        return -1;
    // values match
    return 0;
};

/**
 * Numbers comparator function.
 * @category 3. Comparators
 */
export const compareNumbers = (a: number, b: number): 0 | 1 | -1 => (a > b ? 1 : a < b ? -1 : 0);

/**
 * Compare vertices by distance and not by adjacency.
 * @category 3. Comparators
 */
export const compareVertexDistanceFromOrigin = (a: VertexByDistance, b: VertexByDistance): 0 | 1 | -1 => {
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

// ##############################################################
// #                          MATCHERS                          #
// ##############################################################

/**
 * Sample objects matcher function.
 * @category 4. Matchers
 * @remarks
 * - Return true if stringified values are equal.
 */
export const objectsMatch: matcher<unknown> = (a: unknown, b: unknown): boolean => JSON.stringify(a) === JSON.stringify(b);

/**
 * String values matcher function.
 * @category 4. Matchers
 */
export const stringsMatch: matcher<string> = (a: string, b: string): boolean => a === b;

/**
 * Numeric values matcher function.
 * @category 4. Matchers
 */
export const numbersMatch: matcher<number> = (a: number, b: number): boolean => a === b;

// ##############################################################
// #                         BENCHMARKS                         #
// ##############################################################

/**
 * Measure function execution time.
 * @category 5. Benchmarks
 */
export const timeExecution = (f: (...args: Array<unknown>)=> unknown): {time: number; result: unknown} => {
    // init start time
    const st = new Date().getTime();
    // call function
    const result = f();
    // return end time minus start time in milliseconds and result
    return {time: new Date().getTime() - st, result};
};

/**
 * Enqueue / dequeue values.
 * @category 5. Benchmarks
 */
export const benchmarkQueue = (q: QueueType, arr: Array<string> | Array<sampleObject>): void => {
    arr.forEach((x: string | sampleObject, i: number) => {
        // enqueue
        if (q instanceof StringQueue)
            q.enqueue(x as string);
        else
            q.enqueue(x as sampleObject);
        // dequeue on every other iteration
        if (i % 2 === 1)
            q.dequeue();
    });
};

/**
 * Push / pop values.
 * @category 5. Benchmarks
 */
export const benchmarkStack = (q: StackType, arr: Array<string> | Array<sampleObject>): void => {
    arr.forEach((x: string | sampleObject, i: number) => {
        // push
        if (q instanceof ObjectStack)
            q.push(x as sampleObject);
        else
            q.push(x as string);
        // pop on every other iteration
        if (i % 2 === 1)
            q.pop();
    });
};

/**
 * Reexports for convenience.
 * @category 6. Miscellaneous
 */
export {dict} from "./dict.ts";

/**
 * Reexports for convenience.
 * @category 6. Miscellaneous
 */
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

/**
 * Reexports for convenience.
 * @category 6. Miscellaneous
 */
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

/**
 * Modules dependency graph requires this for jest transpilation.
 * @category 6. Miscellaneous
 */
export {ObjectStack};