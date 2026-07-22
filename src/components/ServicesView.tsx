import React from 'react';
import { SERVICES } from '../data/servicesData';
import { ViewType } from '../types';
import { 
  FileText, Pill, ShieldPlus, Baby, Sparkles, Activity, Scissors, HeartPulse, Droplet, Accessibility,
  ArrowRight, Heart, Star, CheckCircle2
} from 'lucide-react';

interface ServicesViewProps {
  setView: (view: ViewType) => void;
  setOrderMedicineName: (name: string) => void;
}

export default function ServicesView({ setView, setOrderMedicineName }: ServicesViewProps) {
  
  // Icon selector helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="h-6 w-6" />;
      case 'Pill': return <Pill className="h-6 w-6" />;
      case 'ShieldPlus': return <ShieldPlus className="h-6 w-6" />;
      case 'Baby': return <Baby className="h-6 w-6" />;
      case 'Sparkles': return <Sparkles className="h-6 w-6" />;
      case 'Activity': return <Activity className="h-6 w-6" />;
      case 'Scissors': return <Scissors className="h-6 w-6" />;
      case 'HeartPulse': return <HeartPulse className="h-6 w-6" />;
      case 'Droplet': return <Droplet className="h-6 w-6" />;
      case 'Accessibility': return <Accessibility className="h-6 w-6" />;
      default: return <Heart className="h-6 w-6" />;
    }
  };

  const handleOrderRedirect = (serviceTitle: string) => {
    setOrderMedicineName(`Regarding Service: ${serviceTitle}`);
    setView('whatsapp-order');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16" id="services-view-container">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#0A8F6A]">What We Offer</span>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-2 sm:text-4xl font-outfit">
          Our Comprehensive Services
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
          We stock a deep, specialized selection of standard medicines, diagnostic equipment, surgical devices, and daily wellness items.
        </p>
      </div>

      {/* Grid: 10 Core Services */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2" id="services-detailed-grid">
        {SERVICES.map((srv) => (
          <div 
            key={srv.id} 
            className="glass-panel rounded-3xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 duration-200"
            id={`service-card-${srv.id}`}
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center space-x-3.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A8F6A]/10 text-[#0A8F6A] border border-[#0A8F6A]/20">
                  {getIcon(srv.iconName)}
                </div>
                <div>
                  <span className="inline-block rounded bg-white/40 border border-white/20 px-2 py-0.5 text-[9px] font-bold text-slate-500 uppercase dark:bg-white/5 dark:border-white/5 dark:text-slate-400">
                    {srv.category}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-950 dark:text-white mt-0.5 font-outfit">{srv.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {srv.description}
              </p>

              {/* Bulleted specifics */}
              <div className="mt-5 space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Supplied items include:</p>
                <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 text-xs text-slate-600 dark:text-slate-300">
                  {srv.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Action */}
            <div className="mt-8 pt-4 border-t border-white/20 dark:border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-slate-400">100% Genuine Certified</span>
              <button
                onClick={() => handleOrderRedirect(srv.title)}
                className="flex items-center space-x-1 text-xs font-bold text-[#0A8F6A] hover:underline"
                id={`book-service-btn-${srv.id}`}
              >
                <span>Request or Order</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Quote CTA */}
      <section className="glass-panel-heavy p-8 rounded-3xl shadow-xl" id="services-trust-quote-panel">
        <div className="grid grid-cols-1 gap-6 items-center lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-2">
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">Need a specific brand or customized dilution?</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              We coordinate with primary homeopathic distributors to arrange specialized drops, mother tinctures, and allopathic items within 24 hours of your message.
            </p>
          </div>
          <div className="lg:col-span-4 text-right">
            <button
              onClick={() => {
                setView('whatsapp-order');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-1.5 rounded-xl bg-[#0A8F6A] px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-[#087a5a]"
              id="quote-panel-btn"
            >
              <span>Contact WhatsApp Desk</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
