import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { LineChart, Cpu, Code2, LayoutDashboard } from "lucide-react";

const SERVICES = [
  {
    title: "Data Analysis",
    description: "Extracting actionable insights from raw data using statistical methods and Python libraries.",
    icon: LineChart,
    color: "cyan"
  },
  {
    title: "Machine Learning Solutions",
    description: "Building predictive models and AI algorithms to automate tasks and forecast trends.",
    icon: Cpu,
    color: "purple"
  },
  {
    title: "Web Development",
    description: "Creating robust backend systems and APIs using Django and modern web frameworks.",
    icon: Code2,
    color: "blue"
  },
  {
    title: "Dashboard Creation",
    description: "Designing interactive BI dashboards in Power BI to monitor KPIs in real-time.",
    icon: LayoutDashboard,
    color: "cyan"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What I Do" subtitle="Bridging the gap between raw data and usable software." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl hover:bg-white/5 transition-colors duration-300 relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full
                  ${service.color === 'cyan' ? 'bg-cyan-500' : ''}
                  ${service.color === 'purple' ? 'bg-purple-500' : ''}
                  ${service.color === 'blue' ? 'bg-blue-500' : ''}
                `} />
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white/5 border border-white/10
                  ${service.color === 'cyan' ? 'text-cyan-400' : ''}
                  ${service.color === 'purple' ? 'text-purple-400' : ''}
                  ${service.color === 'blue' ? 'text-blue-400' : ''}
                `}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
