import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
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
        "Built cross-platform mobile application with React Native",
        "Implemented real-time GPS tracking and route optimization",
        "Designed scalable backend architecture with Firebase",
        "Integrated secure payment gateway and transaction management"
      ],
      technologies: ["React Native", "Firebase", "REST APIs", "Real-time Database", "GPS Integration"]
    },
    {
      role: "Java Full Stack Developer Intern",
      company: "NDV Techops",
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
      company: "NDV Techops",
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in software development, from internships to freelance projects, 
            building expertise in full-stack development and machine learning.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className={exp.current ? 'border-primary shadow-lg' : ''}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      {exp.role}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-primary">
                      {exp.company}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </Badge>
                      <Badge variant={exp.current ? "default" : "secondary"}>
                        {exp.type}
                      </Badge>
                      {exp.current && (
                        <Badge variant="destructive">Current</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{exp.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;