import { Button } from "./ui/button";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-myTurquoise/90 backdrop-blur-sm border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold text-lg tracking-tight">Tajinder Nijjar</span>
        <div className="flex gap-2">
          <Button variant="ghost" onClick={() => scrollTo("home")}>
            Home
          </Button>
          <Button variant="ghost" onClick={() => scrollTo("projects")}>
            Projects
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;