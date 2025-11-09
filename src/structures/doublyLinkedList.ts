/**
 * Doubly linked list data structure.
 * @module
 */

// import types
import type {matcherSignature} from "../interfaces.ts";

/**
 * List node (doubly linked).
 * @typeParam T Data type stored in the node.
 * @interface
 */
interface Node<T> {
    // pointer to previous node
    prev?: Node<T>;
    // pointer to next node
    next?: Node<T>;
    // store value
    value: T;
}

/**
 * Doubly linked list implementation over generic type.
 * @class
 * @typeParam T Data type stored in list nodes.
 * @remarks
 * - Lists are node based structures and are completely generic (no limitation on node values size).
 */
export class DoublyLinkedList<T> {
    // pointer to head node
    private head?: Node<T>;
    // pointer to tail node
    private tail?: Node<T>;
    // total number of nodes
    public length: number;
    // declare internal node matcher function as public for combined use with other data structures
    public match: matcherSignature<T>;

    // do not pass a default value for matchers and comparators since it would "abstract" the current use case ...
    constructor(m: matcherSignature<T>) {
        // init length
        this.length = 0;
        // init head node
        this.head = undefined;
        // init tail node
        this.tail = undefined;
        // initialize matcher function
        this.match = m;
    }

    // ##############################################################
    // #                       APPEND NODES                         #
    // ##############################################################

    // append node as head node O(1)
    public prepend(item: T): void {
        // create new node
        const newNode = {value: item} as Node<T>;

        // if length is zero
        if (this.length === 0)
            // tail = new node
            this.tail = newNode;
        // else
        else
            // head previous = new node
            (this.head as Node<T>).prev = newNode;

        // new node next = head (can be undefined if length is zero)
        newNode.next = this.head;

        // head = new node
        this.head = newNode;

        // increment length
        this.length++;
    }

    // append node as tail node O(1)
    public append(item: T): void {
        // create new node
        const newNode = {value: item} as Node<T>;

        // if length is zero
        if (this.length === 0)
            // head = new node
            this.head = newNode;
        // else
        else
            // tail next = new node
            (this.tail as Node<T>).next = newNode;

        // new node previous = tail (can be undefined if length is zero)
        newNode.prev = this.tail;

        // tail = new node
        this.tail = newNode;

        // increment length
        this.length++;
    }

    // insert before node at index idx O(n)
    public insertAt(item: T, idx: number): void {
        // if idx > list length
        if (idx > this.length)
            // return
            return;

        // if idx === 0
        if (idx === 0) {
            // prepend
            this.prepend(item);
            // return
            return;
        }

        // if idx === list.length
        if (idx === this.length) {
            // append
            this.append(item);
            // return
            return;
        }

        // create new node
        const newNode = {value: item} as Node<T>;
        // insert node = get node at idx
        const insertNode = this.getNodeAt(idx);

        // new node next = insert node
        newNode.next = insertNode;

        // new node prev = insert node prev
        newNode.prev = (insertNode as Node<T>).prev;

        // insert node prev next = new node
        ((insertNode as Node<T>).prev as Node<T>).next = newNode;

        // insert node prev = new node
        (insertNode as Node<T>).prev = newNode;

        // increment length
        this.length++;
    }

    // ##############################################################
    // #                       REMOVE NODES                         #
    // ##############################################################

    // remove node at index idx O(n)
    public removeAt(idx: number): T | undefined {
        // if length is zero or idx > list length - 1
        if (this.length === 0 || idx > this.length - 1)
            // return undefined
            return undefined;

        // remove node = get node at idx
        const removeNode = this.getNodeAt(idx) as Node<T>;

        // if length === 1
        if (this.length === 1) {
            // head = undefined
            this.head = undefined;
            // tail = undefined
            this.tail = undefined;
        // else if idx === 0
        } else if (idx === 0) {
            // remove node next prev = remove node prev (undefined)
            (removeNode.next as Node<T>).prev = removeNode.prev;
            // head = remove node next
            this.head = removeNode.next;
        // else if idx === list.length - 1
        } else if (idx === this.length - 1) {
            // remove node prev next = remove node next (undefined)
            (removeNode.prev as Node<T>).next = removeNode.next;
            // tail = remove node prev
            this.tail = removeNode.prev;
        // else
        } else {
            // remove node prev next = remove node next
            (removeNode.prev as Node<T>).next = removeNode.next;
            // remove node next prev = remove node prev
            (removeNode.next as Node<T>).prev = removeNode.prev;
        }

        // decrement length
        this.length--;

        // free remove node pointers
        removeNode.prev = undefined;
        removeNode.next = undefined;

        // return remove node value
        return removeNode.value;
    }

    // remove value from list O(n)
    public remove(item: T): T | undefined {
        // current node = head node
        let currentNode = this.head as Node<T>;

        // for idx = 0 to list length - 1
        for (let idx = 0; idx < this.length; idx++) {
            // if current element is a match
            if (this.match(this.get(idx) as T, item)) {
                // remove and return
                this.removeAt(idx);
                return item;
            }
            // current node = current node next
            currentNode = currentNode.next as Node<T>;
        }

        // return undefined
        return undefined;
    }

    // discard all nodes O(1)
    public flush(): void {
        // reset length
        this.length = 0;
        // reset head node
        this.head = undefined;
        // reset tail node
        this.tail = undefined;
    }

    // ##############################################################
    // #                       ACCESS NODES                         #
    // ##############################################################

    // read node at index idx O(n)
    private getNodeAt(idx: number): Node<T> | undefined {
        // if idx > list length - 1
        if (idx > this.length - 1)
            // return undefined
            return undefined;

        // current node = head node
        let currentNode = this.head;

        // for i = 0 to idx
        for (let i = 0; i < idx; i++)
            // current node = current node next
            currentNode = (currentNode as Node<T>).next;

        // return current node
        return currentNode;
    }

    // read node value at index idx O(n)
    public get(idx: number): T | undefined {
        // set current node = get node at idx
        const currentNode = this.getNodeAt(idx);

        // if current node is undefined
        if (typeof currentNode === `undefined`)
            // return undefined
            return undefined;

        // return current node value
        return currentNode.value;
    }
}