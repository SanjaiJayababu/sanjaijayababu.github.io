import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Neural Network Visualizer",
      description: "Real-time 3D visualization of neural network training processes built with Three.js and WebGL shaders.",
      image: "/api/placeholder/400/300",
      tags: ["Three.js", "WebGL", "Python", "TensorFlow"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Custom Linux Distro",
      description: "Lightweight Linux distribution optimized for development workflows with custom kernel patches.",
      image: "/api/placeholder/400/300",
      tags: ["Linux", "C", "Bash", "Assembly"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Distributed Chat System",
      description: "Scalable real-time chat application using WebRTC and custom P2P protocol implementation.",
      image: "/api/placeholder/400/300",
      tags: ["Node.js", "WebRTC", "Socket.io", "Redis"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Hardware Monitor Dashboard",
      description: "Real-time system monitoring with custom sensors and IoT integration for temperature tracking.",
      image: "/api/placeholder/400/300",
      tags: ["React", "Arduino", "Python", "InfluxDB"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "AI Code Optimizer",
      description: "Machine learning tool that analyzes and optimizes code performance using static analysis.",
      image: "/api/placeholder/400/300",
      tags: ["Python", "LLVM", "PyTorch", "AST"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Cyberpunk UI Library",
      description: "Component library with futuristic animations and neon aesthetics for web applications.",
      image: "/api/placeholder/400/300",
      tags: ["React", "TypeScript", "Framer Motion", "Storybook"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyber-blue">Featured</span> <span className="text-foreground">Projects</span>
          </h2>
          <div className="w-24 h-1 gradient-cyber mx-auto rounded-full"></div>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300 hover-lift group overflow-hidden">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-cyber-blue/30 font-mono">{"{}"}</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-cyber-blue transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="border-cyber-blue/30 text-cyber-blue">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="cyber-outline" size="sm">
                    <Github size={16} />
                    Code
                  </Button>
                  <Button variant="cyber" size="sm">
                    <ExternalLink size={16} />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-300 hover-lift group">
              <CardHeader>
                <CardTitle className="text-lg text-foreground group-hover:text-cyber-purple transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs border-cyber-purple/30 text-cyber-purple">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                    <Github size={14} />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                    <ExternalLink size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cyber-outline" size="lg">
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
