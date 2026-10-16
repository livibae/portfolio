import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WallOfLove from "@/components/WallOfLove";
import LetsTalk from "@/components/LetsTalk";
import { BloopJourneyProvider } from "@/components/ui/bloop-journey-context";
import ScrollBloop from "@/components/ui/scroll-bloop";

export default function Home() {
  return (
    <BloopJourneyProvider>
      <Navbar />
      <ScrollBloop />
      <main>
        <Hero />
        <WallOfLove />
        <LetsTalk />
      </main>
    </BloopJourneyProvider>
  );
}
