import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { Download, ArrowRight, Smartphone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface PersonaConfig {
  id: "aiEngineer" | "dataAnalyst";
  titleLine1: string;
  titleLine2: string;
  badgeTag: string;
  techStack: string;
  description: string;
  resumeLabel: string;
  resumeUrl: string;
  driveId: string;
  cursorLabel: string;
  accentGradient: string;
  textColor: string;
  subtextColor: string;
  buttonClass: string;
  image: string;
  imageAlt: string;
  imageGlow: string;
}

const PERSONAS: Record<"aiEngineer" | "dataAnalyst", PersonaConfig> = {
  aiEngineer: {
    id: "aiEngineer",
    titleLine1: "AI",
    titleLine2: "ENGINEER",
    badgeTag: "AI & ML SPECIALIZATION",
    techStack: "PYTHON • MACHINE LEARNING • DJANGO • APIs",
    description:
      "Building AI-powered and scalable full-stack applications using Python, Machine Learning, APIs, and modern backend technologies.",
    resumeLabel: "Download AI Engineer Resume",
    resumeUrl:
      "https://drive.google.com/file/d/1snuq0GGSehz2esfwgjlXHtegw3kwYpUF/view?usp=drive_link",
    driveId: "1snuq0GGSehz2esfwgjlXHtegw3kwYpUF",
    cursorLabel: "← AI",
    accentGradient: "from-foreground via-foreground/90 to-cyan-500",
    textColor: "text-cyan-500/90 dark:text-cyan-400/80",
    subtextColor: "text-cyan-400",
    buttonClass:
      "bg-cyan-500/10 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-black shadow-[0_0_20px_rgba(0,255,255,0.25)]",
    image: "images/developer.jpeg",
    imageAlt: "AI Engineer Persona",
    imageGlow: "rgba(0,255,255,0.15)",
  },
  dataAnalyst: {
    id: "dataAnalyst",
    titleLine1: "DATA",
    titleLine2: "ANALYST",
    badgeTag: "DATA & ANALYTICS SPECIALIZATION",
    techStack: "AI • ML • GEOSPATIAL • SQL • POWER BI",
    description:
      "Developing intelligent, data-centric systems, predictive pipelines, and interactive analytics dashboards using AI, SQL, Power BI, and geospatial technologies.",
    resumeLabel: "Download Data Analyst Resume",
    resumeUrl:
      "https://drive.google.com/file/d/1d6fQ7-ofRAp5b3xOh-z_SQbVusEt27rF/view?usp=drive_link",
    driveId: "1d6fQ7-ofRAp5b3xOh-z_SQbVusEt27rF",
    cursorLabel: "DA →",
    accentGradient: "from-foreground via-foreground/90 to-purple-500",
    textColor: "text-purple-600/90 dark:text-purple-400/80",
    subtextColor: "text-purple-400",
    buttonClass:
      "bg-purple-500/10 border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-white shadow-[0_0_20px_rgba(138,43,226,0.25)]",
    image: "images/data-scientist.jpeg",
    imageAlt: "Data Analyst Persona",
    imageGlow: "rgba(138,43,226,0.15)",
  },
};

export function Hero() {
  const [isDataAnalyst, setIsDataAnalyst] = useState(false);
  const [interactionZone, setInteractionZone] = useState<"left" | "center" | "right">("left");
  const [isInactive, setIsInactive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktopHover, setIsDesktopHover] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Framer Motion Springs for the custom cursor
  const springConfig = prefersReducedMotion
    ? { stiffness: 1000, damping: 50 }
    : { stiffness: 250, damping: 25 };

  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  // User interaction heartbeat to manage 2.5s inactivity timer
  const resetInactivityTimer = useCallback(() => {
    setIsInactive(false);
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    inactivityTimerRef.current = setTimeout(() => {
      setIsInactive(true);
    }, 2500);
  }, []);

  // Check desktop hover capability & reduced motion preferences
  useEffect(() => {
    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsDesktopHover(hoverQuery.matches);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const handleHoverChange = (e: MediaQueryListEvent) => setIsDesktopHover(e.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);

    hoverQuery.addEventListener("change", handleHoverChange);
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      hoverQuery.removeEventListener("change", handleHoverChange);
      motionQuery.removeEventListener("change", handleMotionChange);
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    };
  }, []);

  // Mouse move handler with hysteresis for smooth center zone transitions
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const width = rect.width;

      if (width <= 0) return;

      const ratio = relativeX / width;

      // Update custom cursor spring coordinates
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      resetInactivityTimer();

      // Hysteresis calculation: Center zone between 0.42 and 0.58
      if (ratio < 0.42) {
        setIsDataAnalyst(false);
        setInteractionZone("left");
      } else if (ratio > 0.58) {
        setIsDataAnalyst(true);
        setInteractionZone("right");
      } else {
        setInteractionZone("center");
      }
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      resetInactivityTimer();
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [cursorX, cursorY, resetInactivityTimer]);

  // Mobile Touch / Swipe gesture handling (non-blocking vertical scrolling)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    resetInactivityTimer();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Trigger persona switch only if horizontal swipe exceeds vertical scroll and 30px threshold
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 30) {
      if (deltaX > 0) {
        // Swipe Right -> AI Engineer
        setIsDataAnalyst(false);
        setInteractionZone("left");
      } else {
        // Swipe Left -> Data Analyst
        setIsDataAnalyst(true);
        setInteractionZone("right");
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  const currentPersona = isDataAnalyst ? PERSONAS.dataAnalyst : PERSONAS.aiEngineer;

  return (
    <section
      id="home"
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: "pan-y" }}
      className="relative w-full min-h-screen overflow-hidden bg-background/60 select-none md:select-auto"
    >
      {/* Dynamic Background Radial Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[120px] transition-all duration-500"
          style={{
            background: `radial-gradient(ellipse, ${currentPersona.imageGlow} 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Custom Desktop Directional Cursor */}
      {isDesktopHover && isHovered && (
        <motion.div
          style={{ x: cursorX, y: cursorY }}
          className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.15 }}
        >
          <div
            className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold border backdrop-blur-md transition-all duration-300 flex items-center gap-1.5 shadow-lg ${
              interactionZone === "left"
                ? "bg-cyan-950/80 border-cyan-500/50 text-cyan-300 shadow-[0_0_12px_rgba(0,255,255,0.4)]"
                : interactionZone === "right"
                ? "bg-purple-950/80 border-purple-500/50 text-purple-300 shadow-[0_0_12px_rgba(138,43,226,0.4)]"
                : "bg-background/80 border-border text-foreground shadow-md"
            }`}
          >
            <span>
              {interactionZone === "left"
                ? PERSONAS.aiEngineer.cursorLabel
                : interactionZone === "right"
                ? PERSONAS.dataAnalyst.cursorLabel
                : "← ↔ →"}
            </span>
          </div>
        </motion.div>
      )}

      {/* Hero Content Container */}
      <div className="relative z-10 w-full min-h-screen max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between pt-24 pb-8">
        
        {/* Top Centered Section: Identity Badge & Centered Directional MOVE Control */}
        <div className="w-full flex flex-col items-center justify-center gap-3 sm:gap-4 mb-2 sm:mb-4 z-20">
          {/* Identity Badge */}
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="px-5 py-2 rounded-full border border-border bg-card/50 backdrop-blur-md text-xs sm:text-sm font-medium tracking-wide text-muted-foreground shadow-sm text-center"
          >
            Final-year CS (Data Science) Student{" "}
            <span className="hidden sm:inline">•</span>{" "}
            <span className="text-cyan-500 font-bold dark:text-cyan-400">Shreyaas S</span>
          </motion.span>

          {/* Centered Directional MOVE Control Bar */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: isInactive ? 0.35 : 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex items-center justify-center px-2"
          >
            <div className="inline-flex items-center justify-center gap-3 sm:gap-6 px-4 sm:px-8 py-2.5 sm:py-3 rounded-full border border-border/60 bg-card/60 backdrop-blur-xl shadow-xl font-mono text-xs sm:text-sm md:text-base tracking-wider max-w-full">
              {/* Left Persona: AI Engineer */}
              <span
                className={`whitespace-nowrap font-bold transition-all duration-300 ${
                  interactionZone === "left"
                    ? "text-cyan-400 scale-105 opacity-100 drop-shadow-[0_0_12px_rgba(0,255,255,0.7)]"
                    : "opacity-40 text-muted-foreground hover:opacity-60"
                }`}
              >
                <span className="hidden sm:inline">AI Engineer</span>
                <span className="sm:hidden">AI</span>
              </span>

              {/* Left Arrow */}
              <span
                className={`transition-all duration-300 font-extrabold ${
                  interactionZone === "left" ? "text-cyan-400 scale-110" : "text-muted-foreground/40"
                }`}
              >
                ←
              </span>

              {/* Center Pill: MOVE */}
              <span className="px-2.5 py-1 rounded-md bg-muted/50 text-[10px] sm:text-xs font-black tracking-[0.2em] text-foreground/80 uppercase border border-border/40 shadow-inner">
                MOVE
              </span>

              {/* Right Arrow */}
              <span
                className={`transition-all duration-300 font-extrabold ${
                  interactionZone === "right" ? "text-purple-400 scale-110" : "text-muted-foreground/40"
                }`}
              >
                →
              </span>

              {/* Right Persona: Data Analyst */}
              <span
                className={`whitespace-nowrap font-bold transition-all duration-300 ${
                  interactionZone === "right"
                    ? "text-purple-400 scale-105 opacity-100 drop-shadow-[0_0_12px_rgba(138,43,226,0.7)]"
                    : "opacity-40 text-muted-foreground hover:opacity-60"
                }`}
              >
                <span className="hidden sm:inline">Data Analyst</span>
                <span className="sm:hidden">DA</span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Main 2-Column Grid: Text & Persona Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 flex-1 my-auto">
          {/* Left Column: Text & Dynamic Persona Details */}
          <div className="flex flex-col justify-center order-2 lg:order-1 lg:mt-0 xl:pl-12">
            
            {/* Persona Titles & Content */}
            <div className="min-h-[240px] sm:min-h-[260px] md:min-h-[280px] flex items-start">
              <AnimatePresence mode="wait">
                {!isDataAnalyst ? (
                  <motion.div
                    key="aiEngineer"
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="text-xs md:text-sm font-bold tracking-[0.3em] text-muted-foreground/80 uppercase mb-2">
                      Aspiring
                    </p>
                    <h1
                      className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br ${PERSONAS.aiEngineer.accentGradient} leading-tight`}
                    >
                      {PERSONAS.aiEngineer.titleLine1}
                      <br />
                      {PERSONAS.aiEngineer.titleLine2}
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl md:text-2xl text-cyan-500/90 dark:text-cyan-400/80 font-mono tracking-widest uppercase">
                      {PERSONAS.aiEngineer.techStack}
                    </p>
                    <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                      {PERSONAS.aiEngineer.description}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="dataAnalyst"
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="text-xs md:text-sm font-bold tracking-[0.3em] text-muted-foreground/80 uppercase mb-2">
                      Aspiring
                    </p>
                    <h1
                      className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br ${PERSONAS.dataAnalyst.accentGradient} leading-tight`}
                    >
                      {PERSONAS.dataAnalyst.titleLine1}
                      <br />
                      {PERSONAS.dataAnalyst.titleLine2}
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl md:text-2xl text-purple-600/90 dark:text-purple-400/80 font-mono tracking-widest uppercase">
                      {PERSONAS.dataAnalyst.techStack}
                    </p>
                    <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                      {PERSONAS.dataAnalyst.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Action Row & Dynamic Resume CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 flex flex-wrap gap-4 items-center"
            >
              {/* Dynamic Synchronized Resume CTA Button */}
              <AnimatePresence mode="wait">
                {!isDataAnalyst ? (
                  <motion.a
                    key="ai-resume-btn"
                    href={PERSONAS.aiEngineer.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold border transition-all duration-300 hover:scale-105 ${PERSONAS.aiEngineer.buttonClass}`}
                  >
                    <Download className="w-5 h-5" />
                    <span>{PERSONAS.aiEngineer.resumeLabel}</span>
                  </motion.a>
                ) : (
                  <motion.a
                    key="da-resume-btn"
                    href={PERSONAS.dataAnalyst.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold border transition-all duration-300 hover:scale-105 ${PERSONAS.dataAnalyst.buttonClass}`}
                  >
                    <Download className="w-5 h-5" />
                    <span>{PERSONAS.dataAnalyst.resumeLabel}</span>
                  </motion.a>
                )}
              </AnimatePresence>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-bold bg-foreground text-background hover:scale-105 hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-3 ml-1 sm:ml-3">
                <a
                  href="https://github.com/Shreyaas0710"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border glass-card flex items-center justify-center text-muted-foreground hover:text-cyan-500 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border glass-card flex items-center justify-center text-muted-foreground hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Desktop & Mobile Interaction Guidance */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-8 flex items-center gap-3 text-xs md:text-sm text-muted-foreground font-mono tracking-widest uppercase"
            >
              <div className="h-px flex-1 bg-border" />
              <span className="hidden sm:inline">Move left/right to switch persona</span>
              <span className="sm:hidden flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-cyan-400" /> Swipe ← →
              </span>
              <div className="h-px flex-1 bg-border" />
            </motion.div>
          </div>

          {/* Right Column: Dual Persona Visual Layer */}
          <div className="relative flex justify-center items-end h-[50vh] sm:h-[55vh] lg:h-full order-1 lg:order-2">
            <div className="relative w-full max-w-lg lg:max-w-xl h-full flex items-end">
              {/* AI Engineer Image */}
              <div
                className="absolute inset-x-0 bottom-0 top-6 transition-all duration-500 ease-out flex justify-center"
                style={{
                  opacity: isDataAnalyst ? 0 : 1,
                  transform: `scale(${isDataAnalyst ? 0.95 : 1})`,
                  filter: isDataAnalyst ? "brightness(0.3) blur(4px)" : "brightness(1) blur(0px)",
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${PERSONAS.aiEngineer.image}`}
                  alt={PERSONAS.aiEngineer.imageAlt}
                  className="max-h-[65vh] lg:max-h-[80vh] w-auto object-contain object-bottom rounded-3xl drop-shadow-[0_0_20px_rgba(0,255,255,0.15)]"
                />
              </div>

              {/* Data Analyst Image */}
              <div
                className="absolute inset-x-0 bottom-0 top-6 transition-all duration-500 ease-out flex justify-center"
                style={{
                  opacity: isDataAnalyst ? 1 : 0,
                  transform: `scale(${isDataAnalyst ? 1 : 0.95})`,
                  filter: isDataAnalyst ? "brightness(1) blur(0px)" : "brightness(0.3) blur(4px)",
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${PERSONAS.dataAnalyst.image}`}
                  alt={PERSONAS.dataAnalyst.imageAlt}
                  className="max-h-[65vh] lg:max-h-[80vh] w-auto object-contain object-bottom rounded-3xl drop-shadow-[0_0_20px_rgba(138,43,226,0.15)]"
                />
              </div>

              {/* Base Radial Accent Glow */}
              <div
                className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-4/5 h-20 rounded-[100%] blur-3xl transition-all duration-500"
                style={{
                  background: currentPersona.imageGlow,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
