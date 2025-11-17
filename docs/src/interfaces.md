[**typescript-dsa**](../README.md)

***

[typescript-dsa](../README.md) / src/interfaces

# src/interfaces

Shared types and interfaces.

## Table of contents

* [1. Async queue](#1-async-queue)
* [2. Object signatures](#2-object-signatures)
* [3. Function signatures](#3-function-signatures)
* [4. Node based structures](#4-node-based-structures)
* [5. Tree structures](#5-tree-structures)
* [6. Graph structures](#6-graph-structures)
* [Other](#other)

## 1. Async queue

* Types used for the rate-limited async queue implementation.

### NetworkRequest

Defined in: [src/interfaces.ts:36](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L36)

Network request object.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="url"></a> `url` | `string` | [src/interfaces.ts:38](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L38) |
| <a id="uuid"></a> `uuid` | `string` | [src/interfaces.ts:40](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L40) |
| <a id="num"></a> `num` | `number` | [src/interfaces.ts:42](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L42) |

## 2. Object signatures

* Types used with data structures that handle objects.

### sampleObject

Defined in: [src/interfaces.ts:54](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L54)

Sample object signature for object storage in data structures.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="prop"></a> `prop` | `number` | [src/interfaces.ts:55](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L55) |

***

### coords

Defined in: [src/interfaces.ts:63](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L63)

Cell coords for recursion algorithm.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="y"></a> `y` | `number` | [src/interfaces.ts:64](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L64) |
| <a id="x"></a> `x` | `number` | [src/interfaces.ts:65](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L65) |

## 3. Function signatures

* Generic signatures types for data structures related functions.

### formatter

```ts
type formatter<T> = formatter<T>;
```

Defined in: [src/interfaces.ts:96](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L96)

Formatting function signature.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | Data type to format into a buffer. |

#### Remarks

* Max length allowed for storage is use case specific and must be consistent across background array constructor and formatter functions.

***

### unformatter

```ts
type unformatter<T> = unformatter<T>;
```

Defined in: [src/interfaces.ts:106](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L106)

Unformatting function signature.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | Data type to read from a buffer. |

#### Remarks

* Max length allowed for storage is use case specific and must be consistent across background array constructor and formatter functions.

***

### comparator

```ts
type comparator<T> = comparator<T>;
```

Defined in: [src/interfaces.ts:116](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L116)

Node comparison function signature.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | Data type stored in the nodes. |

#### Remarks

* Used to compare nodes for ordering.

***

### matcher

```ts
type matcher<T> = matcher<T>;
```

Defined in: [src/interfaces.ts:126](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L126)

Node matching function signature.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | Data type stored in the nodes. |

#### Remarks

* Used to match nodes values for update and deletion.

## 4. Node based structures

* Types used by node based data structures (stacks and queues).

### StackType

```ts
type StackType = StackType;
```

Defined in: [src/interfaces.ts:137](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L137)

Composing types for linked lists based structures benchmarks.

## 5. Tree structures

* Types used by tree data structures.

### traversalType

```ts
type traversalType = traversalType;
```

Defined in: [src/interfaces.ts:166](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L166)

Depth first traversal types.

***

### BinaryNode

Defined in: [src/interfaces.ts:174](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L174)

Binary node (doubly linked).

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | Data type stored in the node. |

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="value-1"></a> `value` | `T` | [src/interfaces.ts:175](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L175) |
| <a id="left"></a> `left` | [`BinaryNode`](#binarynode)<`T`> | `null` | [src/interfaces.ts:176](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L176) |
| <a id="right"></a> `right` | [`BinaryNode`](#binarynode)<`T`> | `null` | [src/interfaces.ts:177](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L177) |
| <a id="parent"></a> `parent` | [`BinaryNode`](#binarynode)<`T`> | `null` | [src/interfaces.ts:179](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L179) |

***

### visitor

```ts
type visitor<T> = visitor<T>;
```

Defined in: [src/interfaces.ts:188](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L188)

Function signatures for node visit.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | Data type stored in the node. |

***

### TrieNode

Defined in: [src/interfaces.ts:195](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L195)

Trie node.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="value-2"></a> `value` | `string` | [src/interfaces.ts:197](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L197) |
| <a id="next-1"></a> `next` | ([`TrieNode`](#trienode) | `undefined`)\[] | [src/interfaces.ts:199](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L199) |
| <a id="childnodes"></a> `childNodes` | `number` | [src/interfaces.ts:201](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L201) |
| <a id="isword"></a> `isWord` | `boolean` | [src/interfaces.ts:203](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L203) |

## 6. Graph structures

* Types used by graphs data structures.

### mazeObject

Defined in: [src/interfaces.ts:75](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L75)

Type used for maze description.

#### Remarks

* Used for tests

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="level"></a> `level` | `string` | [src/interfaces.ts:76](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L76) |
| <a id="maze"></a> `maze` | `string`\[] | [src/interfaces.ts:77](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L77) |
| <a id="wall"></a> `wall` | `string` | [src/interfaces.ts:78](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L78) |
| <a id="length"></a> `length` | `number` | [src/interfaces.ts:79](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L79) |
| <a id="start"></a> `start` | [`coords`](#coords) | [src/interfaces.ts:80](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L80) |
| <a id="exit"></a> `exit` | `string` | [`coords`](#coords) | [src/interfaces.ts:81](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L81) |

***

### Vertices

```ts
type Vertices<T> = Vertices<T>;
```

Defined in: [src/interfaces.ts:216](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L216)

Rename for clarity's sake.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | Data type stored in the vertex. |

***

### Edge

Defined in: [src/interfaces.ts:223](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L223)

Graph edge in an adjacency list.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="edge-1"></a> `edge` | `number` | [src/interfaces.ts:225](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L225) |
| <a id="weight"></a> `weight` | `number` | [src/interfaces.ts:227](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L227) |

***

### AdjacencyMatrix

```ts
type AdjacencyMatrix = AdjacencyMatrix;
```

Defined in: [src/interfaces.ts:238](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L238)

Adjacency matrix.

#### Remarks

* It is assessed that all the graphs are weighted.
* Unweighted graphs are represented as weighted graphs with all edges weights equal to 1.

***

### AdjacencyList

```ts
type AdjacencyList = AdjacencyList;
```

Defined in: [src/interfaces.ts:248](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L248)

Adjacency list.

#### Remarks

* It is assessed that all the graphs are weighted.
* Unweighted graphs are represented as weighted graphs with all edges weights equal to 1.

***

### LineGraphVertex

Defined in: [src/interfaces.ts:255](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L255)

Vertex in a line graph.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="from"></a> `from` | `number` | [src/interfaces.ts:256](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L256) |
| <a id="to"></a> `to` | `number` | [src/interfaces.ts:257](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L257) |
| <a id="weight-1"></a> `weight` | `number` | [src/interfaces.ts:258](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L258) |

***

### VertexByDistance

Defined in: [src/interfaces.ts:268](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L268)

Vertex by distance.

#### Remarks

* Used to store vertices distance to origin in a min heap for Dijkstra's shortest path.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="index"></a> `index` | `number` | [src/interfaces.ts:269](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L269) |
| <a id="distance"></a> `distance` | `number` | [src/interfaces.ts:270](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L270) |

***

### GraphProperties

Defined in: [src/interfaces.ts:280](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L280)

Graph properties.

#### Remarks

* Used for tests

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="connected"></a> `connected` | `boolean` | [src/interfaces.ts:281](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L281) |
| <a id="edges"></a> `edges` | `number` | [src/interfaces.ts:282](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L282) |
| <a id="components"></a> `components` | `T`\[]\[] | [src/interfaces.ts:283](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L283) |
| <a id="linegraph"></a> `lineGraph` | [`Graph`](structures/graph.md#graph)<[`LineGraphVertex`](#linegraphvertex)> | [src/interfaces.ts:284](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L284) |

## Other

### QueueType

```ts
type QueueType = 
  | StringQueue
  | ObjectQueue
  | OtherObjectQueue;
```

Defined in: [src/interfaces.ts:138](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L138)

***

### Node

Defined in: [src/interfaces.ts:152](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L152)

List node (doubly linked).

#### Remarks

* We use the same node structure for singly and doubly linked lists.
* The `prev` property is undefined when used with singly linked lists.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | Data type stored in the node. |

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="prev"></a> `prev?` | [`Node`](#node)<`T`> | [src/interfaces.ts:154](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L154) |
| <a id="next"></a> `next?` | [`Node`](#node)<`T`> | [src/interfaces.ts:156](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L156) |
| <a id="value"></a> `value` | `T` | [src/interfaces.ts:158](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/interfaces.ts#L158) |
