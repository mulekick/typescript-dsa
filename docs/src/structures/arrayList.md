[**typescript-dsa**](../../README.md)

***

[typescript-dsa](../../README.md) / src/structures/arrayList

# src/structures/arrayList

ArrayList based data structures.

## Classes

### ArrayList

Defined in: [src/structures/arrayList.ts:19](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L19)

ArrayList implementation over generic type.

#### Extended by

- [`ObjectStack`](#objectstack)
- [`BinaryHeap`](binaryHeap.md#binaryheap)

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | Data type stored in ArrayList elements. - ArrayLists are array based structures and can't be made truly generic. |

#### Constructors

##### Constructor

```ts
new ArrayList<T>(
   f, 
   u, 
   m, 
   size, 
maxElementLength): ArrayList<T>;
```

Defined in: [src/structures/arrayList.ts:37](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L37)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `f` | [`formatter`](../interfaces.md#formatter)\<`T`\> | `undefined` |
| `u` | [`unformatter`](../interfaces.md#unformatter)\<`T`\> | `undefined` |
| `m` | [`matcher`](../interfaces.md#matcher)\<`T`\> | `undefined` |
| `size` | `number` | `1` |
| `maxElementLength` | `number` | `1` |

###### Returns

[`ArrayList`](#arraylist)\<`T`\>

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="length"></a> `length` | `public` | `number` | [src/structures/arrayList.ts:24](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L24) |
| <a id="match"></a> `match` | `public` | [`matcher`](../interfaces.md#matcher)\<`T`\> | [src/structures/arrayList.ts:34](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L34) |

#### Methods

##### append()

```ts
append(item): void;
```

Defined in: [src/structures/arrayList.ts:74](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`void`

##### prepend()

```ts
prepend(item): void;
```

Defined in: [src/structures/arrayList.ts:79](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L79)

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

Defined in: [src/structures/arrayList.ts:85](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L85)

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

Defined in: [src/structures/arrayList.ts:112](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L112)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

`T` \| `undefined`

##### remove()

```ts
remove(item): T | undefined;
```

Defined in: [src/structures/arrayList.ts:132](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L132)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`T` \| `undefined`

##### get()

```ts
get(idx): T | undefined;
```

Defined in: [src/structures/arrayList.ts:151](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L151)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

`T` \| `undefined`

##### set()

```ts
set(item, idx): void;
```

Defined in: [src/structures/arrayList.ts:161](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L161)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` \| `undefined` |
| `idx` | `number` |

###### Returns

`void`

***

### ObjectStack

Defined in: [src/structures/arrayList.ts:175](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L175)

ArrayList based object stack.

#### Extends

- [`ArrayList`](#arraylist)\<[`sampleObject`](../interfaces.md#sampleobject)\>

#### Constructors

##### Constructor

```ts
new ObjectStack(): ObjectStack;
```

Defined in: [src/structures/arrayList.ts:177](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L177)

###### Returns

[`ObjectStack`](#objectstack)

###### Overrides

[`ArrayList`](#arraylist).[`constructor`](#constructor)

#### Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="length-1"></a> `length` | `public` | `number` | [`ArrayList`](#arraylist).[`length`](#length) | [src/structures/arrayList.ts:24](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L24) |
| <a id="match-1"></a> `match` | `public` | [`matcher`](../interfaces.md#matcher)\<[`sampleObject`](../interfaces.md#sampleobject)\> | [`ArrayList`](#arraylist).[`match`](#match) | [src/structures/arrayList.ts:34](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L34) |

#### Methods

##### append()

```ts
append(item): void;
```

Defined in: [src/structures/arrayList.ts:74](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L74)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

`void`

###### Inherited from

[`ArrayList`](#arraylist).[`append`](#append)

##### prepend()

```ts
prepend(item): void;
```

Defined in: [src/structures/arrayList.ts:79](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L79)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

`void`

###### Inherited from

[`ArrayList`](#arraylist).[`prepend`](#prepend)

##### insertAt()

```ts
insertAt(item, idx): void;
```

Defined in: [src/structures/arrayList.ts:85](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L85)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`sampleObject`](../interfaces.md#sampleobject) |
| `idx` | `number` |

###### Returns

`void`

###### Inherited from

[`ArrayList`](#arraylist).[`insertAt`](#insertat)

##### removeAt()

```ts
removeAt(idx): sampleObject | undefined;
```

Defined in: [src/structures/arrayList.ts:112](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L112)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) \| `undefined`

###### Inherited from

[`ArrayList`](#arraylist).[`removeAt`](#removeat)

##### remove()

```ts
remove(item): sampleObject | undefined;
```

Defined in: [src/structures/arrayList.ts:132](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L132)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) \| `undefined`

###### Inherited from

[`ArrayList`](#arraylist).[`remove`](#remove)

##### get()

```ts
get(idx): sampleObject | undefined;
```

Defined in: [src/structures/arrayList.ts:151](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L151)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) \| `undefined`

###### Inherited from

[`ArrayList`](#arraylist).[`get`](#get)

##### set()

```ts
set(item, idx): void;
```

Defined in: [src/structures/arrayList.ts:161](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L161)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`sampleObject`](../interfaces.md#sampleobject) \| `undefined` |
| `idx` | `number` |

###### Returns

`void`

###### Inherited from

[`ArrayList`](#arraylist).[`set`](#set)

##### push()

```ts
push(o): void;
```

Defined in: [src/structures/arrayList.ts:183](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L183)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `o` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

`void`

##### pop()

```ts
pop(): sampleObject | undefined;
```

Defined in: [src/structures/arrayList.ts:188](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L188)

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) \| `undefined`

##### peek()

```ts
peek(index): sampleObject | undefined;
```

Defined in: [src/structures/arrayList.ts:194](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/arrayList.ts#L194)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) \| `undefined`
