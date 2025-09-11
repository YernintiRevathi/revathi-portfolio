import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Full-Stack E-Commerce Platform",
      description: "A comprehensive e-commerce solution built with modern technologies including React, Node.js, and PostgreSQL. Features include user authentication, payment processing with Stripe integration, real-time inventory management, advanced search and filtering capabilities, admin dashboard for order management, responsive design optimized for mobile and desktop experiences, and automated email notifications for order updates. The platform handles thousands of products with efficient database indexing and implements security best practices including input validation, SQL injection prevention, and secure session management.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "JWT"],
      githubUrl: "https://github.com/username/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.example.com",
      featured: true
    },
    {
      title: "AI-Powered Task Management System",
      description: "An intelligent task management application that leverages machine learning algorithms to predict task completion times, automatically prioritize work items based on deadlines and importance, and provide smart scheduling recommendations. Built with TypeScript and Next.js for the frontend, Python/FastAPI for the ML backend, and Redis for caching. Features include natural language processing for task creation, collaborative workspaces with real-time synchronization, advanced analytics and reporting dashboards, integration with popular calendar applications, and mobile-responsive design with offline functionality using service workers.",
      technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "Redis", "ML"],
      githubUrl: "https://github.com/username/ai-task-manager",
      liveUrl: "https://taskmanager-ai.example.com",
      featured: true
    },
    {
      title: "Real-Time Collaborative Code Editor",
      description: "A sophisticated browser-based code editor supporting real-time collaboration between multiple developers. Implements operational transformation algorithms for conflict-free concurrent editing, syntax highlighting for 20+ programming languages, intelligent code completion using Language Server Protocol, integrated terminal with container support, version control integration with Git, and customizable themes and extensions. Built using Monaco Editor, WebSockets for real-time communication, Docker for isolated execution environments, and implements comprehensive user permission systems with role-based access control.",
      technologies: ["Monaco Editor", "WebSockets", "Docker", "Node.js", "Redis"],
      githubUrl: "https://github.com/username/collaborative-editor",
      liveUrl: "https://codeeditor-collab.example.com",
      featured: false
    },
    {
      title: "Blockchain-Based Voting System",
      description: "A transparent and secure voting platform built on Ethereum blockchain technology, ensuring immutable vote records and anonymous voter participation. Features include smart contract development for vote counting and validation, MetaMask integration for wallet connectivity, comprehensive admin panel for election management, real-time vote tallying with cryptographic verification, mobile-responsive interface optimized for accessibility, and detailed audit trails for election transparency. The system implements advanced cryptographic techniques including zero-knowledge proofs for voter privacy while maintaining vote verifiability.",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask"],
      githubUrl: "https://github.com/username/blockchain-voting",
      liveUrl: "https://voting-blockchain.example.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work showcasing expertise in full-stack development, 
            machine learning integration, and modern web technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`h-full ${project.featured ? 'border-primary' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  {project.featured && (
                    <Badge variant="secondary">Featured</Badge>
                  )}
                </div>
                <CardDescription className="text-sm line-clamp-4">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;