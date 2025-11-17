[**typescript-dsa**](../README.md)

***

[typescript-dsa](../README.md) / src/graphs

# src/graphs

Graph-specific helper functions.

## Table of contents

* [1. Helpers](#1-helpers)
* [2. Mazes](#2-mazes)
* [3. Data](#3-data)

## 1. Helpers

* Generic helper functions.

### translateMatrixToList()

```ts
function translateMatrixToList(matrix): AdjacencyList;
```

Defined in: [src/graphs.ts:37](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/graphs.ts#L37)

Translate adjacency matrix to adjacency list.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `matrix` | [`AdjacencyMatrix`](interfaces.md#adjacencymatrix) |

#### Returns

[`AdjacencyList`](interfaces.md#adjacencylist)

***

### translateListToMatrix()

```ts
function translateListToMatrix(list): AdjacencyMatrix;
```

Defined in: [src/graphs.ts:59](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/graphs.ts#L59)

Translate adjacency list to adjacency matrix.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `list` | [`AdjacencyList`](interfaces.md#adjacencylist) |

#### Returns

[`AdjacencyMatrix`](interfaces.md#adjacencymatrix)

***

### reorder()

```ts
function reorder(
   previous, 
   initial, 
   final): number[];
```

Defined in: [src/graphs.ts:71](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/graphs.ts#L71)

Reconstruct path to vertex v from previous array.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `previous` | (`number` | `undefined`)\[] |
| `initial` | `number` |
| `final` | `number` |

#### Returns

`number`\[]

#### Remarks

* Pass array and vertices <start> and <v> indices

***

### sequence()

```ts
function sequence(path, edges): Edge[];
```

Defined in: [src/graphs.ts:93](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/graphs.ts#L93)

Return vertices sequence from edges path.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `number`\[] |
| `edges` | [`AdjacencyList`](interfaces.md#adjacencylist) |

#### Returns

[`Edge`](interfaces.md#edge)\[]

***

### reduceToVerticesList()

```ts
function reduceToVerticesList(vertices, edges): string[];
```

Defined in: [src/graphs.ts:114](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/graphs.ts#L114)

Reduce edge sequence to vertices sequence.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vertices` | [`Vertices`](interfaces.md#vertices)<`string`> |
| `edges` | [`Edge`](interfaces.md#edge)\[] |

#### Returns

`string`\[]

***

### reduceToTotalDistance()

```ts
function reduceToTotalDistance(edges): number;
```

Defined in: [src/graphs.ts:120](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/graphs.ts#L120)

Reduce edge sequence to sum of edges weights.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `edges` | [`Edge`](interfaces.md#edge)\[] |

#### Returns

`number`

## 2. Mazes

* Functions used to represent mazes as graphs.

### coordsMatch

```ts
const coordsMatch: matcher<coords>;
```

Defined in: [src/graphs.ts:134](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/graphs.ts#L134)

Cell coords matcher function.

***

### readDirections()

```ts
function readDirections(cell): [coords, coords, coords, coords];
```

Defined in: [src/graphs.ts:140](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/graphs.ts#L140)

Visit the 4 adjacent cells top, left, bottom, right.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `cell` | [`coords`](interfaces.md#coords) |

#### Returns

\[[`coords`](interfaces.md#coords), [`coords`](interfaces.md#coords), [`coords`](interfaces.md#coords), [`coords`](interfaces.md#coords)]

***

### createUnweightedGraphFromMaze()

```ts
function createUnweightedGraphFromMaze(maze, wall): [coords[], AdjacencyMatrix];
```

Defined in: [src/graphs.ts:151](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/graphs.ts#L151)

Create unweighted graph from maze string representation.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `maze` | `string`\[] |
| `wall` | `string` |

#### Returns

\[[`coords`](interfaces.md#coords)\[], [`AdjacencyMatrix`](interfaces.md#adjacencymatrix)]

## 3. Data

* Sample data used to initialize a graph.

### cities

```ts
const cities: Vertices<string>;
```

Defined in: [src/graphs.ts:240](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/graphs.ts#L240)

Cities in Nepal (40).

***

### distances

```ts
const distances: AdjacencyMatrix;
```

Defined in: [src/graphs.ts:287](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/graphs.ts#L287)

Traveling distances between cities (40 \* 40).
