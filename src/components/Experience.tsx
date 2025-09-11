"use client"; // Change 1: This component now needs to be a client component for state management.

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  // Your data structure is perfect, no changes needed here.
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

  // Change 2: State to track the active/hovered experience. Default to the first one.
  const [activeExperience, setActiveExperience] = useState(0);

  const activeExpData = experiences[activeExperience];

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

        {/* Change 3: A new two-column grid layout for desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[400px]">
          {/* Column 1: The list of job roles (the buttons) */}
          <div className="flex flex-col gap-2">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onMouseEnter={() => setActiveExperience(index)}
                className={`w-full p-4 text-left rounded-md transition-all duration-300 text-lg font-semibold
                  ${activeExperience === index 
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'bg-card hover:bg-muted/50'
                  }`}
              >
                {exp.role}
              </button>
            ))}
          </div>

          {/* Column 2: The detailed card display area */}
          <div className="md:col-span-2">
            <AnimatePresence mode="wait">
              {/* Change 4: The Card now displays only the active experience's data */}
              <motion.div
                key={activeExperience} // This is crucial for the animation to re-trigger
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-border h-full">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="space-y-1">
                        <CardTitle className="text-xl">{activeExpData.role}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-secondary">
                          {activeExpData.company}
                        </CardDescription>
                        <div className="flex flex-wrap items-center gap-2 pt-2">
                          <Badge variant="default" className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {activeExpData.period}
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {activeExpData.location}
                          </Badge>
                          {activeExpData.current && (
                            <Badge variant="destructive" className="animate-pulse">Current</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground text-sm">{activeExpData.description}</p>
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {activeExpData.achievements.map((achievement, achIndex) => (
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
                        {activeExpData.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs bg-secondary/10 text-secondary border-secondary/20">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;



// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Briefcase, Calendar, MapPin } from "lucide-react";

// const Experience = () => {
//   const experiences = [
//     {
//       role: "Freelance App Developer",
//       company: "Ride Booking App",
//       period: "June 2025 - Present",
//       location: "Remote",
//       type: "Freelance",
//       current: true,
//       description: "Developing scalable ride-booking apps (web + mobile) using React, Firebase, and REST APIs. Integrated real-time database and designed backend for scalability and security. Developing a website and an app for efficient ride booking implementations.",
//       achievements: [
//         "Building cross-platform mobile application with React Native",
//         "Implementing real-time GPS tracking and route optimization",
//         "Designing scalable backend architecture with Firebase",
//         "Integrating secure payment gateway and transaction management"
//       ],
//       technologies: ["React Native", "Firebase", "REST APIs", "Real-time Database", "GPS Integration"]
//     },
//     {
//       role: "Java Full Stack Developer Intern",
//       company: "NDV Techsys",
//       period: "May 2025 - Jul 2025",
//       location: "Remote",
//       type: "Internship",
//       current: false,
//       description: "Built software solutions using React, Node.js, and MongoDB. Collaborated in agile sprints, ensuring secure API integration and deployment. Gained hands-on experience in full-stack development with modern technologies and best practices.",
//       achievements: [
//         "Developed full-stack web applications using modern JavaScript stack",
//         "Implemented secure API integrations and database management",
//         "Collaborated effectively in agile development environment",
//         "Contributed to code reviews and deployment processes"
//       ],
//       technologies: ["React", "Node.js", "MongoDB", "JavaScript", "Agile", "API Integration"]
//     },
//     {
//       role: "AI/ML Intern",
//       company: "NDV Techsys",
//       period: "May 2025 - Jul 2025",
//       location: "Remote",
//       type: "Internship",
//       current: false,
//       description: "Built ML models for prediction, classification, and analytics in real projects. Completed hands-on projects in supervised learning algorithms. Gained practical experience in machine learning implementation and model optimization.",
//       achievements: [
//         "Developed machine learning models for real-world applications",
//         "Implemented supervised learning algorithms for classification tasks",
//         "Conducted data preprocessing and feature engineering",
//         "Optimized model performance and accuracy metrics"
//       ],
//       technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "Data Analytics"]
//     }
//   ];

//   return (
//     <section id="experience" className="py-16">
//       <div className="container">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             My journey in software development, from internships to freelance projects, 
//             building expertise in full-stack development and machine learning.
//           </p>
//         </div>

//         <div className="space-y-8">
//           {experiences.map((exp, index) => (
//             //<Card key={index} className={exp.current ? 'border-primary shadow-lg' : ''}>
//             <Card
//                   key={index}
//                   className={`h-full border border-primary shadow-sm transform transition-transform duration-300 hover:-translate-y-2 hover:scale-102 hover:shadow-2xl`}
//             >
//               <CardHeader>
//                 <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
//                   <div className="space-y-2">
//                     <CardTitle className="text-xl flex items-center gap-2">
//                       <Briefcase className="w-5 h-5 text-primary" />
//                       {exp.role}
//                     </CardTitle>
//                     <CardDescription className="text-lg font-semibold text-primary">
//                       {exp.company}
//                     </CardDescription>
//                     <div className="flex flex-wrap gap-2">
//                       <Badge variant="secondary" className="flex items-center gap-1">
//                         <Calendar className="w-3 h-3" />
//                         {exp.period}
//                       </Badge>
//                       <Badge variant="outline" className="flex items-center gap-1">
//                         <MapPin className="w-3 h-3" />
//                         {exp.location}
//                       </Badge>
//                       <Badge variant={exp.current ? "default" : "secondary"}>
//                         {exp.type}
//                       </Badge>
//                       {exp.current && (
//                         <Badge variant="destructive">Current</Badge>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <p className="text-muted-foreground">{exp.description}</p>
                
//                 <div>
//                   <h4 className="font-semibold mb-3">Key Achievements:</h4>
//                   <ul className="space-y-2">
//                     {exp.achievements.map((achievement, achIndex) => (
//                       <li key={achIndex} className="flex items-start gap-2">
//                         <span className="text-primary mt-1">•</span>
//                         <span className="text-sm">{achievement}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold mb-3">Technologies Used:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {exp.technologies.map((tech, techIndex) => (
//                       <Badge key={techIndex} variant="outline" className="text-xs">
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;