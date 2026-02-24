import React from 'react'
import { siteContent } from '../content/site'

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 border-t border-foreground/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get In Touch</h2>
        <div className="w-12 h-1 bg-accent rounded mx-auto mb-8"></div>
        <p className="text-foreground/80 text-lg mb-8">
          I&apos;m currently open for new opportunities and collaborations. Whether you have a question
          or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {siteContent.socials.email && (
            <a
              href={siteContent.socials.email}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-md bg-accent text-white font-medium hover:bg-accent-hover transition-colors shadow-sm"
            >
              Say Hello
            </a>
          )}

          <div className="flex gap-4 mt-4 sm:mt-0">
            {siteContent.socials.github && (
              <a href={siteContent.socials.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all flex items-center justify-center bg-background">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6 text-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
            )}
            {siteContent.socials.linkedin && (
              <a href={siteContent.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all flex items-center justify-center bg-background">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6 text-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            )}
            {siteContent.socials.resume && (
              <a href={siteContent.socials.resume} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all flex items-center justify-center bg-background">
                <span className="sr-only">Resume</span>
                <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
