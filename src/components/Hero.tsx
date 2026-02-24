import React from 'react';
import { siteContent } from "../content/site";

export default function Hero() {
  const firstName = siteContent.name.split(' ')[0];
  const lastName = siteContent.name.split(' ').slice(1).join(' ');

  return (
    <section id="hero" className="w-full min-h-[80vh] flex flex-col justify-center animate-in fade-in py-20">
      <div className="space-y-8">
        <h1 className="text-6xl sm:text-8xl font-black tracking-tight leading-[1.1]">
          {firstName} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">{lastName}</span>{lastName ? '.' : ''}
        </h1>
        <p className="text-xl sm:text-2xl text-foreground/70 max-w-2xl font-light">
          {siteContent.headline}
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> • </span>
          <span className="text-accent">{siteContent.currently}</span>
        </p>
        <div className="pt-8 flex flex-wrap gap-4">
          <a href="#projects" className="px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-accent/25">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 rounded-full border border-foreground/20 hover:border-foreground transition-all duration-300 font-medium bg-background">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
