import { DifficultyType, timeSelect } from "../context/types";
import { atomWithStorage } from "jotai/utils";

export const difficultySetting = atomWithStorage<DifficultyType>(
  "difficulty_setting",
  "easy"
);
export const timeSetting = atomWithStorage<timeSelect>("time_selection", "15");
