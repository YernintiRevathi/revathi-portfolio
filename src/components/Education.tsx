import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "MVGR College of Engineering",
      period: "2022 - 2026 (Expected)",
      cgpa: "8.97/10.0",
      description: "Pursuing comprehensive computer science education with focus on software engineering, data structures, algorithms, and machine learning. Currently maintaining excellent academic performance with hands-on experience in multiple programming languages and development frameworks.",
      achievements: ["CGPA: 8.97", "Active participant in coding competitions", "Hackathon participant","Won 1st place in dance competition","Member of Dance and Art clubs"],
      relevantCourses: ["Data Structures & Algorithms", "Machine Learning", "Database Management", "Software Engineering", "Computer Networks", "Operating Systems"]
    },
    {
      degree: "Intermediate (MPC) - Mathematics, Physics, Chemistry",
      institution: "Sasi Junior College",
      period: "2020 - 2022",
      cgpa: "98.5%",
      description: "Completed higher secondary education with exceptional performance in Mathematics, Physics, and Chemistry. Built strong foundation in analytical thinking and problem-solving skills essential for computer science.",
      achievements: ["98.5% - Outstanding Performance", "Mathematics Excellence", "Science Stream Topper"],
      relevantCourses: ["Advanced Mathematics", "Physics", "Chemistry"]
    },
    {
      degree: "Secondary Education",
      institution: "Catherine Public School",
      period: "2019 - 2020",
      cgpa: "99.67%",
      description: "Completed secondary education with excellent grades and developed passion for technology and programming. Participated in various academic and extracurricular activities.",
      achievements: ["99.67% - Excellent Performance", "Academic Excellence Award","School Radio sessions organizer"],
      relevantCourses: ["Mathematics", "Science", "Computer Applications", "English"]
    }
  ];

  const certifications = [
    {
      name: "Full Stack Development",
      issuer: "GeeksforGeeks",
      date: "Ongoing",
      certificateLink: "CFG-FSD-2024",
      status: "In Progress"
    },
    {
      name: "SQL Intermediate",
      issuer: "HackerRank",
      date: "May 2025",
      certificateLink: "https://www.hackerrank.com/certificates/iframe/9be7bb9bc092",
      status:"Done"
    },
    {
      name: "SQL Advanced",
      issuer: "HackerRank",
      date: "May 2025",
      certificateLink: "https://www.hackerrank.com/certificates/iframe/57bbfb28df27",
      status:"Done"
    },
    {
      name: "AWS ML Foundations",
      issuer: "Amazon Web Services",
      date: "Apr 2025",
      certificateLink: "https://www.credly.com/badges/fb381b27-da5f-4ce7-803c-ca632019e0e1/public_url",
      status:"Done"
    },
    {
      name: "AWS Data Engineering",
      issuer: "Amazon Web Services",
      date: "Apr 2025",
      certificateLink: "https://www.credly.com/badges/2398ef71-e1ed-4d28-a171-3bcde4b03365/public_url",
      status:"Done"
    },
    {
      name: "Cloud Computing",
      issuer: "NPTEL",
      date: "Jul-Oct 2024",
      certificateLink: "NPTEL-CC-2024",
      status:"In Progress"
    },
    {
      name: "IT Essentials",
      issuer: "Cisco",
      date: "May 2023",
      certificateLink: "https://www.credly.com/badges/7dd56904-85fc-4452-833e-327842ced83b/public_url",
      status:"Done"
    },
    {
      name: "Programming in C",
      issuer: "Cisco",
      date: "Apr 2023",
      certificateLink: "CISCO-C-2023",
      status:"In Progress"
    }
  ];

  return (
    <section id="education" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic background and professional certifications that support my technical expertise.
          </p>
        </div>

        <div className="space-y-8">
          {/* Formal Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-primary" />
              Formal Education
            </h3>
            <div className="grid gap-6 ">
              {education.map((edu, index) => (
                <Card key={index} className="border border-gray-300">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </Badge>
                        <Badge variant="outline">
                          {edu.degree.includes('CGPA') || edu.degree.includes('%') ? 
                            `${edu.cgpa}` : 
                            `CGPA: ${edu.cgpa}`
                          }
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{edu.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <Badge key={achIndex} variant="secondary" className="flex items-center gap-1">
                            <Award className="w-3 h-3" />
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantCourses.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2 text-primary" />
              Professional Certifications
            </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className={cert.status === 'In Progress' ? 'border-primary' : 'border border-gray-300'}>
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Status:</span>
                        <Badge variant={cert.status === 'In Progress' ? 'secondary' : cert.status==="Done"?"default":'outline'}>
                          {cert.status || 'Completed'}
                        </Badge>
                      </div>
                      {cert.status === "Done" && (
                        <div className="text-xs text-muted-foreground">
                          <a href={cert.certificateLink} target="_blank" rel="noopener noreferrer">
                            Click link to view
                          </a>
                        </div>
                      )}
                    </div>
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

export default Education;