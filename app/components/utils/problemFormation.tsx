import { DifficultyType } from "@/app/context/types";

export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 *@description forms a fraction problem
 *
 * @param difficulty
 * @returns problem statement string and the numeric answer
 */
export const fractionProblem = (
  difficulty: DifficultyType = "easy"
): {
  problem: string;
  answer: number;
} => {
  /**
   * initialisation
   */
  let numerator: number = 1;
  let denominator: number = 2;
  let wholeNumber: number = 1;

  const ensureSimpleResult = () => {
    denominator = getRandomInt(
      2,
      difficulty === "easy" ? 6 : difficulty === "medium" ? 12 : 20
    );
    numerator = getRandomInt(1, denominator - 1);
    wholeNumber = getRandomInt(denominator, 100);
    while ((numerator * wholeNumber) % denominator !== 0) {
      wholeNumber = getRandomInt(denominator, 100);
    }
  };

  if (difficulty === "easy") {
    ensureSimpleResult();
    wholeNumber = getRandomInt(denominator, 50);
  } else if (difficulty === "medium") {
    ensureSimpleResult();
    wholeNumber = getRandomInt(denominator * 2, 100);
  } else {
    ensureSimpleResult();
    wholeNumber = getRandomInt(denominator * 3, 200);
  }

  const answer = (numerator / denominator) * wholeNumber;

  return {
    problem: `${numerator}/${denominator} of ${wholeNumber}`,
    answer,
  };
};

/**
 * @description util to make multiplication problems
 *
 * @param difficulty
 * @returns problem statement and answer to it
 */
export const multiplicationProblem = (
  difficulty: DifficultyType = "easy"
): {
  problem: string;
  answer: number;
} => {
  let factor1 = 1;
  let factor2 = 1;

  if (difficulty === "easy") {
    factor1 = getRandomInt(1, 10);
    factor2 = getRandomInt(1, 10);
  } else if (difficulty === "medium") {
    factor1 = getRandomInt(10, 20);
    factor2 = getRandomInt(10, 20);
  } else {
    factor1 = getRandomInt(20, 50);
    factor2 = getRandomInt(20, 50);
  }

  const answer = factor1 * factor2;

  return {
    problem: `${factor1} x ${factor2}`,
    answer,
  };
};

/**
 * @description util for addition and subtraction problem
 *
 * @param difficulty
 * @param operation
 * @returns problem statement string and numeric answer
 */
export const additionSubtractionProblem = (
  difficulty: DifficultyType = "easy",
  operation: "addition" | "subtraction" = "addition"
): {
  problem: string;
  answer: number;
} => {
  let number1 = 0;
  let number2 = 0;

  if (difficulty === "easy") {
    number1 = getRandomInt(1, 20);
    number2 = getRandomInt(1, 20);
  } else if (difficulty === "medium") {
    number1 = getRandomInt(20, 100);
    number2 = getRandomInt(20, 100);
  } else {
    number1 = getRandomInt(100, 500);
    number2 = getRandomInt(100, 500);
  }

  if (operation === "subtraction") {
    if (number1 < number2) {
      [number1, number2] = [number2, number1];
    }
  }

  const answer =
    operation === "addition" ? number1 + number2 : number1 - number2;

  return {
    problem:
      operation === "addition"
        ? `${number1} + ${number2}`
        : `${number1} - ${number2}`,
    answer,
  };
};

/**
 * @description util to form percentage problems
 *
 * @param difficulty
 * @returns problem string and numeric answer
 */
export const percentageProblem = (
  difficulty: DifficultyType = "easy"
): {
  problem: string;
  answer: number;
} => {
  let percentage = 0;
  let number = 0;

  if (difficulty === "easy") {
    percentage = getRandomInt(1, 5) * 10; // Ensure percentages are multiples of 10 (10, 20, ..., 50)
    number = getRandomInt(10, 50); // Random number between 10 and 50
  } else if (difficulty === "medium") {
    percentage = getRandomInt(10, 20) * 5; // Ensure percentages are multiples of 5 (50, 55, ..., 100)
    number = getRandomInt(50, 150); // Random number between 50 and 150
  } else {
    percentage = getRandomInt(100, 200); // Random percentage between 100% and 200%
    number = getRandomInt(100, 500); // Random number between 100 and 500
  }

  const answer = (percentage / 100) * number;

  return {
    problem: `${percentage}% of ${number}`,
    answer,
  };
};

/**
 * Simple interest problems
 * @param difficulty
 * @returns
 */
export const simpleInterestProblem = (
  difficulty: DifficultyType = "easy"
): {
  problem: string;
  answer: number;
} => {
  let principal: number;
  let rate: number;
  let time: number;

  if (difficulty === "easy") {
    principal = getRandomInt(100, 500);
    rate = getRandomInt(2, 10);
    time = getRandomInt(1, 3); // Easy problems: short time, small principal
  } else if (difficulty === "medium") {
    principal = getRandomInt(500, 1000);
    rate = getRandomInt(5, 12);
    time = getRandomInt(2, 5); // Medium problems: moderate principal, rate, and time
  } else {
    principal = getRandomInt(1000, 5000);
    rate = getRandomInt(8, 15);
    time = getRandomInt(3, 10); // Hard problems: larger principal, higher rate, and longer time
  }

  const simpleInterest = (principal * rate * time) / 100;
  const problem = `What is the simple interest on a principal of $${principal} for ${time} years at ${rate}% per annum?`;

  return {
    problem,
    answer: simpleInterest,
  };
};

/**
 * PnC problems
 * @param difficulty
 * @returns
 */
export const combinationsAndPermutationsProblem = (
  difficulty: DifficultyType = "easy"
): {
  problem: string;
  answer: number;
} => {
  let n: number;
  let r: number;
  let problem: string;
  let answer: number;

  const factorial = (num: number): number => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  const combinations = (n: number, r: number): number => {
    return factorial(n) / (factorial(r) * factorial(n - r));
  };

  const permutations = (n: number, r: number): number => {
    return factorial(n) / factorial(n - r);
  };

  if (difficulty === "easy") {
    n = getRandomInt(5, 10);
    r = getRandomInt(2, 5);
  } else if (difficulty === "medium") {
    n = getRandomInt(10, 15);
    r = getRandomInt(5, 8);
  } else {
    n = getRandomInt(15, 20);
    r = getRandomInt(8, 12);
  }

  const isPermutation = Math.random() > 0.5;

  if (isPermutation) {
    problem = `P(${n}, ${r})`; // Permutation formula notation
    answer = permutations(n, r);
  } else {
    problem = `C(${n}, ${r})`; // Combination formula notation
    answer = combinations(n, r);
  }

  return {
    problem,
    answer,
  };
};

/**
 * @description profit/loss percentage
 *
 * @param difficulty
 * @returns
 */
export const profitAndLossProblem = (difficulty: DifficultyType = "easy") => {
  let costPrice: number;
  let sellingPrice: number;
  let problem: string;
  let answer: number;

  if (difficulty === "easy") {
    costPrice = getRandomInt(50, 100);
    sellingPrice = getRandomInt(60, 120);
  } else if (difficulty === "medium") {
    costPrice = getRandomInt(100, 200);
    sellingPrice = getRandomInt(120, 250);
  } else {
    costPrice = getRandomInt(200, 500);
    sellingPrice = getRandomInt(250, 600);
  }

  const profitOrLoss = sellingPrice - costPrice;
  let profitOrLossPercentage = (Math.abs(profitOrLoss) / costPrice) * 100;

  profitOrLossPercentage = Math.round(profitOrLossPercentage * 10) / 10;

  if (profitOrLoss > 0) {
    problem = `Cost: $${costPrice}, Sold: $${sellingPrice}, Profit%?`;
    answer = profitOrLossPercentage;
  } else if (profitOrLoss < 0) {
    problem = `Cost: $${costPrice}, Sold: $${sellingPrice}, Loss%?`;
    answer = profitOrLossPercentage;
  } else {
    problem = `Cost: $${costPrice}, Sold: $${sellingPrice}, Profit%?`;
    answer = 0;
  }

  return {
    problem,
    answer,
  };
};

/**
 * @description exponent problems
 *
 * @param difficulty
 * @returns
 */
export const exponentProblem = (difficulty: DifficultyType = "easy") => {
  let base: number;
  let exponent: number;

  if (difficulty === "easy") {
    base = getRandomInt(2, 6);
    exponent = getRandomInt(2, 3);
  } else if (difficulty === "medium") {
    base = getRandomInt(6, 12);
    exponent = getRandomInt(3, 4);
  } else {
    base = getRandomInt(12, 20);
    exponent = getRandomInt(4, 5);
  }

  const answer = Math.pow(base, exponent);
  const problem = `${base} ^ ${exponent}`;

  return {
    problem,
    answer,
  };
};

/**
 * util for linear eqn
 * @param difficulty
 * @returns
 */
export const linearEquationProblem = (difficulty: DifficultyType = "easy") => {
  let a: number;
  let b: number;
  let c: number;
  let problem: string;
  let x: number;

  if (difficulty === "easy") {
    a = getRandomInt(1, 5);
    b = getRandomInt(1, 5);
    c = getRandomInt(10, 20);
  } else if (difficulty === "medium") {
    a = getRandomInt(5, 10);
    b = getRandomInt(1, 10);
    c = getRandomInt(20, 50);
  } else {
    a = getRandomInt(10, 15);
    b = getRandomInt(5, 15);
    c = getRandomInt(50, 100);
  }

  // Randomly choose equation type (1: ax + b = c, 2: a + bx = c, 3: ax + bx = c)
  const equationType = getRandomInt(1, 3);

  // Generate the equation and solve for x
  if (equationType === 1) {
    problem = `${a}x + ${b} = ${c}`;
    x = (c - b) / a;
  } else if (equationType === 2) {
    problem = `${a} + ${b}x = ${c}`;
    x = (c - a) / b;
  } else {
    problem = `${a}x + ${b}x = ${c}`;
    x = c / (a + b);
  }

  // Ensure the result has at most 2 decimal places
  x = Math.round(x * 100) / 100;

  return {
    problem,
    answer: x,
  };
};
