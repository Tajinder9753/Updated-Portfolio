import { Button } from "./ui/button";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-myTurquoise/90 backdrop-blur-sm border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center">
        <button onClick={() => scrollTo("home")}
          className="font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity">
          Tajinder Nijjar
        </button>
        <Button variant="ghost" onClick={() => scrollTo("about")}>
          About
        </Button>
        <Button variant="ghost" onClick={() => scrollTo("projects")}>
          Projects
        </Button>
        <div className="flex gap-2 items-right ml-auto">
          <Button variant="ghost">
            Contact Me
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;