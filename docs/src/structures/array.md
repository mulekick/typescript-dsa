[**typescript-dsa**](../../README.md)

***

[typescript-dsa](../../README.md) / src/structures/array

# src/structures/array

In-memory array implementation.

## Classes

### BarebonesArray

Defined in: [src/structures/array.ts:13](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/array.ts#L13)

Actual implementation of an array as a javascript class.

#### Constructors

##### Constructor

```ts
new BarebonesArray(arrayLength, bytesPerElement): BarebonesArray;
```

Defined in: [src/structures/array.ts:21](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/array.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `arrayLength` | `number` |
| `bytesPerElement` | `number` |

###### Returns

[`BarebonesArray`](#barebonesarray)

#### Accessors

##### length

###### Get Signature

```ts
get length(): number;
```

Defined in: [src/structures/array.ts:42](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/array.ts#L42)

###### Returns

`number`

#### Methods

##### read()

```ts
read(i, x): Buffer;
```

Defined in: [src/structures/array.ts:33](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/array.ts#L33)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |
| `x` | `number` |

###### Returns

`Buffer`

##### write()

```ts
write(w, i): number;
```

Defined in: [src/structures/array.ts:36](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/array.ts#L36)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `w` | `Buffer` |
| `i` | `number` |

###### Returns

`number`

##### dump()

```ts
dump(): string;
```

Defined in: [src/structures/array.ts:39](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/array.ts#L39)

###### Returns

`string`
