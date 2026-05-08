import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Briefcase, Calendar } from "lucide-react";

const EXPERIENCES = [
  {
    role: "In-Plant Trainee — Web Development",
    company: "Indira Gandhi Centre for Atomic Research (IGCAR)",
    date: "May 2025",
    description: "Built a Django web application for auditorium and eBook analytics. Developed real-time interactive dashboards with built-in data filtering capabilities.",
    color: "cyan"
  },
  {
    role: "Data Science & ML Intern",
    company: "YBI Foundation",
    date: "May 2024",
    description: "Worked on comprehensive machine learning pipelines using scikit-learn and pandas. Successfully implemented classification, regression models, and extensive feature engineering.",
    color: "purple"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-muted/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience" />

        <div className="relative pl-8 md:pl-0">
          {/* Timeline Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent md:-translate-x-1/2 rounded-full opacity-30" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-47px] md:left-1/2 w-5 h-5 rounded-full border-4 border-background md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                     style={{ backgroundColor: exp.color === 'cyan' ? 'var(--color-primary)' : 'var(--color-secondary)' }}
                />

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-40px)] bg-card border-border p-6 rounded-2xl border ${exp.color === 'cyan' ? 'hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]' : 'hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]'} transition-all duration-300`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className={`w-5 h-5 flex-shrink-0 ${exp.color === 'cyan' ? 'text-cyan-500' : 'text-purple-500'}`} />
                    <h3 className="text-xl font-bold text-foreground leading-tight">{exp.role}</h3>
                  </div>
                  <h4 className="text-lg font-medium text-muted-foreground mb-4">{exp.company}</h4>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono mb-4 bg-muted inline-block px-3 py-1 rounded-md">
                    <Calendar className="w-4 h-4 inline pb-0.5" /> {exp.date}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
