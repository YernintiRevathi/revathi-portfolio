"use client"; // The Accordion component is interactive, so this must be a client component.

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CardDescription } from "@/components/ui/card"; // We can reuse this for styling
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

const Experience = () => {
  // Your data structure is perfect and remains unchanged.
  const experiences = [
    {
      role: "Freelance App Developer",
      company: "Ride Booking App",
      period: "June 2025 - Present",
      location: "Remote",
      type: "Freelance",
      current: true,
      description: "Developing scalable ride-booking apps (web + mobile) using React, Firebase, and REST APIs. Integrated real-time database and designed backend for scalability and security. Developing a website and an app for efficient ride booking implementations.",
      achievements: [
        "Building cross-platform mobile application with React Native",
        "Implementing real-time GPS tracking and route optimization",
        "Designing scalable backend architecture with Firebase",
        "Integrating secure payment gateway and transaction management"
      ],
      technologies: ["React Native", "Firebase", "REST APIs", "Real-time Database", "GPS Integration"]
    },
    {
      role: "Java Full Stack Developer Intern",
      company: "NDV Techsys",
      period: "May 2025 - Jul 2025",
      location: "Remote",
      type: "Internship",
      current: false,
      description: "Built software solutions using React, Node.js, and MongoDB. Collaborated in agile sprints, ensuring secure API integration and deployment. Gained hands-on experience in full-stack development with modern technologies and best practices.",
      achievements: [
        "Developed full-stack web applications using modern JavaScript stack",
        "Implemented secure API integrations and database management",
        "Collaborated effectively in agile development environment",
        "Contributed to code reviews and deployment processes"
      ],
      technologies: ["React", "Node.js", "MongoDB", "JavaScript", "Agile", "API Integration"]
    },
    {
      role: "AI/ML Intern",
      company: "NDV Techsys",
      period: "May 2025 - Jul 2025",
      location: "Remote",
      type: "Internship",
      current: false,
      description: "Built ML models for prediction, classification, and analytics in real projects. Completed hands-on projects in supervised learning algorithms. Gained practical experience in machine learning implementation and model optimization.",
      achievements: [
        "Developed machine learning models for real-world applications",
        "Implemented supervised learning algorithms for classification tasks",
        "Conducted data preprocessing and feature engineering",
        "Optimized model performance and accuracy metrics"
      ],
      technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "Data Analytics"]
    }
  ];

  return (
    <section id="experience" className="py-16">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-vibrant bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in software development, building expertise in full-stack and machine learning.
          </p>
        </div>

        {/* Change 1: Replaced the main container with the Accordion component */}
        <Accordion type="single" collapsible className="w-full">
          {experiences.map((exp, index) => (
            <AccordionItem key={index} value={index.toString()}>
              
              {/* Change 2: The AccordionTrigger is the clickable part (your role title) */}
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                {exp.role} ({exp.company})
              </AccordionTrigger>
              
              {/* Change 3: The AccordionContent is the part that drops down */}
              <AccordionContent className="pt-4">
                {/* We can now place all the detailed content inside here */}
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                     <CardDescription className="text-lg font-semibold text-secondary">
                        {exp.company}
                      </CardDescription>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="default" className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </Badge>
                        {exp.current && (
                          <Badge variant="destructive" className="animate-pulse">Current</Badge>
                        )}
                      </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs bg-secondary/10 text-secondary border-secondary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Experience;