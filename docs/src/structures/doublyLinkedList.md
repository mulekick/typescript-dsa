[**typescript-dsa**](../../README.md)

***

[typescript-dsa](../../README.md) / src/structures/doublyLinkedList

# src/structures/doublyLinkedList

Doubly linked list data structure.

## Classes

### DoublyLinkedList

Defined in: [src/structures/doublyLinkedList.ts:18](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/structures/doublyLinkedList.ts#L18)

Doubly linked list implementation over generic type.

#### Remarks

* Lists are node based structures and are completely generic (no limitation on node values size).

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | Data type stored in list nodes. |

#### Constructors

##### Constructor

```ts
new DoublyLinkedList<T>(m): DoublyLinkedList<T>;
```

Defined in: [src/structures/doublyLinkedList.ts:29](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/structures/doublyLinkedList.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `m` | [`matcher`](../interfaces.md#matcher)<`T`> |

###### Returns

[`DoublyLinkedList`](#doublylinkedlist)<`T`>

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="length"></a> `length` | `public` | `number` | [src/structures/doublyLinkedList.ts:24](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/structures/doublyLinkedList.ts#L24) |
| <a id="match"></a> `match` | `public` | [`matcher`](../interfaces.md#matcher)<`T`> | [src/structures/doublyLinkedList.ts:26](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/structures/doublyLinkedList.ts#L26) |

#### Methods

##### prepend()

```ts
prepend(item): void;
```

Defined in: [src/structures/doublyLinkedList.ts:45](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/structures/doublyLinkedList.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`void`

##### append()

```ts
append(item): void;
```

Defined in: [src/structures/doublyLinkedList.ts:69](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/structures/doublyLinkedList.ts#L69)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`void`

##### insertAt()

```ts
insertAt(item, idx): void;
```

Defined in: [src/structures/doublyLinkedList.ts:93](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/structures/doublyLinkedList.ts#L93)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |
| `idx` | `number` |

###### Returns

`void`

##### removeAt()

```ts
removeAt(idx): T | undefined;
```

Defined in: [src/structures/doublyLinkedList.ts:141](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/structures/doublyLinkedList.ts#L141)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

`T` | `undefined`

##### remove()

```ts
remove(item): T | undefined;
```

Defined in: [src/structures/doublyLinkedList.ts:188](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/structures/doublyLinkedList.ts#L188)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`T` | `undefined`

##### flush()

```ts
flush(): void;
```

Defined in: [src/structures/doublyLinkedList.ts:209](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/structures/doublyLinkedList.ts#L209)

###### Returns

`void`

##### get()

```ts
get(idx): T | undefined;
```

Defined in: [src/structures/doublyLinkedList.ts:242](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/structures/doublyLinkedList.ts#L242)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

`T` | `undefined`
