import { siteContent, Project } from "../content/site";

export default function Projects() {
    return (
        <section id="projects" className="w-full py-20 border-t border-foreground/10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Projects</h2>
            <div className="w-12 h-1 bg-accent rounded mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {siteContent.projects.map((project: Project, index: number) => (
                    <div key={index} className="flex flex-col h-full bg-background border border-foreground/10 p-6 rounded-2xl hover:border-accent transition-colors group">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{project.name}</h3>
                            <div className="flex gap-3">
                                {project.links?.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
                                        <span className="sr-only">GitHub</span>
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    </a>
                                )}
                                {project.links?.live && (
                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
                                        <span className="sr-only">Live Demo</span>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </a>
                                )}
                            </div>
                        </div>

                        <p className="font-medium text-foreground mb-2">{project.oneLiner}</p>
                        <p className="text-foreground/70 mb-6 flex-grow">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-foreground/5">
                            {project.tech.map((tech: string, idx: number) => (
                                <span key={idx} className="text-xs font-medium text-foreground/60 bg-foreground/5 px-2 py-1 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
