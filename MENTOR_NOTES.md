# React Mentorship — Progress Notes

Learning React project-first, from JS-comfortable/React-new toward senior-level.
Stack: Vite + React + TS now, migrating to Next.js + TS in the later phases.
Style: pair-programming — mentor writes code with inline teaching comments,
learner reads/runs/tweaks, then we move on.

## Roadmap
0. Setup ✅
1. Fundamentals (components, JSX, props, useState, lists) ✅ — in progress on exercise
2. Hooks & data fetching (useEffect, custom hooks, loading/error states) — next
3. Routing (React Router: Login, Dashboard, Settings, 404, protected routes)
4. Forms & login UI (react-hook-form + zod)
5. Global state (Context API vs Zustand) — auth state/session
6. Real auth & credentials (JWT flow, mock backend, token storage tradeoffs)
7. Server state (TanStack Query — caching, mutations, optimistic updates)
8. Senior patterns (code splitting, memoization, Vitest + RTL, error boundaries, a11y)
9. Migrate to Next.js (App Router, server vs client components, middleware auth)
10. Deployment (Vercel, env vars, CI)

## What exists so far
- `src/App.tsx` — owns `active` nav state (useState), renders Sidebar + stat cards
- `src/components/Sidebar.tsx` — controlled/presentational component, NAV_ITEMS as
  data mapped to buttons, demonstrates "lifting state up"
- `src/components/StatCard.tsx` — typed props interface, optional prop (`trend?`),
  conditional rendering
- Mock `STATS` array in App.tsx — will be replaced by a real fetch in Phase 2

## Outstanding exercise (given, not yet confirmed done)
1. Add a 5th StatCard ("Avg. Session Time") with no `trend` prop — confirm the
   trend line just doesn't render.
2. Try setting `useState<NavItem>` to a value not in `NAV_ITEMS` — see the
   TypeScript error, understand why the union type catches it.

## Next up: Phase 2 — Hooks & data fetching
Plan: replace the hardcoded STATS array with a simulated async fetch (via
setTimeout or a public mock API), introduce useEffect, a loading state, an
error state, and probably a custom `useStats()` hook to show hook extraction.

## How to continue
Run `npm run dev` from this folder. Whoever picks this up next (mentor session)
should read this file first, confirm the exercise outcome with the learner,
then start Phase 2.
