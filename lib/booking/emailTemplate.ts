import { BookingFormData } from './types';

export interface EmailContent {
  subject: string;
  html: string;
  text: string;
}

export function generateBookingEmail(data: BookingFormData, bookingId: string, timestamp: string): EmailContent {
  const subject = `New Appointment Booking - ${data.petName} (${data.animalType})`;

  let formattedDate = data.preferredDate;
  try {
    const d = new Date(data.preferredDate + 'T00:00:00');
    formattedDate = d.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    formattedDate = data.preferredDate;
  }

  const ownerPhone = data.sameAsMobile
    ? data.mobile
    : `${data.mobile} (WhatsApp: ${data.whatsappNumber || data.mobile})`;

  const text = `NEW APPOINTMENT BOOKING - ${data.petName}
Booking ID: ${bookingId}
Submitted At: ${timestamp}

[OWNER DETAILS]
Name: ${data.ownerName}
Phone: ${ownerPhone}
Email: ${data.email || 'N/A'}

[PET DETAILS]
Pet Name: ${data.petName}
Animal Type: ${data.animalType}
Breed: ${data.breed || 'N/A'}
Age: ${data.age || 'N/A'}
Gender: ${data.gender || 'N/A'}
Weight: ${data.weight || 'N/A'}

[APPOINTMENT DETAILS]
Date: ${formattedDate}
Time: ${data.preferredTime}
Clinic Location: ${data.clinicLocation}
Service Required: ${data.serviceRequired}
Emergency: ${data.isEmergency ? 'YES' : 'NO'}

[REASON FOR VISIT]
${data.reasonForVisit}
`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 20px; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
    .header { background: linear-gradient(135deg, #0d9488 0%, #059669 100%); color: #ffffff; padding: 24px; text-align: center; }
    .header h1 { margin: 0 0 8px 0; font-size: 24px; }
    .header p { margin: 0; opacity: 0.9; font-size: 14px; }
    .badge { display: inline-block; background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-top: 10px; }
    .emergency-banner { background: #fef2f2; border-left: 4px solid #ef4444; color: #991b1b; padding: 12px 16px; font-weight: bold; font-size: 14px; }
    .content { padding: 24px; }
    .section-title { font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #0d9488; font-weight: bold; border-bottom: 2px solid #ccfbf1; padding-bottom: 6px; margin-top: 20px; margin-bottom: 12px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .field { margin-bottom: 8px; }
    .label { font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; }
    .value { font-size: 15px; color: #0f172a; font-weight: 500; }
    .reason-box { background: #f1f5f9; padding: 12px; border-radius: 8px; font-size: 14px; color: #334155; line-height: 1.5; }
    .footer { background: #f8fafc; padding: 16px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>🩺 New Appointment Booking</h1>
      <p>Dr. Selim SK Veterinary Care</p>
      <div class="badge">Booking ID: ${bookingId}</div>
    </div>

    ${data.isEmergency ? '<div class="emergency-banner">🚨 EMERGENCY APPOINTMENT REQUEST - IMMEDIATE ATTENTION NEEDED</div>' : ''}

    <div class="content">
      <div class="section-title">Owner Information</div>
      <div class="grid">
        <div class="field"><div class="label">Full Name</div><div class="value">${data.ownerName}</div></div>
        <div class="field"><div class="label">Mobile Number</div><div class="value">${ownerPhone}</div></div>
        <div class="field"><div class="label">Email Address</div><div class="value">${data.email || 'Not provided'}</div></div>
        <div class="field"><div class="label">Submitted At</div><div class="value">${timestamp}</div></div>
      </div>

      <div class="section-title">Pet Details</div>
      <div class="grid">
        <div class="field"><div class="label">Pet Name</div><div class="value">🐾 ${data.petName}</div></div>
        <div class="field"><div class="label">Animal Type</div><div class="value">${data.animalType}</div></div>
        <div class="field"><div class="label">Breed</div><div class="value">${data.breed || 'N/A'}</div></div>
        <div class="field"><div class="label">Age</div><div class="value">${data.age || 'N/A'}</div></div>
        <div class="field"><div class="label">Gender</div><div class="value">${data.gender || 'N/A'}</div></div>
        <div class="field"><div class="label">Weight</div><div class="value">${data.weight || 'N/A'}</div></div>
      </div>

      <div class="section-title">Appointment Schedule</div>
      <div class="grid">
        <div class="field"><div class="label">Clinic Location</div><div class="value">📍 ${data.clinicLocation}</div></div>
        <div class="field"><div class="label">Service</div><div class="value">🏥 ${data.serviceRequired}</div></div>
        <div class="field"><div class="label">Preferred Date</div><div class="value">📅 ${formattedDate}</div></div>
        <div class="field"><div class="label">Preferred Time</div><div class="value">⏰ ${data.preferredTime}</div></div>
      </div>

      <div class="section-title">Reason for Visit</div>
      <div class="reason-box">${data.reasonForVisit}</div>
    </div>

    <div class="footer">
      This is an automated notification from Dr. Selim SK Veterinary Care Booking System.<br/>
      Direct helpline: +91 6291630297 | Email: clinic@drselimsk.com
    </div>
  </div>
</body>
</html>
  `;

  return { subject, html, text };
}
