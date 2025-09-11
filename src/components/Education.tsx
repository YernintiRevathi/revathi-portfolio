import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      period: "2020 - 2022",
      gpa: "3.9/4.0",
      description: "Specialized in Machine Learning and Artificial Intelligence. Completed advanced coursework in deep learning, natural language processing, and computer vision. Conducted research on neural network optimization under Dr. Jane Smith.",
      achievements: ["Summa Cum Laude", "Dean's List (4 semesters)", "Outstanding Graduate Student Award"],
      relevantCourses: ["Advanced Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing", "Distributed Systems"]
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of California, Berkeley",
      period: "2016 - 2020",
      gpa: "3.8/4.0",
      description: "Comprehensive program covering software development methodologies, data structures, algorithms, and system design. Completed capstone project developing a real-time collaborative platform used by over 1,000 students.",
      achievements: ["Magna Cum Laude", "ACM Programming Contest Finalist", "Engineering Honor Society"],
      relevantCourses: ["Data Structures & Algorithms", "Software Engineering", "Database Systems", "Operating Systems", "Web Development"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-PSA-12345"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PD-67890"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-11111"
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
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
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
                        <Badge variant="outline">GPA: {edu.gpa}</Badge>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Issued:</span>
                        <Badge variant="outline">{cert.date}</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        ID: {cert.credentialId}
                      </div>
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