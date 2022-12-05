import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import Day01 from "./Day01/index.js";
import Day02 from "./Day02/index.js";
import Day03 from "./Day03/index.js";
import Day04 from "./Day04/index.js";
import Day05 from "./Day05/index.js";
const choices = [
    {
        name: "01",
        value: Day01,
    },
    {
        name: "02",
        value: Day02,
    },
    {
        name: "03",
        value: Day03,
    },
    {
        name: "04",
        value: Day04,
    },
    {
        name: "05",
        value: Day05,
    }
];
console.clear();
const title = chalkAnimation.rainbow("Advent of Code 2022, by Beygs");
await new Promise((res) => setTimeout(res, 2000));
title.stop();
console.log();
inquirer
    .prompt({
    type: "list",
    name: "menu",
    message: "✨ Choose a day ✨",
    choices,
})
    .then((answers) => {
    answers.menu();
});