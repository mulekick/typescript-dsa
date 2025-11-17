[**typescript-dsa**](../../README.md)

***

[typescript-dsa](../../README.md) / src/structures/graph

# src/structures/graph

Graph data structure.

## Classes

### Graph

Defined in: [src/structures/graph.ts:42](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/graph.ts#L42)

Graph implementation over generic type.

#### Remarks

* Graphs are node based structures and are completely generic (no limitation on node values size).

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | Data type stored in graph vertices. |

#### Constructors

##### Constructor

```ts
new Graph<T>(
   vertices, 
   edges, 
m): Graph<T>;
```

Defined in: [src/structures/graph.ts:73](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/graph.ts#L73)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `vertices` | [`Vertices`](../interfaces.md#vertices)<`T`> |
| `edges` | | [`AdjacencyMatrix`](../interfaces.md#adjacencymatrix) | [`AdjacencyList`](../interfaces.md#adjacencylist) |
| `m` | [`matcher`](../interfaces.md#matcher)<`T`> |

###### Returns

[`Graph`](#graph)<`T`>

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="max_vertices"></a> `MAX_VERTICES` | `static` | `number` | `65535` | [src/structures/graph.ts:49](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/graph.ts#L49) |
| <a id="infinity"></a> `INFINITY` | `static` | `number` | `4294967295` | [src/structures/graph.ts:51](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/graph.ts#L51) |
| <a id="match"></a> `match` | `public` | [`matcher`](../interfaces.md#matcher)<`T`> | `undefined` | [src/structures/graph.ts:70](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/graph.ts#L70) |

#### Accessors

##### components

###### Get Signature

```ts
get components(): T[][];
```

Defined in: [src/structures/graph.ts:92](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/graph.ts#L92)

###### Returns

`T`\[]\[]

##### degrees

###### Get Signature

```ts
get degrees(): [T, {
  ind: number;
  out: number;
}][];
```

Defined in: [src/structures/graph.ts:142](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/graph.ts#L142)

###### Returns

\[`T`, {
`ind`: `number`;
`out`: `number`;
}]\[]

##### edgesCount

###### Get Signature

```ts
get edgesCount(): number;
```

Defined in: [src/structures/graph.ts:162](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/graph.ts#L162)

###### Returns

`number`

##### isConnected

###### Get Signature

```ts
get isConnected(): boolean;
```

Defined in: [src/structures/graph.ts:167](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/graph.ts#L167)

###### Returns

`boolean`

##### isComplete

###### Get Signature

```ts
get isComplete(): boolean;
```

Defined in: [src/structures/graph.ts:173](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/graph.ts#L173)

###### Returns

`boolean`

##### lineGraph

###### Get Signature

```ts
get lineGraph(): Graph<LineGraphVertex>;
```

Defined in: [src/structures/graph.ts:178](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/graph.ts#L178)

###### Returns

[`Graph`](#graph)<[`LineGraphVertex`](../interfaces.md#linegraphvertex)>

#### Methods

##### depthFirstSearch()

```ts
depthFirstSearch(from, to): Edge[] | undefined;
```

Defined in: [src/structures/graph.ts:240](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/graph.ts#L240)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `from` | `T` |
| `to` | `T` |

###### Returns

[`Edge`](../interfaces.md#edge)\[] | `undefined`

##### breadthFirstSearch()

```ts
breadthFirstSearch(from, to): Edge[] | undefined;
```

Defined in: [src/structures/graph.ts:304](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/graph.ts#L304)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `from` | `T` |
| `to` | `T` |

###### Returns

[`Edge`](../interfaces.md#edge)\[] | `undefined`

##### DijkstraShortestPath()

```ts
DijkstraShortestPath(from, to): Edge[] | undefined;
```

Defined in: [src/structures/graph.ts:356](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/graph.ts#L356)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `from` | `T` |
| `to` | `T` |

###### Returns

[`Edge`](../interfaces.md#edge)\[] | `undefined`
