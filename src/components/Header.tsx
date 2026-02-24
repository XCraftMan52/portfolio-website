"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <Link href="/" className="font-bold text-xl tracking-tighter">LW<span className="text-accent">.</span></Link>
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm lg:text-base font-medium tracking-wide transition-all duration-300 text-foreground/80 hover:text-accent hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center justify-between w-full">
            <Link href="/" className="font-bold text-xl tracking-tighter">LW<span className="text-accent">.</span></Link>
            {/* Mobile Menu Button */}
            <button
              className="text-foreground/80 hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-foreground/10 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left text-sm font-medium tracking-wide transition-colors text-foreground/80 hover:text-accent p-2 rounded-md hover:bg-foreground/5"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}