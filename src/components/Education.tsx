import { siteContent, Education as EdType } from "../content/site";

export default function Education() {
    return (
        <section id="education" className="w-full py-20 border-t border-foreground/10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Education</h2>
            <div className="w-12 h-1 bg-accent rounded mb-12"></div>

            <div className="space-y-12">
                {siteContent.education.map((ed: EdType, index: number) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 group">
                        <div className="md:w-1/4 text-foreground/60 font-medium">
                            {ed.dates}
                        </div>
                        <div className="md:w-3/4">
                            <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{ed.school}</h3>
                            <div className="text-lg text-foreground/80 mb-4">{ed.degree}</div>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-foreground/70">
                                {ed.highlights.map((highlight: string, idx: number) => (
                                    <li key={idx} className="pl-2">{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
