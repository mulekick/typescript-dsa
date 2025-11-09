# Typescript-dsa

Data structures & algorithms implementations with jest unit tests for benchmarking (read the [docs](./docs/README.md) for details).

## Available benchmarks

All benchmarks run to completion on a 6 cores, 8192 Mib debian 12 host.

```bash
# search algorithms for arrays
npm run test:array

# push / pop for arraylist based stack
npm run test:arraylist

# queue / dequeue for ringbuffer based queue
# queue / dequeue for deque based queue
npm run test:ringbuffer

# push / pop / shift / unshift for deque based array
# push / pop / shift / unshift for native array
npm run test:deque

# queue / dequeue for singly linked list based queue
# push / pop for singly linked list based stack
npm run test:singly

# prepend / append / remove for doubly linked list
npm run test:doubly

# solve mazes of different sizes using a recursion algorithm
npm run test:recursion

# insertion / deletion / traversals for binary tree 
npm run test:tree

# insertion / deletion for binary heap
npm run test:heap

# insertion / deletion for trie tree
npm run test:trie

# traversals / dijkstra's shortest path for graph
npm run test:graph

# run all tests
npm run test:all

# use a queue to implement rate limiting on async network requests
npm run test:asyncqueue
```