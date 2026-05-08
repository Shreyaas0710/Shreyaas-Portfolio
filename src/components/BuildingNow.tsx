import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Sparkles, Code2, Rocket } from "lucide-react";

export function BuildingNow() {
  return (
    <section id="building-now" className="py-24 relative bg-background">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="What I'm Building Now" 
          subtitle="A sneak peek into my current active development phase." 
        />

        <div className="mt-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card bg-card border border-border rounded-3xl p-8 lg:p-12 relative overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="flex-shrink-0 w-20 h-20 bg-muted border border-border rounded-2xl flex items-center justify-center text-foreground shadow-sm">
                <Rocket className="w-10 h-10 text-cyan-500" />
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider rounded-full border border-cyan-500/20 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Active Project
                  </span>
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-bold uppercase tracking-wider rounded-full border border-border flex items-center gap-1">
                    <Code2 className="w-3 h-3" /> Stealth
                  </span>
                </div>
                
                <h3 className="text-3xl font-display font-bold text-foreground mb-4">
                  Next-Gen AI Microservices
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Currently architecting a suite of intelligent microservices geared toward automating complex data ETL pipelines using open-source LLMs and advanced RAG frameworks. Bridging Python backends with rapid Next.js frontends.
                </p>
                
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs font-medium text-muted-foreground">
                  <span>Ideation Phase Complete</span>
                  <span className="text-foreground">65% Active Development</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
