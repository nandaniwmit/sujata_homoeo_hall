import { Medicine } from '../types';

export const MEDICINE_CATEGORIES = [
  'All',
  'Homeopathic Dilutions',
  'Homeopathic Mother Tinctures',
  'Homeopathic Tablets / Patents',
  'Prescription Medicines',
  'OTC & General',
  'Baby Care Products',
  'Personal Care & Hygiene',
  'Diabetic Care',
  'Vitamins & Supplements',
  'Medical Equipment'
];

export const POPULAR_MEDICINES: Medicine[] = [
  // Homeopathic
  {
    id: 'h1',
    name: 'Arnica Montana 30 CH',
    brand: 'SBL / Schwabe',
    category: 'Homeopathic Dilutions',
    type: 'Homeopathic',
    availability: 'In Stock',
    price: '₹105',
    description: 'Excellent homeopathic remedy for muscle soreness, bruises, sprains, and post-injury relief.'
  },
  {
    id: 'h2',
    name: 'Nux Vomica 200 CH',
    brand: 'Dr. Reckeweg / SBL',
    category: 'Homeopathic Dilutions',
    type: 'Homeopathic',
    availability: 'In Stock',
    price: '₹160',
    description: 'A popular homeopathic medicine for digestive issues, acidity, flatulence, and sleep disturbances.'
  },
  {
    id: 'h3',
    name: 'R89 Hair Care Drops',
    brand: 'Dr. Reckeweg',
    category: 'Homeopathic Tablets / Patents',
    type: 'Homeopathic',
    availability: 'In Stock',
    price: '₹310',
    description: 'Renowned homeopathic patent drops formulated to fight hair loss, premature graying, and alopecia.'
  },
  {
    id: 'h4',
    name: 'Thuja Occidentalis 1M',
    brand: 'Schwabe India',
    category: 'Homeopathic Dilutions',
    type: 'Homeopathic',
    availability: 'In Stock',
    price: '₹115',
    description: 'Highly effective homeopathic remedy primarily used for warts, skin tags, and benign skin overgrowths.'
  },
  {
    id: 'h5',
    name: 'Berberis Aquifolium Mother Tincture Q',
    brand: 'SBL Pvt. Ltd.',
    category: 'Homeopathic Mother Tinctures',
    type: 'Homeopathic',
    availability: 'In Stock',
    price: '₹220',
    description: 'Natural homeopathic mother tincture widely used for skin clearing, removing acne scars, and complexion glow.'
  },
  {
    id: 'h6',
    name: 'Five Phos Elixir Tonic',
    brand: 'SBL',
    category: 'Homeopathic Tablets / Patents',
    type: 'Homeopathic',
    availability: 'In Stock',
    price: '₹180',
    description: 'A nerve and general health tonic containing 5 essential tissue phosphates. Promotes strength and vitality.'
  },
  {
    id: 'h7',
    name: 'Cineraria Maritima Eye Drops (Succus)',
    brand: 'Schwabe',
    category: 'Homeopathic Tablets / Patents',
    type: 'Homeopathic',
    availability: 'In Stock',
    price: '₹195',
    description: 'Alcohol-free homeopathic eye drops that help treat cataracts, eye strain, and mild irritation.'
  },
  // Allopathic / OTC
  {
    id: 'a1',
    name: 'Paracetamol 650mg (Dolo)',
    brand: 'Micro Labs',
    category: 'Prescription Medicines',
    type: 'Allopathic',
    availability: 'In Stock',
    price: '₹32',
    description: 'Antipyretic and analgesic tablet widely prescribed for fever, headaches, body aches, and joint pains.'
  },
  {
    id: 'a2',
    name: 'Metformin Hydrochloride 500mg',
    brand: 'USV Ltd',
    category: 'Diabetic Care',
    type: 'Allopathic',
    availability: 'In Stock',
    price: '₹45',
    description: 'Oral antihyperglycemic medicine used for the management of type 2 diabetes mellitus.'
  },
  {
    id: 'a3',
    name: 'Amoxycillin 500mg Capsule',
    brand: 'Alkem Laboratories',
    category: 'Prescription Medicines',
    type: 'Allopathic',
    availability: 'Available in 24h',
    price: '₹110',
    description: 'Penicillin-type antibiotic used to treat bacterial infections of the ears, nose, throat, and lungs. Prescription required.'
  },
  {
    id: 'a4',
    name: 'Pantoprazole 40mg (Pantocid)',
    brand: 'Sun Pharma',
    category: 'OTC & General',
    type: 'Allopathic',
    availability: 'In Stock',
    price: '₹120',
    description: 'Proton pump inhibitor that reduces the amount of acid produced in the stomach. Relieves GERD and acid reflux.'
  },
  // Baby Care
  {
    id: 'b1',
    name: 'Himalaya Baby Powder',
    brand: 'Himalaya Wellness',
    category: 'Baby Care Products',
    type: 'Baby Care',
    availability: 'In Stock',
    price: '₹190',
    description: 'Gentle, herbal formulation that keeps baby skin cool, dry, and soft, preventing diaper rashes.'
  },
  {
    id: 'b2',
    name: 'Sebamed Baby Gentle Wash',
    brand: 'Sebamed',
    category: 'Baby Care Products',
    type: 'Baby Care',
    availability: 'Available in 24h',
    price: '₹450',
    description: '100% soap and alkali-free gentle baby wash with pH 5.5. Supports natural moisture balance.'
  },
  // Personal Care
  {
    id: 'p1',
    name: 'Dettol Liquid Antiseptic',
    brand: 'Reckitt Benckiser',
    category: 'Personal Care & Hygiene',
    type: 'OTC',
    availability: 'In Stock',
    price: '₹140',
    description: 'Multipurpose household liquid antiseptic for wound cleaning, personal hygiene, and surface disinfection.'
  },
  // Equipment
  {
    id: 'e1',
    name: 'Omron Automatic Blood Pressure Monitor (HEM-7120)',
    brand: 'Omron Healthcare',
    category: 'Medical Equipment',
    type: 'Device',
    availability: 'In Stock',
    price: '₹2450',
    description: 'High-precision automatic digital upper arm blood pressure monitor with Intellisense technology.'
  },
  {
    id: 'e2',
    name: 'Accu-Chek Active Blood Glucose Meter',
    brand: 'Roche Diagnostics',
    category: 'Medical Equipment',
    type: 'Device',
    availability: 'In Stock',
    price: '₹1299',
    description: 'Easy-to-use digital glucometer for quick, precise measurement of blood glucose levels at home.'
  },
  {
    id: 'e3',
    name: 'Pulse Oximeter Finger Clip',
    brand: 'BPL Medical',
    category: 'Medical Equipment',
    type: 'Device',
    availability: 'In Stock',
    price: '₹850',
    description: 'Portable fingertip pulse oximeter for measuring oxygen saturation level (SpO2) and pulse rate.'
  },
  // Supplements
  {
    id: 's1',
    name: 'Revital H Multivitamin Capsule',
    brand: 'Sun Pharma',
    category: 'Vitamins & Supplements',
    type: 'Supplement',
    availability: 'In Stock',
    price: '₹340',
    description: 'Daily health supplement with a blend of Ginseng, 10 Vitamins, and 9 Minerals to boost energy.'
  },
  {
    id: 's2',
    name: 'Zincovit Tablets',
    brand: 'Apex Laboratories',
    category: 'Vitamins & Supplements',
    type: 'Supplement',
    availability: 'In Stock',
    price: '₹110',
    description: 'Zinc, multivitamin, and multimineral tablets to support immunity and overall physiological function.'
  }
];
