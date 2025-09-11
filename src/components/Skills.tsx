import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 },
        { name: "C", level: 70 }
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "Flask", level: 85 },
        { name: "Django", level: 75 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      category: "Mobile Development",
      skills: [
        { name: "React Native", level: 80 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "SQLite", level: 90 },
        { name: "MongoDB", level: 65 }
      ]
    },
    {
      category: "AI/ML & Data Science",
      skills: [
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 85 },
        { name: "Scikit-learn", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "OpenCV", level: 70 }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Firebase", level: 75 },
        { name: "AWS", level: 70 },
        { name: "GPT/Copilot", level: 85 },
        { name: "Cursor", level: 80 }
      ]
    }
  ];

  const achievements = [
    {
      title: "All-India Hackathon Participant",
      date: "September 2024",
      description: "Participated in prestigious national-level hackathon, collaborating with teams across India"
    },
    {
      title: "280-Day LeetCode Streak",
      date: "Ongoing",
      description: "Maintained consistent daily problem-solving practice, demonstrating dedication to continuous learning"
    },
    {
      title: "HackerRank Achievements",
      date: "2024-2025",
      description: "Earned 13+ badges including 5-star SQL rating and 3-star Python rating"
    }
  ];

  return (
    <section id="skills" className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and professional achievements.
          </p>
        </div>

        <div className="space-y-12">
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Notable Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit mx-auto">
                      {achievement.date}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
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