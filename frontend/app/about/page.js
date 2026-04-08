'use client';

import { motion } from 'framer-motion';
import PageWrapper from '@/components/PageWrapper';
import SectionHeading from '@/components/SectionHeading';
import Link from 'next/link';

const values = [
  {
    icon: '🚀',
    title: 'Innovation First',
    desc: 'We believe every student has the potential to create something groundbreaking. We provide the launchpad.',
  },
  {
    icon: '🤝',
    title: 'Community Driven',
    desc: 'Building a thriving ecosystem of entrepreneurs, mentors, investors, and innovators under one roof.',
  },
  {
    icon: '🎯',
    title: 'Execution Focused',
    desc: 'Ideas are just the beginning. We help students validate, iterate, and ship real products to market.',
  },
  {
    icon: '📚',
    title: 'Continuous Learning',
    desc: 'Through workshops, seminars, and hands-on experiences, we ensure our members are always growing.',
  },
  {
    icon: '🌐',
    title: 'Network Effect',
    desc: 'Connect with industry leaders, successful founders, angel investors, and VCs through our extensive network.',
  },
  {
    icon: '💡',
    title: 'Impact at Scale',
    desc: 'We measure success by the real-world impact our members create — from campus to the global stage.',
  },
];

const milestones = [
  { year: '2020', title: 'E-Cell Founded', desc: 'Started as a small group of passionate students at VIT Mumbai.' },
  { year: '2021', title: 'First Hackathon', desc: 'Organized our inaugural 24-hour hackathon with 200+ participants.' },
  { year: '2022', title: 'Incubation Wing', desc: 'Launched the startup incubation program with mentorship support.' },
  { year: '2023', title: 'National Recognition', desc: 'Recognized as one of the top E-Cells in Mumbai University.' },
  { year: '2024', title: '1000+ Members', desc: 'Crossed the milestone of 1000+ active student members.' },
  { year: '2025', title: 'Corporate Partnerships', desc: 'Partnered with leading companies for industry exposure and internships.' },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-mesh overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 right-1/4 w-80 h-80 rounded-full bg-[rgba(168,85,247,0.04)] blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[rgba(0,240,255,0.06)] border border-[rgba(0,240,255,0.1)] text-[#00f0ff] mb-6">
              <span className="glow-dot" />
              Our Story
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              About <span className="gradient-text">E-Cell VIT</span>
            </h1>
            <p className="text-[#8888aa] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              We are the Entrepreneurship Cell of Vidyalankar Institute of Technology, Mumbai —
              a student-driven organization dedicated to fostering the startup ecosystem on campus and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 sm:p-10"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[rgba(0,240,255,0.1)] to-[rgba(0,240,255,0.02)] border border-[rgba(0,240,255,0.1)] flex items-center justify-center mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-4">Our Mission</h3>
            <p className="text-[#8888aa] leading-relaxed">
              To empower every student at VIT Mumbai with the mindset, skills, and resources to turn innovative
              ideas into successful ventures. We create an environment where entrepreneurship thrives through
              mentorship, hands-on experiences, and a supportive community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 sm:p-10"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[rgba(168,85,247,0.1)] to-[rgba(168,85,247,0.02)] border border-[rgba(168,85,247,0.1)] flex items-center justify-center mb-6">
              <span className="text-2xl">🔭</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-4">Our Vision</h3>
            <p className="text-[#8888aa] leading-relaxed">
              To be recognized as the leading Entrepreneurship Cell in Mumbai University, producing a new
              generation of founders who solve real-world problems and create meaningful impact. We envision
              a campus where every student thinks like an entrepreneur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-mesh">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            badge="What We Stand For"
            title="Our Core Values"
            subtitle="The principles that guide everything we do at E-Cell VIT Mumbai."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,240,255,0.04)] border border-[rgba(0,240,255,0.08)] flex items-center justify-center mb-4">
                  <span className="text-xl">{v.icon}</span>
                </div>
                <h4 className="font-display font-semibold text-lg text-white mb-2">{v.title}</h4>
                <p className="text-[#8888aa] text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading
            badge="Our Journey"
            title="Milestones"
            subtitle="Key moments in our journey of building the entrepreneurial ecosystem."
          />
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[rgba(0,240,255,0.2)] via-[rgba(168,85,247,0.2)] to-transparent md:-translate-x-[0.5px]" />

            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-[#00f0ff] border-2 border-dark-950 -translate-x-1.5 md:-translate-x-1.5 mt-2 z-10 shadow-[0_0_10px_rgba(0,240,255,0.4)]" />

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-30px)] glass-card p-5 ${i % 2 === 0 ? '' : ''}`}>
                  <span className="text-[#00f0ff] text-xs font-mono font-bold tracking-wider">{m.year}</span>
                  <h4 className="font-display font-semibold text-white mt-1 mb-2">{m.title}</h4>
                  <p className="text-[#8888aa] text-sm leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-mesh">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Want to be part of the journey?
            </h2>
            <p className="text-[#8888aa] mb-8">Join our community and start building the future today.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-solid text-sm">Get in Touch</Link>
              <Link href="/team" className="btn-glow text-sm">Meet the Team</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
