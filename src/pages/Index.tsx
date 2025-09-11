import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section id="home" className="py-20 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Revathi Yerninti
              </h1>
              <p className="text-2xl md:text-3xl text-primary font-semibold mb-4">
                Full Stack Developer | Machine Learning Programmer
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Passionate about building innovative applications with AI/ML integration, 
                full-stack development, and creating scalable solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a href="mailto:rrvathiyerninti@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  <span>📧</span>
                  Email
                </a>
                <a href="https://linkedin.com/in/YernirtiRevathi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <span>💼</span>
                  LinkedIn
                </a>
                <a href="https://github.com/YernirtiRevathi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
                  <span>💻</span>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
        <Experience />
        <Skills />
        <Projects />
        <Education />
      </main>
    </div>
  );
};

export default Index;
