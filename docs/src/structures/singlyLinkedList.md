[**typescript-dsa**](../../README.md)

***

[typescript-dsa](../../README.md) / src/structures/singlyLinkedList

# src/structures/singlyLinkedList

Singly linked list data structure.

## Classes

### SinglyLinkedList

Defined in: [src/structures/singlyLinkedList.ts:21](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L21)

Singly linked list implementation over generic type.

#### Remarks

* Lists are node based structures and are completely generic (no limitation on node values size).

#### Extended by

* [`Queue`](#queue)
* [`Stack`](#stack)

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | Data type stored in list nodes. |

#### Constructors

##### Constructor

```ts
new SinglyLinkedList<T>(m): SinglyLinkedList<T>;
```

Defined in: [src/structures/singlyLinkedList.ts:32](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `m` | [`matcher`](../interfaces.md#matcher)<`T`> |

###### Returns

[`SinglyLinkedList`](#singlylinkedlist)<`T`>

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="length"></a> `length` | `public` | `number` | [src/structures/singlyLinkedList.ts:23](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L23) |
| <a id="match"></a> `match` | `public` | [`matcher`](../interfaces.md#matcher)<`T`> | [src/structures/singlyLinkedList.ts:29](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L29) |

#### Methods

##### prepend()

```ts
prepend(item): void;
```

Defined in: [src/structures/singlyLinkedList.ts:48](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L48)

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

Defined in: [src/structures/singlyLinkedList.ts:68](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L68)

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

Defined in: [src/structures/singlyLinkedList.ts:89](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L89)

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

Defined in: [src/structures/singlyLinkedList.ts:128](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L128)

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

Defined in: [src/structures/singlyLinkedList.ts:177](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L177)

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

Defined in: [src/structures/singlyLinkedList.ts:198](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L198)

###### Returns

`void`

##### get()

```ts
get(idx): T | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:231](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L231)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

`T` | `undefined`

***

### Queue

Defined in: [src/structures/singlyLinkedList.ts:245](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L245)

Singly linked list implementation over generic type.

#### Remarks

* Lists are node based structures and are completely generic (no limitation on node values size).

#### Extends

* [`SinglyLinkedList`](#singlylinkedlist)<`T`>

#### Extended by

* [`StringQueue`](#stringqueue)

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | Data type stored in list nodes. |

#### Constructors

##### Constructor

```ts
new Queue<T>(m): Queue<T>;
```

Defined in: [src/structures/singlyLinkedList.ts:32](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `m` | [`matcher`](../interfaces.md#matcher)<`T`> |

###### Returns

[`Queue`](#queue)<`T`>

###### Inherited from

[`SinglyLinkedList`](#singlylinkedlist).[`constructor`](#constructor)

#### Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="length-1"></a> `length` | `public` | `number` | [`SinglyLinkedList`](#singlylinkedlist).[`length`](#length) | [src/structures/singlyLinkedList.ts:23](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L23) |
| <a id="match-1"></a> `match` | `public` | [`matcher`](../interfaces.md#matcher)<`T`> | [`SinglyLinkedList`](#singlylinkedlist).[`match`](#match) | [src/structures/singlyLinkedList.ts:29](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L29) |

#### Methods

##### prepend()

```ts
prepend(item): void;
```

Defined in: [src/structures/singlyLinkedList.ts:48](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`void`

###### Inherited from

[`SinglyLinkedList`](#singlylinkedlist).[`prepend`](#prepend)

##### append()

```ts
append(item): void;
```

Defined in: [src/structures/singlyLinkedList.ts:68](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`void`

###### Inherited from

[`SinglyLinkedList`](#singlylinkedlist).[`append`](#append)

##### insertAt()

```ts
insertAt(item, idx): void;
```

Defined in: [src/structures/singlyLinkedList.ts:89](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L89)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |
| `idx` | `number` |

###### Returns

`void`

###### Inherited from

[`SinglyLinkedList`](#singlylinkedlist).[`insertAt`](#insertat)

##### removeAt()

```ts
removeAt(idx): T | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:128](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L128)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

`T` | `undefined`

###### Inherited from

[`SinglyLinkedList`](#singlylinkedlist).[`removeAt`](#removeat)

##### remove()

```ts
remove(item): T | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:177](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L177)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`T` | `undefined`

###### Inherited from

[`SinglyLinkedList`](#singlylinkedlist).[`remove`](#remove)

##### flush()

```ts
flush(): void;
```

Defined in: [src/structures/singlyLinkedList.ts:198](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L198)

###### Returns

`void`

###### Inherited from

[`SinglyLinkedList`](#singlylinkedlist).[`flush`](#flush)

##### get()

```ts
get(idx): T | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:231](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L231)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

`T` | `undefined`

###### Inherited from

[`SinglyLinkedList`](#singlylinkedlist).[`get`](#get)

##### enqueue()

```ts
enqueue(data): void;
```

Defined in: [src/structures/singlyLinkedList.ts:247](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L247)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `T` |

###### Returns

`void`

##### dequeue()

```ts
dequeue(): T | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:253](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L253)

###### Returns

`T` | `undefined`

##### peek()

```ts
peek(): T | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:259](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L259)

###### Returns

`T` | `undefined`

***

### Stack

Defined in: [src/structures/singlyLinkedList.ts:265](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L265)

Singly linked list implementation over generic type.

#### Remarks

* Lists are node based structures and are completely generic (no limitation on node values size).

#### Extends

* [`SinglyLinkedList`](#singlylinkedlist)<`T`>

#### Extended by

* [`StringStack`](#stringstack)

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | Data type stored in list nodes. |

#### Constructors

##### Constructor

```ts
new Stack<T>(m): Stack<T>;
```

Defined in: [src/structures/singlyLinkedList.ts:32](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `m` | [`matcher`](../interfaces.md#matcher)<`T`> |

###### Returns

[`Stack`](#stack)<`T`>

###### Inherited from

[`SinglyLinkedList`](#singlylinkedlist).[`constructor`](#constructor)

#### Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="length-2"></a> `length` | `public` | `number` | [`SinglyLinkedList`](#singlylinkedlist).[`length`](#length) | [src/structures/singlyLinkedList.ts:23](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L23) |
| <a id="match-2"></a> `match` | `public` | [`matcher`](../interfaces.md#matcher)<`T`> | [`SinglyLinkedList`](#singlylinkedlist).[`match`](#match) | [src/structures/singlyLinkedList.ts:29](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L29) |

#### Methods

##### prepend()

```ts
prepend(item): void;
```

Defined in: [src/structures/singlyLinkedList.ts:48](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`void`

###### Inherited from

[`SinglyLinkedList`](#singlylinkedlist).[`prepend`](#prepend)

##### append()

```ts
append(item): void;
```

Defined in: [src/structures/singlyLinkedList.ts:68](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`void`

###### Inherited from

[`SinglyLinkedList`](#singlylinkedlist).[`append`](#append)

##### insertAt()

```ts
insertAt(item, idx): void;
```

Defined in: [src/structures/singlyLinkedList.ts:89](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L89)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |
| `idx` | `number` |

###### Returns

`void`

###### Inherited from

[`SinglyLinkedList`](#singlylinkedlist).[`insertAt`](#insertat)

##### removeAt()

```ts
removeAt(idx): T | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:128](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L128)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

`T` | `undefined`

###### Inherited from

[`SinglyLinkedList`](#singlylinkedlist).[`removeAt`](#removeat)

##### remove()

```ts
remove(item): T | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:177](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L177)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `T` |

###### Returns

`T` | `undefined`

###### Inherited from

[`SinglyLinkedList`](#singlylinkedlist).[`remove`](#remove)

##### flush()

```ts
flush(): void;
```

Defined in: [src/structures/singlyLinkedList.ts:198](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L198)

###### Returns

`void`

###### Inherited from

[`SinglyLinkedList`](#singlylinkedlist).[`flush`](#flush)

##### get()

```ts
get(idx): T | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:231](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L231)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

`T` | `undefined`

###### Inherited from

[`SinglyLinkedList`](#singlylinkedlist).[`get`](#get)

##### push()

```ts
push(data): void;
```

Defined in: [src/structures/singlyLinkedList.ts:268](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L268)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `T` |

###### Returns

`void`

##### pop()

```ts
pop(): T | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:274](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L274)

###### Returns

`T` | `undefined`

##### peek()

```ts
peek(): T | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:280](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L280)

###### Returns

`T` | `undefined`

***

### StringQueue

Defined in: [src/structures/singlyLinkedList.ts:290](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L290)

List-based string values queue.

#### Extends

* [`Queue`](#queue)<`string`>

#### Constructors

##### Constructor

```ts
new StringQueue(): StringQueue;
```

Defined in: [src/structures/singlyLinkedList.ts:290](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L290)

###### Returns

[`StringQueue`](#stringqueue)

###### Overrides

[`Queue`](#queue).[`constructor`](#constructor-1)

#### Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="length-3"></a> `length` | `public` | `number` | [`Queue`](#queue).[`length`](#length-1) | [src/structures/singlyLinkedList.ts:23](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L23) |
| <a id="match-3"></a> `match` | `public` | [`matcher`](../interfaces.md#matcher)<`string`> | [`Queue`](#queue).[`match`](#match-1) | [src/structures/singlyLinkedList.ts:29](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L29) |

#### Methods

##### prepend()

```ts
prepend(item): void;
```

Defined in: [src/structures/singlyLinkedList.ts:48](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `string` |

###### Returns

`void`

###### Inherited from

[`Queue`](#queue).[`prepend`](#prepend-2)

##### append()

```ts
append(item): void;
```

Defined in: [src/structures/singlyLinkedList.ts:68](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `string` |

###### Returns

`void`

###### Inherited from

[`Queue`](#queue).[`append`](#append-2)

##### insertAt()

```ts
insertAt(item, idx): void;
```

Defined in: [src/structures/singlyLinkedList.ts:89](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L89)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `string` |
| `idx` | `number` |

###### Returns

`void`

###### Inherited from

[`Queue`](#queue).[`insertAt`](#insertat-2)

##### removeAt()

```ts
removeAt(idx): string | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:128](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L128)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

`string` | `undefined`

###### Inherited from

[`Queue`](#queue).[`removeAt`](#removeat-2)

##### remove()

```ts
remove(item): string | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:177](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L177)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `string` |

###### Returns

`string` | `undefined`

###### Inherited from

[`Queue`](#queue).[`remove`](#remove-2)

##### flush()

```ts
flush(): void;
```

Defined in: [src/structures/singlyLinkedList.ts:198](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L198)

###### Returns

`void`

###### Inherited from

[`Queue`](#queue).[`flush`](#flush-2)

##### get()

```ts
get(idx): string | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:231](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L231)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

`string` | `undefined`

###### Inherited from

[`Queue`](#queue).[`get`](#get-2)

##### enqueue()

```ts
enqueue(data): void;
```

Defined in: [src/structures/singlyLinkedList.ts:247](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L247)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `string` |

###### Returns

`void`

###### Inherited from

[`Queue`](#queue).[`enqueue`](#enqueue)

##### dequeue()

```ts
dequeue(): string | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:253](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L253)

###### Returns

`string` | `undefined`

###### Inherited from

[`Queue`](#queue).[`dequeue`](#dequeue)

##### peek()

```ts
peek(): string | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:259](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L259)

###### Returns

`string` | `undefined`

###### Inherited from

[`Queue`](#queue).[`peek`](#peek)

***

### StringStack

Defined in: [src/structures/singlyLinkedList.ts:296](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L296)

List-based string values stack.

#### Extends

* [`Stack`](#stack)<`string`>

#### Constructors

##### Constructor

```ts
new StringStack(): StringStack;
```

Defined in: [src/structures/singlyLinkedList.ts:296](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L296)

###### Returns

[`StringStack`](#stringstack)

###### Overrides

[`Stack`](#stack).[`constructor`](#constructor-2)

#### Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="length-4"></a> `length` | `public` | `number` | [`Stack`](#stack).[`length`](#length-2) | [src/structures/singlyLinkedList.ts:23](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L23) |
| <a id="match-4"></a> `match` | `public` | [`matcher`](../interfaces.md#matcher)<`string`> | [`Stack`](#stack).[`match`](#match-2) | [src/structures/singlyLinkedList.ts:29](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L29) |

#### Methods

##### prepend()

```ts
prepend(item): void;
```

Defined in: [src/structures/singlyLinkedList.ts:48](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L48)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `string` |

###### Returns

`void`

###### Inherited from

[`Stack`](#stack).[`prepend`](#prepend-4)

##### append()

```ts
append(item): void;
```

Defined in: [src/structures/singlyLinkedList.ts:68](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L68)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `string` |

###### Returns

`void`

###### Inherited from

[`Stack`](#stack).[`append`](#append-4)

##### insertAt()

```ts
insertAt(item, idx): void;
```

Defined in: [src/structures/singlyLinkedList.ts:89](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L89)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `string` |
| `idx` | `number` |

###### Returns

`void`

###### Inherited from

[`Stack`](#stack).[`insertAt`](#insertat-4)

##### removeAt()

```ts
removeAt(idx): string | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:128](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L128)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

`string` | `undefined`

###### Inherited from

[`Stack`](#stack).[`removeAt`](#removeat-4)

##### remove()

```ts
remove(item): string | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:177](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L177)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `string` |

###### Returns

`string` | `undefined`

###### Inherited from

[`Stack`](#stack).[`remove`](#remove-4)

##### flush()

```ts
flush(): void;
```

Defined in: [src/structures/singlyLinkedList.ts:198](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L198)

###### Returns

`void`

###### Inherited from

[`Stack`](#stack).[`flush`](#flush-4)

##### get()

```ts
get(idx): string | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:231](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L231)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `idx` | `number` |

###### Returns

`string` | `undefined`

###### Inherited from

[`Stack`](#stack).[`get`](#get-4)

##### push()

```ts
push(data): void;
```

Defined in: [src/structures/singlyLinkedList.ts:268](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L268)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `string` |

###### Returns

`void`

###### Inherited from

[`Stack`](#stack).[`push`](#push)

##### pop()

```ts
pop(): string | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:274](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L274)

###### Returns

`string` | `undefined`

###### Inherited from

[`Stack`](#stack).[`pop`](#pop)

##### peek()

```ts
peek(): string | undefined;
```

Defined in: [src/structures/singlyLinkedList.ts:280](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/structures/singlyLinkedList.ts#L280)

###### Returns

`string` | `undefined`

###### Inherited from

[`Stack`](#stack).[`peek`](#peek-2)
