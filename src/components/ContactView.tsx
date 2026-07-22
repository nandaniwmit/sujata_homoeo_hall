import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle2, Send, Map } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare WhatsApp text template for the feedback inquiry
    const feedbackTemplate = 
`Hello Sujata Homoeo Hall 🩺

I am writing to submit an inquiry through your website contact form.

*Inquiry details:*
----------------------------------------
👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email || 'N/A'}
💬 *Message:* ${formData.message}
----------------------------------------

Please get back to me. Thank you!`;

    const encodedFeedback = encodeURIComponent(feedbackTemplate);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919471971100&text=${encodedFeedback}`;
    
    // Redirect
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16" id="contact-view-container">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#0A8F6A]">Reach Out</span>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-2 sm:text-4xl font-outfit">
          Contact Sujata Homoeo Hall
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
          Have queries about medicine availability or general healthcare needs? Visit our store, call our desk, or drop us a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12" id="contact-body-grid">
        
        {/* Left Column: Business Details */}
        <div className="space-y-6 lg:col-span-5" id="contact-details-panel">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Store Information</h2>
          <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            Visit our physical location inside Gaya’s central medical commercial complex. We have fully qualified pharmacists present throughout business hours.
          </p>

          <div className="space-y-4" id="details-list-container">
            {/* Address */}
            <div className="flex items-start space-x-3.5 rounded-2xl border border-white/20 bg-white/30 p-4.5 dark:border-white/5 dark:bg-slate-900/40 backdrop-blur-md">
              <MapPin className="h-5.5 w-5.5 text-[#0A8F6A] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Address</h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
                  Agrawal Medicine Market,<br />
                  Tekari Rd, Dulhingunj,<br />
                  Gaya, Bihar - 823001
                </p>
              </div>
            </div>

            {/* Phones */}
            <div className="flex items-start space-x-3.5 rounded-2xl border border-white/20 bg-white/30 p-4.5 dark:border-white/5 dark:bg-slate-900/40 backdrop-blur-md">
              <Phone className="h-5.5 w-5.5 text-[#0A8F6A] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Call Support</h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 font-semibold">
                  Primary: <a href="tel:+919471971100" className="hover:underline text-[#0A8F6A]">09471971100</a>
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Available for urgent medicine inquiries.</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3.5 rounded-2xl border border-white/20 bg-white/30 p-4.5 dark:border-white/5 dark:bg-slate-900/40 backdrop-blur-md">
              <Mail className="h-5.5 w-5.5 text-[#0A8F6A] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Email</h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">
                  sujatahomoeogaya@gmail.com
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start space-x-3.5 rounded-2xl border border-white/20 bg-white/30 p-4.5 dark:border-white/5 dark:bg-slate-900/40 backdrop-blur-md">
              <Clock className="h-5.5 w-5.5 text-[#0A8F6A] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Working Hours</h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">
                  Monday to Sunday: <span className="font-bold text-[#0A8F6A]">9:00 AM - 9:30 PM</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="glass-panel-heavy p-6 shadow-xl rounded-3xl lg:col-span-7" id="contact-form-panel">
          {submitted ? (
            <div className="py-12 text-center" id="contact-form-success">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-[#0A8F6A] dark:bg-emerald-950/40 mb-6 border border-emerald-500/20">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-outfit">Message Formatted!</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-sm mx-auto">
                Thank you! Your message description was compiled and opened in WhatsApp directly. We will read your inquiry and reply immediately.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-xl border border-white/20 bg-white/40 px-5 py-2.5 text-xs font-semibold text-slate-600 hover:bg-white/60 dark:bg-white/5 dark:text-slate-200"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-5" id="business-contact-form">
              <h3 className="text-lg font-bold text-slate-950 dark:text-white font-outfit">Send Us a Message</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Fill the fields below to trigger an encrypted pre-formatted message callback directly to our WhatsApp support agent.
              </p>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Your Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1.5 block w-full rounded-xl border border-white/30 bg-white/30 px-4 py-2.5 text-sm focus:border-[#0A8F6A] focus:bg-white/80 focus:ring-1 focus:ring-[#0A8F6A] dark:border-white/5 dark:bg-slate-950/40 dark:text-white transition-all"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Phone Number <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1.5 block w-full rounded-xl border border-white/30 bg-white/30 px-4 py-2.5 text-sm focus:border-[#0A8F6A] focus:bg-white/80 focus:ring-1 focus:ring-[#0A8F6A] dark:border-white/5 dark:bg-slate-950/40 dark:text-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Email Address (Optional)</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1.5 block w-full rounded-xl border border-white/30 bg-white/30 px-4 py-2.5 text-sm focus:border-[#0A8F6A] focus:bg-white/80 focus:ring-1 focus:ring-[#0A8F6A] dark:border-white/5 dark:bg-slate-950/40 dark:text-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Message / Query <span className="text-red-500">*</span></label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your inquiry, list any specific homeopathic dilutions or allopathic tablets you require..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1.5 block w-full rounded-xl border border-white/30 bg-white/30 px-4 py-2.5 text-sm focus:border-[#0A8F6A] focus:bg-white/80 focus:ring-1 focus:ring-[#0A8F6A] dark:border-white/5 dark:bg-slate-950/40 dark:text-white transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 rounded-xl bg-[#0A8F6A] py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#087a5a] hover:scale-[1.01] transition-all"
                id="contact-form-submit-btn"
              >
                <Send className="h-4.5 w-4.5" />
                <span>Send Message via WhatsApp</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Embedded Maps Row */}
      <section className="glass-panel-heavy p-6 shadow-xl rounded-3xl" id="contact-maps-block">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-4">
            <span className="inline-flex items-center space-x-1 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-500/20">
              <Map className="h-3.5 w-3.5" />
              <span>Gaya Map Integration</span>
            </span>
            <h3 className="text-xl font-bold text-slate-950 dark:text-white font-outfit">How To Reach Us</h3>
            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Our pharmacy is located directly inside Agrawal Medicine Market on Tekari Road. It is a major healthcare landmark in Gaya, meaning any local transport will know the route.
            </p>
            <div className="border-t border-white/20 dark:border-white/5 pt-3">
              <a
                href="https://maps.google.com/?q=Agrawal+Medicine+Market,+Tekari+Rd,+Dulhingunj,+Gaya,+Bihar+823001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-xs font-bold text-[#0A8F6A] hover:underline"
              >
                <span>Open deep-link directions</span>
                <Send className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 rounded-2xl overflow-hidden h-72 sm:h-96 border border-white/20" id="contact-map-frame-container">
            <iframe
              title="Sujata Homoeo Hall Gaya GPS Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.1118671424103!2d84.9972304!3d24.7964177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2bc32c3f58a3f%3A0xcf95304f5e7110ad!2sTekari%20Rd%2C%20Dulhingunj%2C%20Gaya%2C%20Bihar%20823001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer"
              id="contact-gps-map"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}
