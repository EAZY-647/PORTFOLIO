import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Testimonials } from "@/components/testimonials";
import { Timeline } from "@/components/timeline";
import { ContactForm } from "@/components/contact";

export default function HomePage() {
  return (
    <main id="main">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Testimonials />
      <Timeline />
      <ContactForm />
      <footer className="container py-10 text-muted text-center">
        <small>&copy; {new Date().getFullYear()} Ayush • Built with Next.js</small>
      </footer>
    </main>
  );
}
