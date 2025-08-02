import { HeroSection } from "@/components/HeroSection";
import { PredictionForm } from "@/components/PredictionForm";
import { FeaturesSection } from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <PredictionForm />
    </div>
  );
};

export default Index;
