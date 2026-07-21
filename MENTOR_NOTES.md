# React Mentorship — Progress Notes

Learning React project-first, from JS-comfortable/React-new toward senior-level.
Stack: Vite + React + TS now, migrating to Next.js + TS in the later phases.
Style: pair-programming — mentor writes code with inline teaching comments,
learner reads/runs/tweaks, then we move on.

## Roadmap
0. Setup ✅
1. Fundamentals (components, JSX, props, useState, lists) ✅
2. Hooks & data fetching (useEffect, custom hooks, loading/error states) ✅
3. Routing (React Router: Login, Dashboard, Settings, 404, protected routes) — next
4. Forms & login UI (react-hook-form + zod)
5. Global state (Context API vs Zustand) — auth state/session
6. Real auth & credentials (JWT flow, mock backend, token storage tradeoffs)
7. Server state (TanStack Query — caching, mutations, optimistic updates)
8. Senior patterns (code splitting, memoization, Vitest + RTL, error boundaries, a11y)
9. Migrate to Next.js (App Router, server vs client components, middleware auth)
10. Deployment (Vercel, env vars, CI)

## What exists so far
- `src/App.tsx` — owns `active` nav state (useState), consumes `useStats()` for
  data/loading/error, renders Sidebar + stat cards or loading/error UI
- `src/components/Sidebar.tsx` — controlled/presentational component, NAV_ITEMS as
  data mapped to buttons, demonstrates "lifting state up"
- `src/components/StatCard.tsx` — typed props interface, optional prop (`trend?`),
  conditional rendering
- `src/api/stats.ts` — `fetchStats()`, a fake async "server" (Promise + setTimeout)
  standing in for a real fetch() call; has a `SIMULATE_ERROR` flag for testing
  the error path
- `src/hooks/useStats.ts` — custom hook wrapping useEffect; owns stats/loading/error
  state, fetches once on mount (empty dep array), cleans up with a `cancelled` flag

## Learner's grasp of Phase 2 concepts (confirmed via Q&A, not just code)
- Understands useEffect's dependency array: `[]` = once on mount (~ngOnInit),
  no array = every render, `[x]` = re-run when `x` changes (~ngOnChanges, but
  explicit rather than automatic — and the stale-closure footgun if a used
  value is left out of the array).
- Learner has deep Angular background — explanations work best framed as
  Angular-vs-React contrasts (see memory: user-angular-background).

## Outstanding / optional stretch (not done, offered but deferred)
- Scoping `useStats()` to the active sidebar section (pass `active` in, add to
  dep array, refetch on nav change) — good future warm-up if revisiting deps.

## Next up: Phase 3 — Routing
Plan: introduce React Router — Login, Dashboard, Settings, 404 pages, and
protected routes. Will need to touch on client-side routing vs Angular's
Router module (RouterModule, guards ~ React protected route patterns).

## How to continue
Run `npm run dev` from this folder (learner usually already has it running on
5173 — check before starting a second instance). Whoever picks this up next
(mentor session) should read this file first, then start Phase 3.
