import { BookingFormData } from './types';

export const CLINIC_WHATSAPP_NUMBER = '916291630297'; // Dr. Selim SK clinic official number

/**
 * Formats the raw booking data into a clean WhatsApp text message.
 */
export function generateWhatsAppMessage(data: BookingFormData): string {
  const ownerPhone = data.sameAsMobile
    ? data.mobile
    : data.whatsappNumber || data.mobile;

  // Format date nicely if possible
  let formattedDate = data.preferredDate;
  try {
    const d = new Date(data.preferredDate + 'T00:00:00');
    formattedDate = d.toLocaleDateString('en-IN', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch {
    formattedDate = data.preferredDate;
  }

  const emergencyTag = data.isEmergency ? '🚨 URGENT EMERGENCY APPOINTMENT\n\n' : '';

  const message = `${emergencyTag}🐾 *NEW APPOINTMENT REQUEST*

*Owner Name:* ${data.ownerName}
*Phone:* ${ownerPhone}
*Email:* ${data.email || 'Not provided'}

*Pet Name:* ${data.petName}
*Animal:* ${data.animalType}
*Breed:* ${data.breed || 'Not specified'}
*Age:* ${data.age || 'Not specified'}
*Gender:* ${data.gender || 'Not specified'}

*Preferred Date:* ${formattedDate}
*Preferred Time:* ${data.preferredTime}

*Clinic:* ${data.clinicLocation} Clinic

*Service:* ${data.serviceRequired}

*Reason:* ${data.reasonForVisit}`;

  return message;
}

/**
 * Generates the full wa.me link for opening WhatsApp web or app.
 */
export function getWhatsAppLink(data: BookingFormData, targetPhone: string = CLINIC_WHATSAPP_NUMBER): string {
  const text = generateWhatsAppMessage(data);
  const cleanPhone = targetPhone.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
