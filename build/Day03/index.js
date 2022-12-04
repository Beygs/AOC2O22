import { formatAnswer, getData } from "../utils.js";
const getDuplicate = (rucksack) => {
    const firstHalf = [...rucksack];
    const secondHalf = firstHalf.splice(Math.floor(firstHalf.length / 2));
    for (const item of secondHalf) {
        if (firstHalf.find((i) => i === item))
            return item;
    }
    return "";
};
const getPriority = (char) => {
    const code = char.charCodeAt(0);
    if (char.toUpperCase() === char) {
        return code - 64 + 26;
    }
    else {
        return code - 96;
    }
};
const getBadges = (rucksacks) => {
    const result = [];
    for (let i = 0; i < rucksacks.length; i += 3) {
        const duplicates = [];
        for (let j = 0; j < rucksacks[i + 1].length; j++) {
            if (rucksacks[i].split("").find((item) => item === rucksacks[i + 1][j])) {
                duplicates.push(rucksacks[i + 1][j]);
            }
        }
        for (const item of rucksacks[i + 2]) {
            if (duplicates.find((i) => i === item)) {
                result.push(item);
                break;
            }
        }
    }
    return result;
};
const Day03 = () => {
    const data = getData(3);
    const rucksacks = data.split("\n");
    const duplicates = rucksacks.map((rucksack) => getDuplicate(rucksack));
    const priorities = duplicates.map((item) => getPriority(item));
    const prioritiesSum = priorities.reduce((a, b) => a + b);
    console.log(formatAnswer(1, prioritiesSum));
    const badges = getBadges(rucksacks);
    const badgesPriorities = badges.map((badge) => getPriority(badge));
    const badgesSum = badgesPriorities.reduce((a, b) => a + b);
    console.log(formatAnswer(2, badgesSum));
};
export default Day03;