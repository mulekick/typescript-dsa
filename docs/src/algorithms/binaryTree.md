[**typescript-dsa**](../../README.md)

***

[typescript-dsa](../../README.md) / src/algorithms/binaryTree

# src/algorithms/binaryTree

Binary tree comparison function.

## Functions

### compareBinaryTrees()

```ts
function compareBinaryTrees(tree1, tree2): boolean;
```

Defined in: [src/algorithms/binaryTree.ts:20](https://github.com/mulekick/typescript-dsa/blob/9917118016564107da72ce9995b912d74c206684/src/algorithms/binaryTree.ts#L20)

Compare binary trees using DFS.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tree1` | [`BinaryNode`](../interfaces.md#binarynode)<`number`> |
| `tree2` | [`BinaryNode`](../interfaces.md#binarynode)<`number`> |

#### Returns

`boolean`

#### Remarks

* Time complexity O(n)
* Returns true if both trees are identical in shape and values, false otherwise.
* The other tree algoritms are in the implementation.
