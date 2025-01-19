import { DifficultyType, OperationType } from "@/app/context/types";
import {
  additionSubtractionProblem,
  fractionProblem,
  getRandomInt,
  multiplicationProblem,
  percentageProblem,
} from "./problemFormation";

const getRandomOperation = (operations: OperationType[]): OperationType => {
  const randomIndex = getRandomInt(0, operations.length - 1);
  return operations[randomIndex];
};

export const problemOrchestrator = (
  difficulty: DifficultyType,
  numberOfProblems: number
) => {
  const problems: { problem: string; answer: number }[] = [];
  const operationTypes: OperationType[] =
    difficulty === "easy"
      ? ["addition", "subtraction", "multiplication"]
      : ["addition", "subtraction", "multiplication", "percentage", "fraction"];

  for (let i = 0; i < numberOfProblems; i++) {
    const operation = getRandomOperation(operationTypes);

    let problem: { problem: string; answer: number };
    if (operation === "addition") {
      problem = additionSubtractionProblem(difficulty, "addition");
    } else if (operation === "subtraction") {
      problem = additionSubtractionProblem(difficulty, "subtraction");
    } else if (operation === "multiplication") {
      problem = multiplicationProblem(difficulty);
    } else if (operation === "percentage") {
      problem = percentageProblem(difficulty);
    } else {
      problem = fractionProblem(difficulty);
    }

    problems.push(problem);
  }

  return problems;
};
