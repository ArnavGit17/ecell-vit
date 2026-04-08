'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '@/components/PageWrapper';
import SectionHeading from '@/components/SectionHeading';
import TeamCard from '@/components/TeamCard';
import { getTeamMembers } from '@/lib/api';
import { fallbackTeam } from '@/lib/fallback';

export default function TeamPage() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTeamMembers()
      .then((res) => setTeam(res.data || fallbackTeam))
      .catch(() => setTeam(fallbackTeam))
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-mesh overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-32 left-1/3 w-72 h-72 rounded-full bg-[rgba(0,240,255,0.03)] blur-[100px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[rgba(0,240,255,0.06)] border border-[rgba(0,240,255,0.1)] text-[#00f0ff] mb-6">
              <span className="glow-dot" />
              The People Behind E-Cell
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-[#8888aa] text-lg max-w-2xl mx-auto leading-relaxed">
              A passionate group of students driving innovation, organizing events,
              and building the entrepreneurial ecosystem at VIT Mumbai.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 rounded-full border-2 border-[rgba(0,240,255,0.2)] border-t-[#00f0ff] animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <TeamCard key={member._id} member={member} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-mesh">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 sm:p-14 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,240,255,0.02)] to-[rgba(168,85,247,0.02)]" />
            <div className="relative z-10">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Want to join the team?
              </h2>
              <p className="text-[#8888aa] mb-6">
                We&apos;re always looking for passionate individuals. Reach out and let&apos;s chat!
              </p>
              <a href="/contact" className="btn-solid text-sm inline-block">Apply Now →</a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
