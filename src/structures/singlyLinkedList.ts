// import modules
import {stringsMatch} from "../helpers.ts";

// import types
import type {matcherSignature} from "../interfaces.ts";

interface Node<T> {
    // pointer to next node
    next: Node<T> | undefined;
    // store value
    value: T;
}

export class SinglyLinkedList<T> {
    // singly linked list length
    public length: number;
    // reference to head node
    private head: Node<T> | undefined;
    // reference to tail node
    private tail: Node<T> | undefined;
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

        // set next node for new node = head node
        newNode.next = this.head;

        // set head node = new node
        this.head = newNode;

        // if tail node is undefined
        if (typeof this.tail === `undefined`)
            // set tail node = new node
            this.tail = newNode;

        // update list length
        this.length += 1;
    }

    // append node as tail node O(1)
    public append(item: T): void {
        // create new node
        const newNode = {value: item} as Node<T>;

        // if tail node is undefined
        if (typeof this.tail === `undefined`)
            // set head node = new node
            this.head = newNode;
        // else
        else
            // set next node for tail node = new node
            this.tail.next = newNode;

        // set tail node = new node
        this.tail = newNode;

        // update list length
        this.length += 1;
    }

    // insert before node at index idx O(n)
    public insertAt(item: T, idx: number): void {
        // if idx > list length
        if (idx > this.length) {
            // throw
            throw new RangeError(`insertion index exceeds current list length`);
        // else if idx === 0
        } else if (idx === 0) {
            // prepend item
            this.prepend(item);
        // else if idx === list length
        } else if (idx === this.length) {
            // append item
            this.append(item);
        // else
        } else {
            // create new node
            const newNode = {value: item} as Node<T>;
            // set previous node = get node at idx - 1
            const previousNode = this.getNodeAt(idx - 1) as Node<T>;
            // set next node for new node = next node for previous node
            newNode.next = previousNode.next;
            // set next node for previous node = new node
            previousNode.next = newNode;
            // update list length
            this.length += 1;
        }

        // at this stage, all list nodes are referencing each other - as a result, none
        // of them can be garbage collected even though they are not directly accessible ...
        // https://en.wikipedia.org/wiki/Memory_management
        // https://en.wikipedia.org/wiki/Garbage_(computer_science)
        // https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)
    }

    // ##############################################################
    // #                       REMOVE NODES                         #
    // ##############################################################

    // remove node at index idx O(n)
    public removeAt(idx: number): T | undefined {
        // if length is zero or idx > list length - 1
        if (this.length === 0 || idx > this.length - 1)
            // return
            return undefined;

        // set remove node = get node at idx
        const removeNode = this.getNodeAt(idx) as Node<T>;

        // if list.length === 1
        if (this.length === 1) {
            // set head node = undefined
            this.head = undefined;
            // set tail node = undefined
            this.tail = undefined;
        // else if idx === 0
        } else if (idx === 0) {
            // set head node = next node for remove node
            this.head = removeNode.next;
        // else if idx === list length - 1
        } else if (idx === this.length - 1) {
            // set previous node = get node at idx - 1
            const previousNode = this.getNodeAt(idx - 1) as Node<T>;
            // set next node for previous node = undefined
            previousNode.next = undefined;
            // set tail node = previous node
            this.tail = previousNode;
        // else
        } else {
            // set previous node = get node at idx - 1
            const previousNode = this.getNodeAt(idx - 1) as Node<T>;
            // set next node for previous node = next node for remove node
            previousNode.next = removeNode.next;
        }

        // update list length
        this.length -= 1;

        // free remove node pointers
        removeNode.next = undefined;

        // return remove node
        return removeNode.value;

        // at this stage, previously adjacent list nodes stopped referencing removeNode ...
        // as a result, it can't be accessed anymore by the program and becomes syntactic garbage
    }

    // remove value from list O(n)
    public remove(item: T): T | undefined {
        // point to head node
        let currentNode = this.head as Node<T>;

        // for idx = 0 to list length - 1
        for (let idx = 0; idx < this.length; idx++) {
            // if current element is a match
            if (this.match(this.get(idx) as T, item)) {
                // remove and return
                this.removeAt(idx);
                return item;
            }
            // set current node = next node for current node
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
            // return
            return undefined;

        // set current node = head node
        let currentNode = this.head;

        // for i = 0 to idx
        for (let i = 0; i < idx; i++)
            // set current node = next node
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

export class Queue<T> extends SinglyLinkedList<T> {
    // O(1) : enqueue value
    enqueue(data: T): void {
        // append to list !!! use append for FIFO, O(1) preserved !!!
        this.append(data);
    }

    // O(1) : dequeue value
    dequeue(): T | undefined {
        // remove first node and return
        return this.removeAt(0);
    }

    // O(1) : peek head value
    peek(): T | undefined {
        // read first node and return
        return this.get(0);
    }
}

export class Stack<T> extends SinglyLinkedList<T> {

    // O(1) : push value
    push(data: T): void {
        // append to list !!! use prepend over append for LIFO in order to skip traversal !!!
        this.prepend(data);
    }

    // O(1) : pop value
    pop(): T | undefined {
        // remove first node and return
        return this.removeAt(0);
    }

    // O(1) : peek tail value
    peek(): T | undefined {
        // read first node and return
        return this.get(0);
    }
}

// create stack and queue for a specific type
export class StringQueue extends Queue<string> { constructor() {super(stringsMatch);} }
export class StringStack extends Stack<string> { constructor() {super(stringsMatch);} }