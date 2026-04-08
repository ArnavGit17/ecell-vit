'use client';

import { motion } from 'framer-motion';

const categoryColors = {
  hackathon: { bg: 'rgba(236, 72, 153, 0.1)', border: 'rgba(236, 72, 153, 0.3)', text: '#ec4899' },
  workshop: { bg: 'rgba(0, 240, 255, 0.1)', border: 'rgba(0, 240, 255, 0.3)', text: '#00f0ff' },
  seminar: { bg: 'rgba(168, 85, 247, 0.1)', border: 'rgba(168, 85, 247, 0.3)', text: '#a855f7' },
  competition: { bg: 'rgba(249, 115, 22, 0.1)', border: 'rgba(249, 115, 22, 0.3)', text: '#f97316' },
  networking: { bg: 'rgba(34, 211, 238, 0.1)', border: 'rgba(34, 211, 238, 0.3)', text: '#22d3ee' },
  other: { bg: 'rgba(136, 136, 170, 0.1)', border: 'rgba(136, 136, 170, 0.3)', text: '#8888aa' },
};

export default function EventCard({ event, index }) {
  const cat = categoryColors[event.category] || categoryColors.other;
  const date = new Date(event.date);
  const month = date.toLocaleString('en', { month: 'short' }).toUpperCase();
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card p-6 flex gap-5"
    >
      {/* Date block */}
      <div className="flex-shrink-0 w-16 h-20 rounded-xl bg-[rgba(0,240,255,0.04)] border border-[rgba(0,240,255,0.08)] flex flex-col items-center justify-center">
        <span className="text-[#00f0ff] text-[10px] font-bold tracking-wider">{month}</span>
        <span className="text-white font-display font-bold text-2xl leading-none">{day}</span>
        <span className="text-[#555570] text-[10px]">{year}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider"
            style={{ background: cat.bg, border: `1px solid ${cat.border}`, color: cat.text }}
          >
            {event.category}
          </span>
          {event.isUpcoming && (
            <span className="flex items-center gap-1 text-[10px] text-green-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Upcoming
            </span>
          )}
        </div>
        <h3 className="font-display font-semibold text-lg text-white mb-1 truncate">{event.title}</h3>
        <p className="text-[#8888aa] text-sm leading-relaxed line-clamp-2 mb-3">{event.description}</p>
        <div className="flex items-center gap-1.5 text-[#555570] text-xs">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="truncate">{event.location}</span>
        </div>
      </div>
    </motion.div>
  );
}
