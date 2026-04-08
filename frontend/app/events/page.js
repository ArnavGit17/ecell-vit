'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '@/components/PageWrapper';
import EventCard from '@/components/EventCard';
import { getEvents } from '@/lib/api';
import { fallbackEvents } from '@/lib/fallback';

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('upcoming');

  useEffect(() => {
    getEvents()
      .then((res) => setEvents(res.data || fallbackEvents))
      .catch(() => setEvents(fallbackEvents))
      .finally(() => setLoading(false));
  }, []);

  const filtered = events.filter((e) =>
    tab === 'upcoming' ? e.isUpcoming : !e.isUpcoming
  );

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-mesh overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[rgba(236,72,153,0.03)] blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[rgba(0,240,255,0.06)] border border-[rgba(0,240,255,0.1)] text-[#00f0ff] mb-6">
              <span className="glow-dot" />
              Hackathons · Workshops · Seminars
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Our <span className="gradient-text">Events</span>
            </h1>
            <p className="text-[#8888aa] text-lg max-w-2xl mx-auto leading-relaxed">
              From hackathons to pitch competitions — explore the events that shape the
              entrepreneurial culture at VIT Mumbai.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs + Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Tab switcher */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-xl bg-[rgba(10,10,20,0.5)] border border-[rgba(0,240,255,0.06)] p-1">
              {['upcoming', 'past'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`relative px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    tab === t ? 'text-[#00f0ff]' : 'text-[#8888aa] hover:text-white'
                  }`}
                >
                  {tab === t && (
                    <motion.div
                      layoutId="event-tab"
                      className="absolute inset-0 rounded-lg bg-[rgba(0,240,255,0.06)] border border-[rgba(0,240,255,0.1)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 capitalize">{t} Events</span>
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 rounded-full border-2 border-[rgba(0,240,255,0.2)] border-t-[#00f0ff] animate-spin" />
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4"
              >
                {filtered.length > 0 ? (
                  filtered.map((event, i) => (
                    <EventCard key={event._id} event={event} index={i} />
                  ))
                ) : (
                  <div className="text-center py-16">
                    <p className="text-[#555570] text-lg font-display">No {tab} events found.</p>
                    <p className="text-[#444460] text-sm mt-2">Check back soon for updates!</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
