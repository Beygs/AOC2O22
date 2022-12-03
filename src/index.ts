import inquirer, { DistinctChoice, ListChoiceMap } from "inquirer";
import chalkAnimation from "chalk-animation";
import Day01 from "./Day01/index.js";
import Day02 from "./Day02/index.js";

const choices: DistinctChoice<
  { menu: () => void },
  ListChoiceMap<{ menu: () => void }>
>[] = [
  {
    name: "01",
    value: Day01,
  },
  {
    name: "02",
    value: Day02,
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
