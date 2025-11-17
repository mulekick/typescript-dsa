[**typescript-dsa**](../README.md)

***

[typescript-dsa](../README.md) / src/helpers

# src/helpers

Shared helper functions.

## Table of contents

* [Remarks](#remarks)
* [Benchmarks](#benchmarks)
* [Comparators](#comparators)
* [Formatters](#formatters)
* [Matchers](#matchers)
* [Other](#other)
* [Utils](#utils)

## Remarks

* Comparators return 1 if a is greater, -1 if b is greater and 0 if a and b are equal.
* Matchers return true if values match, false otherwise.

## Benchmarks

* Generic benchmarking related functions.

### createArray()

```ts
function createArray(len, fn): unknown[];
```

Defined in: [src/helpers.ts:81](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L81)

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

Defined in: [src/helpers.ts:262](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L262)

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
| `time` | `number` | [src/helpers.ts:262](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L262) |
| `result` | `unknown` | [src/helpers.ts:262](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L262) |

***

### benchmarkQueue()

```ts
function benchmarkQueue(q, arr): void;
```

Defined in: [src/helpers.ts:275](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L275)

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

Defined in: [src/helpers.ts:292](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L292)

Push / pop values.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `q` | [`StackType`](interfaces.md#stacktype) |
| `arr` | `string`\[] | [`sampleObject`](interfaces.md#sampleobject)\[] |

#### Returns

`void`

## Comparators

* Custome comparison functions for values ordering.

### compareSampleObjects

```ts
const compareSampleObjects: comparator<sampleObject>;
```

Defined in: [src/helpers.ts:196](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L196)

Sample objects comparator function.

***

### compareNumbers()

```ts
function compareNumbers(a, b): -1 | 0 | 1;
```

Defined in: [src/helpers.ts:211](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L211)

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

Defined in: [src/helpers.ts:217](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L217)

Compare vertices by distance and not by adjacency.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | [`VertexByDistance`](interfaces.md#vertexbydistance) |
| `b` | [`VertexByDistance`](interfaces.md#vertexbydistance) |

#### Returns

`-1` | `0` | `1`

## Formatters

* Format values for in-memory storage.

### formatSampleObject

```ts
const formatSampleObject: formatter<sampleObject>;
```

Defined in: [src/helpers.ts:91](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L91)

Store object w/ number prop between 0 and 65535.

***

### unformatSampleObject

```ts
const unformatSampleObject: unformatter<sampleObject>;
```

Defined in: [src/helpers.ts:112](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L112)

Read object w/ number prop between 0 and 65535.

***

### formatNumber

```ts
const formatNumber: formatter<number>;
```

Defined in: [src/helpers.ts:123](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L123)

Store a number between 0 and 65535.

***

### unformatNumber

```ts
const unformatNumber: unformatter<number>;
```

Defined in: [src/helpers.ts:145](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L145)

Read a number between 0 and 65535.

***

### formatVertexByDistance

```ts
const formatVertexByDistance: formatter<VertexByDistance>;
```

Defined in: [src/helpers.ts:156](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L156)

Store vertex index on 2 bytes (65535 max), total weight on 4 bytes (4294967295 max).

***

### unformatVertexByDistance

```ts
const unformatVertexByDistance: unformatter<VertexByDistance>;
```

Defined in: [src/helpers.ts:181](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L181)

Read vertex index and distance.

## Matchers

* Custom equality functions for values matching.

### objectsMatch

```ts
const objectsMatch: matcher<unknown>;
```

Defined in: [src/helpers.ts:240](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L240)

Sample objects matcher function.

#### Remarks

* Return true if stringified values are equal.

***

### stringsMatch

```ts
const stringsMatch: matcher<string>;
```

Defined in: [src/helpers.ts:246](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L246)

String values matcher function.

***

### numbersMatch

```ts
const numbersMatch: matcher<number>;
```

Defined in: [src/helpers.ts:252](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L252)

Numeric values matcher function.

## Other

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

## Utils

* Generic utilities functions.

### shuffle()

```ts
function shuffle(a): unknown[];
```

Defined in: [src/helpers.ts:49](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L49)

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

Defined in: [src/helpers.ts:69](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L69)

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

Defined in: [src/helpers.ts:75](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/helpers.ts#L75)

Output a single random character (unicode basic latin).

#### Returns

`string`
