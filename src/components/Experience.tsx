import { siteContent } from "../content/site";

export default function Experience() {
    return (
        <section id="experience" className="w-full py-20 border-t border-foreground/10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience</h2>
            <div className="w-12 h-1 bg-accent rounded mb-12"></div>

            <div className="space-y-12">
                {siteContent.experience.map((exp, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 group">
                        <div className="md:w-1/4 text-foreground/60 font-medium">
                            {exp.dates}
                        </div>
                        <div className="md:w-3/4">
                            <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{exp.role}</h3>
                            <div className="text-lg text-foreground/80 mb-4">{exp.company}</div>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-foreground/70 mb-4">
                                {exp.bullets.map((bullet, idx) => (
                                    <li key={idx} className="pl-2">{bullet}</li>
                                ))}
                            </ul>
                            {exp.tech && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {exp.tech.map((tech, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-foreground/5 text-foreground/80 text-sm rounded-full border border-foreground/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
