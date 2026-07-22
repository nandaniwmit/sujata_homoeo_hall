import React from 'react';
import { ViewType } from '../types';
import { Phone, Mail, MapPin, Clock, MessageSquare, Heart, ShieldAlert, FileText, Scale } from 'lucide-react';

interface FooterProps {
  setView: (view: ViewType) => void;
  openModal: (type: 'privacy' | 'terms' | 'disclaimer') => void;
}

export default function Footer({ setView, openModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNav = (view: ViewType) => {
    setView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-900/90 text-slate-300 backdrop-blur-lg dark:bg-black/80 pt-16 pb-8 transition-colors duration-300" id="main-footer">
      {/* Decorative Top Accent Banner */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-blue-500"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Store Bio */}
          <div className="space-y-4" id="footer-col-bio">
            <div className="flex items-center space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0A8F6A] text-white">
                <Heart className="h-5 w-5 fill-white" />
              </div>
              <span className="font-sans text-xl font-bold tracking-tight text-white">
                Sujata <span className="text-emerald-400">Homoeo</span> Hall
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Your trusted medicine store and pharmacy in Gaya for 100% genuine homeopathic dilutions, patent medicines, healthcare supplements, and clinical supplies.
            </p>
            <div className="pt-2 space-y-2">
              <a 
                href="tel:+919471971100" 
                className="flex items-center space-x-2.5 text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                id="footer-call"
              >
                <Phone className="h-4.5 w-4.5 text-emerald-400" />
                <span>+91 9471971100</span>
              </a>
              <div className="flex items-center space-x-2.5 text-sm text-slate-400">
                <Mail className="h-4.5 w-4.5 text-emerald-400" />
                <span>sujatahomoeogaya@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div id="footer-col-nav">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-emerald-400 transition-colors text-slate-400 hover:underline">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-emerald-400 transition-colors text-slate-400 hover:underline">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-emerald-400 transition-colors text-slate-400 hover:underline">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-emerald-400 transition-colors text-slate-400 hover:underline">
                  Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-emerald-400 transition-colors text-slate-400 hover:underline">
                  Contact & Location
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('whatsapp-order')} className="hover:text-emerald-400 transition-colors text-slate-400 hover:underline">
                  WhatsApp Order Form
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div id="footer-col-services">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Key Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• Homeopathic Dilutions</li>
              <li>• Mother Tinctures & Patents</li>
              <li>• Prescription Allopathic Drugs</li>
              <li>• Diabetic Care Essentials</li>
              <li>• Baby Care & Personal Hygiene</li>
              <li>• Digital Health Monitors</li>
              <li>• First Aid Supplies & bandages</li>
            </ul>
          </div>

          {/* Column 4: Location & Hours */}
          <div className="space-y-4" id="footer-col-details">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-1">Store Details</h3>
            <div className="flex items-start space-x-2.5 text-sm text-slate-400">
              <MapPin className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Agrawal Medicine Market,<br />
                Tekari Rd, Dulhingunj,<br />
                Gaya, Bihar - 823001
              </p>
            </div>
            <div className="flex items-center space-x-2.5 text-sm text-slate-400 pt-1">
              <Clock className="h-4.5 w-4.5 text-emerald-400" />
              <div>
                <p className="font-medium text-white text-xs">Business Hours:</p>
                <p className="text-slate-400">Monday - Sunday</p>
                <p className="text-emerald-400 font-bold text-xs">9:00 AM - 9:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Agreements & Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 space-y-4" id="footer-bottom">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <button 
              onClick={() => openModal('privacy')} 
              className="flex items-center space-x-1 hover:text-emerald-400 transition-colors"
              id="privacy-policy-link"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Privacy Policy</span>
            </button>
            <button 
              onClick={() => openModal('terms')} 
              className="flex items-center space-x-1 hover:text-emerald-400 transition-colors"
              id="terms-conditions-link"
            >
              <Scale className="h-3.5 w-3.5" />
              <span>Terms & Conditions</span>
            </button>
            <button 
              onClick={() => openModal('disclaimer')} 
              className="flex items-center space-x-1 hover:text-emerald-400 transition-colors"
              id="disclaimer-link"
            >
              <ShieldAlert className="h-3.5 w-3.5" />
              <span>Medical Disclaimer</span>
            </button>
          </div>

          <p className="max-w-4xl mx-auto text-[11px] text-slate-500 leading-relaxed">
            <strong>Disclaimer:</strong> Homeopathic dilutions, tinctures, and patent listings provided on this website are for informational and general knowledge purposes only. They are not intended as a substitute for professional medical advice, diagnosis, or treatment. Please consult with a registered homeopathic physician or medical practitioner before starting any therapeutic regimen.
          </p>

          <p className="text-slate-500 pt-2 text-[11px]">
            &copy; {currentYear} Sujata Homoeo Hall. All rights reserved. Developed with trust and care for the people of Gaya, Bihar. <span className="mx-1">|</span> Developed by <a href="https://main.webmakerit.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">WMIT</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
