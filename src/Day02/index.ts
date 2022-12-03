import { formatAnswer, getData } from "../utils.js";

const MOVES_MAP = {
  A: 1, //rock
  B: 2, //paper
  C: 3, //scissors
  X: 1, //rock
  Y: 2, //paper
  Z: 3, //scissors
};

const getOutcome = (p1: number, p2: number): number => {
  if (p2 === (p1 + 1) || (p2 === 1 && p1 === 3)) return 6;
  if (p1 === p2) return 3;
  return 0;
};

const computeMove = (p1: number, outcome: string): number => {
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
  const data = getData(2);

  const moves = data.split("\n").map((move) => move.split(" "));

  const totalScore = moves.map((move) => {
    const p1 = MOVES_MAP[move[0] as keyof (typeof MOVES_MAP)];
    const p2 = MOVES_MAP[move[1] as keyof (typeof MOVES_MAP)];

    return p2 + getOutcome(p1, p2);
  }).reduce((a, b) => a + b);

  console.log(formatAnswer(1, totalScore));

  const totalScore2 = moves.map((move) => {
    const p1 = MOVES_MAP[move[0] as keyof (typeof MOVES_MAP)];
    const p2 = computeMove(p1, move[1]);

    return p2 + getOutcome(p1, p2);
  }).reduce((a, b) => a + b);

  console.log(formatAnswer(2, totalScore2));
};

export default Day02;