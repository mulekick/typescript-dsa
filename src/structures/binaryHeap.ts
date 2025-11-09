/**
 * Heap based data structures.
 * @module
 */

/* eslint-disable @typescript-eslint/max-params */

// import modules
import {ArrayList} from "./arrayList.ts";
import {compareSampleObjects, formatSampleObject, objectsMatch, unformatSampleObject} from "../helpers.ts";

// import types
import type {comparator, formatter, matcher, sampleObject, unformatter} from "../interfaces.ts";

/**
 * Binary heap implementation over generic type.
 * @class
 * @typeParam T Data type stored in heap elements.
 * @remarks
 * - Heaps rely on arraylists, thus the T type has to have a max size.
 */
export class BinaryHeap<T> extends ArrayList<T> {

    // min / max heap indicator
    private isMaxHeap: boolean;
    // declare internal node comparator function
    private compare: comparator<T>;

    // do not pass a default value for matchers and comparators since it would "abstract" the current use case ...
    constructor(f: formatter<T>, u: unformatter<T>, m: matcher<T>, c: comparator<T>, maxElementLength: number = 1, isMaxHeap: boolean = false) {
        // initialize background arraylist
        super(f, u, m, 1, maxElementLength);
        // initialize max heap indicator
        this.isMaxHeap = isMaxHeap;
        // initialize comparator function
        this.compare = c;
    }

    // ##############################################################
    // #                        HEAP MANAGEMENT                     #
    // ##############################################################

    // nodes index getters O(1)
    private static getParentNode(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private static getLeftChildNode(index: number): number {
        return index * 2 + 1;
    }

    private static getRightChildNode(index: number): number {
        return index * 2 + 2;
    }

    // compare nodes values O(1)
    private isGreaterThanOrEqual(a: T, b: T): boolean {
        return [ 0, this.isMaxHeap ? 1 : -1 ].includes(this.compare(a, b));
    }

    private isGreaterThan(a: T, b: T): boolean {
        return this.compare(a, b) === (this.isMaxHeap ? 1 : -1);
    }

    private isLessThanOrEqual(a: T, b: T): boolean {
        return [ 0, this.isMaxHeap ? -1 : 1 ].includes(this.compare(a, b));
    }

    // swap nodes values O(1)
    private swapNodesValues(idx1: number, idx2: number): void {
        // read values to swap
        const [ v1, v2 ] = [ this.get(idx1), this.get(idx2) ];
        // throw if either is undefined
        if (!v1 || !v2)
            throw new Error(`attempting to swap an undefined value`);
        // swap values
        this.set(v1, idx2);
        this.set(v2, idx1);
    }

    // heapify up from node index (O log n)
    private heapifyUp(idx: number): void {
        // set current node = node at index
        let currentNode = idx;
        // set parent node = current node parent
        let parentNode = BinaryHeap.getParentNode(currentNode);
        // while current node !== root node and current node value > parent node value (type assertions ok since indexes are checked first ...)
        while (currentNode > 0 && this.isGreaterThan(this.get(currentNode) as T, this.get(parentNode) as T)) {
            // swap current node value with parent node value
            this.swapNodesValues(currentNode, parentNode);
            // set current node = parent node
            currentNode = parentNode;
            // set parent node = current node parent
            parentNode = BinaryHeap.getParentNode(currentNode);
        // end while
        }
    }

    // heapify down from node index (O log n)
    private heapifyDown(idx: number): void {
        // set current node = node at index
        let currentNode = idx;
        // set left = current node left child
        let left = BinaryHeap.getLeftChildNode(currentNode);
        // set right = current node right child
        let right = BinaryHeap.getRightChildNode(currentNode);
        // while current node has at least one child (skip the greater than zero test ...)
        while (left < this.length || right < this.length) {
            // type assertions ok since indexes are checked first ...
            const [ currentValue, leftValue, rightValue ] = [ this.get(currentNode), this.get(left), this.get(right) ] as [ T, T, T ];
            // if left child <= current node and right child is null or right child <= current node
            if (this.isLessThanOrEqual(leftValue, currentValue) && (right >= this.length ? true : this.isLessThanOrEqual(rightValue, currentValue))) {
                // break
                break;
            // else if right child not null and right child > left child
            } else if (right < this.length && this.isGreaterThan(rightValue, leftValue)) {
                // swap current node value with right child value
                this.swapNodesValues(currentNode, right);
                // set current node = right child
                currentNode = right;
            // else if right child is null or left child >= right child
            } else if (right >= this.length || this.isGreaterThanOrEqual(leftValue, currentValue)) {
                // swap current node value with left child value
                this.swapNodesValues(currentNode, left);
                // set current node = left child
                currentNode = left;
            }
            // set left = current node left child
            left = BinaryHeap.getLeftChildNode(currentNode);
            // set right = current node right child
            right = BinaryHeap.getRightChildNode(currentNode);
        // end while
        }

    }

    // ##############################################################
    // #                     HEAP TRAVERSALS                        #
    // ##############################################################

    // verify heap integrity using depth first traversal O(n)
    public verifyHeap(currentNode: number = 0): boolean {
        // return true if node does not exist
        if (currentNode >= this.length)
            return true;
        // read left and right child nodes
        const [ left, right ] = [ BinaryHeap.getLeftChildNode(currentNode), BinaryHeap.getRightChildNode(currentNode) ];
        // left child not null and left child value > current node value
        if (left < this.length && this.isGreaterThan(this.get(left) as T, this.get(currentNode) as T))
            return false;
        // right child not null and right child value > current node value
        if (right < this.length && this.isGreaterThan(this.get(right) as T, this.get(currentNode) as T))
            return false;
        // validate child nodes recursively ...
        return this.verifyHeap(BinaryHeap.getLeftChildNode(currentNode)) && this.verifyHeap(BinaryHeap.getRightChildNode(currentNode));
    }

    // ##############################################################
    // #                       APPEND NODES                         #
    // ##############################################################

    // insert node O(log n)
    public insert(value: T): void {
        // create new node at index length
        this.append(value);
        // if length equals 1
        if (this.length === 1)
            // return
            return;
        // heapify up node at index length
        this.heapifyUp(this.length - 1);
    }

    // ##############################################################
    // #                       REMOVE NODES                         #
    // ##############################################################

    // pop head node O(log n)
    public delete(): T | undefined {
        // if length equals 0
        if (this.length === 0)
            // return
            return undefined;
        // get head node at index 0
        const returnValue = this.get(0);
        // let head node value = read node at index length
        this.swapNodesValues(0, this.length - 1);
        // delete node at index length
        this.removeAt(this.length - 1);
        // heapify down node at index 0
        this.heapifyDown(0);
        // return
        return returnValue;
    }

    // ##############################################################
    // #                       ACCESS NODES                         #
    // ##############################################################

    // find node index from value O(n) or O(1) for head node
    public find(value: T): number | undefined {
        // if length equals 0
        if (this.length === 0)
            // return
            return undefined;
        // loop over all stored items
        for (let i = 0; i < this.length; i++) {
            // item to remove is found
            if (this.match(value, this.get(i) as T))
                // return index
                return i;
        }
        // return undefined
        return undefined;

    }

    // update node value O(n) + O(log n)
    public update(oldValue: T, newValue: T): void {
        // set current node = node to update first match
        const currentNode = this.find(oldValue);
        // return if undefined
        if (typeof currentNode === `undefined`)
            return;
        // set current node value = new value
        this.set(newValue, currentNode);
        // heapify up from current node (will update the value at index if necessary)
        this.heapifyUp(currentNode);
        // heapify down from current node (will update the value at index if necessary)
        this.heapifyDown(currentNode);
    }
}

/**
 * Min heap implementation.
 * @class
 */
export class MinHeap extends BinaryHeap<sampleObject> { constructor() {super(formatSampleObject, unformatSampleObject, objectsMatch, compareSampleObjects, 2, false);} }

/**
 * Max heap implementation.
 * @class
 */
export class MaxHeap extends BinaryHeap<sampleObject> { constructor() {super(formatSampleObject, unformatSampleObject, objectsMatch, compareSampleObjects, 2, true);} }