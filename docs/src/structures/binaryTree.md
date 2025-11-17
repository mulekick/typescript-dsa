[**typescript-dsa**](../../README.md)

***

[typescript-dsa](../../README.md) / src/structures/binaryTree

# src/structures/binaryTree

Binary tree data structure.

## Classes

### BinarySearchTree

Defined in: [src/structures/binaryTree.ts:24](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/binaryTree.ts#L24)

Binary search tree implementation over generic type.

#### Remarks

* Trees are node based structures and are completely generic (no limitation on node values size).

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | Data type stored in tree nodes. |

#### Constructors

##### Constructor

```ts
new BinarySearchTree<T>(m, c): BinarySearchTree<T>;
```

Defined in: [src/structures/binaryTree.ts:34](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/binaryTree.ts#L34)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `m` | [`matcher`](../interfaces.md#matcher)<`T`> |
| `c` | [`comparator`](../interfaces.md#comparator)<`T`> |

###### Returns

[`BinarySearchTree`](#binarysearchtree)<`T`>

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="match"></a> `match` | `public` | [`matcher`](../interfaces.md#matcher)<`T`> | [src/structures/binaryTree.ts:29](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/binaryTree.ts#L29) |

#### Methods

##### traverseDepth()

```ts
traverseDepth(visitNode, type): void;
```

Defined in: [src/structures/binaryTree.ts:60](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/binaryTree.ts#L60)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `visitNode` | [`visitor`](../interfaces.md#visitor)<`T`> |
| `type` | [`traversalType`](../interfaces.md#traversaltype) |

###### Returns

`void`

##### traverseBreadth()

```ts
traverseBreadth(visitNode): void;
```

Defined in: [src/structures/binaryTree.ts:99](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/binaryTree.ts#L99)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `visitNode` | [`visitor`](../interfaces.md#visitor)<`T`> |

###### Returns

`void`

##### verifyTree()

```ts
verifyTree(currentNode): boolean;
```

Defined in: [src/structures/binaryTree.ts:125](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/binaryTree.ts#L125)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `currentNode` | [`BinaryNode`](../interfaces.md#binarynode)<`T`> | `null` |

###### Returns

`boolean`

##### insert()

```ts
insert(value): void;
```

Defined in: [src/structures/binaryTree.ts:144](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/binaryTree.ts#L144)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

###### Returns

`void`

##### remove()

```ts
remove(value): T | undefined;
```

Defined in: [src/structures/binaryTree.ts:200](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/binaryTree.ts#L200)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

###### Returns

`T` | `undefined`

##### find()

```ts
find(value): boolean;
```

Defined in: [src/structures/binaryTree.ts:398](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/binaryTree.ts#L398)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

###### Returns

`boolean`

##### dump()

```ts
dump(
   currentNode, 
   left, 
   spacing): void;
```

Defined in: [src/structures/binaryTree.ts:408](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/binaryTree.ts#L408)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `currentNode` | [`BinaryNode`](../interfaces.md#binarynode)<`T`> | `null` | `...` |
| `left` | `boolean` | `null` | `null` |
| `spacing` | `string` | `...` |

###### Returns

`void`
