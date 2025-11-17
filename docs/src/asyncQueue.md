[**typescript-dsa**](../README.md)

***

[typescript-dsa](../README.md) / src/asyncQueue

# src/asyncQueue

Rate-limited async calls queue.

## Remarks

* Use case of a queue maintaining references to objects :
  1. Create a queue and enqueue promises (one time or on a regular basis).
  2. Dequeue promises by batches of 5 and asynchronously execute them.
  3. Store the results in a map to access responses after execution.
  4. Proper solution involves recursion as well.
