import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { SafetySection } from "./components/SafetySection";
import { ImpactSection } from "./components/ImpactSection";
import { BusinessSection } from "./components/BusinessSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { TeamSection } from "./components/TeamSection";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  return (
    <div style={{ fontFamily: "'Inter', 'system-ui', sans-serif", background: "#0a0010", minHeight: "100vh" }}>
      <NavBar />
      <div style={{ paddingTop: "64px" }}>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <SafetySection />
        <ImpactSection />
        <BusinessSection />
        <RoadmapSection />
        <TeamSection />
        <FooterSection />
      </div>
    </div>
  );
}
