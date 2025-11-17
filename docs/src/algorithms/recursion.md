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

Defined in: [src/algorithms/recursion.ts:17](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/algorithms/recursion.ts#L17)

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
