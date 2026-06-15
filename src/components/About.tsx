import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { User, MapPin, GraduationCap, Award, Layers, BrainCircuit } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About Me" 
          subtitle="Driven to build high-impact, data-centric systems." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Bio text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-3xl p-8 md:p-10 border border-border"
          >
            <h3 className="text-3xl font-display font-bold text-foreground mb-6">Hello, I'm Shreyaas</h3>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am a <strong>Final-year Computer Science (Data Science) student</strong> experienced in developing AI-powered, full-stack, and data-driven applications using Python, Django, SQL, and geospatial APIs.
              </p>
              <p>
                As an <strong>IEEE-published researcher and Indian Patent holder</strong>, I have worked on projects involving Machine Learning, Data Analytics, Geospatial Intelligence, and AI-assisted systems. My goal is to build scalable and intelligent software solutions that solve real-world problems through data and modern technologies.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-500">
                  <Layers className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Focus Areas</h4>
                  <p className="text-foreground font-medium text-sm">AI Engineering, Full-Stack Development</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-500">
                  <BrainCircuit className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Data Focus</h4>
                  <p className="text-foreground font-medium text-sm">Data Analytics, Geospatial Analytics</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Facts */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4 border border-border hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300">
              <User className="w-8 h-8 text-cyan-500 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-foreground">Role</h4>
                <p className="text-muted-foreground">Final-year CS (Data Science) Student</p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4 border border-border hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300">
              <GraduationCap className="w-8 h-8 text-purple-500 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-foreground">Education</h4>
                <p className="text-muted-foreground">B.Tech Computer Science<br/>(Data Science)</p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4 border border-border hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300">
              <Award className="w-8 h-8 text-cyan-500 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-foreground">Expertise</h4>
                <p className="text-muted-foreground text-sm mt-1">
                   Machine Learning, Data Engineering, Analytics Systems, AI Applications
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4 border border-border hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300">
              <MapPin className="w-8 h-8 text-purple-500 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-foreground">Location</h4>
                <p className="text-muted-foreground">India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
