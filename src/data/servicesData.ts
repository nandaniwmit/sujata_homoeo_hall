import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 's_presc',
    title: 'Prescription Medicines',
    description: '100% genuine prescribed drugs managed by certified pharmacists. Absolute safety and strict dosage compliance verification.',
    iconName: 'FileText',
    category: 'Medical',
    details: ['Verification of dosage', 'Substitute guidance with doctor permission', 'Proper storage for potency preservation', 'High standards of safety']
  },
  {
    id: 's_general',
    title: 'General Medicines (OTC)',
    description: 'Over-the-counter daily medications for fever, cold, indigestion, allergies, and minor ailments.',
    iconName: 'Pill',
    category: 'Medical',
    details: ['Antipyretics & Analgesics', 'Antihistamines', 'Cough syrups and throat lozenges', 'Digestive and antacids remedies']
  },
  {
    id: 's_supplements',
    title: 'Health Supplements',
    description: 'Wide selection of premium multivitamins, calcium tablets, minerals, protein powders, and immunity boosters.',
    iconName: 'ShieldPlus',
    category: 'Wellness',
    details: ['Daily multivitamins for adults and children', 'Calcium, Vitamin D3 & Zinc supplements', 'Organic and herbal wellness boosters', 'Protein supplements and dietary fiber']
  },
  {
    id: 's_baby',
    title: 'Baby Care',
    description: 'Ultra-gentle baby healthcare, skin care, nutritional products, and essentials from leading trusted brands.',
    iconName: 'Baby',
    category: 'Personal Care',
    details: ['Hypoallergenic baby powders and washes', 'Premium diaper rash creams and moisturizers', 'Baby nutritional supplements', 'Baby feeding accessories and wipes']
  },
  {
    id: 's_personal',
    title: 'Personal Care',
    description: 'Everyday hygiene products, premium skin ointments, medicated soaps, oral care, and hair restoration products.',
    iconName: 'Sparkles',
    category: 'Personal Care',
    details: ['Medicated skincare and anti-acne soaps', 'Homeopathic hair care and nourishing oils', 'Hand sanitizers and antiseptic solutions', 'Oral hygiene and dental care items']
  },
  {
    id: 's_equip',
    title: 'Medical Equipment',
    description: 'Top-tier diagnostic devices for checking vital stats at home with maximum precision and ease.',
    iconName: 'Activity',
    category: 'Devices',
    details: ['Digital Blood Pressure monitors', 'Accurate blood glucose meters', 'Fingertip pulse oximeters', 'Digital thermometers and vaporizers']
  },
  {
    id: 's_surgical',
    title: 'Surgical Supplies',
    description: 'Hospital-grade surgical tools, disposables, sterilization products, and clinical accessories.',
    iconName: 'Scissors',
    category: 'Devices',
    details: ['Disposable syringes and infusion sets', 'Sterile surgical gloves and masks', 'Surgical blades and suture needles', 'Sterilization rolls and antiseptic spirit']
  },
  {
    id: 's_firstaid',
    title: 'First Aid Products',
    description: 'Comprehensive emergency care supplies including bandages, antiseptic lotions, tapes, and ointments.',
    iconName: 'HeartPulse',
    category: 'Wellness',
    details: ['Adhesive bandages and sterile cotton rolls', 'Micropore tape and elastic crepe bandages', 'Antiseptic sprays and cooling gels', 'Burn ointments and muscle sprays']
  },
  {
    id: 's_diabetic',
    title: 'Diabetic Care',
    description: 'Exclusive section containing insulin syringes, test strips, lancets, diabetic socks, and sugar-free food substitutes.',
    iconName: 'Droplet',
    category: 'Wellness',
    details: ['Insulin pens and specialized syringes', 'Glucometer test strips and lancets', 'Diabetic nutritional formulas', 'Sugar-free syrups and sweeteners']
  },
  {
    id: 's_essentials',
    title: 'Healthcare Essentials',
    description: 'All-around health support items including orthopedic braces, support belts, adult diapers, and heating pads.',
    iconName: 'Accessibility',
    category: 'Wellness',
    details: ['Knee supports and lumbar corset belts', 'Cervical collars and ankle binders', 'Premium adult diapers and underpads', 'Orthopedic heating belts and ice bags']
  }
];
