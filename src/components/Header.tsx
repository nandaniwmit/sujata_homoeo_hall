import React, { useState } from 'react';
import { ViewType } from '../types';
import { Menu, X, Phone, ShoppingCart, Sun, Moon, Sparkles, Heart } from 'lucide-react';

interface HeaderProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Header({ currentView, setView, darkMode, setDarkMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: 'home' as ViewType },
    { label: 'About Us', value: 'about' as ViewType },
    { label: 'Services', value: 'services' as ViewType },
    { label: 'Gallery', value: 'gallery' as ViewType },
    { label: 'Contact', value: 'contact' as ViewType },
    { label: 'WhatsApp Order', value: 'whatsapp-order' as ViewType },
  ];

  const handleNavClick = (view: ViewType) => {
    setView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/30 bg-white/40 backdrop-blur-md transition-colors duration-300 dark:border-white/5 dark:bg-slate-950/40 shadow-sm" id="main-header">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo Section */}
        <div 
          className="flex cursor-pointer items-center space-x-2.5" 
          onClick={() => handleNavClick('home')}
          id="header-logo-container"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#0A8F6A] to-blue-600 text-white shadow-lg shadow-emerald-500/10">
            <Heart className="h-5.5 w-5.5 fill-white" />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-amber-500 text-[8px] font-bold">
              +
            </span>
          </div>
          <div>
            <span className="block font-sans text-lg font-bold tracking-tight text-slate-900 transition-colors dark:text-white sm:text-xl font-outfit">
              Sujata <span className="text-[#0A8F6A]">Homoeo</span>
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 -mt-1">
              Hall & Medical Store
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1" id="desktop-navbar">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                currentView === item.value
                  ? 'bg-white/60 text-[#0A8F6A] border border-white/40 shadow-sm dark:bg-white/10 dark:text-emerald-400 dark:border-white/10'
                  : 'text-slate-600 hover:bg-white/30 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white'
              }`}
              id={`nav-item-${item.value}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons Section */}
        <div className="flex items-center space-x-2" id="header-actions">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/40 bg-white/30 text-slate-600 transition-all hover:bg-white/50 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
            aria-label="Toggle Dark Mode"
            id="dark-mode-btn"
          >
            {darkMode ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Quick Call Button (Desktop) */}
          <a
            href="tel:+919471971100"
            className="hidden sm:flex h-10 items-center space-x-1.5 rounded-xl border border-white/40 bg-white/30 px-4 text-xs font-semibold text-slate-700 transition-all hover:bg-white/50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
            id="header-call-btn"
          >
            <Phone className="h-4 w-4 text-[#0A8F6A]" />
            <span>09471971100</span>
          </a>

          {/* Quick Order Button */}
          <button
            onClick={() => handleNavClick('whatsapp-order')}
            className="flex h-10 items-center space-x-1.5 rounded-xl bg-emerald-600 px-4 text-xs font-semibold text-white shadow-lg hover:bg-emerald-700 transition-all hover:scale-[1.02]"
            id="header-order-btn"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden md:inline">Order Medicines</span>
            <span className="md:hidden">Order</span>
          </button>

          {/* Mobile Menu Open */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/40 bg-white/30 text-slate-700 hover:bg-white/50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 lg:hidden"
            aria-label="Open Navigation Menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/20 bg-white/85 py-4 px-4 shadow-lg backdrop-blur-lg transition-all dark:border-white/5 dark:bg-slate-900/85" id="mobile-drawer">
          <div className="flex flex-col space-y-1.5">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all ${
                  currentView === item.value
                    ? 'bg-[#0A8F6A]/10 text-[#0A8F6A] border border-[#0A8F6A]/20 dark:bg-[#0A8F6A]/20 dark:text-emerald-400 dark:border-emerald-500/20'
                    : 'text-slate-600 hover:bg-white/50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white'
                }`}
                id={`mobile-nav-item-${item.value}`}
              >
                <span>{item.label}</span>
                {item.value === 'whatsapp-order' && (
                  <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white uppercase">
                    Form
                  </span>
                )}
              </button>
            ))}

            <div className="pt-4 border-t border-white/20 dark:border-white/10 flex flex-col gap-2.5">
              <a
                href="tel:+919471971100"
                className="flex w-full items-center justify-center space-x-2 rounded-xl border border-white/40 bg-white/40 py-3 text-center text-sm font-bold text-slate-700 hover:bg-white/60 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                id="mobile-call-link"
              >
                <Phone className="h-4.5 w-4.5 text-[#0A8F6A]" />
                <span>Call Store: 09471971100</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
