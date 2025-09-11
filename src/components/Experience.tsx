import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

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

  return (
    <section id="experience" className="py-16">
      <div className="container">
        <div className="text-center mb-16">
          {/* Change 1: Added gradient text to the main heading */}
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-vibrant bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in software development, building expertise in full-stack and machine learning.
          </p>
        </div>

        {/* Change 2: Replaced space-y-8 with a relative container for the timeline line */}
        <div className="relative">
          {/* The vertical timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              // Change 3: Created a timeline item container
              <div key={index} className="relative md:grid md:grid-cols-2 md:gap-8">
                {/* The timeline node (circle on the line) */}
                <div className="hidden md:flex justify-center items-center">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <Briefcase className="w-4 h-4" />
                  </div>
                </div>
                
                {/* Alternating sides for desktop view */}
                <div className={`md:col-start-${index % 2 === 0 ? 2 : 1}`}>
                  <Card className="border-border shadow-sm hover:shadow-primary/10 hover:border-primary transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="space-y-1">
                          <CardTitle className="text-xl">{exp.role}</CardTitle>
                          {/* Change 4: Styled the company name to be more prominent */}
                          <CardDescription className="text-lg font-semibold text-secondary">
                            {exp.company}
                          </CardDescription>
                          <div className="flex flex-wrap items-center gap-2 pt-2">
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
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground text-sm">{exp.description}</p>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Key Achievements:</h4>
                        {/* Change 5: Replaced simple list with a more visually appealing one with icons */}
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
                        {/* Change 6: Styled the technology badges */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs bg-secondary/10 text-secondary border-secondary/20">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;```

### Summary of the Styling Enhancements:

1.  **Gradient Heading:** The main section title now matches your hero section for a consistent brand identity.
2.  **Vertical Timeline:** On desktops, your experience is now laid out along a central timeline, with jobs alternating left and right. On mobile, it gracefully collapses into a single, easy-to-read column.
3.  **Timeline Nodes:** Each entry on the desktop timeline has a circular "node" with a briefcase icon, making the structure clear and professional.
4.  **Prominent Company Name:** The company name now uses the `secondary` color (your vibrant cyan) to stand out.
5.  **Impactful Achievements:** Simple bullet points have been replaced with **Checkmark icons** in your secondary color, which gives a stronger impression of accomplishment.
6.  **Vibrant Tech Badges:** The technology badges now have a subtle background and border using your `secondary` theme color, making them pop visually.
7.  **"Current" Badge:** The badge for your current role now has a subtle `animate-pulse` effect to draw attention to your present work.



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