import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Field, FieldGroup } from "./ui/field";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

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
          <Dialog>
            <form>
              <DialogTrigger asChild>
                  <Button variant="ghost">
                    Contact Me
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm">
                  <DialogHeader>
                    <DialogTitle>Contact Me</DialogTitle>
                    <DialogDescription>
                      Please fill out the form below to contact me.
                    </DialogDescription>
                  </DialogHeader>
                  <FieldGroup>
                    <Field>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Enter Your Name" />
                    </Field>
                    <Field>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" placeholder="Enter Your Email" />
                    </Field>
                    <Field>
                      <Label htmlFor="message">Message</Label>
                      <Textarea placeholder="Type your message here" />
                    </Field>
                  </FieldGroup>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="submit">Submit</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
            </form>
          </Dialog>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;