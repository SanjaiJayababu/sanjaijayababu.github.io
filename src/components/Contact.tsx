import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyber-green">Get</span> <span className="text-foreground">In Touch</span>
          </h2>
          <div className="w-24 h-1 gradient-cyber mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to collaborate on cutting-edge projects? Let's build something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50 bg-card/30">
            <CardHeader>
              <CardTitle className="text-2xl text-cyber-blue">Send Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="bg-muted/50 border-border/50 focus:border-cyber-blue focus:ring-cyber-blue/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@domain.com" 
                    className="bg-muted/50 border-border/50 focus:border-cyber-blue focus:ring-cyber-blue/20"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <Input 
                  placeholder="Project collaboration" 
                  className="bg-muted/50 border-border/50 focus:border-cyber-blue focus:ring-cyber-blue/20"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or idea..."
                  rows={6}
                  className="bg-muted/50 border-border/50 focus:border-cyber-blue focus:ring-cyber-blue/20"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                <Send size={18} />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-border/50 bg-card/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-cyber-blue/10 rounded-lg">
                    <Mail size={24} className="text-cyber-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground font-mono">dev@cyberportfolio.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-cyber-purple/10 rounded-lg">
                    <MapPin size={24} className="text-cyber-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/20">
              <CardHeader>
                <CardTitle className="text-xl text-cyber-green">Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="p-3 bg-muted/30 rounded-lg hover:bg-cyber-blue/10 hover:text-cyber-blue transition-all duration-300 hover-glow-cyber"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-muted/30 rounded-lg hover:bg-cyber-blue/10 hover:text-cyber-blue transition-all duration-300 hover-glow-cyber"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-muted/30 rounded-lg hover:bg-cyber-blue/10 hover:text-cyber-blue transition-all duration-300 hover-glow-cyber"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Quick Response</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24 hours. For urgent matters, 
                  feel free to reach out on LinkedIn.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;