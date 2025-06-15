// import types
import type {BinaryNode} from "../interfaces.ts";

const

    // ===== TREE COMPARISON =====

    // compare binary trees using DFS O(n)
    // trees must be identical in shape and values ...
    compareBinaryTrees = (tree1: BinaryNode<number>, tree2: BinaryNode<number>): boolean => {
        // node visit
        const visit = (current1: BinaryNode<number> | null, current2: BinaryNode<number> | null): boolean => {

            // 1. BASE CASE
            // node missing from both trees
            if (current1 === null && current2 === null)
                return true;
            // node missing from one tree
            else if (current1 === null || current2 === null)
                return false;
            // nodes values are different
            else if (current1.value !== current2.value)
                return false;

            // 2. PRE
            // ...

            // 3. RECURSION
            // visit left and right child nodes
            const result = visit(current1.left, current2.left) && visit(current1.right, current2.right);

            // 4. POST
            // ...

            // 5. RETURN
            // return comparison result
            return result;
        };

        // start recursion from root node
        return visit(tree1, tree2);
    };

    // other tree algoritms are in the implementation ...

// export
export {compareBinaryTrees};