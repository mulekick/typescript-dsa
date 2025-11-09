/**
 * Rate-limited async calls queue.
 * @module
 * @remarks
 * - Use case of a queue maintaining references to objects :
 *   1. Create a queue and enqueue promises (one time or on a regular basis).
 *   2. Dequeue promises by batches of 5 and asynchronously execute them.
 *   3. Store the results in a map to access responses after execution.
 *   4. Proper solution involves recursion as well.
 */

// import primitives
import console from "node:console";
import {randomUUID} from "node:crypto";

// import modules
import {Queue} from "./structures/singlyLinkedList.ts";
import {rnd} from "./helpers.ts";

// import types
import type {matcherSignature, NetworkRequest} from "./interfaces.ts";

/**
 * Create queue for a specific type.
 */
class RequestQueue extends Queue<NetworkRequest> {}

/**
 * Create the relevant matcher function.
 */
const requestsMatch: matcherSignature<NetworkRequest> = (a: NetworkRequest, b: NetworkRequest): boolean => a.uuid === b.uuid;

try {

    // max concurrent requests
    const MAX_CONCURRENT_REQUESTS = 5;

    // network requests queue
    const requestQueue = new RequestQueue(requestsMatch);

    // requests results map (use uuid as key)
    const resultsMap = new Map<string, string>();

    // requests dequeuing / processing ...
    const f = (index: number, promisesArray: Array<Promise<void> | undefined>, request?: NetworkRequest): Promise<void> => new Promise((resolve, reject) => {

        // log
        console.log(`assign request ${ String(request?.uuid) } to slot ${ String(index) } ...`);

        // 1. BASE CASE
        // - no more requests to perform
        if (typeof request === `undefined`) {
            // reject
            reject(new Error(`request queue is empty, exiting.`));
            return;
        }

        // 2. PRE
        // - extract request params
        const {url, uuid, num} = request;

        // 3. RECURSION
        const processRequest = async(json: {title: string}): Promise<void> => {
            // simulate network conditions
            await new Promise(delay => {setTimeout(delay, rnd(1e3, 2.5e3));});
            // process result in some way ...
            resultsMap.set(uuid, `\t${ String(num) }\t${ json.title }`);
            // resolve
            resolve();
            // the promise is resolved at this stage, dequeue a new request
            promisesArray[index] = f(index, promisesArray, requestQueue.dequeue());
        };

        // - perform request
        fetch(url)
            .then(res => res.json())
            // override onFulfilled signature ...
            .then(processRequest as ((value: unknown)=> void | PromiseLike<void>))
            // reject if a request fails ...
            .catch((e: unknown) => {reject(e as Error);});

        // 4. POST
        // ...

        // 5. RETURN
        // ...
    });

    for (let i = 0; i < 2000; i++) {
        // queue urls ...
        requestQueue.enqueue({
            url: `https://jsonplaceholder.typicode.com/posts/${ String(rnd(1, 100)) }`,
            uuid: randomUUID(),
            num: i
        });
    }

    // declare promises array
    const concurrentRequests: Array<Promise<void> | null> = new Array(MAX_CONCURRENT_REQUESTS).fill(null)
        // queue the first batch of requests
        .map((_, i, a) => f(i, a, requestQueue.dequeue()));

    // start requests execution ...
    void Promise.all(concurrentRequests);

    // start requests execution ...
    setInterval(() => {
        console.clear();
        console.log(`==========`);
        console.log(`completed requests :`);
        Array.from(resultsMap.entries()).forEach(([ k, v ]) => {
            // consume result ...
            console.log(`${ k }: ${ v }`);
            // remove from the map
            resultsMap.delete(k);
        });
    }, 2.5e3);

} catch (err: unknown) {
    console.log(`error: ${ err instanceof Error ? err.message : `unknown` }`);
}