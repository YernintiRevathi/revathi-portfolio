"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Download, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", hash: "#home" },
  { name: "Experience", hash: "#experience" },
  { name: "Skills", hash: "#skills" },
  { name: "Projects", hash: "#projects" },
  { name: "Education", hash: "#education" },
  { name: "Contact", hash: "#contact" },
];

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] =useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.hash.substring(1))).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          
          {/* --- THIS IS THE MODIFIED LINE --- */}
          {/* Added pr-2 (padding-right) to give the gradient rendering space */}
          <a href="#home" className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-vibrant bg-clip-text text-transparent transition-transform hover:scale-105 flex-shrink-0 pr-5">
            Revathi Yerninti
          </a>
          
          <div className="flex items-center gap-2">
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-2">
                {navLinks.map((link) => (
                  <li key={link.hash} className="relative">
                    <a
                      href={link.hash}
                      className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary 
                        ${activeSection === link.hash.substring(1) ? "text-primary" : "text-muted-foreground"}`}
                      onClick={() => setActiveSection(link.hash.substring(1))}
                    >
                      {link.name}
                    </a>
                    {activeSection === link.hash.substring(1) && (
                      <motion.span
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-secondary to-vibrant"
                        layoutId="underline"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="hidden md:flex items-center gap-2 ml-4">
               <Button variant="secondary" size="sm" asChild>
                <a href="/Revathi_Yerninti_CV.pdf" download="Revathi_Yerninti_CV.pdf" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>
              <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
            
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden"
          >
            <ul className="flex flex-col items-center space-y-4 py-8">
              {navLinks.map((link) => (
                <li key={link.hash}>
                  <a
                    href={link.hash}
                    className="text-lg font-medium text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4 flex items-center gap-4">
                 <Button variant="secondary" size="sm" asChild>
                  <a href="/Revathi_Yerninti_CV.pdf" download="Revathi_Yerninti_CV.pdf" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Resume
                  </a>
                </Button>
                <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  <Sun className="h-4 w-4 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;


// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Moon, Sun, Download, Menu, X } from "lucide-react";
// import { useTheme } from "next-themes";
// import { motion, AnimatePresence } from "framer-motion";
// // Change 1: Removed the import for "next/link" as it's not a Next.js project.

// // --- Data for our navigation links ---
// const navLinks = [
//   { name: "Home", hash: "#home" },
//   { name: "Experience", hash: "#experience" },
//   { name: "Skills", hash: "#skills" },
//   { name: "Projects", hash: "#projects" },
//   { name: "Education", hash: "#education" },
//   { name: "Contact", hash: "#contact" },
// ];

// const Header = () => {
//   const { theme, setTheme } = useTheme();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = navLinks.map(link => document.getElementById(link.hash.substring(1))).filter(Boolean);
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
//           setActiveSection(section.id);
//           break;
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//         <div className="container flex h-16 items-center justify-between px-4">
          
//           {/* Change 2: Replaced <Link> with a standard <a> tag */}
//           <a href="#home" className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-vibrant bg-clip-text text-transparent transition-transform hover:scale-105">
//             Revathi Yerninti
//           </a>
          
//           <div className="flex items-center gap-2">
//             <nav className="hidden md:block">
//               <ul className="flex items-center space-x-2">
//                 {navLinks.map((link) => (
//                   <li key={link.hash} className="relative">
//                     {/* Change 3: Replaced <Link> with a standard <a> tag */}
//                     <a
//                       href={link.hash}
//                       className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary 
//                         ${activeSection === link.hash.substring(1) ? "text-primary" : "text-muted-foreground"}`}
//                       onClick={() => setActiveSection(link.hash.substring(1))}
//                     >
//                       {link.name}
//                     </a>
//                     {activeSection === link.hash.substring(1) && (
//                       <motion.span
//                         className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-secondary to-vibrant"
//                         layoutId="underline"
//                         transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                       />
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </nav>
            
//             <div className="hidden md:flex items-center gap-2 ml-4">
//                <Button variant="secondary" size="sm" asChild>
//                 <a href="/Revathi_Yerninti_CV.pdf" download="Revathi_Yerninti_CV.pdf" className="flex items-center gap-2">
//                   <Download className="h-4 w-4" />
//                   Resume
//                 </a>
//               </Button>
//               <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
//                 <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//                 <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//                 <span className="sr-only">Toggle theme</span>
//               </Button>
//             </div>
            
//             <div className="md:hidden">
//               <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                 {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//               </Button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="fixed inset-x-0 top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden"
//           >
//             <ul className="flex flex-col items-center space-y-4 py-8">
//               {navLinks.map((link) => (
//                 <li key={link.hash}>
//                   {/* Change 4: Replaced <Link> with a standard <a> tag */}
//                   <a
//                     href={link.hash}
//                     className="text-lg font-medium text-muted-foreground hover:text-primary"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//               <li className="pt-4 flex items-center gap-4">
//                  <Button variant="secondary" size="sm" asChild>
//                   <a href="/Revathi_Yerninti_CV.pdf" download="Revathi_Yerninti_CV.pdf" className="flex items-center gap-2">
//                     <Download className="h-4 w-4" />
//                     Resume
//                   </a>
//                 </Button>
//                 <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
//                   <Sun className="h-4 w-4 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
//                   <Moon className="absolute h-4 w-4 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
//                 </Button>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Header;