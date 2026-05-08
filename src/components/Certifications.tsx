import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ShieldCheck, Trophy } from "lucide-react";

const CERTIFICATIONS = [
  "Oracle OCI AI Foundations Associate",
  "Deloitte Data Analytics Simulation",
  "Infosys Data Science",
  "CodeChef SQL & DSA",
  "NPTEL Soft Skills"
];

const ACHIEVEMENTS = [
  "IEEE Publication (2026)",
  "Indian Patent Published (2026)"
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative bg-muted/20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Certifications & Achievements" subtitle="Recognized credentials validating my expertise." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-yellow-500" /> 
              Achievements
            </h3>
            <div className="flex flex-col gap-4">
              {ACHIEVEMENTS.map((ach, idx) => (
                <motion.div
                  key={ach}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-card bg-card rounded-2xl p-6 flex items-center border border-border group hover:border-yellow-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h4 className="text-[17px] font-bold text-foreground group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">{ach}</h4>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-cyan-500" /> 
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-card bg-card rounded-2xl p-5 flex items-start border border-border group hover:bg-muted transition-all duration-300 hover:-translate-y-1"
                >
                  <ShieldCheck className="w-5 h-5 flex-shrink-0 text-cyan-600 dark:text-cyan-400 mt-0.5 mr-3" />
                  <h4 className="text-sm font-semibold text-foreground leading-tight">{cert}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
