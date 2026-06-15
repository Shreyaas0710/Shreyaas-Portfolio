import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  const [isDataScientist, setIsDataScientist] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        setIsDataScientist(e.clientX > centerX);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-background/60"
    >
      {/* Background Gradient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[120px] transition-all duration-500"
          style={{
            background: isDataScientist
              ? "radial-gradient(ellipse, rgba(138,43,226,0.1) 0%, transparent 70%)"
              : "radial-gradient(ellipse, rgba(0,255,255,0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Layout: two-column — text left, image center-right */}
      <div className="relative z-10 w-full h-full min-h-screen max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 pt-24 pb-12">
        {/* Left: Text Content */}
        <div className="flex flex-col justify-center order-2 lg:order-1 mt-12 lg:mt-0 xl:pl-12">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="px-5 py-2 rounded-full border border-border bg-card/50 backdrop-blur-md text-sm font-medium tracking-wide text-muted-foreground shadow-sm">
              Final-year CS (Data Science) Student <br className="md:hidden" />
              <span className="hidden md:inline"> • </span>
              <span className="text-cyan-500 font-bold dark:text-cyan-400">Shreyaas S</span>
            </span>
          </motion.div>

          {/* Dynamic Titles */}
          <div className="min-h-[240px] sm:min-h-[260px] md:min-h-[300px] flex items-start">
            <AnimatePresence mode="wait">
              {!isDataScientist ? (
                <motion.div
                  key="developer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xs md:text-sm font-bold tracking-[0.3em] text-muted-foreground/80 uppercase mb-2">
                    Aspiring
                  </p>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground/90 to-cyan-500 leading-tight">
                    AI
                    <br />
                    ENGINEER
                  </h1>
                  <p className="mt-6 text-xl md:text-2xl text-cyan-500/90 dark:text-cyan-400/80 font-mono tracking-widest uppercase">
                    PYTHON • MACHINE LEARNING • DJANGO • APIs
                  </p>
                  <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                    Building AI-powered and scalable full-stack applications using Python, Machine Learning, APIs, and modern backend technologies.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="datascientist"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xs md:text-sm font-bold tracking-[0.3em] text-muted-foreground/80 uppercase mb-2">
                    Aspiring
                  </p>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground/90 to-purple-500 leading-tight">
                    DATA
                    <br />
                    ANALYST
                  </h1>
                  <p className="mt-6 text-xl md:text-2xl text-purple-600/90 dark:text-purple-400/80 font-mono tracking-widest uppercase">
                    AI • ML • GEOSPATIAL • SQL • POWER BI
                  </p>
                  <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                    Developing intelligent, data-centric systems, predictive pipelines, and interactive analytics dashboards using AI, SQL, Power BI, and geospatial technologies.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 flex flex-wrap gap-4 items-center"
          >
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-xl font-bold bg-foreground text-background hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-xl font-bold border border-border glass-card hover:bg-card/50 transition-all duration-300"
            >
              Contact Me
            </a>
            
            <div className="flex items-center gap-3 ml-2 lg:ml-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-border glass-card flex items-center justify-center text-muted-foreground hover:text-cyan-500 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-border glass-card flex items-center justify-center text-muted-foreground hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Hover hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-12 text-xs md:text-sm text-muted-foreground font-mono tracking-widest uppercase flex items-center gap-4 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border opacity-50"
          >
            Mouse left/right to switch persona
          </motion.p>
        </div>

        {/* Right: Dual Persona Images */}
        <div className="relative flex justify-center items-end h-[60vh] lg:h-full order-1 lg:order-2">
          <div className="relative w-full max-w-lg lg:max-w-xl h-full flex items-end">
            {/* Developer Image */}
            <div
              className="absolute inset-x-0 bottom-0 top-12 transition-all duration-500 ease-out flex justify-center"
              style={{
                opacity: isDataScientist ? 0 : 1,
                transform: `scale(${isDataScientist ? 0.95 : 1})`,
                filter: isDataScientist
                  ? "brightness(0.3) blur(4px)"
                  : "brightness(1) blur(0px)",
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/developer.jpeg`}
                alt="AI Engineer"
                className="max-h-[70vh] lg:max-h-[85vh] w-auto object-contain object-bottom rounded-3xl drop-shadow-[0_0_20px_rgba(0,255,255,0.15)]"
              />
            </div>

            {/* Data Scientist Image */}
            <div
              className="absolute inset-x-0 bottom-0 top-12 transition-all duration-500 ease-out flex justify-center"
              style={{
                opacity: isDataScientist ? 1 : 0,
                transform: `scale(${isDataScientist ? 1 : 0.95})`,
                filter: isDataScientist
                  ? "brightness(1) blur(0px)"
                  : "brightness(0.3) blur(4px)",
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/data-scientist.jpeg`}
                alt="Data Analyst"
                className="max-h-[70vh] lg:max-h-[85vh] w-auto object-contain object-bottom rounded-3xl drop-shadow-[0_0_20px_rgba(138,43,226,0.15)]"
              />
            </div>

            {/* Subtle base glow ring */}
            <div
              className="absolute bottom-[-10%] x-1/2 w-4/5 h-20 rounded-[100%] blur-3xl transition-all duration-500"
              style={{
                background: isDataScientist
                  ? "rgba(138,43,226,0.15)"
                  : "rgba(0,255,255,0.15)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-70 pointer-events-none z-20">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-medium text-muted-foreground">
            Scroll to explore
          </span>
          <div className="w-8 h-12 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-cyan-500/70 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
