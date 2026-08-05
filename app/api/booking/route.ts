import { NextRequest, NextResponse } from 'next/server';
import { bookingFormSchema } from '@/lib/booking/schema';
import { bookingRepository } from '@/lib/booking/dbAdapter';
import { sendBookingEmail } from '@/lib/booking/emailService';

// Force route to be fully dynamic (disable static optimization for API endpoint)
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    // Safely parse JSON payload from request body
    const body = await req.json();

    // 1. Server-side Zod validation
    const validationResult = bookingFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed. Please check the submitted fields.',
          details: validationResult.error.flatten().fieldErrors
        },
        { status: 400 }
      );
    }

    const bookingData = validationResult.data;

    // 2. Save booking via repository adapter (Supabase / Postgres / Mongo / In-Memory)
    const bookingRecord = await bookingRepository.saveBooking(bookingData);

    // 3. Dispatch email notification asynchronously
    const emailResult = await sendBookingEmail(bookingData, bookingRecord.id);

    // 4. Return successful JSON response with booking record and WhatsApp URL
    return NextResponse.json(
      {
        success: true,
        message: 'Appointment booking submitted successfully!',
        booking: bookingRecord,
        whatsappUrl: bookingRecord.whatsappUrl,
        emailSent: emailResult.success
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('API /api/booking Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'An unexpected error occurred while processing your booking.'
      },
      { status: 500 }
    );
  }
}
