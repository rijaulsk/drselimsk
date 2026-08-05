import { BookingFormData, BookingRecord } from './types';
import { getWhatsAppLink } from './whatsapp';

export interface BookingRepository {
  saveBooking(data: BookingFormData): Promise<BookingRecord>;
  getBooking(id: string): Promise<BookingRecord | null>;
  getAllBookings(): Promise<BookingRecord[]>;
}

/**
 * Default In-Memory / LocalStorage Repository.
 * Can be effortlessly swapped with SupabaseBookingAdapter, PostgresBookingAdapter,
 * MongoBookingAdapter, or FirebaseBookingAdapter.
 */
export class MockBookingRepository implements BookingRepository {
  private static STORAGE_KEY = 'drselimsk_appointments_v1';

  async saveBooking(data: BookingFormData): Promise<BookingRecord> {
    const randomId = Math.floor(100000 + Math.random() * 900000);
    const bookingId = `VET-${new Date().getFullYear()}-${randomId}`;

    const record: BookingRecord = {
      ...data,
      id: bookingId,
      createdAt: new Date().toISOString(),
      status: 'pending',
      whatsappUrl: getWhatsAppLink(data)
    };

    // Save to LocalStorage if window is available
    if (typeof window !== 'undefined') {
      try {
        const existingRaw = localStorage.getItem(MockBookingRepository.STORAGE_KEY);
        const existing: BookingRecord[] = existingRaw ? JSON.parse(existingRaw) : [];
        existing.unshift(record);
        localStorage.setItem(MockBookingRepository.STORAGE_KEY, JSON.stringify(existing));
      } catch (e) {
        console.warn('Could not save booking to localStorage:', e);
      }
    }

    return record;
  }

  async getBooking(id: string): Promise<BookingRecord | null> {
    if (typeof window !== 'undefined') {
      try {
        const existingRaw = localStorage.getItem(MockBookingRepository.STORAGE_KEY);
        const existing: BookingRecord[] = existingRaw ? JSON.parse(existingRaw) : [];
        return existing.find((b) => b.id === id) || null;
      } catch (e) {
        return null;
      }
    }
    return null;
  }

  async getAllBookings(): Promise<BookingRecord[]> {
    if (typeof window !== 'undefined') {
      try {
        const existingRaw = localStorage.getItem(MockBookingRepository.STORAGE_KEY);
        return existingRaw ? JSON.parse(existingRaw) : [];
      } catch (e) {
        return [];
      }
    }
    return [];
  }
}

/* 
 =========================================================================
 FUTURE DB ADAPTER EXAMPLES (Plug & Play without changing UI)
 =========================================================================

 export class SupabaseBookingAdapter implements BookingRepository {
   async saveBooking(data: BookingFormData): Promise<BookingRecord> {
     // const { data: result, error } = await supabase.from('bookings').insert(...);
     // return result;
   }
 }

 export class PostgresBookingAdapter implements BookingRepository {
   async saveBooking(data: BookingFormData): Promise<BookingRecord> {
     // const result = await db.query('INSERT INTO bookings ...', [...]);
     // return result;
   }
 }

 export class FirebaseBookingAdapter implements BookingRepository {
   async saveBooking(data: BookingFormData): Promise<BookingRecord> {
     // const docRef = await addDoc(collection(db, "bookings"), data);
     // return doc;
   }
 }
 =========================================================================
*/

// Active repository instance singleton
export const bookingRepository: BookingRepository = new MockBookingRepository();
