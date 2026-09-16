# growledger

Crop-cycle cost, yield, and economic impact analytics for small controlled-environment growers.

See `GrowLedger_PRD_and_Development_Guide_v1.4` for full product requirements and `GrowLedger_Wireframe_and_Technical_Reference` for screen and formula detail.

## Stack

Next.js (App Router) + TypeScript, Supabase (Auth + Postgres, Row Level Security), Recharts, deployed on Vercel

## Structure

- `app/` — one route per screen in the screen inventory (landing/sign-in, dashboard, crop profiles, grow spaces, cycle list, cycle form, cycle detail, alert detail).
- `lib/calculations/` — pure, unit-testable functions for each formula in the wireframe's Formulas tab. Not yet implemented.
- `types/database.ts` — hand-authored types for the eight tables as per the projects requirements. Keep in sync with the actual Supabase migrations.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in Supabase project values
npm run dev
```
