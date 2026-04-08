'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageWrapper from '@/components/PageWrapper';
import SectionHeading from '@/components/SectionHeading';
import TeamCard from '@/components/TeamCard';
import EventCard from '@/components/EventCard';
import { getTeamMembers, getEvents } from '@/lib/api';
import { fallbackTeam, fallbackEvents } from '@/lib/fallback';

export default function HomePage() {
  const [team, setTeam] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getTeamMembers()
      .then((res) => setTeam(res.data?.slice(0, 3) || fallbackTeam.slice(0, 3)))
      .catch(() => setTeam(fallbackTeam.slice(0, 3)));

    getEvents(true)
      .then((res) => setEvents(res.data?.slice(0, 3) || fallbackEvents.filter(e => e.isUpcoming).slice(0, 3)))
      .catch(() => setEvents(fallbackEvents.filter(e => e.isUpcoming).slice(0, 3)));
  }, []);

  return (
    <PageWrapper>
      {/* ════════ HERO ════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-40" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[rgba(0,240,255,0.03)] blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[rgba(168,85,247,0.03)] blur-[120px] animate-float" style={{ animationDelay: '-3s' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[rgba(0,240,255,0.06)] border border-[rgba(0,240,255,0.12)] text-[#00f0ff] mb-8">
              <span className="glow-dot" />
              Vidyalankar Institute of Technology
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight mb-6"
          >
            <span className="text-white">Where Ideas</span>
            <br />
            <span className="gradient-text">Become Startups</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[#8888aa] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            The Entrepreneurship Cell of VIT Mumbai — empowering students to
            innovate, build, and launch ventures that shape the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/events" className="btn-solid text-base">
              Explore Events
            </Link>
            <Link href="/about" className="btn-glow text-base">
              Learn More
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border border-[rgba(0,240,255,0.2)] flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 rounded-full bg-[#00f0ff]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════ STATS ════════ */}
      <section className="py-20 border-y border-[rgba(0,240,255,0.04)]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '50+', label: 'Events Conducted' },
            { value: '1000+', label: 'Students Impacted' },
            { value: '20+', label: 'Startups Incubated' },
            { value: '6', label: 'Core Team Members' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display font-bold text-3xl sm:text-4xl gradient-text-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-[#8888aa] text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════ ABOUT SNIPPET ════════ */}
      <section className="py-24 bg-mesh">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[rgba(0,240,255,0.06)] border border-[rgba(0,240,255,0.1)] text-[#00f0ff] mb-4">
                <span className="glow-dot" />
                About Us
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6 leading-tight">
                Fueling the <span className="gradient-text">Entrepreneurial Spirit</span>
              </h2>
              <p className="text-[#8888aa] leading-relaxed mb-4">
                E-Cell VIT Mumbai is the premier entrepreneurship cell dedicated to cultivating innovation
                and startup culture among students. We organize hackathons, workshops, pitch competitions,
                and mentorship programs.
              </p>
              <p className="text-[#8888aa] leading-relaxed mb-6">
                Our mission is to bridge the gap between ideas and execution, providing students with the
                resources, network, and guidance to turn their visions into viable businesses.
              </p>
              <Link href="/about" className="btn-glow text-sm inline-block">
                Read Our Story →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {['Innovation', 'Mentorship', 'Community', 'Growth'].map((item, i) => (
                  <div
                    key={item}
                    className="glass-card p-6 flex flex-col items-center justify-center text-center aspect-square"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(0,240,255,0.1)] to-[rgba(168,85,247,0.1)] border border-[rgba(0,240,255,0.1)] flex items-center justify-center mb-3">
                      <span className="text-[#00f0ff] text-xl font-display font-bold">
                        {['💡', '🎯', '🤝', '🚀'][i]}
                      </span>
                    </div>
                    <span className="text-white font-display font-semibold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════ FEATURED TEAM ════════ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            badge="Leadership"
            title="Meet Our Team"
            subtitle="The passionate individuals driving E-Cell VIT forward."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <TeamCard key={member._id} member={member} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/team" className="btn-glow text-sm inline-block">
              View Full Team →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════ UPCOMING EVENTS ════════ */}
      <section className="py-24 bg-mesh">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            badge="What's Next"
            title="Upcoming Events"
            subtitle="Join us at our next event and be part of the entrepreneurial movement."
          />
          <div className="flex flex-col gap-4">
            {events.map((event, i) => (
              <EventCard key={event._id} event={event} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/events" className="btn-glow text-sm inline-block">
              See All Events →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 sm:p-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,240,255,0.03)] to-[rgba(168,85,247,0.03)]" />
            <div className="relative z-10">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
                Ready to <span className="gradient-text">Build Something</span>?
              </h2>
              <p className="text-[#8888aa] text-lg mb-8 max-w-lg mx-auto">
                Have an idea? Want to join E-Cell? Reach out to us and let&apos;s make it happen.
              </p>
              <Link href="/contact" className="btn-solid text-base inline-block">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
