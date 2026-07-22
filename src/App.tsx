import React, { useState, useEffect } from 'react';
import { ViewType } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import GalleryView from './components/GalleryView';
import ContactView from './components/ContactView';
import WhatsAppOrderForm from './components/WhatsAppOrderForm';
import { Phone, MessageSquare, ArrowUp, X, FileText, Scale, ShieldAlert, Heart } from 'lucide-react';

export default function App() {
  // Navigation & view routing state
  const [currentView, setView] = useState<ViewType>('home');
  
  // Carrying search medicine to WhatsApp form state
  const [orderMedicineName, setOrderMedicineName] = useState<string>('');

  // Dark Mode persistent state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('sujata-theme');
    return saved === 'dark' ? true : false;
  });

  // Back To Top button state
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Modal State for Legal Agreements (Privacy, Terms, Disclaimer)
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  // Sync Dark Mode class on document Element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('sujata-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('sujata-theme', 'light');
    }
  }, [darkMode]);

  // Monitor scrolling to toggle Back To Top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Tracker Integration
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    const cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') || '');
    }
    
    if (!cid) return;

    const visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    const sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      if (currentView) {
        return currentView.charAt(0).toUpperCase() + currentView.slice(1);
      }
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    sendInitPayload();

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      sendExitPayload();
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', sendExitPayload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [currentView]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Switch to whatsapp view and preset medicine
  const handleSetOrderMedicine = (name: string) => {
    setOrderMedicineName(name);
    setView('whatsapp-order');
  };

  // Render view dispatcher
  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomeView 
            setView={setView} 
            setOrderMedicineName={handleSetOrderMedicine} 
          />
        );
      case 'about':
        return <AboutView />;
      case 'services':
        return (
          <ServicesView 
            setView={setView} 
            setOrderMedicineName={handleSetOrderMedicine} 
          />
        );
      case 'gallery':
        return <GalleryView />;
      case 'contact':
        return <ContactView />;
      case 'whatsapp-order':
        return (
          <WhatsAppOrderForm 
            initialMedicineName={orderMedicineName} 
          />
        );
      default:
        return (
          <HomeView 
            setView={setView} 
            setOrderMedicineName={handleSetOrderMedicine} 
          />
        );
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col text-slate-800 transition-colors duration-300 dark:text-slate-100 relative" 
      style={{
        background: darkMode 
          ? 'radial-gradient(circle at top left, #0c152b 0%, #020612 50%, #022119 100%)' 
          : 'radial-gradient(circle at top left, #e0f2fe 0%, #f0f9ff 50%, #f0fdf4 100%)'
      }}
      id="app-root-container"
    >
      {/* Background Orbs for Glass Effect */}
      <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-blue-400 opacity-25 dark:opacity-10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-96 h-96 bg-emerald-400 opacity-25 dark:opacity-10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-[35%] left-[20%] w-72 h-72 bg-teal-400 opacity-15 dark:opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Dynamic Header Component */}
      <Header 
        currentView={currentView} 
        setView={setView} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      {/* Primary Layout Wrapper */}
      <main className="flex-grow" id="main-content-flow">
        {renderCurrentView()}
      </main>

      {/* Dynamic Footer Component */}
      <Footer 
        setView={setView} 
        openModal={setActiveModal} 
      />

      {/* -------------------- PERSISTENT FLOATING ACTIONS -------------------- */}

      {/* 1. Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=919471971100&text=Hello%20Sujata%20Homoeo%20Hall%2C%20I%20have%20an%20inquiry%20regarding%20medicines."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-22 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all"
        aria-label="Direct WhatsApp Chat"
        title="Chat on WhatsApp"
        id="floating-whatsapp-trigger"
      >
        <MessageSquare className="h-6.5 w-6.5 fill-white text-[#25D366]" />
      </a>

      {/* 2. Floating Call Button */}
      <a
        href="tel:+919471971100"
        className="fixed bottom-38 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 hover:scale-110 active:scale-95 transition-all dark:bg-[#0A8F6A] dark:hover:bg-[#087a5a]"
        aria-label="Direct Call Store"
        title="Call Sujata Homoeo Hall"
        id="floating-phone-trigger"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* 3. Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          aria-label="Back to Top"
          title="Scroll to Top"
          id="floating-back-to-top-trigger"
        >
          <ArrowUp className="h-5.5 w-5.5" />
        </button>
      )}

      {/* -------------------- LEGAL & REGULATORY COMPLIANCE MODALS -------------------- */}

      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
          id="legal-modal-overlay"
        >
          <div 
            className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl transition-all dark:border-slate-800 dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()}
            id="legal-modal-content"
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              id="legal-modal-close-btn"
            >
              <X className="h-5.5 w-5.5" />
            </button>

            {/* Modal Headers based on Type */}
            {activeModal === 'privacy' && (
              <div className="space-y-4" id="privacy-policy-body">
                <div className="flex items-center space-x-2.5 text-[#0A8F6A]">
                  <FileText className="h-6 w-6" />
                  <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">Privacy Policy</h3>
                </div>
                <p className="text-[10px] text-slate-400">Effective Date: July 13, 2026</p>
                <div className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 space-y-3">
                  <p>
                    Sujata Homoeo Hall ("we", "our", or "us") operates the informational website. We are committed to safeguarding the privacy of our patients and clients in Gaya, Bihar. This policy outlines how we handle data collected during your visits.
                  </p>
                  <p><strong>1. Information We Collect:</strong><br />
                    When you use our WhatsApp pre-order forms, we request your name, mobile number, delivery address, prescription image, and medicine lists. This data is strictly formulated into your local browser draft and compiled only to send directly to our WhatsApp account (+91 09471971100).
                  </p>
                  <p><strong>2. No Cloud Datastores for Prescriptions:</strong><br />
                    We respect medical confidentiality. Prescription uploads are processed inside your client-side browser runtime and are not stored permanently on any central servers.
                  </p>
                  <p><strong>3. Consent & Medical Integrity:</strong><br />
                    By using our digital WhatsApp pre-order portal, you consent to our pharmacists reviewing the uploaded details under standard pharmaceutical compliance guidelines. We do not sell or lease any user data to third-party pharma advertisers.
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'terms' && (
              <div className="space-y-4" id="terms-conditions-body">
                <div className="flex items-center space-x-2.5 text-[#0A8F6A]">
                  <Scale className="h-6 w-6" />
                  <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">Terms & Conditions</h3>
                </div>
                <p className="text-[10px] text-slate-400">Effective Date: July 13, 2026</p>
                <div className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 space-y-3">
                  <p>
                    By accessing or using this website, you agree to be bound by the terms and conditions of Sujata Homoeo Hall.
                  </p>
                  <p><strong>1. Order Placement & Availability Check:</strong><br />
                    Medicine listings, availability guides ("In Stock", "Available in 24h") are approximate. Our pharmacists reserve the absolute right to verify, modify, or cancel pre-orders based on physical stocks inside our Tekari Road pharmacy or prescription validation.
                  </p>
                  <p><strong>2. Prescription Policy:</strong><br />
                    Scheduled medicines and select diagnostic devices will not be handed over without presenting a valid registered doctor's prescription in original at the billing counter.
                  </p>
                  <p><strong>3. Business Location & Jurisdictions:</strong><br />
                    Sujata Homoeo Hall operates under local government licenses in Gaya, Bihar. All disputes arising from transactions or online pre-orders are subject to the exclusive jurisdiction of the local courts of Gaya district.
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'disclaimer' && (
              <div className="space-y-4" id="medical-disclaimer-body">
                <div className="flex items-center space-x-2.5 text-rose-500">
                  <ShieldAlert className="h-6 w-6" />
                  <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">Medical Disclaimer</h3>
                </div>
                <p className="text-[10px] text-slate-400">Effective Date: July 13, 2026</p>
                <div className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 space-y-3">
                  <p>
                    The medical descriptions, homeopathic dilution guides, mother tincture properties, and dosage outlines provided on this website are for **informational and general knowledge purposes only**.
                  </p>
                  <p className="font-bold border-l-4 border-rose-500 pl-3 py-1 bg-rose-50 dark:bg-rose-950/20 text-slate-800 dark:text-rose-200">
                    Warning: Do not self-diagnose. Homeopathic treatments are highly individualized and based on a complete therapeutic evaluation by a qualified doctor.
                  </p>
                  <p>
                    Nothing contained on this website constitutes professional medical advice, diagnosis, or recommendations. You must consult a registered Homeopathic Physician or allopathic practitioner before administering any drops, dilutions, capsules, or using home diagnostic devices.
                  </p>
                  <p>
                    Sujata Homoeo Hall disclaims any liability for damages, injuries, or adverse effects arising from self-medication, dosage misunderstandings, or direct usage of data compiled from this website.
                  </p>
                </div>
              </div>
            )}

            {/* Modal Bottom Close */}
            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="rounded-xl bg-[#0A8F6A] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#087a5a]"
                id="legal-modal-bottom-close-btn"
              >
                Understood & Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
