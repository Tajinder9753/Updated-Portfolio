import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Field, FieldGroup } from "./ui/field";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";

const Navbar = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("loading");

    const formData = new FormData(formRef.current);

    try {
      await emailjs.send(                                   
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.get("name"),                       
          email: formData.get("email"),                     
          message: formData.get("message"),
          time: new Date().toLocaleString(),
          title: "Portfolio Contact Form",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-myTurquoise/90 backdrop-blur-sm border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center">
        <button
          onClick={() => scrollTo("home")}
          className="font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity"
        >
          Tajinder Nijjar
        </button>
        <Button variant="ghost" onClick={() => scrollTo("about")}>About</Button>
        <Button variant="ghost" onClick={() => scrollTo("projects")}>Projects</Button>

        <div className="flex gap-2 items-right ml-auto">
          <Dialog onOpenChange={(open) => { if (!open) setStatus("idle"); }}>
            <DialogTrigger asChild>
              <Button variant="ghost">Contact Me</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>Contact Me</DialogTitle>
                <DialogDescription>
                  Please fill out the form below to contact me.
                </DialogDescription>
              </DialogHeader>
              <form ref={formRef} onSubmit={handleSubmit}>
                <FieldGroup>
                  <Field>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Enter Your Name" required />
                  </Field>
                  <Field>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="Enter Your Email" required />
                  </Field>
                  <Field>
                    <Label htmlFor="message">Message</Label>
                    <Textarea name="message" placeholder="Type your message here" required />
                  </Field>
                </FieldGroup>

                {status === "success" && (
                  <p className="mt-3 text-sm text-green-600">Message sent! I'll get back to you soon.</p>
                )}
                {status === "error" && (
                  <p className="mt-3 text-sm text-red-600">Something went wrong. Please try again.</p>
                )}

                <DialogFooter className="mt-4">
                  <Button type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Sending..." : "Submit"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;