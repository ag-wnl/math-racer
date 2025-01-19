"use client";

import { useAtomValue } from "jotai";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { timeSetting } from "../store";

interface ProblemContextType {
  correctAns: number;
  setCorrectAns: (value: number) => void;
  totalProbs: number;
  setTotalProbs: (value: number) => void;
  timeElapsed: number;
  setTimeElapsed: (value: number) => void;
  isRunning: boolean;
  setIsRunning: (value: boolean) => void;
}

const ProblemContext = createContext<ProblemContextType | undefined>(undefined);

export const ProblemProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const maxTime = useAtomValue(timeSetting);
  const [correctAns, setCorrectAns] = useState<number>(0);
  const [totalProbs, setTotalProbs] = useState<number>(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // timer:
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let intervalId: any;

    if (isRunning && timeElapsed < parseInt(maxTime)) {
      intervalId = setInterval(() => {
        setTimeElapsed((prevSeconds) => {
          if (prevSeconds >= parseInt(maxTime)) {
            setIsRunning(false);
            return parseInt(maxTime);
          }
          return prevSeconds + 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, timeElapsed, maxTime]);

  return (
    <ProblemContext.Provider
      value={{
        correctAns,
        setCorrectAns,
        totalProbs,
        setTotalProbs,
        timeElapsed,
        setTimeElapsed,
        isRunning,
        setIsRunning,
      }}
    >
      {children}
    </ProblemContext.Provider>
  );
};

export const useProblemContext = (): ProblemContextType => {
  const context = useContext(ProblemContext);
  if (!context) {
    throw new Error("useProblemContext must be used within an ProblemProvider");
  }
  return context;
};
