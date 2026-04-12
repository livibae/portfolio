import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SneakPeek from "@/components/SneakPeek";
import Works from "@/components/Works";
import AboutMe from "@/components/AboutMe";
import WallOfLove from "@/components/WallOfLove";
import LetsTalk from "@/components/LetsTalk";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SneakPeek />
        <Works />
        <AboutMe />
        <WallOfLove />
        <LetsTalk />
      </main>
    </>
  );
}
