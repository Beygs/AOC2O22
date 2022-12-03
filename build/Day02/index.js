import { readFileSync } from "fs";
import { formatAnswer } from "../utils.js";
const MOVES_MAP = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2,
    Z: 3, //scissors
};
const getOutcome = (p1, p2) => {
    if (p2 === (p1 + 1) || (p2 === 1 && p1 === 3))
        return 6;
    if (p1 === p2)
        return 3;
    return 0;
};
const computeMove = (p1, outcome) => {
    switch (outcome) {
        case "X": {
            return p1 === 1 ? 3 : p1 - 1;
        }
        case "Y": {
            return p1;
        }
        case "Z": {
            return p1 === 3 ? 1 : p1 + 1;
        }
        default: {
            throw new Error();
        }
    }
};
const Day02 = () => {
    const data = readFileSync("public/day02.txt", { encoding: "utf8" });
    const moves = data.split("\n").map((move) => move.split(" "));
    const totalScore = moves.map((move) => {
        const p1 = MOVES_MAP[move[0]];
        const p2 = MOVES_MAP[move[1]];
        return p2 + getOutcome(p1, p2);
    }).reduce((a, b) => a + b);
    console.log(formatAnswer(1, totalScore));
    const totalScore2 = moves.map((move) => {
        const p1 = MOVES_MAP[move[0]];
        const p2 = computeMove(p1, move[1]);
        return p2 + getOutcome(p1, p2);
    }).reduce((a, b) => a + b);
    console.log(formatAnswer(2, totalScore2));
};
export default Day02;