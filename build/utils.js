import chalk from "chalk";
import { readFileSync } from "fs";
export const formatAnswer = (answerNumber, answer) => {
    const answerText = chalk.green(`Réponse ${answerNumber} :`);
    return `${answerText} ${answer}`;
};
export const getData = (day) => {
    return readFileSync(`public/day${day.toString().padStart(2, "0")}.txt`, { encoding: "utf-8" });
};