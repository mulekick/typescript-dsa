[**typescript-dsa**](../README.md)

***

[typescript-dsa](../README.md) / src/helpers

# src/helpers

Shared helper functions.

## Table of contents

* [Remarks](#remarks)
* [1. Utils](#1-utils)
* [2. Formatters](#2-formatters)
* [3. Comparators](#3-comparators)
* [4. Matchers](#4-matchers)
* [5. Benchmarks](#5-benchmarks)
* [6. Miscellaneous](#6-miscellaneous)

## Remarks

* Comparators return 1 if a is greater, -1 if b is greater and 0 if a and b are equal.
* Matchers return true if values match, false otherwise.

## 1. Utils

* Generic utilities functions.

### shuffle()

```ts
function shuffle(a): unknown[];
```

Defined in: [src/helpers.ts:51](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L51)

Shuffle array elements.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `unknown`\[] |

#### Returns

`unknown`\[]

***

### rnd()

```ts
function rnd(lb, ub): number;
```

Defined in: [src/helpers.ts:71](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L71)

Pick a random number between 2 values.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `lb` | `number` |
| `ub` | `number` |

#### Returns

`number`

***

### getRandomChar()

```ts
function getRandomChar(): string;
```

Defined in: [src/helpers.ts:77](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L77)

Output a single random character (unicode basic latin).

#### Returns

`string`

## 2. Formatters

* Format values for in-memory storage.

### formatSampleObject

```ts
const formatSampleObject: formatter<sampleObject>;
```

Defined in: [src/helpers.ts:93](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L93)

Store object w/ number prop between 0 and 65535.

***

### unformatSampleObject

```ts
const unformatSampleObject: unformatter<sampleObject>;
```

Defined in: [src/helpers.ts:114](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L114)

Read object w/ number prop between 0 and 65535.

***

### formatNumber

```ts
const formatNumber: formatter<number>;
```

Defined in: [src/helpers.ts:125](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L125)

Store a number between 0 and 65535.

***

### unformatNumber

```ts
const unformatNumber: unformatter<number>;
```

Defined in: [src/helpers.ts:147](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L147)

Read a number between 0 and 65535.

***

### formatVertexByDistance

```ts
const formatVertexByDistance: formatter<VertexByDistance>;
```

Defined in: [src/helpers.ts:158](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L158)

Store vertex index on 2 bytes (65535 max), total weight on 4 bytes (4294967295 max).

***

### unformatVertexByDistance

```ts
const unformatVertexByDistance: unformatter<VertexByDistance>;
```

Defined in: [src/helpers.ts:183](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L183)

Read vertex index and distance.

## 3. Comparators

* Custome comparison functions for values ordering.

### compareSampleObjects

```ts
const compareSampleObjects: comparator<sampleObject>;
```

Defined in: [src/helpers.ts:198](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L198)

Sample objects comparator function.

***

### compareNumbers()

```ts
function compareNumbers(a, b): -1 | 0 | 1;
```

Defined in: [src/helpers.ts:213](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L213)

Numbers comparator function.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`-1` | `0` | `1`

***

### compareVertexDistanceFromOrigin()

```ts
function compareVertexDistanceFromOrigin(a, b): -1 | 0 | 1;
```

Defined in: [src/helpers.ts:219](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L219)

Compare vertices by distance and not by adjacency.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | [`VertexByDistance`](interfaces.md#vertexbydistance) |
| `b` | [`VertexByDistance`](interfaces.md#vertexbydistance) |

#### Returns

`-1` | `0` | `1`

## 4. Matchers

* Custom equality functions for values matching.

### objectsMatch

```ts
const objectsMatch: matcher<unknown>;
```

Defined in: [src/helpers.ts:242](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L242)

Sample objects matcher function.

#### Remarks

* Return true if stringified values are equal.

***

### stringsMatch

```ts
const stringsMatch: matcher<string>;
```

Defined in: [src/helpers.ts:248](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L248)

String values matcher function.

***

### numbersMatch

```ts
const numbersMatch: matcher<number>;
```

Defined in: [src/helpers.ts:254](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L254)

Numeric values matcher function.

## 5. Benchmarks

* Generic benchmarking related functions.

### createArray()

```ts
function createArray(len, fn): unknown[];
```

Defined in: [src/helpers.ts:83](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L83)

Populate a new array.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `len` | `number` |
| `fn` | (...`args`) => `unknown` |

#### Returns

`unknown`\[]

***

### timeExecution()

```ts
function timeExecution(f): {
  time: number;
  result: unknown;
};
```

Defined in: [src/helpers.ts:264](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L264)

Measure function execution time.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `f` | (...`args`) => `unknown` |

#### Returns

```ts
{
  time: number;
  result: unknown;
}
```

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `time` | `number` | [src/helpers.ts:264](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L264) |
| `result` | `unknown` | [src/helpers.ts:264](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L264) |

***

### benchmarkQueue()

```ts
function benchmarkQueue(q, arr): void;
```

Defined in: [src/helpers.ts:277](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L277)

Enqueue / dequeue values.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `q` | [`QueueType`](interfaces.md#queuetype) |
| `arr` | `string`\[] | [`sampleObject`](interfaces.md#sampleobject)\[] |

#### Returns

`void`

***

### benchmarkStack()

```ts
function benchmarkStack(q, arr): void;
```

Defined in: [src/helpers.ts:294](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/helpers.ts#L294)

Push / pop values.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `q` | [`StackType`](interfaces.md#stacktype) |
| `arr` | `string`\[] | [`sampleObject`](interfaces.md#sampleobject)\[] |

#### Returns

`void`

## 6. Miscellaneous

* Miscellaneous functions / variables and reexports.

### dict

Re-exports [dict](dict.md#dict)

***

### translateMatrixToList

Re-exports [translateMatrixToList](graphs.md#translatematrixtolist)

***

### translateListToMatrix

Re-exports [translateListToMatrix](graphs.md#translatelisttomatrix)

***

### reorder

Re-exports [reorder](graphs.md#reorder)

***

### sequence

Re-exports [sequence](graphs.md#sequence)

***

### reduceToVerticesList

Re-exports [reduceToVerticesList](graphs.md#reducetoverticeslist)

***

### reduceToTotalDistance

Re-exports [reduceToTotalDistance](graphs.md#reducetototaldistance)

***

### coordsMatch

Re-exports [coordsMatch](graphs.md#coordsmatch)

***

### createUnweightedGraphFromMaze

Re-exports [createUnweightedGraphFromMaze](graphs.md#createunweightedgraphfrommaze)

***

### cities

Re-exports [cities](graphs.md#cities)

***

### distances

Re-exports [distances](graphs.md#distances)

***

### drawMazeSolution

Re-exports [drawMazeSolution](maze.md#drawmazesolution)

***

### simpleMaze

Re-exports [simpleMaze](maze.md#simplemaze)

***

### simpleMazeStartingCoords

Re-exports [simpleMazeStartingCoords](maze.md#simplemazestartingcoords)

***

### simpleMazeExitCoords

Re-exports [simpleMazeExitCoords](maze.md#simplemazeexitcoords)

***

### midLevelMaze

Re-exports [midLevelMaze](maze.md#midlevelmaze)

***

### midLevelMazeStartingCoords

Re-exports [midLevelMazeStartingCoords](maze.md#midlevelmazestartingcoords)

***

### midLevelMazeExitCoords

Re-exports [midLevelMazeExitCoords](maze.md#midlevelmazeexitcoords)

***

### advancedMaze

Re-exports [advancedMaze](maze.md#advancedmaze)

***

### advancedMazeStartingCoords

Re-exports [advancedMazeStartingCoords](maze.md#advancedmazestartingcoords)

***

### advancedMazeExitCoords

Re-exports [advancedMazeExitCoords](maze.md#advancedmazeexitcoords)

***

### hugeMaze

Re-exports [hugeMaze](maze.md#hugemaze)

***

### hugeMazeStartingCoords

Re-exports [hugeMazeStartingCoords](maze.md#hugemazestartingcoords)

***

### hugeMazeExitCoords

Re-exports [hugeMazeExitCoords](maze.md#hugemazeexitcoords)

***

### ObjectStack

Re-exports [ObjectStack](structures/arrayList.md#objectstack)
