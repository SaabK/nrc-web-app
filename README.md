# NUST Robotics Club Website

Premium, dark, industrial website for the NUST Robotics Club (NRC).

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Formspree form endpoint |
| `NEXT_PUBLIC_SITE_URL` | Production URL |

## Project Structure

```
app/                    # Next.js App Router pages
  page.tsx              # Homepage
  events/
    page.tsx            # Events listing
    [slug]/
      page.tsx          # Event detail
      [year]/
        page.tsx        # Event edition
  join/
    page.tsx            # Join landing
    executive/page.tsx  # Executive application
    volunteer/page.tsx  # Volunteer application
  not-found.tsx         # 404 page

components/
  navigation/           # Navbar + mobile menu
  hero/                 # Hero section
  sections/             # About, Contact
  events/               # EventPanels component
  gallery/              # MediaGallery
  forms/                # ContactForm, JoinForm
  ui/                   # Shared UI primitives

data/
  events.ts             # All event + edition data
  site.ts               # Site config (name, contact, social)
  join.ts               # Executive roles, volunteer areas

lib/
  supabase/client.ts    # Supabase client (activate by setting env vars)
  forms/submit.ts       # Form submission abstraction

public/
  assets/
    nrc-logo.png        # ← Replace with updated logo here

types/
  index.ts              # TypeScript interfaces
```

## Adding an Event

Edit `data/events.ts`. Add a new object to the `events` array:

```ts
{
  id: "my-event",
  slug: "my-event",
  name: "My Event",
  shortName: "MY EVENT",
  tagline: "Short tagline",
  description: "Full description.",
  coverImage: "/images/events/my-event-cover.jpg",
  category: "competition", // or "workshop" | "seminar" | "internal"
  editions: [],
}
```

## Adding an Event Edition

Inside the event's `editions` array:

```ts
{
  year: 2026,
  description: "Edition description.",
  stats: [
    { label: "Participants", value: "30", unit: "members" },
  ],
  results: [
    { rank: 1, team: "NRC Team", achievement: "1st Place" },
  ],
  media: [
    { type: "image", url: "/images/events/my-event-2026-1.jpg", caption: "Caption" },
  ],
  coverImage: "/images/events/my-event-2026-cover.jpg",
}
```

## Replacing the Logo

Drop the new logo file at:

```
public/assets/nrc-logo.png
```

All logo instances across the site update automatically.

## Configuring Forms

1. Create a [Formspree](https://formspree.io) form.
2. Copy the endpoint URL (e.g. `https://formspree.io/f/XXXXXXXX`).
3. Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in `.env.local`.

Forms work in dev without credentials (submissions are logged to console).

## Connecting Supabase

1. Create a [Supabase](https://supabase.com) project.
2. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
3. Uncomment the Supabase client code in `lib/supabase/client.ts`.
4. Run `npm install @supabase/supabase-js`.

The data layer in `data/events.ts` is structured to mirror a Supabase schema.
When migrating, update the `getEventBySlug` / `getEditionByYear` helpers to fetch from Supabase instead.

## Image Paths

Place event images at:

```
public/images/events/[event-slug]-cover.jpg
public/images/events/[event-slug]-[year]-cover.jpg
public/images/events/[event-slug]-[year]-1.jpg
```

## Design System

Colors, fonts, and spacing are defined in:
- `tailwind.config.ts` — tokens
- `app/globals.css` — CSS variables and global utilities

Primary font: **Barlow Condensed** (display) + **Barlow** (body)  
Accent: `#E84F0E` (NRC orange)  
Background: `#060810` (dark navy)
