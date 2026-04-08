'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass-card p-1 overflow-hidden">
        {/* Image */}
        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020208] via-[rgba(2,2,8,0.2)] to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* LinkedIn button */}
          <motion.a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-[rgba(0,240,255,0.1)] backdrop-blur-md border border-[rgba(0,240,255,0.2)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[rgba(0,240,255,0.2)]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </motion.a>

          {/* Info at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-display font-semibold text-xl text-white mb-1">
              {member.name}
            </h3>
            <p className="text-[#00f0ff] text-sm font-medium tracking-wide">
              {member.role}
            </p>
          </div>

          {/* Glow on hover */}
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              boxShadow: 'inset 0 0 60px rgba(0,240,255,0.05)',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
