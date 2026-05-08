import { useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";

import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";

function ParallaxBackground() {
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translateY(${scrollY * 0.08}px)`;
      }
      if (layer3Ref.current) {
        layer3Ref.current.style.transform = `translateY(${scrollY * 0.04}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Layer 1 */}
      <div
        ref={layer1Ref}
        className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[140px] opacity-10 dark:opacity-20 transition-opacity duration-300"
        style={{ background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)" }}
      />
      {/* Layer 2 */}
      <div
        ref={layer2Ref}
        className="absolute top-[30%] right-[-15%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 dark:opacity-15 transition-opacity duration-300"
        style={{ background: "radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)" }}
      />
      {/* Layer 3 */}
      <div
        ref={layer3Ref}
        className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-10 dark:opacity-10 transition-opacity duration-300"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main
      className="min-h-screen bg-background text-foreground relative"
      style={{ isolation: "isolate" }}
    >
      {/* Global fixed particle background — visible across all sections */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <ParticleBackground id="tsparticles-global" />
      </div>

      {/* Parallax gradient glows */}
      <ParallaxBackground />

      {/* Content */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />

        <Contact />
        <Footer />
      </div>
    </main>
  );
}
