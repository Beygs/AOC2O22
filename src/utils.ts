import chalk from "chalk";

export const formatAnswer = (answerNumber: number, answer: unknown): string => {
  const answerText = chalk.green(`Réponse ${answerNumber} :`);
  return `${answerText} ${answer}`;
};
