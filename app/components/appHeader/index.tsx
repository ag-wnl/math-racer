import { SelectDifficulty } from "../difficultySelect";
import { SwitchTime } from "../timeSelect";
import { ToggleTheme } from "../toggleTheme";

export const AppHeader = () => {
  return (
    <header className="flex max-md:flex-col justify-between items-center gap-6">
      <section className="text-2xl">math-racer</section>
      <section className="flex items-center gap-8">
        <SelectDifficulty />
        <SwitchTime />
        <ToggleTheme />
      </section>
    </header>
  );
};
