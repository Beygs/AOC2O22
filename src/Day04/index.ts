import { formatAnswer, getData } from "../utils.js";

const splitPair = (pair: string): number[][] =>
  pair
    .split(",")
    .map((assignment) => assignment.split("-").map((num) => parseInt(num)));

function findTotalOverlap(pair: string): boolean {
  const assignments = splitPair(pair);

  if (
    assignments[0][0] >= assignments[1][0] &&
    assignments[0][1] <= assignments[1][1]
  )
    return true;
  if (
    assignments[1][0] >= assignments[0][0] &&
    assignments[1][1] <= assignments[0][1]
  )
    return true;

  return false;
}

const findOverlap = (pair: string): boolean => {
  const assignments = splitPair(pair);

  if (assignments[0][1] < assignments[1][0] || assignments[1][1] < assignments[0][0]) return false;

  return true;
};

const Day04 = () => {
  const data = getData(4);
  const pairs = data.split("\n");

  const totalOverlaps = pairs.map((pair) => findTotalOverlap(pair));
  const totalOverlapsSum = totalOverlaps.filter((val) => val).length;

  console.log(formatAnswer(1, totalOverlapsSum));

  const overlaps = pairs.map((pair) => findOverlap(pair));
  const overlapsSum = overlaps.filter((val) => val).length;

  console.log(formatAnswer(2, overlapsSum));
};

export default Day04;
