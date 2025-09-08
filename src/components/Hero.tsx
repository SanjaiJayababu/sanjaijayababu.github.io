import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/cyber-hero-bg.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 gradient-glow animate-glow-pulse" />
      
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-cyber-blue">Cyber</span>
            <span className="text-foreground">Dev</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground font-mono">
            <span className="text-cyber-green">{'>'}</span> Computer Enthusiast & Developer
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Crafting digital experiences with cutting-edge technology. 
          Passionate about hardware, software, and everything in between.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="hero" size="lg" className="animate-cyber-pulse">
            View My Work
          </Button>
          <Button variant="cyber-outline" size="lg">
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a href="#" className="text-muted-foreground hover:text-cyber-blue transition-colors hover-glow-cyber p-2 rounded-full">
            <Github size={24} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-cyber-blue transition-colors hover-glow-cyber p-2 rounded-full">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-cyber-blue transition-colors hover-glow-cyber p-2 rounded-full">
            <Mail size={24} />
          </a>
        </div>

        <div className="animate-float">
          <ChevronDown size={32} className="text-cyber-blue animate-glow-pulse mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;