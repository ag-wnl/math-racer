import { AppHeader } from "./components/appHeader";
import { ProblemBox } from "./components/problemBox";

export default function Home() {
  return (
    <main className="max-md:px-[1rem] md:px-[10rem] py-[2rem] font-[family-name:var(--font-geist-mono)] flex flex-col gap-20">
      <AppHeader />
      <ProblemBox />
    </main>
  );
}
