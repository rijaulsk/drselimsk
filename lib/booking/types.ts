export type AnimalType = 'Dog' | 'Cat' | 'Bird' | 'Rabbit' | 'Other';

export type ClinicLocation = 'Baranagar' | 'Maheshtala' | 'Parnasree' | 'New Alipore' | 'Newtown';

export type ServiceRequired = 
  | 'General Checkup'
  | 'Vaccination'
  | 'Surgery Consultation'
  | 'Emergency Treatment'
  | 'Home Visit'
  | 'Grooming'
  | 'Deworming'
  | 'Health Certificate'
  | 'Diagnostic Test'
  | 'Other';

export type PetGender = 'Male' | 'Female' | 'Unknown';

export interface BookingFormData {
  // Owner Info
  ownerName: string;
  mobile: string;
  email?: string;
  sameAsMobile: boolean;
  whatsappNumber?: string;

  // Pet Info
  petName: string;
  animalType: AnimalType;
  breed?: string;
  age?: string;
  gender?: PetGender;
  weight?: string;
  petPhotoUrl?: string; // base64 or object URL preview

  // Appointment Info
  preferredDate: string; // YYYY-MM-DD
  preferredTime: string;
  clinicLocation: ClinicLocation;
  serviceRequired: ServiceRequired;
  reasonForVisit: string;

  // Flags
  isEmergency?: boolean;
}

export interface BookingRecord extends BookingFormData {
  id: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  whatsappUrl: string;
}

export interface LocationDetail {
  id: ClinicLocation;
  name: string;
  address: string;
  shortAddress: string;
  timing: string;
  phone: string;
  mapUrl: string;
  badgeColor: string;
}

export const CLINIC_LOCATIONS: LocationDetail[] = [
  {
    id: 'Baranagar',
    name: 'Baranagar Clinic',
    address: 'J9RF+MQ5, Gopal Lal Tagore Rd, Neogipara, Joyshree, Ashokgarh, Baranagar, West Bengal 700035',
    shortAddress: 'Baranagar, North Kolkata',
    timing: 'Saturday & Online Consultation (10:00 AM - 08:00 PM)',
    phone: '+91 6291630297',
    mapUrl: 'https://maps.app.goo.gl/73JM5BbWbpVeeVqH9',
    badgeColor: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'Maheshtala',
    name: 'Maheshtala Clinic',
    address: 'MORE, Nangi, Budge Budge, Maheshtala, West Bengal 700140',
    shortAddress: 'Maheshtala, South Kolkata',
    timing: 'Daily 10:00 AM - 10:00 PM',
    phone: '+91 6291630297',
    mapUrl: 'https://maps.app.goo.gl/Y4G6CeGeBuj2Ff8D9',
    badgeColor: 'from-emerald-600 to-teal-600'
  },
  {
    id: 'Parnasree',
    name: 'Parnasree Clinic',
    address: '58, Kalimata Colony Rd, Parnasree Palli, Kolkata, West Bengal 700060',
    shortAddress: 'Parnasree, South Kolkata',
    timing: 'Daily 10:00 AM - 10:00 PM',
    phone: '+91 6291630297',
    mapUrl: 'https://maps.app.goo.gl/RFjVhRT4btQzLtwK7',
    badgeColor: 'from-purple-600 to-violet-600'
  },
  {
    id: 'New Alipore',
    name: 'New Alipore Clinic',
    address: "Pet's Need, 10/1D, Diamond Harbour Rd, Alipore, Kolkata, West Bengal 700027",
    shortAddress: 'New Alipore, South Kolkata',
    timing: 'Daily 10:00 AM - 10:00 PM',
    phone: '+91 6291630297',
    mapUrl: 'https://maps.app.goo.gl/iZGX3h3VJqqn5sgKA',
    badgeColor: 'from-amber-600 to-orange-600'
  },
  {
    id: 'Newtown',
    name: 'Newtown Clinic',
    address: 'Action Area III, Newtown, Kolkata, West Bengal 700160',
    shortAddress: 'Action Area III, Newtown',
    timing: 'Daily 10:00 AM - 10:00 PM',
    phone: '+91 6291630297',
    mapUrl: 'https://maps.app.goo.gl/3ZCDUmmd3ZBC4Trc9',
    badgeColor: 'from-cyan-600 to-teal-600'
  }
];

export const SERVICE_OPTIONS: ServiceRequired[] = [
  'General Checkup',
  'Vaccination',
  'Surgery Consultation',
  'Emergency Treatment',
  'Home Visit',
  'Grooming',
  'Deworming',
  'Health Certificate',
  'Diagnostic Test',
  'Other'
];

export const ANIMAL_TYPES: AnimalType[] = [
  'Dog',
  'Cat',
  'Bird',
  'Rabbit',
  'Other'
];

export const TIME_SLOTS = [
  '10:00 AM - 11:30 AM',
  '11:30 AM - 01:00 PM',
  '04:00 PM - 05:30 PM',
  '05:30 PM - 07:00 PM',
  '07:00 PM - 08:30 PM',
  '08:30 PM - 10:00 PM'
];
