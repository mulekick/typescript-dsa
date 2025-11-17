[**typescript-dsa**](../../README.md)

***

[typescript-dsa](../../README.md) / src/structures/ringBuffer

# src/structures/ringBuffer

Ringbuffer based data structures.

## Classes

### RingBuffer

Defined in: [src/structures/ringBuffer.ts:19](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/ringBuffer.ts#L19)

Ringbuffer implementation over generic type.

#### Extended by

* [`ObjectQueue`](#objectqueue)

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | Data type stored in ArrayList elements. - Ringbuffers are array based structures and can't be made truly generic. |

#### Constructors

##### Constructor

```ts
new RingBuffer<T>(
   f, 
   u, 
   m, 
   size, 
maxElementLength): RingBuffer<T>;
```

Defined in: [src/structures/ringBuffer.ts:41](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/ringBuffer.ts#L41)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `f` | [`formatter`](../interfaces.md#formatter)<`T`> | `undefined` |
| `u` | [`unformatter`](../interfaces.md#unformatter)<`T`> | `undefined` |
| `m` | [`matcher`](../interfaces.md#matcher)<`T`> | `undefined` |
| `size` | `number` | `1` |
| `maxElementLength` | `number` | `1` |

###### Returns

[`RingBuffer`](#ringbuffer)<`T`>

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="length"></a> `length` | `public` | `number` | [src/structures/ringBuffer.ts:28](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/ringBuffer.ts#L28) |
| <a id="match"></a> `match` | `public` | [`matcher`](../interfaces.md#matcher)<`T`> | [src/structures/ringBuffer.ts:38](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/ringBuffer.ts#L38) |

#### Methods

##### push()

```ts
push(item): void;
```

Defined in: [src/structures/ringBuffer.ts:98](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/ringBuffer.ts#L98)

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

Defined in: [src/structures/ringBuffer.ts:119](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/ringBuffer.ts#L119)

###### Returns

`T` | `undefined`

##### get()

```ts
get(idx): T | undefined;
```

Defined in: [src/structures/ringBuffer.ts:142](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/ringBuffer.ts#L142)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

`T` | `undefined`

***

### ObjectQueue

Defined in: [src/structures/ringBuffer.ts:157](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/ringBuffer.ts#L157)

Ringbuffer based object queue.

#### Extends

* [`RingBuffer`](#ringbuffer)<[`sampleObject`](../interfaces.md#sampleobject)>

#### Constructors

##### Constructor

```ts
new ObjectQueue(): ObjectQueue;
```

Defined in: [src/structures/ringBuffer.ts:159](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/ringBuffer.ts#L159)

###### Returns

[`ObjectQueue`](#objectqueue)

###### Overrides

[`RingBuffer`](#ringbuffer).[`constructor`](#constructor)

#### Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="length-1"></a> `length` | `public` | `number` | [`RingBuffer`](#ringbuffer).[`length`](#length) | [src/structures/ringBuffer.ts:28](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/ringBuffer.ts#L28) |
| <a id="match-1"></a> `match` | `public` | [`matcher`](../interfaces.md#matcher)<[`sampleObject`](../interfaces.md#sampleobject)> | [`RingBuffer`](#ringbuffer).[`match`](#match) | [src/structures/ringBuffer.ts:38](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/ringBuffer.ts#L38) |

#### Methods

##### push()

```ts
push(item): void;
```

Defined in: [src/structures/ringBuffer.ts:98](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/ringBuffer.ts#L98)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`sampleObject`](../interfaces.md#sampleobject) |

###### Returns

`void`

###### Inherited from

[`RingBuffer`](#ringbuffer).[`push`](#push)

##### shift()

```ts
shift(): sampleObject | undefined;
```

Defined in: [src/structures/ringBuffer.ts:119](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/ringBuffer.ts#L119)

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) | `undefined`

###### Inherited from

[`RingBuffer`](#ringbuffer).[`shift`](#shift)

##### get()

```ts
get(idx): sampleObject | undefined;
```

Defined in: [src/structures/ringBuffer.ts:142](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/ringBuffer.ts#L142)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) | `undefined`

###### Inherited from

[`RingBuffer`](#ringbuffer).[`get`](#get)

##### enqueue()

```ts
enqueue(o): void;
```

Defined in: [src/structures/ringBuffer.ts:165](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/ringBuffer.ts#L165)

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

Defined in: [src/structures/ringBuffer.ts:170](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/ringBuffer.ts#L170)

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) | `undefined`

##### peek()

```ts
peek(index): sampleObject | undefined;
```

Defined in: [src/structures/ringBuffer.ts:176](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/structures/ringBuffer.ts#L176)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

###### Returns

[`sampleObject`](../interfaces.md#sampleobject) | `undefined`
