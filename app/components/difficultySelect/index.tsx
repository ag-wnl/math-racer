"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { difficultySetting } from "@/app/store";
import { useAtom } from "jotai";

export function SelectDifficulty() {
  const [difficulty, setDifficulty] = useAtom(difficultySetting);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[6rem]">
          {difficulty}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setDifficulty("easy")}>
          Easy
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setDifficulty("medium")}>
          Medium
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setDifficulty("hard")}>
          Hard
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
