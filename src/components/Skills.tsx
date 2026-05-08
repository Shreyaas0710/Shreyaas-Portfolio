import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["Python", "Java", "SQL"],
    color: "cyan"
  },
  {
    title: "Frameworks",
    skills: ["Django", "Streamlit", "REST APIs"],
    color: "purple"
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Power BI", "MySQL", "PostgreSQL", "VS Code"],
    color: "blue"
  },
  {
    title: "Concepts",
    skills: ["Machine Learning", "Geospatial Analytics", "Data Visualization", "Cloud APIs", "Full-Stack Development"],
    color: "cyan"
  }
];

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 300 } }
  };

  return (
    <section id="skills" className="py-24 relative bg-muted/30">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="My toolkit for turning complex data into actionable insights and building robust applications." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card bg-card rounded-3xl p-8 border-t-4 shadow-sm border border-border"
              style={{
                borderTopColor: 
                  category.color === 'cyan' ? 'var(--color-primary)' : 
                  category.color === 'purple' ? 'var(--color-secondary)' : '#3b82f6'
              }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6 tracking-wide">{category.title}</h3>
              
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map(skill => (
                  <motion.span
                    key={skill}
                    variants={item}
                    className={`
                      px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium border transition-all duration-300 hover:-translate-y-1 hover:shadow-md
                      ${category.color === 'cyan' ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-100' : ''}
                      ${category.color === 'purple' ? 'bg-purple-500/10 border-purple-500/30 text-purple-700 dark:text-purple-100' : ''}
                      ${category.color === 'blue' ? 'bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-100' : ''}
                    `}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
