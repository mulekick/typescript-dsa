[**typescript-dsa**](../../README.md)

***

[typescript-dsa](../../README.md) / src/algorithms/combinatorics

# src/algorithms/combinatorics

Combinatorics algorithms.

## Table of contents

* [Remarks](#remarks)
* [Functions](#functions)

## Remarks

* Try to design a backpack optimization algorithm where each iteam has a volume and a value ?
* Try to design a coin change algorithm where each coin quantity is limited ?

## Functions

### combine()

```ts
function combine<T>(
   combination, 
   combinations, 
   set, 
   desired, 
   current?): T[][];
```

Defined in: [src/algorithms/combinatorics.ts:17](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/algorithms/combinatorics.ts#L17)

Find unique combinations.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `combination` | `T`\[] |
| `combinations` | `T`\[]\[] |
| `set` | `T`\[] |
| `desired` | `number` |
| `current?` | `number` |

#### Returns

`T`\[]\[]

#### Remarks

* Use a backtracking algorithm to find all possible unique combinations of N elements from a set
* Of course, if desired combination length N equals set length, the entire set will be returned.

***

### coinChange()

```ts
function coinChange(coins, value): number[];
```

Defined in: [src/algorithms/combinatorics.ts:57](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/algorithms/combinatorics.ts#L57)

Coin change problem.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `coins` | `number`\[] |
| `value` | `number` |

#### Returns

`number`\[]

#### Remarks

* Use a backtracking algorithm to solve the coin change problem.
* This function can be made generic as long as there is a way to sum the values of the elements.
