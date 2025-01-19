import { SwitchTime } from "../timeSelect";
import { ToggleTheme } from "../toggleTheme";

export const AppHeader = () => {
  return (
    <header className="flex justify-between items-center">
      <section className="text-2xl">math-racer</section>
      <section className="flex items-center gap-8">
        <SwitchTime />
        <ToggleTheme />
      </section>
    </header>
  );
};
