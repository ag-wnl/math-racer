"use client";

import { timeSetting } from "@/app/store";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAtom } from "jotai";

export function SwitchTime() {
  const [time, setTime] = useAtom(timeSetting);
  console.log("time- ", time);
  return (
    <Tabs
      defaultValue={time}
      value={time}
      onValueChange={(newValue) =>
        setTime(newValue as "15" | "30" | "60" | "120")
      }
    >
      <TabsList>
        <TabsTrigger value="15">15s</TabsTrigger>
        <TabsTrigger value="30">30s</TabsTrigger>
        <TabsTrigger value="60">60s</TabsTrigger>
        <TabsTrigger value="120">120s</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
