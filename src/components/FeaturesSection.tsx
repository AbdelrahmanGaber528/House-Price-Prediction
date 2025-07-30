export const FeaturesSection = () => {
  const features = [
    {
      icon: "🏠",
      title: "Advanced ML Algorithms",
      description: "Our sophisticated machine learning models analyze thousands of data points to provide accurate predictions."
    },
    {
      icon: "📊",
      title: "Real-time Market Data",
      description: "Get predictions based on the latest market trends and comparable property sales in your area."
    },
    {
      icon: "⚡",
      title: "Instant Results",
      description: "Receive your property valuation in seconds, not days. No waiting for manual appraisals."
    },
    {
      icon: "🎯",
      title: "High Accuracy",
      description: "Our models achieve 98% accuracy by continuously learning from new market data and sales."
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description: "Your property information is encrypted and never shared with third parties."
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Access predictions anywhere, anytime with our fully responsive design."
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Our AI Predictions?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of cutting-edge technology combined with comprehensive market analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};