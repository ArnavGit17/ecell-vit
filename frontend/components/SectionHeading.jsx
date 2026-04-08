'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({ badge, title, subtitle, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${center ? 'text-center' : ''}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[rgba(0,240,255,0.06)] border border-[rgba(0,240,255,0.1)] text-[#00f0ff] mb-4">
          <span className="glow-dot" />
          {badge}
        </span>
      )}
      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#8888aa] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
