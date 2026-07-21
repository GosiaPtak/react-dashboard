import { useState } from 'react';
import './App.css';
import Sidebar, { type NavItem } from './components/Sidebar';
import StatCard from './components/StatCard';
import { useStats } from './hooks/useStats';

export default function App() {
  // useState gives us a piece of memory that survives re-renders.
  // `active` is the current value, `setActive` is the ONLY way to change it —
  // calling setActive tells React "re-render me with this new value".
  const [active, setActive] = useState<NavItem>('Overview');

  // All the fetch-related state (data/loading/error) is extracted into this
  // one hook call. App doesn't know or care HOW the data is fetched.
  const { stats, loading, error } = useStats();

  return (
    <div className="app">
      <Sidebar active={active} onSelect={setActive} />

      <main className="main">
        <header className="header">
          <h2>{active}</h2>
        </header>

        {loading && <p className="status">Loading stats…</p>}
        {error && <p className="status error">Couldn't load stats: {error}</p>}

        {!loading && !error && (
          <section className="stats-grid">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
