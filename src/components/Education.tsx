"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, Link as LinkIcon, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Education = () => {
  // Your data structure is perfect, no changes needed.
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
      status:"Completed"
    },
    {
      name: "SQL Advanced",
      issuer: "HackerRank",
      date: "May 2025",
      certificateLink: "https://www.hackerrank.com/certificates/iframe/57bbfb28df27",
      status:"Completed"
    },
    {
      name: "AWS ML Foundations",
      issuer: "Amazon Web Services",
      date: "Apr 2025",
      certificateLink: "https://www.credly.com/badges/fb381b27-da5f-4ce7-803c-ca632019e0e1/public_url",
      status:"Completed"
    },
    {
      name: "AWS Data Engineering",
      issuer: "Amazon Web Services",
      date: "Apr 2025",
      certificateLink: "https://www.credly.com/badges/2398ef71-e1ed-4d28-a171-3bcde4b03365/public_url",
      status:"Completed"
    },
    {
      name: "IT Essentials",
      issuer: "Cisco",
      date: "May 2023",
      certificateLink: "https://www.credly.com/badges/7dd56904-85fc-4452-833e-327842ced83b/public_url",
      status:"Completed"
    },
    {
      name: "Programming in C",
      issuer: "Cisco",
      date: "Apr 2023",
      certificateLink: "CISCO-C-2023",
      status:""
    }
  ];
  const [activeSlides, setActiveSlides] = useState([0, 0, 0]);

  const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? '100%' : '-100%', opacity: 0 }),
  };

  const handleSlideChange = (cardIndex: number, direction: 'next' | 'prev' | number) => {
    const newSlides = [...activeSlides];
    const currentSlide = newSlides[cardIndex];
    if (typeof direction === 'number') {
      newSlides[cardIndex] = direction;
    } else {
      const nextSlide = direction === 'next' ? currentSlide + 1 : currentSlide - 1;
      newSlides[cardIndex] = (nextSlide + 4) % 4;
    }
    setActiveSlides(newSlides);
  };

  return (
    <section id="education" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-vibrant bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications.
          </p>
        </div>

        <div className="space-y-12">
          {/* Formal Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Formal Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((edu, cardIndex) => (
                // --- THIS IS THE MODIFIED LINE ---
                <div key={cardIndex} className="relative h-[350px] lg:h-[400px] rounded-lg overflow-hidden border border-border bg-card shadow-sm flex flex-col">
                  <div className="flex-grow relative">
                    <AnimatePresence initial={false} mode="wait">
                      <motion.div
                        key={activeSlides[cardIndex]}
                        custom={1}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 p-6 flex flex-col"
                      >
                        {/* SLIDE CONTENT */}
                        {activeSlides[cardIndex] === 0 && (
                          <div className="space-y-2">
                            <CardTitle className="text-xl">{edu.degree}</CardTitle>
                            <CardDescription className="text-lg font-medium text-primary">{edu.institution}</CardDescription>
                            <div className="flex flex-wrap items-center gap-2 pt-4">
                              <Badge variant="default" className="flex items-center gap-1"><Calendar className="w-3 h-3" />{edu.period}</Badge>
                              <Badge variant="secondary">{edu.cgpa.includes('%') ? `Percentage: ${edu.cgpa}` : `CGPA: ${edu.cgpa}`}</Badge>
                            </div>
                          </div>
                        )}
                        {activeSlides[cardIndex] === 1 && (
                          <div className="space-y-2 h-full flex flex-col">
                            <CardTitle>Description</CardTitle>
                            {/* --- Adjusted scrollable area height --- */}
                            <p className="text-muted-foreground text-sm flex-grow overflow-y-auto pr-2 h-[200px] lg:h-[250px]">{edu.description}</p>
                          </div>
                        )}
                        {activeSlides[cardIndex] === 2 && (
                          <div className="space-y-2 h-full flex flex-col">
                            <CardTitle>Achievements</CardTitle>
                            <ul className="space-y-2 flex-grow overflow-y-auto pr-2 h-[200px] lg:h-[250px]">
                              {edu.achievements.map((a, i) => <li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" /><span className="text-sm text-muted-foreground">{a}</span></li>)}
                            </ul>
                          </div>
                        )}
                        {activeSlides[cardIndex] === 3 && (
                          <div className="space-y-2 h-full flex flex-col">
                             <CardTitle>Relevant Coursework</CardTitle>
                             <div className="flex flex-wrap gap-2 flex-grow overflow-y-auto pr-2 h-[200px] lg:h-[250px]">
                               {edu.relevantCourses.map((c, i) => <Badge key={i} variant="outline" className="text-xs border-primary/30 text-primary/80">{c}</Badge>)}
                             </div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  {/* Navigation controls */}
                  <div className="flex-shrink-0 p-4 border-t border-border flex items-center justify-between">
                    <button onClick={() => handleSlideChange(cardIndex, 'prev')} className="p-2 rounded-full hover:bg-muted"><ArrowLeft className="w-4 h-4" /></button>
                    <div className="flex items-center gap-2">
                      {[0, 1, 2, 3].map(i => (
                        <button key={i} onClick={() => handleSlideChange(cardIndex, i)} className={`w-2 h-2 rounded-full transition-colors ${activeSlides[cardIndex] === i ? 'bg-primary' : 'bg-muted-foreground/30'}`} />
                      ))}
                    </div>
                    <button onClick={() => handleSlideChange(cardIndex, 'next')} className="p-2 rounded-full hover:bg-muted"><ArrowRight className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Certifications section remains unchanged */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className={`border ${cert.status === 'In Progress' ? 'border-primary' : 'border-border'} shadow-sm hover:shadow-primary/10 hover:border-primary transition-all duration-300`}>
                  <CardHeader><CardTitle className="text-lg">{cert.name}</CardTitle><CardDescription>{cert.issuer}</CardDescription></CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Status:</span>
                        <Badge className={`${cert.status === 'Completed' || !cert.status ? 'bg-green-500/10 text-green-700 border-green-500/20' : 'bg-blue-500/10 text-blue-700 border-blue-500/20'}`}>{cert.status || 'Completed'}</Badge>
                      </div>
                      {cert.status === "Completed" && cert.certificateLink && (
                        <a href={cert.certificateLink} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline font-semibold flex items-center gap-1"><LinkIcon className="w-3 h-3"/>View Certificate</a>
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
