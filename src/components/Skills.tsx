"use client";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, GraduationCap, Award, Calendar, Link as LinkIcon, MoveRight, Laptop2, Cloud, Database, BrainCircuit, Code } from "lucide-react"; // Importing more icons
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils"; // Ensure you have this utility function

// --- Updated Data Structure with Icons ---
// Added icons to skill categories for better visual representation.
const skillCategories = [
  {
    category: "Programming Languages",
    icon: Code, // Generic code icon
    skills: [
      "Python", "JavaScript", "Java", "C++", "C"
    ]
  },
  {
    category: "Web Development",
    icon: Linkedin, // Using Linkedin as a placeholder for web dev icon
    skills: [
      "React", "HTML","CSS" //, "Node.js", "Express.js", "Tailwind CSS", "Next.js" 
    ]
  },
  // {
  //   category: "Mobile Development",
  //   icon: GraduationCap, // Using GraduationCap as a placeholder for mobile dev icon
  //   skills: [
  //     "React Native", "REST APIs"
  //   ]
  // },
  {
    category: "Databases",
    icon: Database, // Database icon
    skills: [
      "MySQL", "SQLite" //, "MongoDB"
    ]
  },
  {
    category: "AI/ML & Data Science",
    icon: BrainCircuit, // Brain icon for AI/ML
    skills: [
      "Python", "Pandas", "NumPy", "Scikit-learn" //, "TensorFlow", "OpenCV", "Flask"
    ]
  },
  {
    category: "Tools & Cloud",
    icon: Cloud, // Cloud icon for cloud services
    skills: [
      "Git/GitHub", "Firebase", "VS Code" //, "AWS", "Docker", "GPT/Copilot", "Cursor" // Added Docker, VS Code
    ]
  }
];

const achievements = [
  {
    title: "First Prize at Hackathon Sankalp",
    date: "September 20-21, 2025",
    description: "Achieved first place in a 24-hour hackathon held at MVGR College of Engineering. Developed a Chrome Extension using JavaScript and NLP to detect and highlight dark UX patterns on websites, helping users avoid misleading subscriptions.",
    icon: GraduationCap ,
    status: "hackathon"
  },
  {
    title: "360-Day LeetCode Streak",
    date: "Ongoing",
    description: "Demonstrated commitment to continuous learning through daily problem-solving. Solved 400+ problems, earning 13+ badges on Leetcode.",
    icon: Award, // Award icon
    status:"leetcode" 
  },
  {
    title: "HackerRank Achievements",
    date: "2024-2025",
    description: "Achieved 5-star ratings in SQL and 4-star in Python. Completed intermediate and advanced certifications, showcasing proficiency in database querying and algorithmic problem-solving.",
    icon: Award, // Award icon
    status:"hackerrank"
  }
];

const Skills = () => {
  // We don't need hover state here, as the design is static for skills
  // but we'll keep the structure for potential future interactivity

  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Change 1: Animated background for the entire section */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/5 blur-[100px]"></div>
      </div>

      <div className="container">
        <div className="text-center mb-16">
          {/* Change 2: Gradient heading */}
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-vibrant bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and notable achievements.
          </p>
        </div>

        <div className="space-y-16">
          {/* Skills Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              // Change 3: Each skill category is now a card with a hover effect
              <Card
                key={index}
                className="relative p-6 border-border/20 shadow-sm transition-all duration-300 hover:shadow-primary/10 hover:border-primary"
              >
                {/* Change 4: Animated Corner Frames */}
                <div className="absolute inset-0 border-t border-l border-primary/30 dark:border-primary/30 transition-all duration-300 group-hover:opacity-100 opacity-0">
                  <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary" />
                  <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary" />
                  <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary" />
                </div>
                
                <CardHeader className="p-0 mb-4 flex flex-col items-start">
                  <div className="flex items-center gap-3">
                    {/* Change 5: Animated Icon */}
                    <motion.div
                      className="p-2 rounded-lg bg-primary/10"
                      animate={{ y: [-5, 5, -5] }} // Subtle up-and-down animation
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                      }}
                    >
                      <category.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="text-xs border-secondary/20 text-secondary bg-secondary/5 backdrop-blur-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-primary via-secondary to-vibrant bg-clip-text text-transparent">
              Notable Achievements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6 relative border-border/20 shadow-sm transition-all duration-300 hover:shadow-primary/10 hover:border-primary">
                   {/* Change 6: Animated Corner Frames for Achievements */}
                    <div className="absolute inset-0 border-t border-l border-primary/30 dark:border-primary/30 transition-all duration-300 group-hover:opacity-100 opacity-0">
                      <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary" />
                      <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary" />
                      <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary" />
                      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary" />
                    </div>

                  <CardHeader className="p-0 mb-4">
                    <div className="flex flex-col items-center gap-3">
                       {/* Change 7: Animated Icon for Achievements */}
                       <motion.div
                          className="p-2 rounded-lg bg-secondary/10"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                          }}
                        >
                          <achievement.icon className="w-5 h-5 text-secondary" />
                        </motion.div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    </div>
                    <Badge variant="outline" className="w-fit mx-auto mt-2 text-xs border-primary/30 text-primary/80">
                      {achievement.date}
                    </Badge>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-muted-foreground">
                      {achievement.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


