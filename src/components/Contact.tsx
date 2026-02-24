import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 border-t border-foreground/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get In Touch</h2>
        <div className="w-12 h-1 bg-accent rounded mx-auto mb-8"></div>
        <p className="text-foreground/80 text-lg mb-8">
          I'm currently open for new opportunities and collaborations. Whether you have a question
          or just want to say hi, I'll try my best to get back to you!
        </p>
        <a
          href="mailto:lucas@lucaswebber.com"
          className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-accent text-white font-medium hover:bg-accent-hover transition-colors shadow-sm"
        >
          Say Hello
        </a>
      </div>
    </section>
  )
}
