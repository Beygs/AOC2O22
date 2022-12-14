import { formatAnswer, getData } from "../utils.js";
const Day01 = () => {
    const data = getData(1);
    const elves = data.split("\n\n").map((elf) => elf.split("\n").map((cal) => parseInt(cal)));
    const calories = elves.map((elf) => elf.reduce((a, b) => a + b));
    const topElf = Math.max(...calories);
    console.log(formatAnswer(1, topElf));
    const topElves = [];
    for (let i = 0; i < 3; i++) {
        const id = calories.findIndex((cal) => cal === Math.max(...calories));
        topElves.push(calories.splice(id, 1)[0]);
    }
    const topElvesTotal = topElves.reduce((a, b) => a + b);
    console.log(formatAnswer(2, topElvesTotal));
};
export default Day01;