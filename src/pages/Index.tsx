import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { Sparkles, Zap, Globe, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-60" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground leading-tight">
            Beautiful by
            <span className="block bg-gradient-secondary bg-clip-text text-transparent">
              Design
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the perfect blend of aesthetics and functionality. Built for the modern web.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-xl font-semibold hover:scale-105"
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary/50 hover:bg-primary/10 text-lg px-8 py-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-accent/20 blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create stunning experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Sparkles}
              title="Modern Design"
              description="Beautiful, responsive interfaces that adapt to any screen size perfectly."
              delay={0}
            />
            <FeatureCard
              icon={Zap}
              title="Lightning Fast"
              description="Optimized performance ensures your users get the best experience."
              delay={100}
            />
            <FeatureCard
              icon={Globe}
              title="Global Ready"
              description="Built to scale globally with enterprise-grade infrastructure."
              delay={200}
            />
            <FeatureCard
              icon={Shield}
              title="Secure"
              description="Industry-leading security practices keep your data protected."
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-secondary p-12 md:p-16 text-center space-y-6 animate-scale-in shadow-glow-secondary">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to get started?
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Join thousands of users who are already creating amazing experiences.
            </p>
            <Button 
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Start Building Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
