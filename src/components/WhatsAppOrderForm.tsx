import React, { useState, useRef, useEffect } from 'react';
import { WhatsAppOrder } from '../types';
import { Send, PhoneCall, UploadCloud, FileText, CheckCircle2, ShoppingCart, Clock, Info, ShieldAlert } from 'lucide-react';

interface WhatsAppOrderFormProps {
  initialMedicineName?: string;
}

export default function WhatsAppOrderForm({ initialMedicineName }: WhatsAppOrderFormProps) {
  const [formData, setFormData] = useState<WhatsAppOrder>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: '',
    medicineName: initialMedicineName || '',
    prescriptionUploaded: false,
    prescriptionFileName: '',
    message: '',
    preferredDeliveryTime: 'Anytime (9:00 AM - 9:30 PM)',
  });

  useEffect(() => {
    if (initialMedicineName) {
      setFormData(prev => ({ ...prev, medicineName: initialMedicineName }));
    }
  }, [initialMedicineName]);

  const [dragActive, setDragActive] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Prescription File Handling (Supports click and drag-drop)
  const handleFile = (file: File) => {
    if (file) {
      setFormData(prev => ({
        ...prev,
        prescriptionUploaded: true,
        prescriptionFileName: file.name
      }));
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removePrescription = () => {
    setFormData(prev => ({
      ...prev,
      prescriptionUploaded: false,
      prescriptionFileName: ''
    }));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const textTemplate = 
`Hello Sujata Homoeo Hall 🩺

I would like to place an order for medicines.

*Order Details:*
----------------------------------------
👤 *Customer Name:* ${formData.customerName}
📞 *Phone:* ${formData.mobileNumber}
📧 *Email:* ${formData.email || 'N/A'}
📍 *Delivery Address:* ${formData.address}
📦 *Medicines Required:* ${formData.medicineName}
📄 *Prescription Attached:* ${formData.prescriptionUploaded ? `Yes (File: ${formData.prescriptionFileName})` : 'No'}
⏰ *Preferred Delivery Time:* ${formData.preferredDeliveryTime}
💬 *Special Note/Message:* ${formData.message || 'None'}
----------------------------------------

Please confirm the availability and total price of my order. Thank you!`;

    // Encode text template for WhatsApp API url
    const encodedText = encodeURIComponent(textTemplate);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919471971100&text=${encodedText}`;
    
    // Open in new tab securely
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8" id="whatsapp-order-form-section">
      
      {/* Informative Header Grid */}
      <div className="mb-10 text-center">
        <span className="inline-flex items-center space-x-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-[#0A8F6A] dark:bg-emerald-950/40 dark:text-emerald-400">
          <ShoppingCart className="h-3.5 w-3.5 animate-pulse" />
          <span>WhatsApp Digital Ordering Portal</span>
        </span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Order Medicines via WhatsApp
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 dark:text-slate-400">
          Upload your prescription or type out medicine names to directly message our pharmacists. We will verify your list and prepare your medicines instantly!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12" id="order-container">
        
        {/* Form Column */}
        <div className="glass-panel-heavy p-6 shadow-xl rounded-3xl lg:col-span-8" id="order-form-container">
          {isSubmitted ? (
            <div className="py-12 text-center" id="order-success-view">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-[#0A8F6A] dark:bg-emerald-950/60 dark:text-emerald-400 mb-6 border border-emerald-500/20">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-outfit">Order Draft Redirected!</h2>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                Your order description has been prepared and redirected to WhatsApp (+91 09471971100). If WhatsApp did not open automatically, please click the button below to resume.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleOrderSubmit}
                  className="flex items-center justify-center space-x-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-emerald-700"
                >
                  <Send className="h-4 w-4" />
                  <span>Resume WhatsApp Chat</span>
                </button>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      customerName: '',
                      mobileNumber: '',
                      email: '',
                      address: '',
                      medicineName: '',
                      prescriptionUploaded: false,
                      prescriptionFileName: '',
                      message: '',
                      preferredDeliveryTime: 'Anytime (9:00 AM - 9:30 PM)'
                    });
                  }}
                  className="rounded-xl border border-white/20 bg-white/40 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-white/60 dark:bg-white/5 dark:text-slate-200"
                >
                  Place Another Order
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleOrderSubmit} className="space-y-6" id="whatsapp-prescription-form">
              <div className="grid grid-cols-1 gap-y-5 gap-x-4 sm:grid-cols-2">
                
                {/* Field: Name */}
                <div>
                  <label htmlFor="customerName" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    id="customerName"
                    required
                    placeholder="Enter your name"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    className="mt-1.5 block w-full rounded-xl border border-white/30 bg-white/30 px-4 py-2.5 text-sm text-slate-800 transition-all focus:border-[#0A8F6A] focus:bg-white/80 focus:ring-1 focus:ring-[#0A8F6A] dark:border-white/5 dark:bg-slate-950/40 dark:text-white dark:focus:bg-slate-900"
                  />
                </div>

                {/* Field: Phone Number */}
                <div>
                  <label htmlFor="mobileNumber" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    id="mobileNumber"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    className="mt-1.5 block w-full rounded-xl border border-white/30 bg-white/30 px-4 py-2.5 text-sm text-slate-800 transition-all focus:border-[#0A8F6A] focus:bg-white/80 focus:ring-1 focus:ring-[#0A8F6A] dark:border-white/5 dark:bg-slate-950/40 dark:text-white"
                  />
                </div>

                {/* Field: Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1.5 block w-full rounded-xl border border-white/30 bg-white/30 px-4 py-2.5 text-sm text-slate-800 transition-all focus:border-[#0A8F6A] focus:bg-white/80 focus:ring-1 focus:ring-[#0A8F6A] dark:border-white/5 dark:bg-slate-950/40 dark:text-white"
                  />
                </div>

                {/* Field: Preferred Delivery Time */}
                <div>
                  <label htmlFor="preferredDeliveryTime" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Preferred Delivery / Pickup Time
                  </label>
                  <select
                    name="preferredDeliveryTime"
                    id="preferredDeliveryTime"
                    value={formData.preferredDeliveryTime}
                    onChange={handleInputChange}
                    className="mt-1.5 block w-full rounded-xl border border-white/30 bg-white/30 px-4 py-2.5 text-sm text-slate-800 transition-all focus:border-[#0A8F6A] focus:bg-white/80 focus:ring-1 focus:ring-[#0A8F6A] dark:border-white/5 dark:bg-slate-950/40 dark:text-white"
                  >
                    <option>Anytime (9:00 AM - 9:30 PM)</option>
                    <option>Morning (9:00 AM - 1:00 PM)</option>
                    <option>Afternoon (1:00 PM - 5:00 PM)</option>
                    <option>Evening (5:00 PM - 9:30 PM)</option>
                  </select>
                </div>

                {/* Field: Delivery Address */}
                <div className="sm:col-span-2">
                  <label htmlFor="address" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Complete Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    required
                    placeholder="House No, Landmark, Ward Name, Area, Gaya, Bihar"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1.5 block w-full rounded-xl border border-white/30 bg-white/30 px-4 py-2.5 text-sm text-slate-800 transition-all focus:border-[#0A8F6A] focus:bg-white/80 focus:ring-1 focus:ring-[#0A8F6A] dark:border-white/5 dark:bg-slate-950/40 dark:text-white"
                  />
                </div>

                {/* Field: Medicine List */}
                <div className="sm:col-span-2">
                  <label htmlFor="medicineName" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Medicines / Healthcare Items Required <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="medicineName"
                    id="medicineName"
                    required
                    rows={3}
                    placeholder="Example:
1. SBL Arnica 30 CH - 1 bottle (30ml)
2. Omron BP monitor - 1 Piece"
                    value={formData.medicineName}
                    onChange={handleInputChange}
                    className="mt-1.5 block w-full rounded-xl border border-white/30 bg-white/30 px-4 py-2.5 text-sm text-slate-800 transition-all focus:border-[#0A8F6A] focus:bg-white/80 focus:ring-1 focus:ring-[#0A8F6A] dark:border-white/5 dark:bg-slate-950/40 dark:text-white"
                  />
                </div>
              </div>

              {/* Prescription Upload Area */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                  Upload Prescription (Highly Recommended)
                </label>
                
                <div
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  onClick={triggerFileInput}
                  className={`flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                    dragActive 
                      ? 'border-[#0A8F6A] bg-emerald-500/10' 
                      : 'border-white/30 hover:border-[#0A8F6A] hover:bg-white/20 dark:border-white/10 dark:hover:border-[#0A8F6A] dark:hover:bg-white/5'
                  }`}
                  id="prescription-drop-zone"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    id="prescription-file-input"
                  />

                  {formData.prescriptionUploaded ? (
                    <div className="space-y-2" id="uploaded-file-details">
                      <FileText className="mx-auto h-10 w-10 text-emerald-500" />
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                        {formData.prescriptionFileName}
                      </p>
                      <p className="text-xs text-emerald-500 font-medium">
                        Prescription loaded successfully!
                      </p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removePrescription();
                        }}
                        className="mt-2 text-xs font-semibold text-rose-500 underline hover:text-rose-600"
                        id="remove-prescription-btn"
                      >
                        Remove and upload another
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <UploadCloud className="mx-auto h-10 w-10 text-slate-400 dark:text-slate-500" />
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Drag and drop prescription photo here, or <span className="text-[#0A8F6A] hover:underline">browse files</span>
                      </p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">
                        Supports JPEG, PNG, or PDF files. Maximum size 10MB.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Special Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  Additional Message or Special Instructions (Optional)
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={2}
                  placeholder="Tell us if you want home delivery or self-pickup, any homeopathic potencies or specifications..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1.5 block w-full rounded-xl border border-white/30 bg-white/30 px-4 py-2.5 text-sm text-slate-800 transition-all focus:border-[#0A8F6A] focus:bg-white/80 focus:ring-1 focus:ring-[#0A8F6A] dark:border-white/5 dark:bg-slate-950/40 dark:text-white"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center space-x-2 rounded-xl bg-[#0A8F6A] py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-600/15 transition-all hover:bg-[#087a5a] hover:shadow-lg hover:scale-[1.01]"
                  id="submit-order-whatsapp-btn"
                >
                  <Send className="h-4.5 w-4.5" />
                  <span>Send Order via WhatsApp</span>
                </button>
                <a
                  href="tel:+919471971100"
                  className="flex items-center justify-center space-x-2 rounded-xl border border-white/20 bg-white/40 px-6 py-3.5 text-sm font-bold text-slate-700 transition-all hover:bg-white/60 dark:bg-white/5 dark:text-slate-200"
                  id="direct-call-order-btn"
                >
                  <PhoneCall className="h-4.5 w-4.5 text-[#0A8F6A]" />
                  <span>Call Store Directly</span>
                </a>
              </div>
            </form>
          )}
        </div>

        {/* Informative Side Card Column */}
        <div className="space-y-6 lg:col-span-4" id="order-guidelines-sidebar">
          
          {/* Quick Notice Panel */}
          <div className="glass-panel rounded-3xl p-5 border-emerald-500/20 shadow-sm">
            <h3 className="flex items-center space-x-2 text-sm font-bold text-[#0A8F6A] dark:text-emerald-400 font-outfit">
              <Info className="h-4.5 w-4.5 shrink-0" />
              <span>How WhatsApp Orders Work</span>
            </h3>
            <ol className="mt-3.5 space-y-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              <li className="flex items-start space-x-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-[#0A8F6A]">1</span>
                <span>Complete the details above & list your items or upload prescription.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-[#0A8F6A]">2</span>
                <span>Click **Send Order**. A formatted template will open in WhatsApp to our number (+91 09471971100).</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-[#0A8F6A]">3</span>
                <span>Our pharmacist will verify the items, tell you the price, and prepare/arrange delivery of the order.</span>
              </li>
            </ol>
          </div>

          {/* Secure Prescription Guideline */}
          <div className="glass-panel rounded-3xl p-5 shadow-sm">
            <h3 className="flex items-center space-x-2 text-sm font-bold text-slate-900 dark:text-white font-outfit">
              <ShieldAlert className="h-4.5 w-4.5 text-amber-500 shrink-0" />
              <span>Prescription Guidelines</span>
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              For scheduled drugs, antibiotics, or specialty diabetic medicines, a valid prescription from a registered doctor is mandatory. Please make sure the doctor name, patient name, date, and medicines are clearly visible in the uploaded photo.
            </p>
          </div>

          {/* Hours & Help Desk Card */}
          <div className="glass-panel rounded-3xl p-5 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white font-outfit">Need Urgent Help?</h3>
            
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-[#0A8F6A] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Store Hours</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Monday to Sunday</p>
                <p className="text-xs font-bold text-[#0A8F6A] dark:text-emerald-400">9:00 AM - 9:30 PM</p>
              </div>
            </div>

            <div className="border-t border-white/20 dark:border-white/5 pt-3 flex flex-col gap-2">
              <a
                href="tel:+919471971100"
                className="flex items-center justify-center space-x-2 rounded-xl bg-white/40 border border-white/20 hover:bg-white/60 py-2.5 text-xs font-bold text-slate-700 dark:bg-white/5 dark:text-slate-200"
              >
                <PhoneCall className="h-4 w-4 text-[#0A8F6A]" />
                <span>Call +91 9471971100</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
