import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface HouseFeatures {
  bedrooms: string;
  bathrooms: string;
  sqft: string;
  yearBuilt: string;
  location: string;
  propertyType: string;
  condition: string;
}

interface PredictionResult {
  predictedPrice: number;
  confidence: number;
  priceRange: {
    min: number;
    max: number;
  };
}

export const PredictionForm = () => {
  const [features, setFeatures] = useState<HouseFeatures>({
    bedrooms: "",
    bathrooms: "",
    sqft: "",
    yearBuilt: "",
    location: "",
    propertyType: "",
    condition: ""
  });
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof HouseFeatures, value: string) => {
    setFeatures(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const requiredFields = ['bedrooms', 'bathrooms', 'sqft', 'yearBuilt', 'location', 'propertyType', 'condition'];
    return requiredFields.every(field => features[field as keyof HouseFeatures].trim() !== '');
  };

  const handlePredict = async () => {
    if (!validateForm()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to get a prediction.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call to ML model
    setTimeout(() => {
      const basePrice = Math.random() * 500000 + 200000;
      const mockPrediction: PredictionResult = {
        predictedPrice: Math.round(basePrice),
        confidence: Math.round((Math.random() * 15 + 85) * 10) / 10,
        priceRange: {
          min: Math.round(basePrice * 0.9),
          max: Math.round(basePrice * 1.1)
        }
      };
      
      setPrediction(mockPrediction);
      setIsLoading(false);
      
      toast({
        title: "Prediction Complete!",
        description: "Your house price prediction is ready.",
      });
    }, 2000);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="prediction-form" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Get Your House Price Prediction</h2>
          <p className="text-xl text-muted-foreground">
            Enter your property details below to receive an AI-powered price estimation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Property Details</CardTitle>
              <CardDescription>
                Provide accurate information for the best prediction results
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Select value={features.bedrooms} onValueChange={(value) => handleInputChange('bedrooms', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bathrooms">Bathrooms</Label>
                  <Select value={features.bathrooms} onValueChange={(value) => handleInputChange('bathrooms', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map(num => (
                        <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sqft">Square Footage</Label>
                <Input
                  id="sqft"
                  type="number"
                  placeholder="e.g., 2000"
                  value={features.sqft}
                  onChange={(e) => handleInputChange('sqft', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="yearBuilt">Year Built</Label>
                <Input
                  id="yearBuilt"
                  type="number"
                  placeholder="e.g., 2010"
                  value={features.yearBuilt}
                  onChange={(e) => handleInputChange('yearBuilt', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location (City, State)</Label>
                <Input
                  id="location"
                  placeholder="e.g., San Francisco, CA"
                  value={features.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="propertyType">Property Type</Label>
                <Select value={features.propertyType} onValueChange={(value) => handleInputChange('propertyType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single-family">Single Family Home</SelectItem>
                    <SelectItem value="condo">Condominium</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="condition">Property Condition</Label>
                <Select value={features.condition} onValueChange={(value) => handleInputChange('condition', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                    <SelectItem value="poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handlePredict}
                disabled={isLoading}
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg py-6"
              >
                {isLoading ? "Analyzing Property..." : "Get Price Prediction"}
              </Button>
            </CardContent>
          </Card>

          {/* Prediction Results */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Prediction Results</CardTitle>
              <CardDescription>
                AI-powered price estimation based on your property details
              </CardDescription>
            </CardHeader>
            <CardContent>
              {prediction ? (
                <div className="space-y-6">
                  <div className="text-center p-8 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-2">Estimated Property Value</div>
                    <div className="text-4xl font-bold text-primary mb-4">
                      {formatPrice(prediction.predictedPrice)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Confidence: {prediction.confidence}%
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-primary mb-4">Price Range</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <div className="text-sm text-muted-foreground">Minimum</div>
                        <div className="text-xl font-semibold text-primary">
                          {formatPrice(prediction.priceRange.min)}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <div className="text-sm text-muted-foreground">Maximum</div>
                        <div className="text-xl font-semibold text-primary">
                          {formatPrice(prediction.priceRange.max)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> This prediction is based on machine learning algorithms analyzing similar properties. 
                      Market conditions and unique property features may affect actual values.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Ready for Prediction</h3>
                  <p className="text-muted-foreground">
                    Fill out the property details form to get your AI-powered price prediction
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};