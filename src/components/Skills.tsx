"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Code, Globe, Database, Cpu, Wrench, CalendarCheck, GraduationCap, Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// --- Data for your icons and skills ---
const skillCategories = [
  {
    category: "Programming Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "Java", "C++", "C"]
  },
  {
    category: "Web Development",
    icon: Globe,
    skills: ["React", "Node.js", "Express.js", "HTML/CSS", "Tailwind CSS", "Next.js"]
  },
  {
    category: "Mobile Development",
    icon: Globe,
    skills: ["React Native", "REST APIs"]
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["MySQL", "SQLite", "MongoDB"]
  },
  {
    category: "AI/ML & Data Science",
    icon: Cpu,
    skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "OpenCV", "Flask"]
  },
  {
    category: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git/GitHub", "Firebase", "AWS", "Docker", "VS Code", "GPT/Copilot", "Cursor"]
  }
];

const achievements = [
  {
    title: "All-India Hackathon Participant",
    date: "September 2024",
    description: "Collaborated with diverse teams across India in a national-level hackathon, focusing on innovative problem-solving.",
    icon: GraduationCap,
    status: "hackathon"
  },
  {
    title: "290-Day LeetCode Streak",
    date: "Ongoing",
    description: "Demonstrated commitment to continuous learning through daily problem-solving. Solved 400+ problems, earning 13+ badges.",
    icon: Award,
    status: "leetcode",
    link: "https://leetcode.com/u/RevathiYerninti/"
  },
  {
    title: "HackerRank Achievements",
    date: "2024-2025",
    description: "Achieved 5-star ratings in SQL and 4-star in Python. Completed intermediate and advanced certifications.",
    icon: Award,
    status: "hackerrank",
    link: "https://www.hackerrank.com/profile/22331A05I6"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/5 blur-[100px]"></div>
      </div>

      <div className="container">
        <div className="text-center mb-16">
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
              <Card
                key={index}
                className="relative p-6 border-border/20 shadow-sm transition-all duration-300 hover:shadow-primary/10 hover:border-primary group"
              >
                <div className="absolute inset-0 border-t border-l border-primary/30 dark:border-primary/30 transition-all duration-300 group-hover:opacity-100 opacity-0">
                  <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-primary" />
                  <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-primary" />
                  <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-primary" />
                  <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-primary" />
                </div>
                
                <CardHeader className="p-0 mb-4 flex flex-col items-start">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="p-2 rounded-lg bg-primary/10"
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
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
                <Card key={index} className="flex flex-col text-center p-6 relative border-border/20 shadow-sm transition-all duration-300 hover:shadow-primary/10 hover:border-primary group">
                    <div className="absolute inset-0 border-t border-l border-primary/30 dark:border-primary/30 transition-all duration-300 group-hover:opacity-100 opacity-0">
                      <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-primary" />
                      <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-primary" />
                      <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-primary" />
                      <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-primary" />
                    </div>

                  <CardHeader className="p-0 mb-4">
                    <div className="flex flex-col items-center gap-3">
                       <motion.div
                          className="p-2 rounded-lg bg-secondary/10"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                        >
                          <achievement.icon className="w-5 h-5 text-secondary" />
                        </motion.div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    </div>
                    <Badge variant="outline" className="w-fit mx-auto mt-2 text-xs border-primary/30 text-primary/80">
                      {achievement.date}
                    </Badge>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    <CardDescription className="text-muted-foreground">
                      {achievement.description}
                    </CardDescription>
                  </CardContent>

                  {/* --- THIS IS THE NEW PART --- */}
                  {/* It only renders if the link exists */}
                  {achievement.link && (
                    <CardFooter className="p-0 pt-4 mt-auto">
                      <Button asChild variant="secondary" size="sm" className="w-full">
                        <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                          <LinkIcon className="w-4 h-4 mr-2" />
                          View Profile
                        </a>
                      </Button>
                    </CardFooter>
                  )}
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



// "use client";

// import React from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Award, Code, Globe, Database, Cpu, Wrench, CalendarCheck } from "lucide-react";
// import { motion } from "framer-motion";

// // --- THIS IS THE NEW LINE YOU NEED TO ADD ---
// import { cn } from "@/lib/utils"; 

// // --- Custom Icon Mapping ---
// const skillIcons = {
//   Python: { icon: Code, color: "text-blue-500" },
//   JavaScript: { icon: Code, color: "text-yellow-500" },
//   Java: { icon: Code, color: "text-red-600" },
//   'C++': { icon: Code, color: "text-blue-700" },
//   C: { icon: Code, color: "text-indigo-700" },
//   React: { icon: Globe, color: "text-cyan-500" },
//   'Node.js': { icon: Globe, color: "text-green-500" },
//   'Express.js': { icon: Globe, color: "text-gray-500" },
//   'HTML/CSS': { icon: Globe, color: "text-orange-500" },
//   'React Native': { icon: Globe, color: "text-cyan-500" },
//   'REST APIs': { icon: Globe, color: "text-purple-500" },
//   MySQL: { icon: Database, color: "text-blue-400" },
//   SQLite: { icon: Database, color: "text-blue-300" },
//   MongoDB: { icon: Database, color: "text-green-600" },
//   Pandas: { icon: Cpu, color: "text-purple-600" },
//   NumPy: { icon: Cpu, color: "text-blue-600" },
//   'Scikit-learn': { icon: Cpu, color: "text-orange-500" },
//   TensorFlow: { icon: Cpu, color: "text-orange-400" },
//   OpenCV: { icon: Cpu, color: "text-green-400" },
//   'Basic Flask': { icon: Cpu, color: "text-foreground" },
//   'Git/GitHub': { icon: Wrench, color: "text-gray-500" },
//   Firebase: { icon: Wrench, color: "text-yellow-500" },
//   AWS: { icon: Wrench, color: "text-orange-500" },
//   'GPT/Copilot': { icon: Wrench, color: "text-primary" },
//   Cursor: { icon: Wrench, color: "text-primary" },
// };

// const Skills = () => {
//   const skillCategories = [
//     {
//       category: "Programming Languages",
//       icon: Code,
//       skills: ["Python", "JavaScript", "Java", "C++", "C"]
//     },
//     {
//       category: "Web Development",
//       icon: Globe,
//       skills: ["React", "Node.js", "Express.js", "HTML/CSS"]
//     },
//     {
//       category: "Mobile Development",
//       icon: Globe,
//       skills: ["React Native", "REST APIs"]
//     },
//     {
//       category: "Databases",
//       icon: Database,
//       skills: ["MySQL", "SQLite", "MongoDB"]
//     },
//     {
//       category: "AI/ML & Data Science",
//       icon: Cpu,
//       skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "OpenCV", "Basic Flask"]
//     },
//     {
//       category: "Tools & Technologies",
//       icon: Wrench,
//       skills: ["Git/GitHub", "Firebase", "AWS", "GPT/Copilot", "Cursor"]
//     }
//   ];

//   const achievements = [
//     {
//       title: "All-India Hackathon Participant",
//       date: "September 2024",
//       description: "Participated in prestigious national-level hackathon, collaborating with teams across India"
//     },
//     {
//       title: "290-Day LeetCode Streak",
//       date: "Ongoing",
//       description: "Maintained consistent daily problem-solving practice, demonstrating dedication to continuous learning. Earned 13+ badges. Solved over 400+ problems."
//     },
//     {
//       title: "HackerRank Achievements",
//       date: "2024-2025",
//       description: "Earned 5-star SQL rating and 4-star Python rating. Completed certifications in SQL intermediate and advanced"
//     }
//   ];

//   const fadeUpVariants = {
//     initial: { opacity: 0, y: 50 },
//     animate: { opacity: 1, y: 0 },
//   };

//   return (
//     <section id="skills" className="py-16">
//       <div className="container">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-vibrant bg-clip-text text-transparent">
//             Skills & Expertise
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A comprehensive overview of my technical skills, tools, and professional achievements.
//           </p>
//         </div>

//         <div className="space-y-16">
//           {/* Skills Grid */}
//           <div>
//             <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Technical Stacks</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {skillCategories.map((category, index) => (
//                 <motion.div
//                   key={index}
//                   variants={fadeUpVariants}
//                   initial="initial"
//                   whileInView="animate"
//                   viewport={{ once: true, amount: 0.2 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Card 
//                     className="border-border shadow-md hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300 h-full"
//                   >
//                     <CardHeader>
//                       <CardTitle className="text-lg flex items-center gap-3">
//                         {React.createElement(category.icon, { className: "w-6 h-6 text-secondary" })}
//                         {category.category}
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="flex flex-wrap gap-3">
//                         {category.skills.map((skill, skillIndex) => {
//                           const IconComponent = skillIcons[skill as keyof typeof skillIcons]?.icon || Code;
//                           const iconColor = skillIcons[skill as keyof typeof skillIcons]?.color || 'text-muted-foreground';
                          
//                           return (
//                             <Badge 
//                               key={skillIndex} 
//                               variant="outline" 
//                               className="text-xs font-medium px-3 py-1.5 border-primary/20 hover:bg-primary/10 transition-colors"
//                             >
//                               <IconComponent className={cn("w-4 h-4 mr-2", iconColor)} />
//                               {skill}
//                             </Badge>
//                           );
//                         })}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Achievements Section */}
//           <div>
//             <h3 className="text-2xl font-semibold mb-8 text-center text-primary flex items-center justify-center gap-3">
//               <Award className="w-6 h-6 text-primary" />
//               Professional Achievements
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {achievements.map((achievement, index) => (
//                 <motion.div
//                   key={index}
//                   variants={fadeUpVariants}
//                   initial="initial"
//                   whileInView="animate"
//                   viewport={{ once: true, amount: 0.2 }}
//                   transition={{ duration: 0.5, delay: index * 0.15 }}
//                 >
//                   <Card 
//                     className="text-center border-border shadow-md hover:shadow-secondary/20 hover:border-secondary transition-all duration-300 h-full cursor-pointer"
//                   >
//                     <CardHeader>
//                       <CardTitle className="text-lg text-secondary">{achievement.title}</CardTitle>
//                       <Badge variant="secondary" className="w-fit mx-auto bg-secondary/20 text-secondary border-secondary/50">
//                         <CalendarCheck className="w-3 h-3 mr-1" />
//                         {achievement.date}
//                       </Badge>
//                     </CardHeader>
//                     <CardContent>
//                       <CardDescription>
//                         {achievement.description}
//                       </CardDescription>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;




// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";

// // const Skills = () => {
// //   const skillCategories = [
// //     {
// //       category: "Programming Languages",
// //       skills: [
// //         "Python",
// //         "JavaScript", 
// //         "Java",
// //         "C++",
// //         "C"
// //       ]
// //     },
// //     {
// //       category: "Web Development",
// //       skills: [
// //         "React",
// //         "Node.js",
// //         "Express.js",
// //         "HTML/CSS"
// //       ]
// //     },
// //     {
// //       category: "Mobile Development",
// //       skills: [
// //         "React Native",
// //         "REST APIs"
// //       ]
// //     },
// //     {
// //       category: "Databases",
// //       skills: [
// //         "MySQL",
// //         "SQLite",
// //         "MongoDB"
// //       ]
// //     },
// //     {
// //       category: "AI/ML & Data Science",
// //       skills: [
// //         "Pandas",
// //         "NumPy",
// //         "Scikit-learn",
// //         "TensorFlow",
// //         "OpenCV",
// //         "Basic Flask"
// //       ]
// //     },
// //     {
// //       category: "Tools & Technologies",
// //       skills: [
// //         "Git/GitHub",
// //         "Firebase",
// //         "AWS",
// //         "GPT/Copilot",
// //         "Cursor"
// //       ]
// //     }
// //   ];

// //   const achievements = [
// //     {
// //       title: "All-India Hackathon Participant",
// //       date: "September 2024",
// //       description: "Participated in prestigious national-level hackathon, collaborating with teams across India"
// //     },
// //     {
// //       title: "290-Day LeetCode Streak",
// //       date: "Ongoing",
// //       description: "Maintained consistent daily problem-solving practice, demonstrating dedication to continuous learning.Earned 13+ badges.Solved over 400+ problems."
// //     },
// //     {
// //       title: "HackerRank Achievements",
// //       date: "2024-2025",
// //       description: "Earned 5-star SQL rating and 4-star Python rating.Completed certifications in SQL intermediate and advanced"
// //     }
// //   ];

// //   return (
// //     <section id="skills" className="py-16 bg-muted/30">
// //       <div className="container">
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
// //           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
// //             A comprehensive overview of my technical skills, tools, and professional achievements.
// //           </p>
// //         </div>

// //         <div className="space-y-12">
// //           {/* Skills Grid */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// //             {skillCategories.map((category, index) => (
// //               <Card key={index} className="border border-gray-300">
// //                 <CardHeader>
// //                   <CardTitle className="text-lg">{category.category}</CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="flex flex-wrap gap-2">
// //                     {category.skills.map((skill, skillIndex) => (
// //                       <Badge key={skillIndex} variant="secondary" className="text-xs">
// //                         {skill}
// //                       </Badge>
// //                     ))}
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>

// //           {/* Achievements Section */}
// //           <div>
// //             <h3 className="text-2xl font-semibold mb-6 text-center">Notable Achievements</h3>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// //               {achievements.map((achievement, index) => (
// //                 <Card key={index} className="text-center border border-gray-300">
// //                   <CardHeader>
// //                     <CardTitle className="text-lg">{achievement.title}</CardTitle>
// //                     <Badge variant="secondary" className="w-fit mx-auto">
// //                       {achievement.date}
// //                     </Badge>
// //                   </CardHeader>
// //                   <CardContent>
// //                     <CardDescription>
// //                       {achievement.description}
// //                     </CardDescription>
// //                   </CardContent>
// //                 </Card>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Skills;