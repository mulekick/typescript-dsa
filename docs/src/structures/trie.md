[**typescript-dsa**](../../README.md)

***

[typescript-dsa](../../README.md) / src/structures/trie

# src/structures/trie

Trie (retrieval tree) data structure.

## Classes

### Trie

Defined in: [src/structures/trie.ts:22](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/trie.ts#L22)

Trie implementation.

#### Type Param

Data type stored in heap elements.

#### Remarks

- Every method is O(1) since the tree height is limited by the longest word length.
- This class was not made generic since autocomplete is the only use case identified.

#### Constructors

##### Constructor

```ts
new Trie(): Trie;
```

Defined in: [src/structures/trie.ts:58](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/trie.ts#L58)

###### Returns

[`Trie`](#trie)

#### Methods

##### insert()

```ts
insert(word): void;
```

Defined in: [src/structures/trie.ts:69](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/trie.ts#L69)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `word` | `string` |

###### Returns

`void`

##### delete()

```ts
delete(word): void;
```

Defined in: [src/structures/trie.ts:124](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/trie.ts#L124)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `word` | `string` |

###### Returns

`void`

##### find()

```ts
find(pattern): string[];
```

Defined in: [src/structures/trie.ts:179](https://github.com/mulekick/typescript-dsa/blob/6d728e5f12bef4b045fc86c7d2941b670a02d8d1/src/structures/trie.ts#L179)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `pattern` | `string` |

###### Returns

`string`[]
