import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Movie Recommendation System",
      description: "Led team and implemented ML-based recommendation engine using collaborative filtering and content-based filtering algorithms. Developed sophisticated data preprocessing pipelines to handle user ratings and movie metadata. Implemented personalized recommendations with precision and recall optimization. Built comprehensive evaluation metrics to measure recommendation accuracy and user satisfaction. The system processes thousands of movies and user interactions to provide highly accurate personalized movie suggestions.",
      technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "Collaborative Filtering"],
      githubUrl: "https://github.com/YernintiRevathi/Movie_recommendation",
      period: "Jul 2024 - Nov 2024",
      featured: true
    },
    {
      title: "Vehicle Rental Website",
      description: "Built a comprehensive rental management system with browsing, booking, and admin features. Implemented secure user authentication and role-based access control for customers and administrators. Designed responsive UI with Flask templating and modern CSS frameworks. Integrated real-time availability checking and booking confirmation system. Built admin dashboard for vehicle management, booking oversight, and revenue analytics. Implemented secure payment processing and automated email notifications.",
      technologies: ["Flask", "SQLite", "HTML", "CSS", "JavaScript", "Python"],
      githubUrl: "https://github.com/YernintiRevathi/RentNGo_vehicle_rental",
      period: "Mini Project",
      featured: true
    },
    {
      title: "Violence Detection System",
      description: "Designed a real-time violence detection model using deep learning and computer vision techniques. Implemented convolutional neural networks for video frame analysis and temporal pattern recognition. Built automated alert system for security applications with high accuracy violence detection. Developed efficient video processing pipeline capable of real-time analysis. Integrated OpenCV for video preprocessing and frame extraction. Created comprehensive testing suite with various violence scenarios and edge cases.",
      technologies: ["Deep Learning", "OpenCV", "Python", "TensorFlow", "Computer Vision", "CNN"],
      githubUrl: "https://github.com/YernintiRevathi",
      period: "Ongoing",
      featured: false
    },
    {
      title: "Ride-Hailing App",
      description: "Implemented driver-rider workflows, focusing on real-time booking logic and system security. Developed comprehensive mobile application using React Native for cross-platform compatibility. Built real-time GPS tracking and route optimization algorithms. Implemented secure payment gateway integration and transaction management. Created driver and rider matching algorithms based on proximity and availability. Developed admin panel for ride management, driver verification, and system analytics. Integrated push notifications for real-time updates and communication.",
      technologies: ["React Native", "APIs", "GPS Tracking", "Real-time Systems", "Mobile Development"],
      githubUrl: "https://github.com/YernintiRevathi",
      period: "Ongoing",
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
           /* <Card key={index} className={`h-full ${project.featured ? 'border-primary shadow-lg' : ''}`}>*/
              <Card
  key={index}
  className={`h-full border border-gray-200 dark:border-gray-700 ${
  project.featured ? 'border-primary shadow-lg' : 'shadow-sm'
} transform transition-transform duration-300 hover:-translate-y-2 hover:scale-102 hover:shadow-2xl`}


              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex flex-col items-end gap-2">
                    {project.featured && (
                      <Badge variant="secondary">Featured</Badge>
                    )}
                    <Badge variant="outline" className="text-xs">
                      {project.period}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-sm">
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
              <CardFooter>
                <Button size="sm" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2 text-gray-800 dark:text-gray-200" />
                    Code
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