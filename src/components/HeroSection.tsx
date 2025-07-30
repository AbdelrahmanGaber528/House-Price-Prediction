import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-house.jpg";

export const HeroSection = () => {
  const scrollToPrediction = () => {
    document.getElementById('prediction-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
          Predict Your
          <span className="block bg-gradient-accent bg-clip-text text-transparent">
            Dream Home's Value
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fadeIn delay-150">
          Get instant, AI-powered house price predictions based on advanced machine learning algorithms
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-300">
          <Button 
            size="lg" 
            onClick={scrollToPrediction}
            className="bg-gradient-accent hover:shadow-glow transition-all duration-300 text-primary font-semibold px-8 py-4 text-lg"
          >
            Get Price Prediction
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 px-8 py-4 text-lg"
          >
            Learn More
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fadeIn delay-500">
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div className="animate-fadeIn delay-700">
            <div className="text-3xl font-bold text-accent mb-2">10K+</div>
            <div className="text-gray-300">Properties Analyzed</div>
          </div>
          <div className="animate-fadeIn delay-1000">
            <div className="text-3xl font-bold text-accent mb-2">5 sec</div>
            <div className="text-gray-300">Average Prediction Time</div>
          </div>
        </div>
      </div>
      
      {/* Floating Animation Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-float">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};