[**typescript-dsa**](../../README.md)

***

[typescript-dsa](../../README.md) / src/algorithms/recursion

# src/algorithms/recursion

Recursion algorithms.

## Functions

### mazeSolver()

```ts
function mazeSolver(
   maze, 
   wall, 
   start, 
   exit): coords[];
```

Defined in: [src/algorithms/recursion.ts:17](https://github.com/mulekick/typescript-dsa/blob/2372cd3c2425d5aeb4fa57d3f75ec111e98c4e99/src/algorithms/recursion.ts#L17)

Find the path from entrance to exit in a maze.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `maze` | `string`\[] |
| `wall` | `string` |
| `start` | [`coords`](../interfaces.md#coords) |
| `exit` | `string` |

#### Returns

[`coords`](../interfaces.md#coords)\[]

#### Remarks

* Use a dynamic programming trick to progress from O(n) to O(1) AT EACH RECURSIVE CALL.
