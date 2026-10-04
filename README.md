# Dr. Selim SK: veterinary website

Source for the public website of Dr. Selim SK, veterinary doctor and surgeon in Kolkata.

**Live site:** https://drselimsk.vercel.app

## Why this repository is public

The site owner has agreed to keep this repository public so that collaborating developers can contribute to it.

It holds only the code and content that already appear on the live site. There are no patient records, no booking data and no credentials in it. Appointment requests are saved to an external database and emailed through keys that live in the hosting environment, never in this repository.

## Stack

Next.js 13 (App Router), React 18, TypeScript, Tailwind CSS.

## Running it locally

```bash
npm install
npm run dev
```

The booking form needs these environment variables to send email. Without them the rest of the site still runs.

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `CLINIC_NOTIFICATION_EMAIL`

Never commit a `.env` file or any key to this repository. It is public.

## Credits

Built and maintained by [DebugSwift](https://debugswift.com), with contributions from [@Ashishyadav07](https://github.com/Ashishyadav07).
