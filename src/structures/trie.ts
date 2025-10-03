/**
 * Trie (retrieval tree) data structure.
 * @module
 */

// import types
import type {TrieNode} from "../interfaces.ts";

/**
 * Trie implementation.
 * @class
 * @typeParam T data type stored in heap elements.
 * @remarks
 * - Every method is O(1) since the tree height is limited by the longest word length.
 * - This class was not made generic since autocomplete is the only use case identified.
 */
export class Trie {

    // root node (stores no character nor isWord flag)
    private root: Partial<TrieNode>;

    // manage only lowercase characters
    private static NODES_ARRAY_LENGTH = 26;

    // find character index in next characters array O(1)
    private static index(chr: string): number {
        return chr.charCodeAt(0) - `a`.charCodeAt(0);
    }

    // create new child node for character O(1)
    private static createNode(chr: string): TrieNode {
        return {
            value: chr,
            next: new Array(Trie.NODES_ARRAY_LENGTH).fill(null).map(() => undefined),
            childNodes: 0,
            isWord: false
        };
    }

    // read child node value for character O(1)
    private static retrieveChildNode(word: string, index: number, node: TrieNode): {chr: string; position: number; childNode: TrieNode | undefined} {
        // read character at position index in word
        const chr = word[index];
        // retrieve character position in current node next
        const position = Trie.index(chr);
        // read value at index position in current node next
        const childNode = node.next[position];

        // return
        return {chr, position, childNode};
    }

    constructor() {
        // init root node
        const rootNode = {next: new Array(Trie.NODES_ARRAY_LENGTH).fill(null).map(() => undefined), nodes: 0};
        // set root node
        this.root = rootNode as Partial<TrieNode>;
    }

    // insert new word O(1)
    public insert(word: string): void {

        // recursive DFS for insertion
        const recurse = (current: TrieNode, index: number): void => {

            // 1. BASE CASE

            // current node is not root node and index equals word length - 1
            if (typeof current.value === `string` && index === word.length - 1) {
                // all nodes inserted, flag current node as end of word
                current.isWord = true;
                // return
                return;
            }

            // 2. PRE

            // retrieve child node for character at next index in word
            const {chr, position, childNode} = Trie.retrieveChildNode(word, index + 1, current);

            // if child node is undefined
            if (typeof childNode === `undefined`) {
                // create new node for character
                const newNode = Trie.createNode(chr);
                // value at index position in current node next points to new node
                // perform during PRE to add the child node and immediately recurse on it ...
                current.next[position] = newNode;
                // increment current node child nodes count
                current.childNodes++;
            }

            // 3. RECURSION

            // recurse and pass child node and next index
            recurse(current.next[position] as TrieNode, index + 1);

            // 4. POST
            // ...

            // 5. RETURN
            // ...

        };

        // throw if empty string
        if (word.length === 0)
            throw new Error(`trying to insert a zero length word`);

        // call recursive function with root node and index -1 - compulsory in
        // the event the first letter of word does not exist in root node's next
        recurse(this.root as TrieNode, -1);

    }

    // delete existing word O(1)
    public delete(word: string): void {

        // recursive DFS for deletion
        const recurse = (current: TrieNode, index: number): boolean => {

            // 1. BASE CASE

            // index equals word length - 1 and end of word flag is true
            if (index === word.length - 1 && current.isWord) {
                // remove end of word flag
                current.isWord = false;
                // if current node child nodes count equals zero return true, else return false
                return current.childNodes === 0;
            }

            // 2. PRE

            // retrieve child node for character at next index in word
            const {position, childNode} = Trie.retrieveChildNode(word, index + 1, current);

            // if child node is undefined
            if (typeof childNode === `undefined`)
                // throw word not found error
                throw new Error(`trying to delete a nonexistent word`);

            // 3. RECURSION

            // recurse and pass child node and next index
            const r = recurse(childNode, index + 1);

            // 4. POST
            // if recursion returned true
            if (r) {
                // delete node at index position in current node next
                // perform during POST to not lose reference to child nodes during recursion ...
                current.next[position] = undefined;
                // decrement current node child nodes count
                current.childNodes--;
            }

            // 5. RETURN
            return false;

        };

        // throw if empty parameter
        if (word.length === 0)
            throw new Error(`trying to delete a zero length word`);

        // call recursive function with root node and index -1
        recurse(this.root as TrieNode, -1);

    }

    // find and return words matching pattern O(1)
    public find(pattern: string): Array<string> {

        // init solutions array
        const solutions: Array<string> = [];

        // recursive DFS for find
        const recurse = (current: TrieNode | undefined, index: number, word: string): void => {

            // 1. BASE CASE

            // if current node is undefined
            if (typeof current === `undefined`)
                // return
                return;

            // 2. PRE

            // push current node character into word
            // eslint-disable-next-line no-param-reassign
            word += current.value;

            // if current node is end of word and index >= pattern length - 1
            if (current.isWord && index >= pattern.length - 1)
                // push current word into solutions (including pattern if it is a word)
                // perform during PRE for alphabetical ordering, other traversals
                solutions.push(word);

            // 3. RECURSION

            // if current node child nodes count equals zero
            if (current.childNodes === 0) {

                // increment index, recurse and pass undefined
                recurse(undefined, index + 1, word);

            // else if index < pattern length - 1 (pattern processing in progress)
            } else if (index < pattern.length - 1) {

                // retrieve child node for character at next index in pattern
                const {childNode} = Trie.retrieveChildNode(pattern, index + 1, current);

                // recurse and pass child node, next index and word
                recurse(childNode, index + 1, word);

            // else
            } else {

                // for each child node in current node next (can be undefined)
                for (let j = 0; j < current.next.length; j++)
                    // recurse and pass child node, next index and word
                    recurse(current.next[j], index + 1, word);
            }

            // 4. POST

            // pop current node character from word
            // eslint-disable-next-line no-param-reassign
            word = word.substring(0, word.length - 1);

            // 5. RETURN
            // ...

        };

        // retrieve root node child node for first character in pattern (can be undefined)
        // root node is ignored for pattern processing since it does not store a character
        const initial = Trie.retrieveChildNode(pattern, 0, this.root as TrieNode);

        // call recursive function with value, index 0 and empty string
        recurse(initial.childNode, 0, ``);

        // return solutions
        return solutions;

    }

}