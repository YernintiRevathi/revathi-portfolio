import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-primary">Revathi Yerninti</h1>
        </div>
        
        <NavigationMenu>
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
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;