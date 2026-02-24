import React from 'react'

export default function About() {
  return (
    <section id="about" className="w-full py-20 border-t border-foreground/10">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <div className="w-12 h-1 bg-accent rounded"></div>
        </div>
        <div className="md:w-2/3 space-y-6 text-foreground/80 text-lg">
          <p>
            I’m Lucas Webber, a Cybersecurity and Computer Science double major at Rhode Island College with a passion for building, securing, and leading technology that makes a real impact. From providing hands-on IT support across campus to leading national web initiatives for the Order of the Arrow and running my own technology-driven light show project, I thrive at the intersection of problem-solving and innovation. As an Eagle Scout, IT Help Desk technician, and experienced team leader, I bring a strong foundation in cybersecurity, systems administration, and web development—paired with the discipline, communication skills, and initiative to turn ideas into reliable, real-world solutions.
          </p>
          <p>
            My journey in technology started with a simple fascination for how things work, leading me to
            explore software development, tinkering with hardware, and actively participating in the
            scouting community which has taught me leadership and perseverance.
          </p>
          <p>
            When I&apos;m not in front of a computer screen, you can find me exploring the outdoors or
            collaborating on community projects.
          </p>
        </div>
      </div>
    </section>
  )
}
