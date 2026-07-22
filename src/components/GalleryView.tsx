import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { GalleryItem } from '../types';
import { Search, ZoomIn, X, ChevronLeft, ChevronRight, Filter, Info } from 'lucide-react';

export default function GalleryView() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'store' | 'medicines' | 'products' | 'equipment'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterCategories = [
    { label: 'All Photos', value: 'all' as const },
    { label: 'Store Front', value: 'store' as const },
    { label: 'Medicines & Dilutions', value: 'medicines' as const },
    { label: 'Products & Ointments', value: 'products' as const },
    { label: 'Medical Equipment', value: 'equipment' as const },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    return activeFilter === 'all' || item.category === activeFilter;
  });

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12" id="gallery-view-container">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#0A8F6A]">Visual Tour</span>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-2 sm:text-4xl font-outfit">
          Sujata Homoeo Gallery
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
          Explore photographs of our storefront in Gaya, our preserved homeopathic mother tinctures, wellness products, and modern medical devices.
        </p>
      </div>

      {/* Filter Tabs Row */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 border-b border-white/20 pb-5 dark:border-white/5" id="gallery-category-bar">
        {filterCategories.map((tab) => (
          <button
            key={tab.value}
            onClick={() => {
              setActiveFilter(tab.value);
              setLightboxIndex(null);
            }}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
              activeFilter === tab.value
                ? 'bg-[#0A8F6A] text-white shadow-sm'
                : 'bg-white/40 text-slate-600 hover:bg-white/60 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10'
            }`}
            id={`gallery-filter-${tab.value}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" id="gallery-images-masonry">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(idx)}
            className="group relative overflow-hidden rounded-3xl border border-white/30 bg-white/40 p-2.5 shadow-sm hover:shadow-md cursor-pointer dark:border-white/5 dark:bg-slate-900/40 hover:-translate-y-0.5 duration-200"
            id={`gallery-card-${item.id}`}
          >
            <div className="relative overflow-hidden rounded-2xl aspect-4/3 bg-slate-100/30">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                <div className="rounded-full bg-white/90 p-2.5 text-[#0A8F6A] shadow shadow-slate-950/20">
                  <ZoomIn className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div className="p-2.5 space-y-1">
              <span className="inline-block rounded bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-[#0A8F6A] uppercase dark:bg-emerald-950/35">
                {item.category}
              </span>
              <h3 className="text-xs font-bold text-slate-950 dark:text-white mt-1">{item.title}</h3>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 line-clamp-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Popup Overlay */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
          id="lightbox-backdrop"
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            id="lightbox-close"
          >
            <X className="h-5.5 w-5.5" />
          </button>

          {/* Nav Prev */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            id="lightbox-prev"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Active Image container */}
          <div 
            className="relative max-w-4xl max-h-[75vh] w-full text-center space-y-4"
            onClick={(e) => e.stopPropagation()}
            id="lightbox-body"
          >
            <img
              src={filteredItems[lightboxIndex].imageUrl}
              alt={filteredItems[lightboxIndex].title}
              className="mx-auto max-w-full max-h-[65vh] rounded-2xl object-contain border border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            
            <div className="bg-white/10 text-white p-4 rounded-xl max-w-xl mx-auto backdrop-blur-md space-y-1">
              <span className="text-[9px] font-bold bg-emerald-600/80 uppercase px-2 py-0.5 rounded text-white">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="text-sm font-bold mt-1.5">{filteredItems[lightboxIndex].title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{filteredItems[lightboxIndex].description}</p>
            </div>
          </div>

          {/* Nav Next */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            id="lightbox-next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}

    </div>
  );
}
