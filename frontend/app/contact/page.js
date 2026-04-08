'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '@/components/PageWrapper';
import { submitContact } from '@/lib/api';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      await submitContact(form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong.');
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: 'Address',
      value: 'Vidyalankar Institute of Technology, Wadala, Mumbai 400037',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: 'Email',
      value: 'ecell@vit.edu.in',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: 'Phone',
      value: '+91 98765 43210',
    },
  ];

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-mesh overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[rgba(0,240,255,0.06)] border border-[rgba(0,240,255,0.1)] text-[#00f0ff] mb-6">
              <span className="glow-dot" />
              Reach Out
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-[#8888aa] text-lg max-w-2xl mx-auto leading-relaxed">
              Have a question, idea, or partnership proposal? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display font-bold text-2xl text-white mb-4">Get in Touch</h2>
              <p className="text-[#8888aa] text-sm leading-relaxed mb-8">
                Whether you want to collaborate, sponsor an event, or just say hello —
                drop us a message and we&apos;ll get back to you within 48 hours.
              </p>
            </motion.div>

            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-4 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,240,255,0.04)] border border-[rgba(0,240,255,0.08)] flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <span className="text-[#555570] text-xs uppercase tracking-wider font-medium">{item.label}</span>
                  <p className="text-white text-sm mt-0.5">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 sm:p-10">
              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-[rgba(34,211,238,0.1)] border border-[rgba(34,211,238,0.2)] flex items-center justify-center mx-auto mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">Message Sent!</h3>
                  <p className="text-[#8888aa] text-sm mb-6">We&apos;ll get back to you soon.</p>
                  <button onClick={() => setStatus('idle')} className="btn-glow text-sm">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[#8888aa] text-xs uppercase tracking-wider font-medium mb-2 block">Name</label>
                      <input
                        type="text" name="name" value={form.name} onChange={handleChange} required
                        placeholder="Your full name"
                        className="input-dark"
                      />
                    </div>
                    <div>
                      <label className="text-[#8888aa] text-xs uppercase tracking-wider font-medium mb-2 block">Email</label>
                      <input
                        type="email" name="email" value={form.email} onChange={handleChange} required
                        placeholder="you@email.com"
                        className="input-dark"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#8888aa] text-xs uppercase tracking-wider font-medium mb-2 block">Subject</label>
                    <input
                      type="text" name="subject" value={form.subject} onChange={handleChange} required
                      placeholder="What's this about?"
                      className="input-dark"
                    />
                  </div>
                  <div>
                    <label className="text-[#8888aa] text-xs uppercase tracking-wider font-medium mb-2 block">Message</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} required
                      rows={5} placeholder="Tell us more..."
                      className="input-dark resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-solid text-sm self-start disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
