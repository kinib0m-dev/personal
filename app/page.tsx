import { AboutMe } from "@/components/landing/AboutMeSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { Navbar } from "@/components/landing/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <AboutMe />
    </div>
  );
}
