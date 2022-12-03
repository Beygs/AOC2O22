import chalk from "chalk";
import { readFileSync } from "fs";

export const formatAnswer = (answerNumber: number, answer: unknown): string => {
  const answerText = chalk.green(`Réponse ${answerNumber} :`);
  return `${answerText} ${answer}`;
};

export const getData = (day: number): string => {
  return readFileSync(`public/day${day.toString().padStart(2, "0")}.txt`, { encoding: "utf-8" });
};
