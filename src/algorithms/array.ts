/**
 * Array search and sort algorithms.
 * @module
 */

// import primitives
import console from "node:console";

/**
 * A function with a linear time complexity.
 */
export const sampleLinearfunction = (i: string): void => {
    // first iteration, time consumption grows linearly with input
    i.split(``).forEach((c: string): void => {console.log(`one: ${ c }`);});
    // second iteration, time consumption grows linearly with input
    i.split(``).forEach((c: string): void => {console.log(`two: ${ c }`);});
    // constant
    console.log(`The Big O notation for this function is 2 * O(n)`);
};

// ##############################################################
// #                       ARRAY SEARCH                         #
// ##############################################################

/**
 * Linear search.
 * @remarks
 * - Time complexity O(n)
 */
export const linearSearch = (haystack: Array<number>, needle: number): boolean => {
    // loop over haystack values O(n)
    for (let i = 0; i < haystack.length; i++) {
        // if current haystack value equals needle, return true
        if (haystack[i] === needle)
            return true;
    }
    // return false if not found
    return false;
};

/**
 * Binary search.
 * @remarks
 * - Time complexity O(log n)
 * - It is assessed that haystack is sorted
 */
export const binarySearch = (haystack: Array<number>, needle: number): boolean => {
    // init haystack subarray start and end index (start inclusive, end exclusive)
    // !!! never use recursion here, loop based version runs 18 times faster !!!
    let [ s, e ] = [ 0, haystack.length ];

    // while end index > start index O(log2 n) (will potentially loop until end index === start index + 1)
    while (e > s) {
        // read middle index value (!!! DO NOT FORGET TO ADD START INDEX !!!)
        const m = s + Math.floor((e - s) / 2);
        // if middle index value === needle
        if (haystack[m] === needle)
            // return true
            return true;
        // else if middle index value > needle
        else if (haystack[m] > needle)
            // let end index = middle index
            e = m;
        // else if middle index value < needle
        else if (haystack[m] < needle)
            // let start index = middle index + 1
            s = m + 1;
    // end while
    }

    // return false
    return false;
};

/**
 * Two crystal balls search.
 * @remarks
 * - Time complexity O(sqrt(n))
 * - It is assessed that breaks is sorted
 */
export const twoCrystalBalls = (breaks: Array<boolean>): number => {
    // searched value
    const searchedValue = true;
    // define increment : square root of input length
    const incr = Math.floor(Math.sqrt(breaks.length));

    // loop over input, increase position by increment each time O(sqrt n)
    for (let pos = 0; pos < breaks.length; pos += incr) {
        // if current value has changed or does not exist
        if (pos >= breaks.length || breaks[pos] === searchedValue) {
            // decrease position once by increment, loop over input starting from position
            for (let i = pos - incr; i < pos; i++) {
                // if current value has changed
                if (i < breaks.length && breaks[i] === searchedValue)
                    // return index
                    return i;
            }
        }
    // end loop
    }

    // return -1
    return -1;
};

// ##############################################################
// #                        ARRAY SORT                          #
// ##############################################################

/**
 * Bubble sort.
 * @remarks
 * - Time complexity O(n²)
 */
export const bubbleSort = (a: Array<number>): Array<number> => {
    // use i to loop from 0 to arr.length exclusive
    for (let i = 0; i < a.length; i++) {
        // use j to loop from 0 to arr.length - (i + 1) exclusive
        for (let j = 0; j < a.length - (i + 1); j++) {
            // if arr[j] > arr[j + 1]
            if (a[j] > a[j + 1]) {
                // swap arr[j + 1] and arr[j]
                const tmp = a[j + 1];
                a[j + 1] = a[j];
                a[j] = tmp;
            }
        }
    }

    // return
    return a;
};

/**
 * Perform weak sorting, mutate array, return final pivot index.
 * @remarks
 * - Time complexity ?
 */
export const weakSortSubarray = (arr: Array<number>, start: number, end: number): number => {
    // init pivot = arr[end - 1]
    const pivot = arr[end - 1];
    // index = start
    let index = start;

    // loop over arr from start to end - 1 exclusive
    for (let i = start; i < end - 1; i++) {
        // if current element is less than or equal to pivot
        if (arr[i] <= pivot) {
            // swap current element with element at index
            const tmp = arr[i];
            arr[i] = arr[index];
            arr[index] = tmp;
            // increment index
            index++;
        }
    }

    // at this stage : arr.slice(start, end).findIndex(x => x > pivot) === index
    // meaning all elements up to index (exclusive) are less than or equal to p ...

    // finally, swap pivot with arr[index] to achieve weak sorting
    arr[end - 1] = arr[index];
    arr[index] = pivot;

    // return pivot value new index
    return index;
};

/**
 * Weak sort array recursively.
 * @remarks
 * - Time complexity ?
 */
export const weakSort = (arr: Array<number>, start: number, end: number): Array<number> => {

    // 1. BASE CASE

    // if end (exclusive) - start is less than or equal to 1, return
    if (end - start <= 1)
        return arr;

    // 2. PRE

    // weak sort and read final pivot index p
    const p = weakSortSubarray(arr, start, end);

    // 3. RECURSION

    // perform a recursive call on subset start to p (exclusive)
    weakSort(arr, start, p);
    // perform a recursive call on subset p + 1 to end (exclusive)
    weakSort(arr, p + 1, end);

    // 4. POST

    // ...

    // 5. RETURN

    // return
    return arr;
};

/**
 * Quick sort.
 * @remarks
 * - Time complexity O(n * log(n))
 * - Weak sort array from 0 to array length
 */
export const quickSort = (arr: Array<number>): Array<number> => weakSort(arr, 0, arr.length);