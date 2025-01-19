export type DifficultyType = "easy" | "medium" | "hard";

/**
 * math operation for the required problem
 */
export type OperationType =
  | "addition"
  | "subtraction"
  | "multiplication"
  | "percentage"
  | "fraction";

export type ProblemType = {
  problem: string;
  answer: number;
};

export type timeSelect = "15" | "30" | "60" | "120";
