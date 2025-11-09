import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { Sparkles, Zap, Globe, Shield, Brain, Code, Database, Laptop, Network, BarChart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import mecLogo from "@/assets/mec-logo.png";

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
          <div className="flex justify-center mb-8">
            <img 
              src={mecLogo} 
              alt="Madras Engineering College in 2025 
              className="w-32 h-32 md:w-40 md:h-40 animate-scale-in drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
            Madras Engineering College
            <span className="block text-3xl md:text-4xl mt-4 bg-gradient-secondary bg-clip-text text-transparent">
              Kolathur, Chennai
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foregrouInstitutionnd max-w-3xl mx-auto leading-relaxed">
            Engineering  college - A Legacy of Excellence in 2025
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-xl font-semibold hover:scale-105"
            >
              Apply for Admission
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary/50 hover:bg-primary/10 text-lg px-8 py-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Explore Campus
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent">230+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Years Legacy</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent">6</div>
              <div className="text-xs md:text-sm text-muted-foreground">UG Programs</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent">15+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Departments</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent">10k+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Alumni</div>
            </div>
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
              Courses Offered
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our cutting-edge engineering programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Code}
              title="B.Tech CSE"
              description="Computer Science and Engineering - Master the fundamentals of computing and software development."
              delay={0}
            />
            <FeatureCard
              icon={Laptop}
              title="B.Tech IT"
              description="Information Technology - Build expertise in IT infrastructure, networks, and enterprise systems."
              delay={100}
            />
            <FeatureCard
              icon={Brain}
              title="B.Tech AIDS"
              description="Artificial Intelligence and Data Science - Lead the future with AI and advanced data analytics."
              delay={200}
            />
            <FeatureCard
              icon={Network}
              title="B.Tech AIML"
              description="Artificial Intelligence and Machine Learning - Innovate with cutting-edge AI and ML technologies."
              delay={300}
            />
            <FeatureCard
              icon={BarChart}
              title="BE CSBS"
              description="Computer Science and Business Systems - Bridge technology and business for digital transformation."
              delay={400}
            />
            <FeatureCard
              icon={Database}
              title="B.Tech ECE"
              description="Electronics and Communication Engineering - Pioneer innovations in electronics and communication."
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-secondary p-12 md:p-16 text-center space-y-6 animate-scale-in shadow-glow-secondary">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Join the Legacy
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Be part of India's most prestigious engineering institution and shape your future.
            </p>
            <Button 
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
