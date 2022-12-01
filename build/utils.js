import chalk from "chalk";
export const formatAnswer = (answerNumber, answer) => {
    const answerText = chalk.green(`Réponse ${answerNumber} :`);
    return `${answerText} ${answer}`;
};