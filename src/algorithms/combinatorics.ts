/* eslint-disable no-param-reassign */

// use a backtracking algorithm to find all possible unique combinations of N elements from a set
// of course, if desired length equals set length, the entire set will be returned ...
export const combine = <T>(current: number | undefined, combination: Array<T>, combinations: Array<Array<T>>, set: Array<T>, desired: number): Array<Array<T>> => {
    // no value index is passed during the initial call
    const isValue = typeof current === `number`;

    // 1. BASE CASE
    // if combination length equals desired length minus one
    if (isValue && combination.length === desired - 1) {
        // append current value, push combination into combinations and return
        combinations.push([ ...combination, set[current] ]);
        return combinations;
    }

    // 2. PRE
    // push value into combination
    if (isValue)
        combination.push(set[current]);

    // 3. RECURSION
    // perform a recursive call on each value of index greater than current index
    // at this stage, all combinations with values of lower indices have already been added
    // combinations will aggregate the solutions during the course of successive recursions
    for (let i = isValue ? current + 1 : 0; i < set.length; i++)
        combine(i, combination, combinations, set, desired);

    // 4. POST
    // pop value from combination (backtrack)
    if (isValue)
        combination.pop();

    // 5. RETURN
    // return combinations
    return combinations;
};

// use a backtracking algorithm to solve the coin change problem - this function can
// be made generic as long as there is a way to sum the values of the elements ...
export const coinChange = (coins: Array<number>, value: number): Array<number> => {
    // find the minimum number of coins that amount for the desired value
    const change = (current: number | undefined, combination: Array<number>, solution: Array<number>, set: Array<number>, desired: number): Array<number> => {
        // no value index is passed during the initial call
        const isValue = typeof current === `number`;
        // sum of values for current combination
        const sum = isValue ? combination.reduce((r, x) => r + x, 0) + set[current] : undefined;

        // 1. BASE CASE
        // if solution is not null and current combination equals solution length
        // (ie. we can find unoptimal solutions by adding more coins)
        if (solution.length > 0 && combination.length === solution.length)
            // return
            return solution;
        // if sum of combination values is greater than the desired value
        // (ie. combination is invalid as a solution from now on)
        if (sum && sum > desired)
            // return
            return solution;
        // if sum of combination values equals desired value
        // (ie. a new optimal solution has been found)
        if (sum && sum === desired) {
            // update solution
            solution = [ ...combination, set[current as number] ];
            // return
            return solution;
        }

        // 2. PRE
        // push value into combination
        if (isValue)
            combination.push(set[current]);

        // 3. RECURSION
        // perform a recursive call on each value of index greater than OR EQUAL current index
        // at this stage, all combinations with values of lower indices have already been explored
        // solution will be mutated if needed during the course of successive recursions
        for (let i = isValue ? current : 0; i < set.length; i++)
            solution = change(i, combination, solution, set, desired);

        // 4. POST
        // pop value from combination (backtrack)
        if (isValue)
            combination.pop();

        // 5. RETURN
        // return solution
        return solution;
    };

    // sort coins array (descending so greatest values are processed first) and start recursing ...
    return change(undefined, [], [], coins.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0)), value);
};

// try to design a backpack optimization algorithm where each iteam has a volume and a value ?
// try to design a coin change algorithm where each coin quantity is limited ?