"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Download, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; // Use Next.js Link for better prefetching and routing

// --- Data for our navigation links ---
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // --- State to track the active section based on scroll position ---
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.hash.substring(1))).filter(Boolean);
      const scrollPosition = window.scrollY + 100; // Offset for better accuracy

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
          
          {/* Change 1: Name as a branded, gradient link */}
          <Link href="#home" className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-vibrant bg-clip-text text-transparent transition-transform hover:scale-105">
            Revathi Yerninti
          </Link>
          
          <div className="flex items-center gap-2">
            {/* Change 2: Sophisticated Desktop Navigation with "Sliding Pill" effect */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-2">
                {navLinks.map((link) => (
                  <li key={link.hash} className="relative">
                    <Link
                      href={link.hash}
                      className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary 
                        ${activeSection === link.hash.substring(1) ? "text-primary" : "text-muted-foreground"}`}
                      onClick={() => setActiveSection(link.hash.substring(1))}
                    >
                      {link.name}
                    </Link>
                    {activeSection === link.hash.substring(1) && (
                      <motion.span
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-secondary to-vibrant"
                        layoutId="underline" // This makes the underline slide between links
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Action Buttons */}
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
            
            {/* Change 3: Animated Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Change 4: Animated Mobile Menu Overlay */}
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
                  <Link
                    href={link.hash}
                    className="text-lg font-medium text-muted-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
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


// import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
// import { Button } from "@/components/ui/button";
// import { Moon, Sun, Download } from "lucide-react";
// import { useTheme } from "next-themes";

// const Header = () => {
//   const { theme, setTheme } = useTheme();

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 items-center justify-between px-4">
//         <div className="flex items-center space-x-4">
//           <h1 className="text-xl font-bold text-primary">Revathi Yerninti</h1>
//         </div>
        
//         <div className="flex items-center gap-4">
//           <NavigationMenu className="hidden md:block">
//           <NavigationMenuList>
//             <NavigationMenuItem>
//               <Button variant="ghost" asChild>
//                 <a href="#home">Home</a>
//               </Button>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <Button variant="ghost" asChild>
//                 <a href="#experience">Experience</a>
//               </Button>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <Button variant="ghost" asChild>
//                 <a href="#skills">Skills</a>
//               </Button>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <Button variant="ghost" asChild>
//                 <a href="#projects">Projects</a>
//               </Button>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <Button variant="ghost" asChild>
//                 <a href="#education">Education</a>
//               </Button>
//             </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <Button variant="ghost" asChild>
//                   <a href="#contact">Contact</a>
//                 </Button>
//               </NavigationMenuItem>
//           </NavigationMenuList>
//           </NavigationMenu>
          
//           <Button
//             variant="ghost"
//             size="sm"
//             onClick={() => {
//               const link = document.createElement('a');
//               link.href = '/Revathi_Yerninti_CV.pdf';
//               link.download = 'Revathi_Yerninti_CV.pdf';
//               link.click();
//             }}
//             className="flex items-center gap-2"
//           >
//             <Download className="h-4 w-4 text-blue-500" />
//             <span className="hidden sm:inline">Resume</span>
//           </Button>
          
//           <Button
//             variant="ghost"
//             size="sm"
//             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//           >
//             <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
//             <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-500" />
//             <span className="sr-only">Toggle theme</span>
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;