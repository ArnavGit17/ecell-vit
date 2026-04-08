'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(0,240,255,0.06)] bg-[rgba(2,2,8,0.9)]">
      {/* Glow line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,240,255,0.3)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#a855f7] p-[1px]">
                <div className="w-full h-full rounded-xl bg-dark-900 flex items-center justify-center">
                  <span className="text-[#00f0ff] font-display font-bold text-lg">E</span>
                </div>
              </div>
              <span className="font-display font-semibold text-xl text-white">E-Cell VIT</span>
            </Link>
            <p className="text-[#8888aa] text-sm leading-relaxed max-w-sm">
              The Entrepreneurship Cell of Vidyalankar Institute of Technology, Mumbai.
              Fostering innovation, building startups, and nurturing the next generation of entrepreneurs.
            </p>
            {/* Socials */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'LinkedIn', 'Twitter'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-[rgba(0,240,255,0.04)] border border-[rgba(0,240,255,0.08)] flex items-center justify-center text-[#8888aa] hover:text-[#00f0ff] hover:border-[rgba(0,240,255,0.2)] transition-all text-xs font-medium"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/team', label: 'Team' },
                { href: '/events', label: 'Events' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#8888aa] text-sm hover:text-[#00f0ff] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-[#8888aa] text-sm">
              <span>Vidyalankar Institute of Technology</span>
              <span>Wadala, Mumbai 400037</span>
              <a href="mailto:ecell@vit.edu.in" className="hover:text-[#00f0ff] transition-colors">
                ecell@vit.edu.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-[rgba(0,240,255,0.04)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#555570] text-xs">
            &copy; {new Date().getFullYear()} E-Cell VIT Mumbai. All rights reserved.
          </p>
          <p className="text-[#555570] text-xs">
            Built with passion by the E-Cell Tech Team
          </p>
        </div>
      </div>
    </footer>
  );
}
