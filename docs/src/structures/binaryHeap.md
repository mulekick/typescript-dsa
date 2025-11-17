[**typescript-dsa**](../../README.md)

***

[typescript-dsa](../../README.md) / src/structures/binaryHeap

# src/structures/binaryHeap

Heap based data structures.

## Classes

### BinaryHeap

Defined in: [src/structures/binaryHeap.ts:22](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L22)

Binary heap implementation over generic type.

#### Remarks

* Heaps rely on arraylists, thus the T type has to have a max size.

#### Extends

* [`ArrayList`](arrayList.md#arraylist)<`T`>

#### Extended by

* [`MinHeap`](#minheap)
* [`MaxHeap`](#maxheap)

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | Data type stored in heap elements. |

#### Constructors

##### Constructor

```ts
new BinaryHeap<T>(
   f, 
   u, 
   m, 
   c, 
   maxElementLength, 
isMaxHeap): BinaryHeap<T>;
```

Defined in: [src/structures/binaryHeap.ts:30](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L30)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `f` | [`formatter`](../interfaces.md#formatter)<`T`> | `undefined` |
| `u` | [`unformatter`](../interfaces.md#unformatter)<`T`> | `undefined` |
| `m` | [`matcher`](../interfaces.md#matcher)<`T`> | `undefined` |
| `c` | [`comparator`](../interfaces.md#comparator)<`T`> | `undefined` |
| `maxElementLength` | `number` | `1` |
| `isMaxHeap` | `boolean` | `false` |

###### Returns

[`BinaryHeap`](#binaryheap)<`T`>

###### Overrides

[`ArrayList`](arrayList.md#arraylist).[`constructor`](arrayList.md#constructor)

#### Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="length"></a> `length` | `public` | `number` | [`ArrayList`](arrayList.md#arraylist).[`length`](arrayList.md#length) | [src/structures/arrayList.ts:24](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L24) |
| <a id="match"></a> `match` | `public` | [`matcher`](../interfaces.md#matcher)<`T`> | [`ArrayList`](arrayList.md#arraylist).[`match`](arrayList.md#match) | [src/structures/arrayList.ts:34](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L34) |

#### Methods

##### append()

```ts
append(item): void;
```

Defined in: [src/structures/arrayList.ts:74](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`void`

###### Inherited from

[`ArrayList`](arrayList.md#arraylist).[`append`](arrayList.md#append)

##### prepend()

```ts
prepend(item): void;
```

Defined in: [src/structures/arrayList.ts:79](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L79)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`void`

###### Inherited from

[`ArrayList`](arrayList.md#arraylist).[`prepend`](arrayList.md#prepend)

##### insertAt()

```ts
insertAt(item, idx): void;
```

Defined in: [src/structures/arrayList.ts:85](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L85)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |
| `idx` | `number` |

###### Returns

`void`

###### Inherited from

[`ArrayList`](arrayList.md#arraylist).[`insertAt`](arrayList.md#insertat)

##### removeAt()

```ts
removeAt(idx): T | undefined;
```

Defined in: [src/structures/arrayList.ts:112](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L112)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

`T` | `undefined`

###### Inherited from

[`ArrayList`](arrayList.md#arraylist).[`removeAt`](arrayList.md#removeat)

##### remove()

```ts
remove(item): T | undefined;
```

Defined in: [src/structures/arrayList.ts:132](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L132)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`T` | `undefined`

###### Inherited from

[`ArrayList`](arrayList.md#arraylist).[`remove`](arrayList.md#remove)

##### get()

```ts
get(idx): T | undefined;
```

Defined in: [src/structures/arrayList.ts:151](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L151)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

`T` | `undefined`

###### Inherited from

[`ArrayList`](arrayList.md#arraylist).[`get`](arrayList.md#get)

##### set()

```ts
set(item, idx): void;
```

Defined in: [src/structures/arrayList.ts:161](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L161)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` | `undefined` |
| `idx` | `number` |

###### Returns

`void`

###### Inherited from

[`ArrayList`](arrayList.md#arraylist).[`set`](arrayList.md#set)

##### verifyHeap()

```ts
verifyHeap(currentNode): boolean;
```

Defined in: [src/structures/binaryHeap.ts:142](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L142)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `currentNode` | `number` | `0` |

###### Returns

`boolean`

##### insert()

```ts
insert(value): void;
```

Defined in: [src/structures/binaryHeap.ts:163](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L163)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

###### Returns

`void`

##### delete()

```ts
delete(): T | undefined;
```

Defined in: [src/structures/binaryHeap.ts:179](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L179)

###### Returns

`T` | `undefined`

##### find()

```ts
find(value): number | undefined;
```

Defined in: [src/structures/binaryHeap.ts:201](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L201)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

###### Returns

`number` | `undefined`

##### update()

```ts
update(oldValue, newValue): void;
```

Defined in: [src/structures/binaryHeap.ts:219](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L219)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `oldValue` | `T` |
| `newValue` | `T` |

###### Returns

`void`

***

### MinHeap

Defined in: [src/structures/binaryHeap.ts:238](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L238)

Min heap implementation.

#### Extends

* [`BinaryHeap`](#binaryheap)<[`sampleObject`](../interfaces.md#sampleobject)>

#### Constructors

##### Constructor

```ts
new MinHeap(): MinHeap;
```

Defined in: [src/structures/binaryHeap.ts:238](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L238)

###### Returns

[`MinHeap`](#minheap)

###### Overrides

[`BinaryHeap`](#binaryheap).[`constructor`](#constructor)

#### Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="length-1"></a> `length` | `public` | `number` | [`BinaryHeap`](#binaryheap).[`length`](#length) | [src/structures/arrayList.ts:24](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L24) |
| <a id="match-1"></a> `match` | `public` | [`matcher`](../interfaces.md#matcher)<[`sampleObject`](../interfaces.md#sampleobject)> | [`BinaryHeap`](#binaryheap).[`match`](#match) | [src/structures/arrayList.ts:34](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L34) |

#### Methods

##### append()

```ts
append(item): void;
```

Defined in: [src/structures/arrayList.ts:74](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

`void`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`append`](#append)

##### prepend()

```ts
prepend(item): void;
```

Defined in: [src/structures/arrayList.ts:79](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L79)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

`void`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`prepend`](#prepend)

##### insertAt()

```ts
insertAt(item, idx): void;
```

Defined in: [src/structures/arrayList.ts:85](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L85)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`sampleObject`](../interfaces.md#sampleobject) |
| `idx` | `number` |

###### Returns

`void`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`insertAt`](#insertat)

##### removeAt()

```ts
removeAt(idx): sampleObject | undefined;
```

Defined in: [src/structures/arrayList.ts:112](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L112)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) | `undefined`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`removeAt`](#removeat)

##### remove()

```ts
remove(item): sampleObject | undefined;
```

Defined in: [src/structures/arrayList.ts:132](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L132)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) | `undefined`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`remove`](#remove)

##### get()

```ts
get(idx): sampleObject | undefined;
```

Defined in: [src/structures/arrayList.ts:151](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L151)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) | `undefined`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`get`](#get)

##### set()

```ts
set(item, idx): void;
```

Defined in: [src/structures/arrayList.ts:161](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L161)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`sampleObject`](../interfaces.md#sampleobject) | `undefined` |
| `idx` | `number` |

###### Returns

`void`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`set`](#set)

##### verifyHeap()

```ts
verifyHeap(currentNode): boolean;
```

Defined in: [src/structures/binaryHeap.ts:142](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L142)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `currentNode` | `number` | `0` |

###### Returns

`boolean`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`verifyHeap`](#verifyheap)

##### insert()

```ts
insert(value): void;
```

Defined in: [src/structures/binaryHeap.ts:163](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L163)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

`void`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`insert`](#insert)

##### delete()

```ts
delete(): sampleObject | undefined;
```

Defined in: [src/structures/binaryHeap.ts:179](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L179)

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) | `undefined`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`delete`](#delete)

##### find()

```ts
find(value): number | undefined;
```

Defined in: [src/structures/binaryHeap.ts:201](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L201)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

`number` | `undefined`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`find`](#find)

##### update()

```ts
update(oldValue, newValue): void;
```

Defined in: [src/structures/binaryHeap.ts:219](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L219)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `oldValue` | [`sampleObject`](../interfaces.md#sampleobject) |
| `newValue` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

`void`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`update`](#update)

***

### MaxHeap

Defined in: [src/structures/binaryHeap.ts:244](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L244)

Max heap implementation.

#### Extends

* [`BinaryHeap`](#binaryheap)<[`sampleObject`](../interfaces.md#sampleobject)>

#### Constructors

##### Constructor

```ts
new MaxHeap(): MaxHeap;
```

Defined in: [src/structures/binaryHeap.ts:244](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L244)

###### Returns

[`MaxHeap`](#maxheap)

###### Overrides

[`BinaryHeap`](#binaryheap).[`constructor`](#constructor)

#### Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="length-2"></a> `length` | `public` | `number` | [`BinaryHeap`](#binaryheap).[`length`](#length) | [src/structures/arrayList.ts:24](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L24) |
| <a id="match-2"></a> `match` | `public` | [`matcher`](../interfaces.md#matcher)<[`sampleObject`](../interfaces.md#sampleobject)> | [`BinaryHeap`](#binaryheap).[`match`](#match) | [src/structures/arrayList.ts:34](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L34) |

#### Methods

##### append()

```ts
append(item): void;
```

Defined in: [src/structures/arrayList.ts:74](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

`void`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`append`](#append)

##### prepend()

```ts
prepend(item): void;
```

Defined in: [src/structures/arrayList.ts:79](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L79)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

`void`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`prepend`](#prepend)

##### insertAt()

```ts
insertAt(item, idx): void;
```

Defined in: [src/structures/arrayList.ts:85](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L85)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`sampleObject`](../interfaces.md#sampleobject) |
| `idx` | `number` |

###### Returns

`void`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`insertAt`](#insertat)

##### removeAt()

```ts
removeAt(idx): sampleObject | undefined;
```

Defined in: [src/structures/arrayList.ts:112](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L112)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) | `undefined`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`removeAt`](#removeat)

##### remove()

```ts
remove(item): sampleObject | undefined;
```

Defined in: [src/structures/arrayList.ts:132](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L132)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) | `undefined`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`remove`](#remove)

##### get()

```ts
get(idx): sampleObject | undefined;
```

Defined in: [src/structures/arrayList.ts:151](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L151)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) | `undefined`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`get`](#get)

##### set()

```ts
set(item, idx): void;
```

Defined in: [src/structures/arrayList.ts:161](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/arrayList.ts#L161)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`sampleObject`](../interfaces.md#sampleobject) | `undefined` |
| `idx` | `number` |

###### Returns

`void`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`set`](#set)

##### verifyHeap()

```ts
verifyHeap(currentNode): boolean;
```

Defined in: [src/structures/binaryHeap.ts:142](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L142)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `currentNode` | `number` | `0` |

###### Returns

`boolean`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`verifyHeap`](#verifyheap)

##### insert()

```ts
insert(value): void;
```

Defined in: [src/structures/binaryHeap.ts:163](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L163)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

`void`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`insert`](#insert)

##### delete()

```ts
delete(): sampleObject | undefined;
```

Defined in: [src/structures/binaryHeap.ts:179](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L179)

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) | `undefined`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`delete`](#delete)

##### find()

```ts
find(value): number | undefined;
```

Defined in: [src/structures/binaryHeap.ts:201](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L201)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

`number` | `undefined`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`find`](#find)

##### update()

```ts
update(oldValue, newValue): void;
```

Defined in: [src/structures/binaryHeap.ts:219](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/binaryHeap.ts#L219)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `oldValue` | [`sampleObject`](../interfaces.md#sampleobject) |
| `newValue` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

`void`

###### Inherited from

[`BinaryHeap`](#binaryheap).[`update`](#update)
