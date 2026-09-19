import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WallOfLove from "@/components/WallOfLove";
import LetsTalk from "@/components/LetsTalk";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WallOfLove />
        <LetsTalk />
      </main>
    </>
  );
}
