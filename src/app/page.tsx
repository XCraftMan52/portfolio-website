import About from "components/About";
import Contact from "components/Contact";
import Footer from "components/Footer";
import Header from "components/Header";
import Hero from "components/Hero";
import Experience from "components/Experience";
import Projects from "components/Projects";
import Education from "components/Education";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans selection:bg-accent selection:text-white">
      <Header />
      <main className="flex flex-1 w-full max-w-5xl mx-auto flex-col px-6 pt-32 pb-16 sm:px-12 sm:pt-40">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
