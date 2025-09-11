import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section id="home" className="py-20 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Full-Stack Developer
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Building innovative web applications with modern technologies and best practices.
            </p>
          </div>
        </section>
        <Projects />
        <Education />
      </main>
    </div>
  );
};

export default Index;
