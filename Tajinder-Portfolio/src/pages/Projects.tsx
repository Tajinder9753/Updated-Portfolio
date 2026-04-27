import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { projects } from "@/components/ProjectInfo";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Footer from "@/components/Footer";
function Projects()
{
    return (
        <>
            <section id="projects" className="w-full bg-myNavy">
            <div className="max-w-5xl mx-auto px-6 py-24 flex flex-col justify-center">
                <p className="text-sm uppercase tracking-widest text-myGrey mb-4">
                Projects
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                What I've Built
                </h2>
                <p className="text-lg text-myGrey max-w-2xl leading-relaxed">
                Here are some of the projects I've worked on.
                </p>
                <div className="mt-10 w-12 h-1 bg-myTurquoise rounded-full" />
            </div>

            {/* Project Cards */}
            <div className="max-w-5x1 mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <Card key={index}>
                            <img src= {project.image} alt={project.title} className="object-contain rounded-t-md" />
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardFooter className="flex justify-between">
                                <a href = {project.link} target="_blank" rel="noopener noreferrer">
                                    <Button className="text-myTurquoise">Github</Button>
                                </a>

                                <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="text-myTurquoise">
                                    More Info
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="bg-myLightNavy border border-white/10 max-w-lg">
                                    <DialogHeader>
                                    <DialogTitle className="text-myTurquoise text-xl font-bold tracking-tight">
                                        {project.title}
                                    </DialogTitle>
                                    <DialogDescription className="text-myGrey text-sm leading-relaxed">
                                        {project.moreInfoDescription}
                                    </DialogDescription>
                                    </DialogHeader>
                                    <h1 className="text-myTurquoise text-lg font-bold tracking-tight mt-4">
                                        Key Features:
                                    </h1>
                                    <ul className="list-disc list-inside text-myGrey mt-4">
                                        {project.bullets.map((bullet, bulletIndex) => (
                                            <li key={bulletIndex}>{bullet}</li>
                                        ))}
                                    </ul>
                                    
                                </DialogContent>
                                </Dialog>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
            </section>
            <Footer />
        </>
    )
}

export default Projects;