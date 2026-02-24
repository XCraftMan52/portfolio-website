export interface SocialLinks {
  linkedin?: string;
  github?: string;
  email?: string;
  resume?: string;
  website?: string;
}

export interface Education {
  school: string;
  degree: string;
  dates: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
  tech?: string[];
}

export interface Project {
  name: string;
  oneLiner: string;
  description: string;
  tech: string[];
  links?: {
    github?: string;
    live?: string;
  };
  featured?: boolean;
  sourceType?: "open" | "closed" | "inDevelopment";
}



export interface SiteContent {
  name: string;
  headline: string;
  summary: string[];
  location: string;
  currently: string;
  socials: SocialLinks;
  education: Education[];
  experience: Experience[];
  projects: Project[];
}

export const siteContent: SiteContent = {
  name: "Lucas Webber",
  headline: "Computer Science & Cybersecurity @ RIC",
  summary: [
    "Computer Science B.S. & Cybersecurity B.S student at Rhode Island College",
    "Owner of Webber Lights, an computer-contolled Light Display",
    "IT Support Technician with large scale IT infrastructure experience",
    "Strong foundation in programming, networking, and web development"
  ],
  location: "Rhode Island",
  currently: "IT Support Technician at Rhode Island College",
  socials: {
    linkedin: "https://linkedin.com/in/nicolasjkennedy",
    email: "mailto:lucas@lucaswebber.com",
    github: "https://github.com/xcraftman52",
    resume: "/Resume.pdf"
  },
  education: [
    {
      school: "Rhode Island College",
      degree: "B.S. Computer Science & B.S. Cybersecurity",
      dates: "Expected May 2028",
      highlights: [
        "GPA: 3.9",
        "Resident Assistant",
        "Organizations: RIC Cybersecurity Club, RIC Student Community Government"
      ]
    },
    {
      school: "Cumberland High School (Cumberland, RI)",
      degree: "High School Diploma",
      dates: "Graduated May 2024",
      highlights: [
        "GPA: 3.9"
      ]
    }
  ],
  experience: [
    {
      company: "Rhode Island College",
      role: "IT Support Technician",
      dates: "2025–Present",
      bullets: [
        "Deploy and maintain campus networking infrastructure (switches, access points, servers)",
        "Troubleshoot connectivity and system issues for staff and students",
        "Collaborate with engineers on VLANs, cabling, and monitoring across buildings",
        "Document configurations and operational procedures",
        "Develop and maintain network automation scripts to automate repetitive tasks"
      ],
      tech: ["Ticket Management", "TCP/IP", "VLANs", "Active Directory"]
    }
    
  ],
  projects: [
    {
      name: "Personal Portfolio Website",
      oneLiner: "Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS",
      description: "A minimal, modern developer portfolio built from scratch with Next.js, TypeScript, and Tailwind CSS. Designed with a focus on clean typography, smooth scroll-driven animations, and a responsive layout that works across all devices.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      links: {
        github: "https://github.com/xcraftman52/portfolio-website",
        live: "https://lucaswebber.com"
      },
      featured: false,
      sourceType: "open"
    },
  ]
};