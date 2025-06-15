/**
 * @jest-environment node
 */

/* eslint-disable @stylistic/object-curly-newline */

// import primitives
import console from "node:console";

// import modules
import {describe, it, expect} from "@jest/globals";
import {mazeSolver} from "../algorithms/recursion.ts";
import {timeExecution, simpleMaze, simpleMazeStartingCoords, midLevelMaze, midLevelMazeStartingCoords, advancedMaze, advancedMazeStartingCoords, hugeMaze, hugeMazeStartingCoords, drawMazeSolution} from "../helpers.ts";

// import types
import type {coords} from "../interfaces.ts";

interface mazeBenchmarkSignature {
    level: string;
    maze: Array<string>;
    wall: string;
    length: number;
    start: coords;
    exit: string;
}

try {

    // mazes to benchmark against
    const mazes = [
        {level: `SIMPLE`, maze: simpleMaze, wall: `#`, length: simpleMaze.join(``).length, start: simpleMazeStartingCoords, exit: `X`},
        {level: `MID-LEVEL`, maze: midLevelMaze, wall: `#`, length: midLevelMaze.join(``).length, start: midLevelMazeStartingCoords, exit: `X`},
        {level: `ADVANCED`, maze: advancedMaze, wall: `#`, length: advancedMaze.join(``).length, start: advancedMazeStartingCoords, exit: `X`},
        {level: `HUGE`, maze: hugeMaze, wall: `#`, length: hugeMaze.join(``).length, start: hugeMazeStartingCoords, exit: `X`}
    ];

    // maze solving using recursion
    describe(`===== MAZE SOLVING USING RECURSION =====`, () => {
        // benchmark
        describe.each(mazes)(`input: $level maze (input length is $length) =====`, (x: mazeBenchmarkSignature): void => {
            // extract
            const {maze, wall, start, exit} = x;
            // define function
            const {result, time} = timeExecution(mazeSolver.bind(null, maze, wall, start, exit));

            it(`solved, execution time is ${ String(time) }ms\n${ drawMazeSolution(maze, result as Array<coords>) }`, (): void => {
                expect(true).toBe(true);
            });
        });
    });

} catch (err: unknown) {
    console.log(`error: ${ err instanceof Error ? err.message : `unknown` }`);
}