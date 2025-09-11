import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        "Python",
        "JavaScript", 
        "Java",
        "C++",
        "C"
      ]
    },
    {
      category: "Web Development",
      skills: [
        "React",
        "Node.js",
        "Express.js",
        "Flask",
        "Django",
        "HTML/CSS"
      ]
    },
    {
      category: "Mobile Development",
      skills: [
        "React Native",
        "REST APIs"
      ]
    },
    {
      category: "Databases",
      skills: [
        "MySQL",
        "SQLite",
        "MongoDB"
      ]
    },
    {
      category: "AI/ML & Data Science",
      skills: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "TensorFlow",
        "OpenCV"
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        "Git/GitHub",
        "Firebase",
        "AWS",
        "GPT/Copilot",
        "Cursor"
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
      title: "290-Day LeetCode Streak",
      date: "Ongoing",
      description: "Maintained consistent daily problem-solving practice, demonstrating dedication to continuous learning.Earned 13+ badges.Solved over 400+ problems."
    },
    {
      title: "HackerRank Achievements",
      date: "2024-2025",
      description: "Earned 5-star SQL rating and 4-star Python rating.Completed certifications in SQL intermediate and advanced"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border border-gray-300">
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
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
            <h3 className="text-2xl font-semibold mb-6 text-center">Notable Achievements</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center border border-gray-300">
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