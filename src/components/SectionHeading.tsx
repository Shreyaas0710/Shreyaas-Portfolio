import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16 text-center md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground uppercase tracking-widest relative inline-block">
          {title}
          <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-transparent rounded-full opacity-70" />
        </h2>
        {subtitle && (
          <p className="mt-6 text-muted-foreground text-lg md:text-xl max-w-2xl">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
