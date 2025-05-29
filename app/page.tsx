import { AboutMe } from "@/components/landing/AboutMeSection";
import { FeaturedProjects } from "@/components/landing/FeaturedProjects";
import { HeroSection } from "@/components/landing/HeroSection";
import { Navbar } from "@/components/landing/Navbar";
import { JourneyTimeline } from "@/components/landing/Timeline";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <FeaturedProjects />
      <JourneyTimeline />
    </div>
  );
}
