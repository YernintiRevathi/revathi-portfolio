import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Download } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-primary">Revathi Yerninti</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Button variant="ghost" asChild>
                <a href="#home">Home</a>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost" asChild>
                <a href="#experience">Experience</a>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost" asChild>
                <a href="#skills">Skills</a>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost" asChild>
                <a href="#projects">Projects</a>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost" asChild>
                <a href="#education">Education</a>
              </Button>
            </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost" asChild>
                  <a href="#contact">Contact</a>
                </Button>
              </NavigationMenuItem>
          </NavigationMenuList>
          </NavigationMenu>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Revathi_Yerninti_CV.pdf';
              link.download = 'Revathi_Yerninti_CV.pdf';
              link.click();
            }}
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4 text-blue-500" />
            <span className="hidden sm:inline">Resume</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-500" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;