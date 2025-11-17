[**typescript-dsa**](../../README.md)

***

[typescript-dsa](../../README.md) / src/structures/deque

# src/structures/deque

Deque based data structures.

## Table of contents

* [Remarks](#remarks)
* [Classes](#classes)

## Remarks

* Deque is a ringbuffer based double ended queue.

## Classes

### Deque

Defined in: [src/structures/deque.ts:24](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L24)

Deque implementation over generic type.

#### Remarks

* Deques are array based structures and can't be made truly generic.

#### Extended by

* [`OtherObjectQueue`](#otherobjectqueue)
* [`DequeArray`](#dequearray)

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | Data type stored in Deque elements. |

#### Constructors

##### Constructor

```ts
new Deque<T>(
   f, 
   u, 
   m, 
   size, 
maxElementLength): Deque<T>;
```

Defined in: [src/structures/deque.ts:48](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L48)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `f` | [`formatter`](../interfaces.md#formatter)<`T`> | `undefined` |
| `u` | [`unformatter`](../interfaces.md#unformatter)<`T`> | `undefined` |
| `m` | [`matcher`](../interfaces.md#matcher)<`T`> | `undefined` |
| `size` | `number` | `1` |
| `maxElementLength` | `number` | `1` |

###### Returns

[`Deque`](#deque)<`T`>

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="length"></a> `length` | `public` | `number` | [src/structures/deque.ts:35](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L35) |
| <a id="match"></a> `match` | `public` | [`matcher`](../interfaces.md#matcher)<`T`> | [src/structures/deque.ts:45](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L45) |

#### Methods

##### flush()

```ts
flush(): void;
```

Defined in: [src/structures/deque.ts:117](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L117)

###### Returns

`void`

##### append()

```ts
append(item): void;
```

Defined in: [src/structures/deque.ts:133](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L133)

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

Defined in: [src/structures/deque.ts:136](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L136)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`void`

##### insertAt()

```ts
insertAt(item, index): void;
```

Defined in: [src/structures/deque.ts:140](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L140)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |
| `index` | `number` |

###### Returns

`void`

##### removeAt()

```ts
removeAt(index): T | undefined;
```

Defined in: [src/structures/deque.ts:197](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L197)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

###### Returns

`T` | `undefined`

##### remove()

```ts
remove(item): T | undefined;
```

Defined in: [src/structures/deque.ts:255](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L255)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`T` | `undefined`

##### get()

```ts
get(index): T | undefined;
```

Defined in: [src/structures/deque.ts:272](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L272)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

###### Returns

`T` | `undefined`

##### set()

```ts
set(index, item?): void;
```

Defined in: [src/structures/deque.ts:284](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L284)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `item?` | `T` |

###### Returns

`void`

***

### OtherObjectQueue

Defined in: [src/structures/deque.ts:299](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L299)

Deque based object queue.

#### Extends

* [`Deque`](#deque)<[`sampleObject`](../interfaces.md#sampleobject)>

#### Constructors

##### Constructor

```ts
new OtherObjectQueue(): OtherObjectQueue;
```

Defined in: [src/structures/deque.ts:301](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L301)

###### Returns

[`OtherObjectQueue`](#otherobjectqueue)

###### Overrides

[`Deque`](#deque).[`constructor`](#constructor)

#### Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="length-1"></a> `length` | `public` | `number` | [`Deque`](#deque).[`length`](#length) | [src/structures/deque.ts:35](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L35) |
| <a id="match-1"></a> `match` | `public` | [`matcher`](../interfaces.md#matcher)<[`sampleObject`](../interfaces.md#sampleobject)> | [`Deque`](#deque).[`match`](#match) | [src/structures/deque.ts:45](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L45) |

#### Methods

##### flush()

```ts
flush(): void;
```

Defined in: [src/structures/deque.ts:117](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L117)

###### Returns

`void`

###### Inherited from

[`Deque`](#deque).[`flush`](#flush)

##### append()

```ts
append(item): void;
```

Defined in: [src/structures/deque.ts:133](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L133)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

`void`

###### Inherited from

[`Deque`](#deque).[`append`](#append)

##### prepend()

```ts
prepend(item): void;
```

Defined in: [src/structures/deque.ts:136](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L136)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

`void`

###### Inherited from

[`Deque`](#deque).[`prepend`](#prepend)

##### insertAt()

```ts
insertAt(item, index): void;
```

Defined in: [src/structures/deque.ts:140](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L140)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`sampleObject`](../interfaces.md#sampleobject) |
| `index` | `number` |

###### Returns

`void`

###### Inherited from

[`Deque`](#deque).[`insertAt`](#insertat)

##### removeAt()

```ts
removeAt(index): sampleObject | undefined;
```

Defined in: [src/structures/deque.ts:197](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L197)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) | `undefined`

###### Inherited from

[`Deque`](#deque).[`removeAt`](#removeat)

##### remove()

```ts
remove(item): sampleObject | undefined;
```

Defined in: [src/structures/deque.ts:255](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L255)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) | `undefined`

###### Inherited from

[`Deque`](#deque).[`remove`](#remove)

##### get()

```ts
get(index): sampleObject | undefined;
```

Defined in: [src/structures/deque.ts:272](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L272)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) | `undefined`

###### Inherited from

[`Deque`](#deque).[`get`](#get)

##### set()

```ts
set(index, item?): void;
```

Defined in: [src/structures/deque.ts:284](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L284)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `item?` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

`void`

###### Inherited from

[`Deque`](#deque).[`set`](#set)

##### enqueue()

```ts
enqueue(o): void;
```

Defined in: [src/structures/deque.ts:307](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L307)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `o` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

`void`

##### dequeue()

```ts
dequeue(): sampleObject | undefined;
```

Defined in: [src/structures/deque.ts:312](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L312)

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) | `undefined`

##### peek()

```ts
peek(index): sampleObject | undefined;
```

Defined in: [src/structures/deque.ts:318](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L318)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) | `undefined`

***

### DequeArray

Defined in: [src/structures/deque.ts:330](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L330)

Deque based JS array-like implementation.

#### Remarks

* Maps native JS array methods to deque methods.

#### Extends

* [`Deque`](#deque)<`T`>

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Constructors

##### Constructor

```ts
new DequeArray<T>(
   f, 
   u, 
   m, 
   size, 
maxElementLength): DequeArray<T>;
```

Defined in: [src/structures/deque.ts:48](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L48)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `f` | [`formatter`](../interfaces.md#formatter)<`T`> | `undefined` |
| `u` | [`unformatter`](../interfaces.md#unformatter)<`T`> | `undefined` |
| `m` | [`matcher`](../interfaces.md#matcher)<`T`> | `undefined` |
| `size` | `number` | `1` |
| `maxElementLength` | `number` | `1` |

###### Returns

[`DequeArray`](#dequearray)<`T`>

###### Inherited from

[`Deque`](#deque).[`constructor`](#constructor)

#### Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="length-2"></a> `length` | `public` | `number` | [`Deque`](#deque).[`length`](#length) | [src/structures/deque.ts:35](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L35) |
| <a id="match-2"></a> `match` | `public` | [`matcher`](../interfaces.md#matcher)<`T`> | [`Deque`](#deque).[`match`](#match) | [src/structures/deque.ts:45](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L45) |

#### Methods

##### flush()

```ts
flush(): void;
```

Defined in: [src/structures/deque.ts:117](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L117)

###### Returns

`void`

###### Inherited from

[`Deque`](#deque).[`flush`](#flush)

##### append()

```ts
append(item): void;
```

Defined in: [src/structures/deque.ts:133](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L133)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`void`

###### Inherited from

[`Deque`](#deque).[`append`](#append)

##### prepend()

```ts
prepend(item): void;
```

Defined in: [src/structures/deque.ts:136](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L136)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`void`

###### Inherited from

[`Deque`](#deque).[`prepend`](#prepend)

##### insertAt()

```ts
insertAt(item, index): void;
```

Defined in: [src/structures/deque.ts:140](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L140)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |
| `index` | `number` |

###### Returns

`void`

###### Inherited from

[`Deque`](#deque).[`insertAt`](#insertat)

##### removeAt()

```ts
removeAt(index): T | undefined;
```

Defined in: [src/structures/deque.ts:197](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L197)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

###### Returns

`T` | `undefined`

###### Inherited from

[`Deque`](#deque).[`removeAt`](#removeat)

##### remove()

```ts
remove(item): T | undefined;
```

Defined in: [src/structures/deque.ts:255](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L255)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`T` | `undefined`

###### Inherited from

[`Deque`](#deque).[`remove`](#remove)

##### get()

```ts
get(index): T | undefined;
```

Defined in: [src/structures/deque.ts:272](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L272)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

###### Returns

`T` | `undefined`

###### Inherited from

[`Deque`](#deque).[`get`](#get)

##### set()

```ts
set(index, item?): void;
```

Defined in: [src/structures/deque.ts:284](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L284)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `item?` | `T` |

###### Returns

`void`

###### Inherited from

[`Deque`](#deque).[`set`](#set)

##### push()

```ts
push(item): void;
```

Defined in: [src/structures/deque.ts:331](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L331)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`void`

##### pop()

```ts
pop(): T | undefined;
```

Defined in: [src/structures/deque.ts:332](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L332)

###### Returns

`T` | `undefined`

##### unshift()

```ts
unshift(item): void;
```

Defined in: [src/structures/deque.ts:333](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L333)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`void`

##### shift()

```ts
shift(): T | undefined;
```

Defined in: [src/structures/deque.ts:334](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/structures/deque.ts#L334)

###### Returns

`T` | `undefined`
