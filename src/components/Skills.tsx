import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      color: "cyber-blue",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Three.js", level: 75 }
      ]
    },
    {
      title: "Backend & DevOps",
      color: "cyber-purple",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 85 },
        { name: "Docker", level: 88 },
        { name: "AWS/GCP", level: 80 }
      ]
    },
    {
      title: "Hardware & Systems",
      color: "cyber-green",
      skills: [
        { name: "PC Building", level: 98 },
        { name: "Linux Systems", level: 90 },
        { name: "Networking", level: 85 },
        { name: "IoT/Arduino", level: 78 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyber-green">Tech</span> <span className="text-foreground">Stack</span>
          </h2>
          <div className="w-24 h-1 gradient-cyber mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-300 hover-lift">
              <CardHeader>
                <CardTitle className={`text-xl text-center text-cyber-${category.color}`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ease-out glow-cyber`}
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, hsl(var(--cyber-${category.color})), hsl(var(--cyber-${category.color})) 70%, transparent)`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="border-border/50 bg-card/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-cyber-blue">Current Setup</h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-semibold text-cyber-purple mb-3">Hardware</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                    <li>• AMD Ryzen 9 7950X</li>
                    <li>• NVIDIA RTX 4090</li>
                    <li>• 64GB DDR5-6000</li>
                    <li>• 2TB NVMe SSD</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-cyber-green mb-3">Software</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                    <li>• Arch Linux BTW</li>
                    <li>• VS Code + Neovim</li>
                    <li>• Docker + K8s</li>
                    <li>• Git + GitHub</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;