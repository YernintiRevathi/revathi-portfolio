import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* --- MODIFIED SECTION STARTS HERE --- */}
        <section id="home" className="py-20 text-center md:text-left bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
              
              {/* Flex Item 1: Profile Picture */}
              <div className="flex-shrink-0">
                <img
                  src="/profile.jpg" // Your image path
                  alt="Revathi Yerninti"
                  className="w-35 h-45 md:w-48 md:h-48 rounded-full shadow-lg object-cover object-top" 
                />
              </div>

              {/* Flex Item 2: Text Content */}
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Revathi Yerninti
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold mb-4">
                  Full Stack Developer | Machine Learning Programmer
                </p>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-8 px-4 md:px-0">
                  Passionate about building innovative applications with AI/ML integration, 
                  full-stack development, and creating scalable solutions.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mb-8">
                  <a href="mailto:reeshmayerninti@gmail.com" className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                    <Mail className="h-4 w-4" />
                    <span className="hidden sm:inline">Email</span>
                  </a>
                  <a href="https://www.linkedin.com/in/yerninti-revathi-a62484259" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Linkedin className="h-4 w-4" />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>
                  <a href="https://github.com/YernintiRevathi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
                    <Github className="h-4 w-4" />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* --- MODIFIED SECTION ENDS HERE --- */}

        <Experience />
        <Skills />
        <Projects />
        <Education />
        
        <section id="contact" className="py-16 bg-muted/30">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-red-500" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      <a href="mailto:reeshmayerninti@gmail.com" className="hover:text-primary transition-colors">
                        reeshmayerninti@gmail.com
                      </a>
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Linkedin className="h-5 w-5 text-blue-600" />
                      LinkedIn
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      <a href="https://www.linkedin.com/in/yerninti-revathi-a62484259" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        Connect with me on LinkedIn
                      </a>
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Github className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                      GitHub
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      <a href="https://github.com/YernintiRevathi" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        Check out my projects
                      </a>
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-green-500" />
                      Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      India
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-8">
                <Button size="lg" asChild>
                  <a href="mailto:reeshmayerninti@gmail.com" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Send me an email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
// import Header from "@/components/Header";
// import Projects from "@/components/Projects";
// import Education from "@/components/Education";
// import Skills from "@/components/Skills";
// import Experience from "@/components/Experience";
// import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main>
//         <section id="home" className="py-20 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
//           <div className="container px-4">
//             <div className="max-w-4xl mx-auto flex flex-col items-center">
//             {/* Profile Picture */}
//             <img
//               src="/profile.jpg" // Replace with your image path
//               alt="Revathi Yerninti"
//               className="w-40 h-40 rounded-full shadow-lg object-cover object-top" 
//             />
//               <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//                 Revathi Yerninti
//               </h1>
//               <p className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold mb-4">
//                 Full Stack Developer | Machine Learning Programmer
//               </p>
//               <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 px-4">
//                 Passionate about building innovative applications with AI/ML integration, 
//                 full-stack development, and creating scalable solutions.
//               </p>
//               <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
//                 <a href="mailto:reeshmayerninti@gmail.com" className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
//                   <Mail className="h-4 w-4" />
//                   <span className="hidden sm:inline">Email</span>
//                 </a>
//                 <a href="https://www.linkedin.com/in/yerninti-revathi-a62484259" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
//                   <Linkedin className="h-4 w-4" />
//                   <span className="hidden sm:inline">LinkedIn</span>
//                 </a>
//                 <a href="https://github.com/YernintiRevathi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
//                   <Github className="h-4 w-4" />
//                   <span className="hidden sm:inline">GitHub</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>
//         <Experience />
//         <Skills />
//         <Projects />
//         <Education />
        
//         <section id="contact" className="py-16 bg-muted/30">
//           <div className="container px-4">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
//               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                 I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
//               </p>
//             </div>
            
//             <div className="max-w-4xl mx-auto">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Mail className="h-5 w-5 text-red-500" />
//                       Email
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <CardDescription className="text-base">
//                       <a href="mailto:reeshmayerninti@gmail.com" className="hover:text-primary transition-colors">
//                         reeshmayerninti@gmail.com
//                       </a>
//                     </CardDescription>
//                   </CardContent>
//                 </Card>
                
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Linkedin className="h-5 w-5 text-blue-600" />
//                       LinkedIn
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <CardDescription className="text-base">
//                       <a href="https://www.linkedin.com/in/yerninti-revathi-a62484259" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
//                         Connect with me on LinkedIn
//                       </a>
//                     </CardDescription>
//                   </CardContent>
//                 </Card>
                
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Github className="h-5 w-5 text-gray-800 dark:text-gray-200" />
//                       GitHub
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <CardDescription className="text-base">
//                       <a href="https://github.com/YernintiRevathi" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
//                         Check out my projects
//                       </a>
//                     </CardDescription>
//                   </CardContent>
//                 </Card>
                
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <MapPin className="h-5 w-5 text-green-500" />
//                       Location
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <CardDescription className="text-base">
//                       India
//                     </CardDescription>
//                   </CardContent>
//                 </Card>
//               </div>
              
//               <div className="text-center mt-8">
//                 <Button size="lg" asChild>
//                   <a href="mailto:reeshmayerninti@gmail.com" className="flex items-center gap-2">
//                     <Mail className="h-5 w-5" />
//                     Send me an email
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Index;
