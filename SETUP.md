# FIFO Ready — Setup Guide

## Stack
- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS** + Radix UI components
- **NextAuth.js v5** (email/password credentials)
- **Prisma** + Neon PostgreSQL
- **Stripe** (one-time payment checkout)
- **Vercel** deployment

---

## 1. Database Setup (Neon)

1. Go to [neon.tech](https://neon.tech) and create a free account
2. Create a new project → get your connection string
3. Add to `.env.local`:
   ```
   DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"
   ```
4. Run:
   ```bash
   npm run db:push
   ```

---

## 2. Auth Setup

Generate a secure secret:
```bash
openssl rand -base64 32
```
Add to `.env.local`:
```
AUTH_SECRET="your-generated-secret"
NEXTAUTH_URL="http://localhost:3000"
```

Set your admin email (first registration with this email becomes admin):
```
ADMIN_EMAIL="you@yourdomain.com"
```

---

## 3. Stripe Setup

1. Go to [stripe.com](https://stripe.com) and create an account
2. In the Stripe Dashboard:
   - Go to **Products** → Create a product called "FIFO Ready — Full Access"
   - Set price to **$197 AUD** (one-time)
   - Copy the **Price ID** (starts with `price_...`)
3. Add to `.env.local`:
   ```
   STRIPE_SECRET_KEY="sk_live_..."
   STRIPE_PUBLISHABLE_KEY="pk_live_..."
   STRIPE_PRICE_ID="price_..."
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."
   ```
4. For webhooks (after deploying to Vercel):
   - Stripe Dashboard → Webhooks → Add endpoint
   - URL: `https://your-domain.vercel.app/api/stripe/webhook`
   - Events: `checkout.session.completed`, `charge.refunded`
   - Copy webhook secret to `STRIPE_WEBHOOK_SECRET`

For local webhook testing, use Stripe CLI:
```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

---

## 4. Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000`

---

## 5. Deploy to Vercel

1. Push to GitHub
2. Connect repo at [vercel.com](https://vercel.com)
3. Add all environment variables from `.env.local` to Vercel
4. Deploy — Vercel auto-builds on push

---

## 6. Create Your Admin Account

1. Go to `/register`
2. Register with the email matching `ADMIN_EMAIL` in your env
3. You'll automatically get admin role
4. Access admin panel at `/admin`

---

## Admin Panel Features

- **Documents** (`/admin/documents`): Add PDFs by URL, set categories, publish/unpublish
- **Quizzes** (`/admin/quizzes`): Create quizzes with multiple choice questions, set pass marks
- **Students** (`/admin/students`): View all registered students, enrollment status, revenue
- **Overview** (`/admin`): Revenue stats, conversion rate, recent activity

## Student Features

- **Dashboard** (`/dashboard`): Progress overview, recent activity
- **Documents** (`/documents`): Browse and download all PDFs
- **Quizzes** (`/quizzes`): Take quizzes, track scores, see pass/fail history

---

## Uploading Documents

Documents are referenced by URL — host your PDFs on:
- **Vercel Blob** (recommended for Vercel deploys) — add `@vercel/blob` package
- **AWS S3**
- **Google Drive** (public share links)
- **Dropbox** (direct links)

Then add the URL in the Admin → Documents panel.
