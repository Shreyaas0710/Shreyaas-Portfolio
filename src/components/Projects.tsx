import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ArrowRight, Award } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const PROJECTS = [
  {
    title: "INGRION",
    subtitle: "Indian Patent Published (2026)",
    description: "Blockchain-based financial ecosystem offering DeFi, IPO/FPO, and smart contracts with ~9000 TPS. Features hybrid consensus model and robust KYC integration.",
    tags: ["Go", "React", "Django", "Blockchain", "DeFi"],
    color: "cyan"
  },
  {
    title: "Geo-Potential Smart Land Analyzer",
    subtitle: "IEEE Published (2025)",
    description: "Geospatial platform combining climate and soil data for crop recommendation and renewable energy insights. Includes Mapbox dashboards and automated reporting.",
    tags: ["Geospatial", "Python", "Data Science", "Mapbox"],
    color: "purple"
  },
  {
    title: "Auto-Pilot Data Visualization Engine",
    subtitle: "Self-healing visualization",
    description: "AI-powered tool that automatically converts raw CSV data into interactive dashboards utilizing the Gemini API. Automates complex analytical rendering.",
    tags: ["Streamlit", "Gemini API", "Python", "AI"],
    color: "blue"
  },
  {
    title: "Library Usage Access Analytics",
    subtitle: "Indira Gandhi Centre for Atomic Research (IGCAR) Real-time system",
    description: "Django-based analytics dashboard providing real-time reporting, filtering, and actionable usage metrics for the digital library at IGCAR.",
    tags: ["Django", "Dashboards", "Data Analytics"],
    color: "cyan"
  },
  {
    title: "Menu Optimization System",
    subtitle: "Business Intelligence",
    description: "Implemented a data-driven menu insights system utilizing Power BI and advanced SQL to optimize offerings and drastically improve margins.",
    tags: ["Power BI", "SQL", "Analytics"],
    color: "purple"
  }
];
const CODE_LINKS: Record<string, string> = {
  "INGRION": "https://github.com/Shreyaas0710/Ingrion-Defi-System",
  "Auto-Pilot Data Visualization Engine": "https://github.com/Shreyaas0710/Auto-pilot-data-visualization-engine-powered-by-Gemini",
  "Geo-Potential Smart Land Analyzer": "https://github.com/Shreyaas0710/GeoPotent-Smart-Land-Analysis-",
  "Library Usage Access Analytics": "https://github.com/Shreyaas0710/Library-Usage-Access-Analytics-System-"
};

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-background">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A showcase of AI engines, high-TPS blockchain ecosystems, and data analytics dashboards." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative glass-card bg-card border border-border rounded-3xl p-8 overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Hover Glow Background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br 
                ${project.color === 'cyan' ? 'from-cyan-500/10 to-transparent' : ''}
                ${project.color === 'purple' ? 'from-purple-500/10 to-transparent' : ''}
                ${project.color === 'blue' ? 'from-blue-500/10 to-transparent' : ''}
              `} />
              
              <div className="relative z-10 flex flex-col h-full">
                {project.subtitle.includes("Published") && (
                  <div className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
                    <Award className="w-4 h-4" /> Published Research / Patent
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-1 transition-colors duration-300
                  ${project.color === 'cyan' ? 'group-hover:text-cyan-500' : ''}
                  ${project.color === 'purple' ? 'group-hover:text-purple-500' : ''}
                  ${project.color === 'blue' ? 'group-hover:text-blue-500' : ''}
                `}>
                  {project.title}
                </h3>
                
                <p className="text-[13px] text-muted-foreground font-mono mb-4">{project.subtitle}</p>
                
                <p className="text-foreground/80 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-muted border border-border text-xs font-medium text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border mt-auto">
                  {project.title !== "Menu Optimization System" ? (
                    <a href={CODE_LINKS[project.title] ?? "#"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-cyan-500 transition-colors">
                      <FaGithub className="w-4 h-4" /> Code
                    </a>
                  ) : (
                    <button className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-cyan-500 transition-colors">
                      <FaGithub className="w-4 h-4" /> Code
                    </button>
                  )}
                  <div className={`ml-auto w-10 h-10 rounded-full flex items-center justify-center bg-muted border border-border group-hover:bg-foreground text-foreground group-hover:text-background transition-all duration-300`}>
                    <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
