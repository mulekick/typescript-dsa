// import types
import type {coords} from "../interfaces.ts";

// use dynamic programming trick to progress from O(n) to O(1) AT EACH RECURSIVE CALL
export const mazeSolver = (maze: Array<string>, wall: string, start: coords, exit: string): Array<coords> => {
    // solution
    const solution: Array<coords> = [];

    // map of visited cells <-- dynamic programming trick
    const visited: Array<Array<boolean>> = new Array(maze.length).fill(undefined).map(() => new Array(maze[0].length).fill(false) as Array<boolean>);

    // recursive cell visit function
    const visitCell = (cell: coords): boolean => {

        // 1. BASE CASE

        // current cell is outside boundaries
        if (cell.y < 0 || cell.x < 0 || cell.y >= maze.length || cell.x >= maze[0].length) {
            return false;
        // the current cell has already been visited
        } else if (visited[cell.y][cell.x]) {
            return false;
        // the current cell is a wall
        } else if (maze[cell.y][cell.x] === wall) {
            return false;
        // the current cell is the maze exit
        } else if (maze[cell.y][cell.x] === exit) {
            // push current into path at this stage so as to keep the
            // base case separated from the recursive cases ...
            solution.push(cell);
            return true;
        }

        // 2. PRE

        // flag the current cell as visited
        visited[cell.y][cell.x] = true;
        // add the current cell to the solution
        // it can be considered part of it at this stage
        solution.push(cell);

        // 3. RECURSION

        // perform recursion to visit the 4 adjacent cells
        // top, left, bottom, right
        const result =
        visitCell({x: cell.x, y: cell.y - 1} as coords) ||
        visitCell({x: cell.x - 1, y: cell.y} as coords) ||
        visitCell({x: cell.x, y: cell.y + 1} as coords) ||
        visitCell({x: cell.x + 1, y: cell.y} as coords);

        // 4. POST

        // if all recursive calls return false, remove current cell from the solution
        // it can't be considered part of the solution anymore
        if (!result)
            solution.pop();

        // 5. RETURN

        // if all recursive calls returned false, return false
        // else, return true
        return result;

    };

    // start recursion
    visitCell(start);

    // return solution
    return solution;
};