import CoverParticles from "@/components/cover-particals"
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
    <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <p>Introduccion</p>
      </div>
    </main>
  );
}
