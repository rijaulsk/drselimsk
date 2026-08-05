import { z } from 'zod';

const indianMobileRegex = /^(?:\+91[\-\s]?)?[6-9]\d{9}$/;

export const bookingFormSchema = z.object({
  // Owner Info
  ownerName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(100, { message: 'Full name is too long.' }),
  mobile: z
    .string()
    .min(1, { message: 'Mobile number is required.' })
    .refine((val) => indianMobileRegex.test(val.replace(/\s+/g, '')), {
      message: 'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).'
    }),
  email: z
    .string()
    .optional()
    .refine((val) => !val || z.string().email().safeParse(val).success, {
      message: 'Please enter a valid email address.'
    }),
  sameAsMobile: z.boolean().default(true),
  whatsappNumber: z.string().optional(),

  // Pet Info
  petName: z
    .string()
    .min(1, { message: "Please enter your pet's name." })
    .max(50, { message: 'Pet name is too long.' }),
  animalType: z.enum(['Dog', 'Cat', 'Bird', 'Rabbit', 'Other'], {
    required_error: 'Please select an animal type.'
  }),
  breed: z.string().optional(),
  age: z.string().optional(),
  gender: z.enum(['Male', 'Female', 'Unknown']).optional(),
  weight: z.string().optional(),
  petPhotoUrl: z.string().optional(),

  // Appointment Info
  preferredDate: z
    .string()
    .min(1, { message: 'Preferred appointment date is required.' })
    .refine((val) => {
      if (!val) return false;
      const selected = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, { message: 'Appointment date must be today or in the future.' }),
  preferredTime: z
    .string()
    .min(1, { message: 'Please select a preferred time slot.' }),
  clinicLocation: z.enum(['Baranagar', 'Maheshtala', 'Parnasree', 'New Alipore', 'Newtown'], {
    required_error: 'Please select a clinic location.'
  }),
  serviceRequired: z.enum([
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
  ], {
    required_error: 'Please select a service.'
  }),
  reasonForVisit: z
    .string()
    .min(5, { message: 'Please provide a brief reason for your visit (min 5 characters).' })
    .max(500, { message: 'Reason must not exceed 500 characters.' }),

  // Flags
  isEmergency: z.boolean().default(false)
});

export type BookingFormSchemaValues = z.infer<typeof bookingFormSchema>;
