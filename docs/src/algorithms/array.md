[**typescript-dsa**](../../README.md)

***

[typescript-dsa](../../README.md) / src/algorithms/array

# src/algorithms/array

Array search and sort algorithms.

## Table of contents

* [1. Search algorithms](#1-search-algorithms)
* [2. Sort algorithms](#2-sort-algorithms)
* [Other](#other)

## 1. Search algorithms

* Search algorithms for arrays.

### linearSearch()

```ts
function linearSearch(haystack, needle): boolean;
```

Defined in: [src/algorithms/array.ts:35](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/algorithms/array.ts#L35)

Linear search.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `haystack` | `number`\[] |
| `needle` | `number` |

#### Returns

`boolean`

#### Remarks

* Time complexity O(n)

***

### binarySearch()

```ts
function binarySearch(haystack, needle): boolean;
```

Defined in: [src/algorithms/array.ts:53](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/algorithms/array.ts#L53)

Binary search.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `haystack` | `number`\[] |
| `needle` | `number` |

#### Returns

`boolean`

#### Remarks

* Time complexity O(log n)
* It is assessed that haystack is sorted

***

### twoCrystalBalls()

```ts
function twoCrystalBalls(breaks): number;
```

Defined in: [src/algorithms/array.ts:88](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/algorithms/array.ts#L88)

Two crystal balls search.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `breaks` | `boolean`\[] |

#### Returns

`number`

#### Remarks

* Time complexity O(sqrt(n))
* It is assessed that breaks is sorted

## 2. Sort algorithms

* Sort algorithms for arrays.

### bubbleSort()

```ts
function bubbleSort(a): number[];
```

Defined in: [src/algorithms/array.ts:123](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/algorithms/array.ts#L123)

Bubble sort.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `number`\[] |

#### Returns

`number`\[]

#### Remarks

* Time complexity O(n²)

***

### weakSortSubarray()

```ts
function weakSortSubarray(
   arr, 
   start, 
   end): number;
```

Defined in: [src/algorithms/array.ts:148](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/algorithms/array.ts#L148)

Perform weak sorting, mutate array, return final pivot index.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `arr` | `number`\[] |
| `start` | `number` |
| `end` | `number` |

#### Returns

`number`

#### Remarks

* Time complexity ?

***

### weakSort()

```ts
function weakSort(
   arr, 
   start, 
   end): number[];
```

Defined in: [src/algorithms/array.ts:184](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/algorithms/array.ts#L184)

Weak sort array recursively.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `arr` | `number`\[] |
| `start` | `number` |
| `end` | `number` |

#### Returns

`number`\[]

#### Remarks

* Time complexity ?

***

### quickSort()

```ts
function quickSort(arr): number[];
```

Defined in: [src/algorithms/array.ts:221](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/algorithms/array.ts#L221)

Quick sort.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `arr` | `number`\[] |

#### Returns

`number`\[]

#### Remarks

* Time complexity O(n \* log(n))
* Weak sort array from 0 to array length

## Other

### sampleLinearfunction()

```ts
function sampleLinearfunction(i): void;
```

Defined in: [src/algorithms/array.ts:16](https://github.com/mulekick/typescript-dsa/blob/ca672e3f99dd25a6fa7a36991d6331ca8511e879/src/algorithms/array.ts#L16)

A function with a linear time complexity.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `string` |

#### Returns

`void`
