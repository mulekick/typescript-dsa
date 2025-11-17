[**typescript-dsa**](../../README.md)

***

[typescript-dsa](../../README.md) / src/algorithms/array

# src/algorithms/array

Array search and sort algorithms.

## Functions

### sampleLinearfunction()

```ts
function sampleLinearfunction(i): void;
```

Defined in: [src/algorithms/array.ts:12](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/algorithms/array.ts#L12)

A function with a linear time complexity.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `string` |

#### Returns

`void`

***

### linearSearch()

```ts
function linearSearch(haystack, needle): boolean;
```

Defined in: [src/algorithms/array.ts:30](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/algorithms/array.ts#L30)

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

Defined in: [src/algorithms/array.ts:47](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/algorithms/array.ts#L47)

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

Defined in: [src/algorithms/array.ts:81](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/algorithms/array.ts#L81)

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

***

### bubbleSort()

```ts
function bubbleSort(a): number[];
```

Defined in: [src/algorithms/array.ts:115](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/algorithms/array.ts#L115)

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

Defined in: [src/algorithms/array.ts:139](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/algorithms/array.ts#L139)

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

Defined in: [src/algorithms/array.ts:174](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/algorithms/array.ts#L174)

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

Defined in: [src/algorithms/array.ts:210](https://github.com/mulekick/typescript-dsa/blob/53ae8c7ac202fae34c71056dbf747df1a88ed4b5/src/algorithms/array.ts#L210)

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
