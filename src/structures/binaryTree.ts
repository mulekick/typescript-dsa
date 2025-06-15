// import primitives
import console from "node:console";

// import modules
import {Queue} from "./singlyLinkedList.ts";

// import types
import type {BinaryNode, comparatorSignature, visitNodeSignature, depthTraversalType, matcherSignature} from "../interfaces.ts";

export class BinarySearchTree<T> {

    // declare internal tree structure
    private tree: BinaryNode<T> | null;
    // declare internal node matcher function
    public match: matcherSignature<T>;
    // declare internal node comparator function
    private compare: comparatorSignature<T>;

    // do not pass a default value for matchers and comparators since it would "abstract" the current use case ...
    constructor(m: matcherSignature<T>, c: comparatorSignature<T>) {
        // initialize empty tree
        this.tree = null;
        // initialize matcher function
        this.match = m;
        // initialize comparator function
        this.compare = c;
    }

    // ==== TREE MANAGEMENT ======
    private isLessThanOrEqual(a: T, b: T): boolean {return [ -1, 0 ].includes(this.compare(a, b));}
    private isGreaterThan(a: T, b: T): boolean {return this.compare(a, b) === 1;}

    // ===== TREE TRAVERSALS =====

    // depth first traversal O(n) - visit each node and run a function on the node
    public traverseDepth(visitNode: visitNodeSignature<T>, type: depthTraversalType): void {
        // return if tree is empty
        if (this.tree === null)
            return;

        // recursive traversal function (depth first)
        const traverse = (node: BinaryNode<T> | null): void => {
            // 1. BASE CASE
            // current node is null, return
            if (node === null)
                return;

            // 2. PRE
            if (type === `PRE`)
                visitNode(node);

            // 3. RECURSION
            // process left child node
            traverse(node.left);

            if (type === `IN`)
                visitNode(node);

            // process right child node
            traverse(node.right);

            // 4. POST
            if (type === `POST`)
                visitNode(node);

            // 5. RETURN
            // ...
        };

        // call recursive traversal function on root node
        traverse(this.tree);
    }

    // breadth first traversal O(n) - visit each node and run a function on the node
    public traverseBreadth(visitNode: visitNodeSignature<T>): void {
        // return if tree is empty
        if (this.tree === null)
            return;
        // init traversal queue
        const traversalQueue = new Queue(this.match) as unknown as Queue<BinaryNode<T>>;
        // enqueue root node
        traversalQueue.enqueue(this.tree);
        // set current node = dequeue node
        let currentNode = traversalQueue.dequeue();
        // while node is not null
        while (typeof currentNode !== `undefined`) {
            // run node visit function
            visitNode(currentNode);
            // enqueue left child node if available
            if (currentNode.left !== null)
                traversalQueue.enqueue(currentNode.left);
            // enqueue right child node if available
            if (currentNode.right !== null)
                traversalQueue.enqueue(currentNode.right);
            // set current node = dequeue node
            currentNode = traversalQueue.dequeue();
        }
    }

    // verify tree integrity using depth first traversal O(n)
    public verifyTree(currentNode: BinaryNode<T> | null = this.tree): boolean {
        // return true if node is null
        if (currentNode === null)
            return true;
        // node left child value is greater than node value
        if (currentNode.left !== null && this.isGreaterThan(currentNode.left.value, currentNode.value))
            return false;
        // node right child value is smaller than or equal to node value
        if (currentNode.right !== null && this.isLessThanOrEqual(currentNode.right.value, currentNode.value))
            return false;
        // validate child nodes recursively ...
        return this.verifyTree(currentNode.left) && this.verifyTree(currentNode.right);
    }

    // ====== APPEND NODES =======

    // insert new node O(log n)
    public insert(value: T): void {
        // create new node from value
        const newNode = {value, left: null, right: null, parent: null} as BinaryNode<T>;

        // if root node is null
        if (this.tree === null) {
            // insert new node as root node
            this.tree = newNode;
            // return
            return;
        }

        // set current node = root node
        let currentNode = this.tree;

        // while current node is not null
        while (currentNode !== null) {
            // if value <= current node value
            if (this.isLessThanOrEqual(value, currentNode.value)) {
                // if current node left child is null
                if (currentNode.left === null) {
                    // set new node parent = current node
                    newNode.parent = currentNode;
                    // insert new node as current node left child
                    currentNode.left = newNode;
                    // return
                    return;
                }
                // else, set current node = current node left child
                currentNode = currentNode.left;
            // if value > current node value
            } else if (this.isGreaterThan(value, currentNode.value)) {
                // if current node right child is null
                if (currentNode.right === null) {
                    // set new node parent = current node
                    newNode.parent = currentNode;
                    // insert new node as current node right child
                    currentNode.right = newNode;
                    // return
                    return;
                }
                // else, set current node = current node right child
                currentNode = currentNode.right;
            // else, throw
            } else {
                throw new Error(`node value comparison errored`);
            }
        // end while
        }
    }

    // ====== REMOVE NODES =======

    // remove node if found O(log n)
    public remove(value: T): T | undefined {
        // find node to remove
        const removeNode = this.findNodeByValue(value);

        // if node to remove is undefined
        if (typeof removeNode === `undefined`)
            // return
            return undefined;

        // save return value
        const returnValue = removeNode.value;

        // if node to remove left or right child are null
        if (removeNode.left === null || removeNode.right === null) {

            // if node to remove is root node
            if (removeNode.parent === null) {
                // update root node
                this.tree = removeNode.left || removeNode.right;
                // if the last node wasn't removed
                if (this.tree !== null)
                    // remove parent reference
                    this.tree.parent = null;
                // return
                return returnValue;
            }

            // if node to remove is left child (value <= parent node value)
            if (this.isLessThanOrEqual(removeNode.value, removeNode.parent.value)) {

                // if node to remove left and right child are null
                if (removeNode.left === null && removeNode.right === null) {
                    // parent node left child = null
                    removeNode.parent.left = null;
                // else if node to remove right child is not null
                } else if (removeNode.right !== null) {
                    // node to remove right child parent = parent node
                    removeNode.right.parent = removeNode.parent;
                    // parent node left child = node to remove right child
                    removeNode.parent.left = removeNode.right;
                // else if node to remove left child is not null
                } else if (removeNode.left !== null) {
                    // node to remove left child parent = parent node
                    removeNode.left.parent = removeNode.parent;
                    // parent node left child = node to remove left child
                    removeNode.parent.left = removeNode.left;
                }

            // else if node to remove is right child (value > parent node value)
            } else if (this.isGreaterThan(removeNode.value, removeNode.parent.value)) {

                // if node to remove left and right child are null
                if (removeNode.left === null && removeNode.right === null) {
                    // parent node right child = null
                    removeNode.parent.right = null;
                // else if node to remove right child is not null
                } else if (removeNode.right !== null) {
                    // node to remove right child parent = parent node
                    removeNode.right.parent = removeNode.parent;
                    // parent node right child = node to remove right child
                    removeNode.parent.right = removeNode.right;
                // else if node to remove left child is not null
                } else if (removeNode.left !== null) {
                    // node to remove left child parent = parent node
                    removeNode.left.parent = removeNode.parent;
                    // parent node right child = node to remove left child
                    removeNode.parent.right = removeNode.left;
                }

            // else, throw
            } else {

                throw new Error(`node value comparison errored`);

            }

            // return
            return returnValue;
        }

        // else, determine which value to swap with node to remove value :

        // init left subtree rightmost node = node to remove left child
        let leftSubtreeRightmostNode = removeNode.left;
        // init left subtree rightmost node depth = 0
        let leftSubtreeRightmostNodeDepth = 0;
        // init right subtree leftmost node = node to remove right child
        let rightSubtreeLeftmostNode = removeNode.right;
        // init right subtree leftmost node depth = 0
        let rightSubtreeLeftmostNodeDepth = 0;

        // while left subtree rightmost node right child !== null or right subtree leftmost node left child !== null
        while (leftSubtreeRightmostNode.right !== null || rightSubtreeLeftmostNode.left !== null) {

            // if left subtree rightmost node right child !== null
            if (leftSubtreeRightmostNode.right !== null) {
                // left subtree rightmost node = left subtree rightmost node right child
                leftSubtreeRightmostNode = leftSubtreeRightmostNode.right;
                // increment left subtree rightmost node depth
                leftSubtreeRightmostNodeDepth++;
            }

            // if right subtree leftmost node left child !== null
            if (rightSubtreeLeftmostNode.left !== null) {
                // right subtree leftmost node = right subtree leftmost node left child
                rightSubtreeLeftmostNode = rightSubtreeLeftmostNode.left;
                // increment right subtree leftmost node depth
                rightSubtreeLeftmostNodeDepth++;
            }

        // end while
        }

        // if left subtree rightmost node depth === 0 and right subtree leftmost node depth === 0
        // ie. node to remove subtree has an inverted V shape (node to remove left subtree has no
        // node with a right child and node to remove right subtree has no node with a left child
        if (leftSubtreeRightmostNodeDepth === 0 && rightSubtreeLeftmostNodeDepth === 0) {

            // init swap node = left subtree rightmost node (arbitrary)
            const swapNode = leftSubtreeRightmostNode;
            // node to remove value = swap node value
            removeNode.value = swapNode.value;
            // node to remove left child = swap node left child
            removeNode.left = swapNode.left;
            // if swap node left child is not null
            if (swapNode.left !== null)
                // swap node left child parent = swap node parent (actually remove node)
                swapNode.left.parent = swapNode.parent;

        // else if left subtree rightmost node depth >= right subtree leftmost node depth
        // ie. swap node to remove value with value of node with the greatest depth
        } else if (leftSubtreeRightmostNodeDepth >= rightSubtreeLeftmostNodeDepth) {

            // init swap node = left subtree rightmost node
            const swapNode = leftSubtreeRightmostNode;
            // node to remove value = swap node value
            removeNode.value = swapNode.value;
            // if swap node left child is not null
            if (swapNode.left !== null)
                // swap node left child parent = swap node parent
                swapNode.left.parent = swapNode.parent;
            // swap node parent right child = swap node left child (can be null)
            (swapNode.parent as BinaryNode<T>).right = swapNode.left;

        // else
        } else {

            // init swap node = right subtree leftmost node
            const swapNode = rightSubtreeLeftmostNode;
            // node to remove value = swap node value
            removeNode.value = swapNode.value;
            // if swap node right child is not null
            if (swapNode.right !== null)
                // swap node right child parent = swap node parent
                swapNode.right.parent = swapNode.parent;
            // swap node parent left child = swap node right child (can be null)
            (swapNode.parent as BinaryNode<T>).left = swapNode.right;

        }

        // return
        return returnValue;
    }

    // ====== ACCESS NODES =======

    // find node by value O(log n)
    private findNodeByValue(value: T): BinaryNode<T> | undefined {
        // set current node = root node
        let currentNode = this.tree;

        // while current node is not null
        while (currentNode !== null) {
            // node to remove has been found
            if (this.match(value, currentNode.value))
                // return current node
                return currentNode;
            // if value <= current node value
            if (this.isLessThanOrEqual(value, currentNode.value))
                // set current node = current node left child
                currentNode = currentNode.left;
            // if value > current node value
            else if (this.isGreaterThan(value, currentNode.value))
                // set current node = current node right child
                currentNode = currentNode.right;
            // else, throw
            else
                throw new Error(`node value comparison errored`);
        // end while
        }

        // return undefined
        return undefined;
    }

    // find whether value is in BST O(log n)
    public find(value: T): boolean {
        // search for node and return
        return typeof this.findNodeByValue(value) !== `undefined`;
    }

    // ========= UTILS ===========

    // print tree using DFS and recursion
    public dump(currentNode: BinaryNode<T> | null = this.tree, left: boolean | null = null, spacing: string = ``): void {
        // identify current node
        const prefix = left === true ? `L:` : left === false ? `R:` : ``;

        // base case: node is null
        if (currentNode === null) {
            console.log(`${ spacing }${ prefix }null`);
            return;
        }

        // log node value ...
        console.log(`${ spacing }${ prefix }${ JSON.stringify(currentNode.value) }`);

        // eslint-disable-next-line no-param-reassign
        spacing += `    `;

        // recursively print the left and right subtrees
        if (currentNode.left !== null || currentNode.right !== null) {
            this.dump(currentNode.left, true, spacing);
            this.dump(currentNode.right, false, spacing);
        }
    }

}