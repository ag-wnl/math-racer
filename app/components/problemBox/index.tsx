"use client";

import { useProblemContext } from "@/app/context/problemContext";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { problemOrchestrator } from "../utils/problemOrchestrator";
import { ProblemType } from "@/app/context/types";
import { useAtomValue } from "jotai";
import { difficultySetting, timeSetting } from "@/app/store";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

export const ProblemBox = () => {
  const difficulty = useAtomValue(difficultySetting);
  const maxTime = useAtomValue(timeSetting);

  const {
    timeElapsed,
    setTimeElapsed,
    isRunning,
    setIsRunning,
    totalProbs,
    setTotalProbs,
    setCorrectAns,
    correctAns,
  } = useProblemContext();

  const [problemSet, setProblemSet] = useState<ProblemType[] | undefined>();
  const [problemIndex, setProblemIndex] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>("");

  useEffect(() => {
    const problems = problemOrchestrator(difficulty, 100);
    setProblemSet(problems);
    setProblemIndex(0);
    setUserInput("");
  }, [difficulty]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);

    if (problemSet) {
      const currentProblem = problemSet[problemIndex];
      const userAnswer = parseFloat(value);

      if (userAnswer === currentProblem.answer) {
        setCorrectAns(correctAns + 1);
        moveToNextProblem();
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      moveToNextProblem();
    }
  };

  const moveToNextProblem = () => {
    if (problemIndex === 0) {
      setIsRunning(true);
    }
    setProblemIndex((prevIndex) => (prevIndex + 1) % (problemSet?.length || 1));
    setTotalProbs(totalProbs + 1);
    setUserInput("");
  };

  return (
    <section className="flex flex-col items-center justify-center gap-10">
      {timeElapsed === parseInt(maxTime) ? (
        <>
          <div className="w-[50rem] flex flex-col items-center justify-center text-3xl font-bold p-10 border border-gray-100 dark:border-gray-800">
            <div className="flex flex-col gap-2 items-start">
              <span className="text-red-400">total problems: {totalProbs}</span>
              <span className="text-green-400">
                correct problems: {correctAns}
              </span>
            </div>
          </div>
          <Button onClick={() => setTimeElapsed(0)}>
            <RotateCcw />
          </Button>
        </>
      ) : (
        <>
          <span className="text-green-500 h-[1rem]">
            {isRunning ? timeElapsed : ""}
          </span>
          <div className="w-[50rem] flex flex-col items-center justify-center text-6xl text-green-500 font-bold p-10 border border-gray-100 dark:border-gray-800">
            <div>{`${problemSet?.[problemIndex].problem}`}</div>
          </div>

          <div>
            <Input
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              type="text"
              placeholder="type..."
              className="border border-gray-100 dark:border-gray-800"
            />
          </div>
        </>
      )}
    </section>
  );
};
