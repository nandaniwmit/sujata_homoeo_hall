import React from 'react';
import { ShieldCheck, Heart, Users, Target, Award, Milestone, Calendar, MapPin, Sparkles } from 'lucide-react';

export default function AboutView() {
  const values = [
    {
      title: 'Pristine Authenticity',
      desc: 'We supply 100% genuine medical dilutions, mother tinctures, and surgical products directly from authentic labs.',
      icon: ShieldCheck
    },
    {
      title: 'Compassionate Care',
      desc: 'We treat every client with kindness and respect. Providing health guides and guidance is our primary purpose.',
      icon: Heart
    },
    {
      title: 'Local Trustworthiness',
      desc: 'For decades, our pharmacy in Gaya has prioritised compliance, ethical business pricing, and professional integrity.',
      icon: Users
    }
  ];

  const milestones = [
    { year: '1998', title: 'The Humble Inception', desc: 'Sujata Homoeo Hall opened its doors in Tekari Road, Gaya with a small cabinet of pure dilutions.' },
    { year: '2005', title: 'Agrawal Medicine Market Expansion', desc: 'Relocated into a larger shop inside the premier Agrawal Medicine Market to store more brands and products.' },
    { year: '2012', title: 'Allopathic & Surgicals Integration', desc: 'Expanded our license to provide general OTC drugs, baby care ranges, and medical diagnostic equipment.' },
    { year: '2020', title: 'Digital Ordering & WhatsApp Support', desc: 'Introduced contactless pre-orders and quick prescription uploads to assist citizens during lockdown.' }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16" id="about-view-container">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#0A8F6A]">Who We Are</span>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-2 sm:text-4xl font-outfit">
          About Sujata Homoeo Hall
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
          Caring for generations of families with genuine homeopathic and general medical essentials in Gaya, Bihar.
        </p>
      </div>

      {/* Grid: Story & Vision */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12" id="about-story-grid">
        <div className="space-y-6 lg:col-span-7" id="about-story-text">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#0A8F6A]" />
            <span>Our Business Story</span>
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Established in Gaya’s prime medicine zone, Sujata Homoeo Hall has served as a beacon of health and wellness. We understand that finding genuine homeopathic remedies in correct potencies can often be challenging. To resolve this, we curated a gold-standard collection of pure dilutions, mother tinctures, and patent products.
          </p>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            As our community grew, so did our capabilities. Today, in our modern facility inside the Agrawal Medicine Market, Tekari Road, we stock general over-the-counter (OTC) medicines, baby care essentials, organic supplements, skin care, and premium diagnostic equipment like blood pressure checkers and glucose meters.
          </p>

          {/* Mission & Vision cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-4">
            <div className="glass-panel rounded-2xl p-4">
              <h3 className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white">
                <Target className="h-4 w-4 text-[#0A8F6A]" />
                <span>Our Mission</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                To supply 100% genuine homeopathic remedies and modern diagnostic products to every home in Gaya at affordable prices, driven by ethical practice.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-4">
              <h3 className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white">
                <Award className="h-4 w-4 text-[#0A8F6A]" />
                <span>Our Vision</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                To remain the most trusted local pharmacy, bridging classical homeopathic care with modern digital ease of communication and ordering.
              </p>
            </div>
          </div>
        </div>

        {/* Graphics column */}
        <div className="lg:col-span-5" id="about-image-panel">
          <div className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/30 p-2 shadow-xl backdrop-blur-md dark:border-white/5 dark:bg-slate-950/20">
            <img
              src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=600&q=80"
              alt="Medical shelves"
              className="h-64 w-full rounded-2xl object-cover sm:h-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-[#0A8F6A] text-white px-3 py-1 rounded-lg text-xs font-bold shadow-md">
              Est. 1998
            </div>
          </div>
        </div>
      </div>

      {/* Owner Message block */}
      <section className="glass-panel-heavy p-6 shadow-xl rounded-3xl" id="owner-message-box">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#0A8F6A]/10 text-[#0A8F6A]">
            <Users className="h-8 w-8" />
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase text-[#0A8F6A] tracking-wider">A Message From The Owner</h3>
            <p className="mt-2 text-xs italic leading-relaxed text-slate-600 dark:text-slate-300">
              "We believe that a medical store is not merely a commercial shop, but a sanctuary of relief. Over the years, the citizens of Gaya have bestowed immense faith in Sujata Homoeo Hall. We honor this by keeping our stocks genuine, verifying prescriptions with utmost precision, and providing prompt digital service through tools like WhatsApp. Your health is, and always will be, our highest commitment."
            </p>
            <h4 className="mt-3.5 text-xs font-bold text-slate-950 dark:text-white">— Management, Sujata Homoeo Hall</h4>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section id="about-values">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Our Core Business Values</h2>
          <p className="text-xs text-slate-400 mt-2">The principles that define how we serve Gaya daily.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3" id="values-grid">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="glass-panel rounded-3xl p-5 text-center shadow-sm" id={`value-card-${i}`}>
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-[#0A8F6A] border border-emerald-500/20">
                  <Icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-4">{v.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Milestones Timeline */}
      <section id="about-timeline">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="flex justify-center mb-1"><Milestone className="h-6 w-6 text-[#0A8F6A]" /></span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Our Timeline</h2>
          <p className="text-xs text-slate-400 mt-1">A brief chronology of our journey of care.</p>
        </div>

        <div className="relative border-l border-slate-200 dark:border-slate-800 max-w-3xl mx-auto pl-6 space-y-8" id="timeline-flow">
          {milestones.map((m, i) => (
            <div key={i} className="relative" id={`timeline-item-${i}`}>
              <div className="absolute -left-[31px] flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#0A8F6A] text-white">
                <span className="h-2 w-2 rounded-full bg-white"></span>
              </div>
              <span className="inline-block rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-[#0A8F6A] dark:bg-emerald-950/40 dark:text-emerald-400">
                {m.year}
              </span>
              <h3 className="text-sm font-bold text-slate-950 dark:text-white mt-1.5">{m.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
