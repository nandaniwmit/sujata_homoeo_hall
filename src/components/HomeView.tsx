import React, { useState } from 'react';
import { ViewType, Medicine } from '../types';
import { POPULAR_MEDICINES, MEDICINE_CATEGORIES } from '../data/medicineData';
import { TESTIMONIALS } from '../data/testimonialsData';
import { FAQS } from '../data/faqData';
import { SERVICES } from '../data/servicesData';
import { 
  Phone, MessageSquare, MapPin, CheckCircle2, Award, ShieldCheck, Banknote, Sparkles, 
  Baby, Activity, FileText, Pill, HeartPulse, Search, Plus, Star, Upload, ArrowRight,
  Sparkle, ShieldAlert, BadgePercent, GraduationCap, ChevronDown, ChevronUp, Map, ArrowUpRight
} from 'lucide-react';

interface HomeViewProps {
  setView: (view: ViewType) => void;
  setOrderMedicineName: (name: string) => void;
}

export default function HomeView({ setView, setOrderMedicineName }: HomeViewProps) {
  // Medicine Search States
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  // FAQ accordion states
  const [openFaqId, setOpenFaqId] = useState<string | null>('f1');

  // Quick Medicine Inquiry form state (Simulated)
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMed, setInquiryMed] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState(false);

  // Health tips section data
  const healthTips = [
    {
      title: 'Homeopathy for Monsoon Immunity',
      category: 'Immunity Boost',
      readTime: '3 min read',
      date: 'July 10, 2026',
      excerpt: 'Learn how standard remedies like Arsenicum Album help build natural defenses against common seasonal changes.'
    },
    {
      title: 'Managing High Blood Pressure Naturally',
      category: 'Heart Health',
      readTime: '4 min read',
      date: 'June 28, 2026',
      excerpt: 'Simple home checks paired with homeopathic support like Rauwolfia Serpentina under expert guidance can improve cardiovascular wellness.'
    },
    {
      title: 'Essential First Aid Tips for Every Home',
      category: 'Emergency Care',
      readTime: '5 min read',
      date: 'May 14, 2026',
      excerpt: 'A basic first aid checklist consisting of sterile dressings, antiseptic creams, and Arnica gel to manage bruises instantly.'
    }
  ];

  // Filter medicines based on search & category
  const filteredMedicines = POPULAR_MEDICINES.filter(med => {
    const matchesSearch = med.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          med.brand.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          med.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || med.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleInquireWhatsApp = (medicineName: string) => {
    setOrderMedicineName(medicineName);
    setView('whatsapp-order');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp text for quick availability inquiry
    const inquiryText = 
`Hello Sujata Homoeo Hall 🩺

I want to inquire about the availability of a medicine:

*Inquiry Details:*
----------------------------------------
👤 *Name:* ${inquiryName}
📞 *Phone:* ${inquiryPhone}
💊 *Medicine Required:* ${inquiryMed}
----------------------------------------

Please check if this is currently in stock at your Gaya store. Thank you!`;

    const encodedText = encodeURIComponent(inquiryText);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919471971100&text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    setInquirySuccess(true);
    setInquiryName('');
    setInquiryPhone('');
    setInquiryMed('');
    setTimeout(() => setInquirySuccess(false), 6000);
  };

  return (
    <div className="space-y-16 pb-16" id="home-view-container">
      
      {/* 1. EMERGENCY CONTACT BANNER */}
      <div className="bg-rose-600 py-2.5 text-white dark:bg-rose-700" id="emergency-banner">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm font-semibold">
          <div className="flex items-center space-x-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-white animate-ping"></span>
            <span className="uppercase tracking-wider">Emergency Helpline:</span>
            <span>Need emergency surgical supplies or critical medicines in Gaya?</span>
          </div>
          <a href="tel:+919471971100" className="flex items-center space-x-1 hover:underline text-white font-bold bg-rose-800 px-3 py-1 rounded-md">
            <Phone className="h-3.5 w-3.5" />
            <span>Call Now: 09471971100</span>
          </a>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-12 lg:py-20" id="hero-section">
        {/* Abstract Background Orbs */}
        <div className="absolute top-1/4 left-10 -z-10 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-500/5"></div>
        <div className="absolute bottom-1/4 right-10 -z-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-500/5"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            
            {/* Left Content Column */}
            <div className="space-y-6 lg:col-span-7" id="hero-text-content">
              <span className="inline-flex items-center space-x-1.5 rounded-full bg-emerald-100/70 px-3 py-1.5 text-xs font-semibold text-[#0A8F6A] dark:bg-emerald-950/50 dark:text-emerald-400">
                <ShieldCheck className="h-4 w-4" />
                <span>100% Genuine Medicines & Homeopathic Care</span>
              </span>
              
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl font-outfit leading-tight">
                Sujata Homoeo Hall <br />
                <span className="text-[#0A8F6A] bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
                  Your Trusted Pharmacy in Tekari
                </span>
              </h1>
              
              <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Providing premium homeopathic dilutions, mother tinctures, general prescriptions, baby care essentials, surgical equipment, and daily healthcare supplies at Agrawal Medicine Market, Gaya, Bihar. Dedicated to authentic care and local wellness.
              </p>

              {/* Special Delivery Tag */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <span className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Prescription Pre-Orders</span>
                </span>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <span className="flex items-center space-x-1 text-blue-600 dark:text-blue-400">
                  <BadgePercent className="h-4 w-4" />
                  <span>Attractive Discounts</span>
                </span>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <span className="flex items-center space-x-1 text-amber-600 dark:text-amber-400">
                  <MapPin className="h-4 w-4" />
                  <span>Tekari Road Location</span>
                </span>
              </div>

              {/* Action Button cluster */}
              <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                <a
                  href="tel:+919471971100"
                  className="flex items-center justify-center space-x-2.5 rounded-xl bg-slate-900 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-slate-950/10 hover:bg-slate-800 transition-all dark:bg-emerald-600 dark:hover:bg-emerald-700"
                  id="hero-call-now"
                >
                  <Phone className="h-4.5 w-4.5" />
                  <span>Call Now: 09471971100</span>
                </a>
                
                <button
                  onClick={() => {
                    setView('whatsapp-order');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center justify-center space-x-2.5 rounded-xl bg-[#0A8F6A] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-600/10 hover:bg-[#087a5a] transition-all"
                  id="hero-whatsapp-order"
                >
                  <MessageSquare className="h-4.5 w-4.5" />
                  <span>WhatsApp Order Form</span>
                </button>

                <a
                  href="https://maps.google.com/?q=Agrawal+Medicine+Market,+Tekari+Rd,+Dulhingunj,+Gaya,+Bihar+823001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                  id="hero-get-directions"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Graphics/Image Column */}
            <div className="lg:col-span-5" id="hero-image-pane">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Visual Glow Layer */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-400 to-blue-500 opacity-25 blur-xl dark:opacity-10"></div>
                
                <div className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/30 p-2.5 shadow-2xl backdrop-blur-md dark:border-white/5 dark:bg-slate-950/20">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
                    alt="Sujata Homoeo Hall Medical Store"
                    className="h-64 w-full rounded-2xl object-cover sm:h-80 lg:h-96"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Info Badge */}
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/40 bg-white/40 p-4 backdrop-blur-lg dark:border-white/10 dark:bg-slate-900/40">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0A8F6A] text-white shadow-md">
                        <Activity className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white">Active Pharmacy Hours</p>
                        <p className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">Mon - Sun: 9:00 AM - 9:30 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEDICINE AVAILABILITY INQUIRY & SEARCH TOOL (Interactive) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="medicine-search-section">
        <div className="glass-panel-heavy p-6 shadow-xl rounded-3xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 font-outfit">
                <Pill className="h-6 w-6 text-[#0A8F6A]" />
                <span>Medicine Availability Check</span>
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Search our popular stock or filter by category to check real-time availability before ordering.
              </p>
            </div>

            {/* Quick search input */}
            <div className="relative w-full max-w-md">
              <Search className="absolute top-3 left-3 h-4.5 w-4.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search Arnica, Nux Vomica, Dolo, BP monitor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-white/40 bg-white/30 py-2.5 pl-10 pr-4 text-sm focus:border-[#0A8F6A] focus:bg-white/80 focus:ring-1 focus:ring-[#0A8F6A] dark:border-white/5 dark:bg-slate-950/40 dark:text-white transition-colors"
                id="medicine-search-bar"
              />
            </div>
          </div>

          {/* Category Badges list */}
          <div className="flex flex-wrap gap-1.5 pb-4 border-b border-white/20 dark:border-white/5" id="category-filters-container">
            {MEDICINE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0A8F6A] text-white shadow-sm'
                    : 'bg-white/40 text-slate-600 hover:bg-white/60 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10'
                }`}
                id={`cat-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of Results */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" id="search-results-grid">
            {filteredMedicines.length > 0 ? (
              filteredMedicines.map((med) => (
                <div 
                  key={med.id} 
                  className="glass-panel rounded-2xl p-4 hover:border-[#0A8F6A]/30 hover:bg-white/60 transition-all dark:hover:bg-slate-900/50"
                  id={`med-card-${med.id}`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        {med.brand}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1.5">{med.name}</h3>
                    </div>
                    {med.price && (
                      <span className="text-sm font-bold text-[#0A8F6A]">{med.price}</span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{med.description}</p>
                  
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className={`inline-flex items-center space-x-1 text-xs font-bold ${
                      med.availability === 'In Stock' 
                        ? 'text-emerald-600 dark:text-emerald-400' 
                        : 'text-amber-600 dark:text-amber-400'
                    }`}>
                      <span className={`h-2 w-2 rounded-full ${med.availability === 'In Stock' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                      <span>{med.availability}</span>
                    </span>

                    <button
                      onClick={() => handleInquireWhatsApp(med.name)}
                      className="text-xs font-bold text-[#0A8F6A] hover:underline flex items-center space-x-1"
                      id={`inquire-btn-${med.id}`}
                    >
                      <span>Inquire/Order</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-sm text-slate-500 dark:text-slate-400" id="search-no-results">
                No matching medicines found. Want us to source it for you within 24 hours? 
                <button 
                  onClick={() => handleInquireWhatsApp(searchQuery)}
                  className="ml-1.5 text-[#0A8F6A] hover:underline font-bold"
                >
                  Request on WhatsApp Now
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="why-choose-us">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A8F6A]">Gaya’s Premier Pharmacy</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 sm:text-4xl">
            Why Choose Sujata Homoeo Hall?
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
            Since our inception, we have stood as a trusted pillar of genuine care, authentic medicines, and accessible services for families in Gaya, Bihar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" id="why-choose-us-grid">
          {[
            {
              title: '100% Genuine Medicines',
              desc: 'We stock only authorized and sealed homeopathic and allopathic formulations directly sourced from reliable global manufacturers.',
              icon: ShieldCheck,
              color: 'from-teal-500 to-emerald-500'
            },
            {
              title: 'Experienced Pharmacists',
              desc: 'Our staff consists of trained professionals who check prescription details carefully to guarantee precise dosage safety.',
              icon: Award,
              color: 'from-blue-500 to-indigo-500'
            },
            {
              title: 'Highly Affordable Prices',
              desc: 'We sell standard products at strict MRP or lower with reasonable discounts to make your healthcare budget pocket-friendly.',
              icon: Banknote,
              color: 'from-emerald-500 to-green-500'
            },
            {
              title: 'Convenient WhatsApp Ordering',
              desc: 'Avoid long queues! Simply take a picture of your prescription, upload it, and let us prepare your package beforehand.',
              icon: MessageSquare,
              color: 'from-amber-500 to-orange-500'
            },
            {
              title: 'Prescription Allopathics',
              desc: 'Authorized supply of life-saving tablets, capsules, vaccines, and diabetic essentials on valid prescriptions.',
              icon: Pill,
              color: 'from-pink-500 to-rose-500'
            },
            {
              title: 'Medical Devices & Surgicals',
              desc: 'Reliable distribution of digital blood pressure meters, glucose trackers, vaporizers, oximeters, and surgical dressings.',
              icon: Activity,
              color: 'from-purple-500 to-blue-500'
            },
            {
              title: 'Trusted Local Pharmacy',
              desc: 'Located at Agrawal Medicine Market, Gaya, we are a household name known for absolute business integrity.',
              icon: HeartPulse,
              color: 'from-red-500 to-rose-500'
            },
            {
              title: 'Fast Assistance',
              desc: 'Our proactive sales counter operates smoothly, ensuring zero wait times and instantaneous support.',
              icon: Sparkles,
              color: 'from-amber-500 to-yellow-500'
            }
          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-3xl border border-white/30 bg-white/40 p-5 shadow-sm hover:shadow-md transition-all dark:border-white/5 dark:bg-slate-900/40 hover:-translate-y-0.5 duration-200"
                id={`why-card-${idx}`}
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr ${item.color} text-white`}>
                  <IconComponent className="h-5.5 w-5.5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-4">{item.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. FEATURED PRODUCT CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="featured-categories">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A8F6A]">Specialized Inventory</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 sm:text-4xl">
            Featured Healthcare Categories
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
            Explore our curated inventory of general medicines, homeopathic preparations, pediatric essentials, and diagnostic equipment.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" id="categories-grid">
          {[
            { name: 'Homeopathic Dilutions', icon: Pill, desc: 'SBL, Reckeweg, Schwabe' },
            { name: 'Mother Tinctures', icon: Sparkle, desc: 'Pure plant extracts' },
            { name: 'Tablets & Capsules', icon: Pill, desc: 'Daily prescriptions' },
            { name: 'Medical Equipment', icon: Activity, desc: 'BP & Glucometers' },
            { name: 'Baby Care', icon: Baby, desc: 'Gentle oils, soap, powder' },
            { name: 'First Aid & Bandages', icon: HeartPulse, desc: 'Sterilized dressings' },
          ].map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={idx} 
                className="group cursor-pointer rounded-3xl border border-white/30 bg-white/40 p-4 text-center hover:border-emerald-300 hover:bg-white/75 transition-all dark:border-white/5 dark:bg-slate-900/40 dark:hover:bg-slate-800/40"
                onClick={() => {
                  setActiveCategory(cat.name === 'Mother Tinctures' ? 'Homeopathic Mother Tinctures' : cat.name === 'First Aid & Bandages' ? 'OTC & General' : cat.name);
                  const el = document.getElementById('medicine-search-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                id={`feat-cat-${idx}`}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#0A8F6A] shadow-sm group-hover:bg-[#0A8F6A] group-hover:text-white transition-all dark:bg-slate-800">
                  <Icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-3.5 group-hover:text-[#0A8F6A] transition-colors">{cat.name}</h3>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">{cat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. WORKING PROCESS */}
      <section className="py-12" id="working-process">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0A8F6A]">How it works</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 sm:text-4xl font-outfit">
              Our Simple 4-Step Process
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
              Getting genuine healthcare supplies is fast, seamless, and completely contactless.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4" id="process-stepper">
            {[
              { step: '01', title: 'Visit Store / Ask Online', desc: 'Step in to our shop in Agrawal Medicine Market, Gaya or search our online availability catalog.' },
              { step: '02', title: 'Share Prescription', desc: 'Upload your doctor prescription using our digital form, or hand it over at the counter.' },
              { step: '03', title: 'Verify & Pack', desc: 'Our experienced pharmacists double-check standard dosages and pack your genuine medicines securely.' },
              { step: '04', title: 'Easy Payment & Pickup', desc: 'Complete payments through cash, UPI or cards and pick up your medical supplies or opt for delivery.' }
            ].map((p, idx) => (
              <div key={idx} className="relative bg-white/40 border border-white/30 rounded-3xl p-5 shadow-sm backdrop-blur-md dark:bg-slate-900/40 dark:border-white/5" id={`process-card-${idx}`}>
                <span className="absolute top-4 right-4 text-3xl font-black text-slate-900/10 dark:text-white/5">{p.step}</span>
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white mt-4">{p.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. QUICK PRESCRIPTION UPLOAD & INQUIRY FORM SECTION (Extra features) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="quick-inquiry-section">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Quick Availability Inquiry Card */}
          <div className="glass-panel-heavy p-6 shadow-xl rounded-3xl lg:col-span-6" id="availability-inquiry-box">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 font-outfit">
              <Activity className="h-5 w-5 text-[#0A8F6A]" />
              <span>Quick Availability Inquiry</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Can’t find your specific homeopathic dilution? Type it below and check instantly via WhatsApp.
            </p>

            <form onSubmit={handleQuickInquirySubmit} className="mt-4 space-y-4" id="quick-inquiry-form">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-[10px] font-bold uppercase text-slate-400">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-white/30 bg-white/30 px-3 py-2 text-xs focus:border-[#0A8F6A] focus:bg-white/80 focus:ring-1 focus:ring-[#0A8F6A] dark:border-white/5 dark:bg-slate-950/40 dark:text-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-slate-400">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit number"
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-white/30 bg-white/30 px-3 py-2 text-xs focus:border-[#0A8F6A] focus:bg-white/80 focus:ring-1 focus:ring-[#0A8F6A] dark:border-white/5 dark:bg-slate-950/40 dark:text-white transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase text-slate-400">Medicine & Quantity Required</label>
                <input
                  type="text"
                  required
                  placeholder="Example: SBL Berberis Aquifolium Q - 2 bottles"
                  value={inquiryMed}
                  onChange={(e) => setInquiryMed(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-white/30 bg-white/30 px-3 py-2.5 text-xs focus:border-[#0A8F6A] focus:bg-white/80 focus:ring-1 focus:ring-[#0A8F6A] dark:border-white/5 dark:bg-slate-950/40 dark:text-white transition-all"
                />
              </div>

              {inquirySuccess && (
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  ✔ Inquiry formatted! Redirecting to WhatsApp...
                </p>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-1.5 rounded-xl bg-[#0A8F6A] py-2.5 text-xs font-bold text-white hover:bg-[#087a5a]"
                id="quick-inquiry-submit-btn"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Inquire Medicine via WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Near-By Delivery Info Card */}
          <div className="glass-panel-heavy p-6 shadow-xl rounded-3xl lg:col-span-6 flex flex-col justify-between" id="delivery-info-box">
            <div className="space-y-3">
              <span className="inline-flex items-center space-x-1 rounded bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-500/20">
                Gaya Delivery Zone
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-outfit">Nearby Delivery Information</h3>
              <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                To serve you better during health emergencies, we facilitate nearby doorstep deliveries for regular/bulk orders in major sectors of Gaya, Bihar:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Tekari Road</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>AP Colony</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Delha</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Dulhingunj</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => {
                  setView('whatsapp-order');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full flex items-center justify-center space-x-1 rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-700"
                id="request-delivery-form-btn"
              >
                <span>Request Delivery / Pre-Order</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="testimonials">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A8F6A]">Real Feedback</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 sm:text-4xl">
            Why Gaya Customers Trust Us
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
            Read stories from verified local clients who rely on Sujata Homoeo Hall for their daily healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" id="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id} 
              className="flex flex-col justify-between rounded-3xl border border-white/30 bg-white/40 p-5 shadow-sm backdrop-blur-md dark:border-white/5 dark:bg-slate-900/40 hover:shadow-md transition-all hover:-translate-y-0.5 duration-200"
              id={`testimonial-${t.id}`}
            >
              <div>
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs italic leading-relaxed text-slate-600 dark:text-slate-300">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">{t.name}</h4>
                  <p className="text-[10px] text-slate-400">{t.location}</p>
                </div>
                {t.verified && (
                  <span className="rounded bg-emerald-50 px-2 py-0.5 text-[9px] font-extrabold text-[#0A8F6A] uppercase tracking-wide dark:bg-emerald-950/40 dark:text-emerald-400">
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. LATEST HEALTH TIPS & BLOG PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="health-tips-blog">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A8F6A]">Homeopathic Wellness Guide</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 sm:text-4xl">
            Latest Health Tips & Insights
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
            Read curated medical tips written by certified practitioners on using homeopathic and general care safely at home.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3" id="health-tips-grid">
          {healthTips.map((tip, idx) => (
            <div key={idx} className="flex flex-col justify-between rounded-3xl border border-white/30 bg-white/40 p-5 shadow-sm backdrop-blur-md dark:border-white/5 dark:bg-slate-900/40 hover:shadow-md transition-all hover:-translate-y-0.5 duration-200" id={`health-tip-card-${idx}`}>
              <div>
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                  <span className="text-[#0A8F6A]">{tip.category}</span>
                  <span>{tip.readTime}</span>
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white hover:text-[#0A8F6A] transition-colors cursor-pointer">{tip.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{tip.excerpt}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                <span>{tip.date}</span>
                <span className="font-bold text-[#0A8F6A] cursor-pointer hover:underline">Read Article →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8" id="faq">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A8F6A]">Information Desk</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
            Got questions about homeopathic prescriptions, generic medicines, or our location? Find fast answers below.
          </p>
        </div>

        <div className="space-y-4" id="faq-accordions-group">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div 
                key={faq.id} 
                className="rounded-2xl border border-white/30 bg-white/40 shadow-sm overflow-hidden backdrop-blur-md dark:border-white/5 dark:bg-slate-900/40"
                id={`faq-item-container-${faq.id}`}
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between p-4.5 text-left text-sm font-bold text-slate-800 transition-colors hover:bg-white/50 dark:text-white dark:hover:bg-white/5"
                  id={`faq-toggle-btn-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 text-[#0A8F6A] shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-[#0A8F6A] shrink-0" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="p-4.5 bg-white/50 text-xs leading-relaxed text-slate-600 dark:bg-slate-950/50 dark:text-slate-400 border-t border-white/20 dark:border-white/5" id={`faq-answer-${faq.id}`}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 11. GOOGLE MAP SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="google-map-integration">
        <div className="glass-panel-heavy p-6 shadow-xl rounded-3xl">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            
            {/* Address Details Card */}
            <div className="lg:col-span-4 space-y-4" id="map-address-panel">
              <span className="inline-flex items-center space-x-1 rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-500/20">
                <Map className="h-3.5 w-3.5" />
                <span>Visit Us Today</span>
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-outfit">Store Location</h3>
              <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                Our medical store is situated at a highly accessible point in Gaya’s largest pharma commerce block. Step in to browse or verify stocks.
              </p>
              
              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-start space-x-2 text-slate-600 dark:text-slate-300">
                  <MapPin className="h-5 w-5 text-[#0A8F6A] shrink-0 mt-0.5" />
                  <p>
                    <strong>Address:</strong><br />
                    Agrawal Medicine Market,<br />
                    Tekari Road, Dulhingunj,<br />
                    Gaya, Bihar - 823001
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-300">
                  <Phone className="h-4.5 w-4.5 text-[#0A8F6A]" />
                  <span><strong>Phone:</strong> 09471971100</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://maps.google.com/?q=Agrawal+Medicine+Market,+Tekari+Rd,+Dulhingunj,+Gaya,+Bihar+823001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center space-x-1.5 rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-700"
                  id="open-external-map-btn"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Google Map Iframe Embed (Gaya, Bihar) */}
            <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-white/20 h-72 sm:h-96 shadow-inner" id="gaya-map-iframe-container">
              <iframe
                title="Sujata Homoeo Hall Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.1118671424103!2d84.9972304!3d24.7964177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2bc32c3f58a3f%3A0xcf95304f5e7110ad!2sTekari%20Rd%2C%20Dulhingunj%2C%20Gaya%2C%20Bihar%20823001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
                id="gaya-gmap-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 12. CONTACT CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 shadow-2xl rounded-3xl overflow-hidden" id="contact-cta">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-emerald-600/90 via-[#0A8F6A]/95 to-blue-700/90 backdrop-blur-lg p-8 text-center text-white border border-white/30 sm:p-12">
          {/* Subtle patterns */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]"></div>
          
          <h2 className="relative text-3xl font-extrabold tracking-tight sm:text-4xl font-outfit">
            Need Homoeopathic or General Medicines?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm text-emerald-50/80">
            Don't compromise on your wellness. Place your pre-orders today, consult with our pharmacists or request help over phone call instantly.
          </p>

          <div className="relative mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+919471971100"
              className="flex items-center justify-center space-x-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-slate-900 shadow-sm hover:bg-slate-50 transition-all"
              id="cta-call-btn"
            >
              <Phone className="h-4.5 w-4.5 text-[#0A8F6A]" />
              <span>Call Us: 09471971100</span>
            </a>
            <button
              onClick={() => {
                setView('whatsapp-order');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center justify-center space-x-2 rounded-xl bg-emerald-900 px-7 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-950 transition-all"
              id="cta-whatsapp-btn"
            >
              <MessageSquare className="h-4.5 w-4.5" />
              <span>WhatsApp Pre-Order Form</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
