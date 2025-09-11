"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  // Your projects data remains unchanged
  const projects = [
     {
      title: "Movie Recommendation System",
      description: "Led team and implemented ML-based recommendation engine using collaborative filtering and content-based filtering algorithms. Developed sophisticated data preprocessing pipelines to handle user ratings and movie metadata. Implemented personalized recommendations with precision and recall optimization. Built comprehensive evaluation metrics to measure recommendation accuracy and user satisfaction. The system processes thousands of movies and user interactions to provide highly accurate personalized movie suggestions.",
      technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "Collaborative Filtering"],
      githubUrl: "https://github.com/YernintiRevathi/Movie_recommendation",
      period: "Jul 2024 - Nov 2024",
    },
    {
      title: "Vehicle Rental Website",
      description: "Built a comprehensive rental management system with browsing, booking, and admin features. Implemented secure user authentication and role-based access control for customers and administrators. Designed responsive UI with Flask templating and modern CSS frameworks. Integrated real-time availability checking and booking confirmation system. Built admin dashboard for vehicle management, booking oversight, and user management.",
      technologies: ["Flask", "SQLite", "HTML", "CSS", "JavaScript", "Python"],
      githubUrl: "https://github.com/YernintiRevathi/RentNGo_vehicle_rental",
      period: "Mini Project",
    },
    {
      title: "Violence Detection System",
      description: "Designed a real-time violence detection model using deep learning and computer vision techniques. Implemented convolutional neural networks for video frame analysis and temporal pattern recognition. Built automated alert system for security applications with high accuracy violence detection. Developed efficient video processing pipeline capable of real-time analysis. Integrated OpenCV for video preprocessing and frame extraction. Created comprehensive testing suite with various violence scenarios and edge cases.",
      technologies: ["Deep Learning", "OpenCV", "Python", "TensorFlow", "Computer Vision", "CNN"],
      githubUrl: "https://github.com/YernintiRevathi",
      period: "Ongoing",
    },
    {
      title: "Ride-Hailing App",
      description: "Implemented driver-rider workflows, focusing on real-time booking logic and system security. Developed comprehensive mobile application using React Native for cross-platform compatibility. Built real-time GPS tracking and route optimization algorithms. Implemented secure payment gateway integration and transaction management. Created driver and rider matching algorithms based on proximity and availability. Developed admin panel for ride management, driver verification, and system analytics. Integrated push notifications for real-time updates and communication.",
      technologies: ["React Native", "APIs", "GPS Tracking", "Real-time Systems", "Mobile Development"],
      githubUrl: "https://github.com/YernintiRevathi",
      period: "Ongoing",
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-vibrant bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in full-stack development and machine learning integration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            // Change 1: The main container is now a 'group' for hover effects and relative for positioning the frame
            <div
              key={index}
              className="relative rounded-lg overflow-hidden group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Change 2: The Animated "Tech Frame" on the Edges */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Corner Brackets */}
                    <span className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary" />
                    <span className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary" />
                    <span className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary" />
                    <span className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary" />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Change 3: The actual card content, with padding to not overlap the frame */}
              <Card className="h-full bg-card/80 backdrop-blur-sm border-border/20 transition-all duration-300 group-hover:border-primary/30">
                 <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="outline" className="text-xs flex-shrink-0">
                      {project.period}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm pt-2 text-muted-foreground line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-secondary/10 text-secondary border-secondary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                   <div className="text-sm font-semibold text-primary flex items-center gap-2">
                    View Project <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

// "use client"; // This component is now interactive, so it must be a client component.

// import { useState } from "react";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Github, ArrowRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const Projects = () => {
//   // Your data structure is perfect, no changes needed.
//   const projects = [
//     {
//       title: "Movie Recommendation System",
//       description: "Led team and implemented ML-based recommendation engine using collaborative filtering and content-based filtering algorithms. Developed sophisticated data preprocessing pipelines to handle user ratings and movie metadata. Implemented personalized recommendations with precision and recall optimization. Built comprehensive evaluation metrics to measure recommendation accuracy and user satisfaction. The system processes thousands of movies and user interactions to provide highly accurate personalized movie suggestions.",
//       technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "Collaborative Filtering"],
//       githubUrl: "https://github.com/YernintiRevathi/Movie_recommendation",
//       period: "Jul 2024 - Nov 2024",
//     },
//     {
//       title: "Vehicle Rental Website",
//       description: "Built a comprehensive rental management system with browsing, booking, and admin features. Implemented secure user authentication and role-based access control for customers and administrators. Designed responsive UI with Flask templating and modern CSS frameworks. Integrated real-time availability checking and booking confirmation system. Built admin dashboard for vehicle management, booking oversight, and user management.",
//       technologies: ["Flask", "SQLite", "HTML", "CSS", "JavaScript", "Python"],
//       githubUrl: "https://github.com/YernintiRevathi/RentNGo_vehicle_rental",
//       period: "Mini Project",
//     },
//     {
//       title: "Violence Detection System",
//       description: "Designed a real-time violence detection model using deep learning and computer vision techniques. Implemented convolutional neural networks for video frame analysis and temporal pattern recognition. Built automated alert system for security applications with high accuracy violence detection. Developed efficient video processing pipeline capable of real-time analysis. Integrated OpenCV for video preprocessing and frame extraction. Created comprehensive testing suite with various violence scenarios and edge cases.",
//       technologies: ["Deep Learning", "OpenCV", "Python", "TensorFlow", "Computer Vision", "CNN"],
//       githubUrl: "https://github.com/YernintiRevathi",
//       period: "Ongoing",
//     },
//     {
//       title: "Ride-Hailing App",
//       description: "Implemented driver-rider workflows, focusing on real-time booking logic and system security. Developed comprehensive mobile application using React Native for cross-platform compatibility. Built real-time GPS tracking and route optimization algorithms. Implemented secure payment gateway integration and transaction management. Created driver and rider matching algorithms based on proximity and availability. Developed admin panel for ride management, driver verification, and system analytics. Integrated push notifications for real-time updates and communication.",
//       technologies: ["React Native", "APIs", "GPS Tracking", "Real-time Systems", "Mobile Development"],
//       githubUrl: "https://github.com/YernintiRevathi",
//       period: "Ongoing",
//     }
//   ];

//   // State to track which card is currently being hovered
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     // Change 1: Added relative positioning and overflow-hidden for the animated background effect
//     <section id="projects" className="py-16 relative overflow-hidden">
      
//       {/* Change 2: The animated gradient background */}
//       <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
//         <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/10 blur-[100px]"></div>
//       </div>
      
//       <div className="container">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-vibrant bg-clip-text text-transparent">
//             Featured Projects
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A showcase of my work in full-stack development and machine learning integration.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
//           {projects.map((project, index) => (
//             // Change 3: Replaced Card with a motion.div for hover animations
//             <motion.div
//               key={index}
//               className="relative rounded-lg overflow-hidden border border-border/20"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {/* The main card content, always visible */}
//               <div className="p-6 bg-card/80 backdrop-blur-sm h-full flex flex-col">
//                 <CardHeader className="p-0 mb-4">
//                   <div className="flex items-start justify-between">
//                     <CardTitle className="text-xl">{project.title}</CardTitle>
//                     <Badge variant="outline" className="text-xs flex-shrink-0">
//                       {project.period}
//                     </Badge>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="p-0 flex-grow">
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech, techIndex) => (
//                       <Badge key={techIndex} variant="secondary" className="text-xs bg-secondary/10 text-secondary border-secondary/20">
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//                 <CardFooter className="p-0 pt-6">
//                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline flex items-center gap-2">
//                     View on GitHub <Github className="w-4 h-4" />
//                   </a>
//                 </CardFooter>
//               </div>

//               {/* Change 4: The interactive "Reveal" overlay with details */}
//               <AnimatePresence>
//                 {hoveredIndex === index && (
//                   <motion.div
//                     className="absolute inset-0 p-6 bg-background/90 backdrop-blur-md flex flex-col"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <CardHeader className="p-0 mb-4">
//                       <CardTitle className="text-xl">{project.title}</CardTitle>
//                       <CardDescription className="text-sm pt-2 text-muted-foreground">{project.description}</CardDescription>
//                     </CardHeader>
//                     <CardContent className="p-0 flex-grow">
//                       <div className="flex flex-wrap gap-2">
//                         {project.technologies.map((tech, techIndex) => (
//                           <Badge key={techIndex} variant="secondary" className="text-xs bg-secondary/10 text-secondary border-secondary/20">
//                             {tech}
//                           </Badge>
//                         ))}
//                       </div>
//                     </CardContent>
//                     <CardFooter className="p-0 pt-6">
//                       <Button asChild>
//                         <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
//                           <Github className="w-4 h-4" />
//                           View Source Code
//                         </a>
//                       </Button>
//                     </CardFooter>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;





// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Github } from "lucide-react";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Movie Recommendation System",
//       description: "Led team and implemented ML-based recommendation engine using collaborative filtering and content-based filtering algorithms. Developed sophisticated data preprocessing pipelines to handle user ratings and movie metadata. Implemented personalized recommendations with precision and recall optimization. Built comprehensive evaluation metrics to measure recommendation accuracy and user satisfaction. The system processes thousands of movies and user interactions to provide highly accurate personalized movie suggestions.",
//       technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "Collaborative Filtering"],
//       githubUrl: "https://github.com/YernintiRevathi/Movie_recommendation",
//       period: "Jul 2024 - Nov 2024",
//       //featured: true
//     },
//     {
//       title: "Vehicle Rental Website",
//       description: "Built a comprehensive rental management system with browsing, booking, and admin features. Implemented secure user authentication and role-based access control for customers and administrators. Designed responsive UI with Flask templating and modern CSS frameworks. Integrated real-time availability checking and booking confirmation system. Built admin dashboard for vehicle management, booking oversight, and user management.",
//       technologies: ["Flask", "SQLite", "HTML", "CSS", "JavaScript", "Python"],
//       githubUrl: "https://github.com/YernintiRevathi/RentNGo_vehicle_rental",
//       period: "Mini Project",
//       //featured: true
//     },
//     {
//       title: "Violence Detection System",
//       description: "Designed a real-time violence detection model using deep learning and computer vision techniques. Implemented convolutional neural networks for video frame analysis and temporal pattern recognition. Built automated alert system for security applications with high accuracy violence detection. Developed efficient video processing pipeline capable of real-time analysis. Integrated OpenCV for video preprocessing and frame extraction. Created comprehensive testing suite with various violence scenarios and edge cases.",
//       technologies: ["Deep Learning", "OpenCV", "Python", "TensorFlow", "Computer Vision", "CNN"],
//       githubUrl: "https://github.com/YernintiRevathi",
//       period: "Ongoing",
//       //featured: true
//     },
//     {
//       title: "Ride-Hailing App",
//       description: "Implemented driver-rider workflows, focusing on real-time booking logic and system security. Developed comprehensive mobile application using React Native for cross-platform compatibility. Built real-time GPS tracking and route optimization algorithms. Implemented secure payment gateway integration and transaction management. Created driver and rider matching algorithms based on proximity and availability. Developed admin panel for ride management, driver verification, and system analytics. Integrated push notifications for real-time updates and communication.",
//       technologies: ["React Native", "APIs", "GPS Tracking", "Real-time Systems", "Mobile Development"],
//       githubUrl: "https://github.com/YernintiRevathi",
//       period: "Ongoing",
//       //featured: true
//     }
//   ];

//   return (
//     <section id="projects" className="py-16 bg-muted/30">
//       <div className="container">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A collection of my recent work showcasing expertise in full-stack development, 
//             machine learning integration, and modern web technologies.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
//           {projects.map((project, index) => (
//            /* <Card key={index} className={`h-full ${project.featured ? 'border-primary shadow-lg' : ''}`}>*/
//               /*<Card
//                   key={index}
//                   className={`h-full border border-gray-200 dark:border-gray-700 ${
//                   project.featured ? 'border-primary shadow-lg' : 'shadow-sm'
//                 } transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl`}
// >*/
//               <Card
//                   key={index}
//                   className={`h-full border border-primary shadow-sm transform transition-transform duration-300 hover:-translate-y-2 hover:scale-102 hover:shadow-2xl`}
//               >


//               <CardHeader>
//                 <div className="flex items-start justify-between">
//                   <CardTitle className="text-xl">{project.title}</CardTitle>
//                   <div className="flex flex-col items-end gap-2">
//                     {project.featured && (
//                       <Badge variant="secondary">Featured</Badge>
//                     )}
//                     <Badge variant="outline" className="text-xs">
//                       {project.period}
//                     </Badge>
//                   </div>
//                 </div>
//                 <CardDescription className="text-sm">
//                   {project.description}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex flex-wrap gap-2">
//                   {project.technologies.map((tech, techIndex) => (
//                     <Badge key={techIndex} variant="outline" className="text-xs">
//                       {tech}
//                     </Badge>
//                   ))}
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button size="sm" variant="outline" asChild>
//                   <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                     <Github className="w-4 h-4 mr-2 text-gray-800 dark:text-gray-200" />
//                     Code
//                   </a>
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;