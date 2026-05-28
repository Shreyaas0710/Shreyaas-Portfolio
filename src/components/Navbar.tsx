import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },

  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-nav py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="text-2xl font-display font-bold text-foreground tracking-tighter">
          SS<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-cyan-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-border">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-muted-foreground hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="https://drive.google.com/file/d/18mdiM1hXwcPshSUzjVgDo5FAobTUuyqw/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full font-medium text-sm bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-background hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all duration-300"
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="xl:hidden flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full text-foreground hover:text-cyan-400 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 glass-nav border-t border-border py-4 flex flex-col items-center gap-4 xl:hidden shadow-2xl"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium text-muted-foreground hover:text-cyan-400 w-full text-center py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/18mdiM1hXwcPshSUzjVgDo5FAobTUuyqw/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 mt-2 px-6 py-2.5 rounded-full font-medium text-sm bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-background transition-all duration-300"
          >
            <Download size={16} /> Download Resume
          </a>
        </motion.div>
      )}
    </header>
  );
}
