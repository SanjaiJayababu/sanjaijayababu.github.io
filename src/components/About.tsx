import { Card, CardContent } from "@/components/ui/card";
import { Code, Cpu, Database, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building scalable applications with modern frameworks and technologies"
    },
    {
      icon: Cpu,
      title: "Hardware Enthusiast",
      description: "Deep understanding of computer architecture and system optimization"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Designing efficient data pipelines and storage solutions"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Maximizing system performance through code and hardware tuning"
    }
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyber-purple">About</span> <span className="text-foreground">Me</span>
          </h2>
          <div className="w-24 h-1 gradient-cyber mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate computer enthusiast who lives and breathes technology. 
              From building custom rigs to developing cutting-edge software, I thrive 
              on pushing the boundaries of what's possible.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey began with dismantling old computers as a kid, and has evolved 
              into creating complex systems that solve real-world problems. I believe 
              in the perfect fusion of hardware and software excellence.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Python", "Docker", "AWS"].map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20 rounded-full text-sm font-mono hover:bg-cyber-blue/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-border/50 bg-card/50 hover:bg-card/80 hover:border-cyber-blue/30 transition-all duration-300 hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-cyber-blue/10 rounded-lg">
                      <item.icon size={24} className="text-cyber-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;