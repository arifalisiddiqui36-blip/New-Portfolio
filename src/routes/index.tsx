import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import {
  About, Skills, Projects, GitHubSection, Certifications, Contact, Footer,
} from "@/components/portfolio/Sections";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import { BackToTop } from "@/components/portfolio/BackToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arif Siddiqui — Cloud, Network & Full Stack Engineer" },
      { name: "description", content: "Portfolio of Arif Siddiqui, MCA student and aspiring Cloud Engineer, Network Engineer, and Full Stack Developer." },
      { property: "og:title", content: "Arif Siddiqui — Cloud, Network & Full Stack Engineer" },
      { property: "og:description", content: "MCA student crafting scalable cloud, networking, and full-stack projects." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background font-sans text-foreground">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
      />
      <ParticleBackground />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.18),transparent_60%)]" />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubSection />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
