import { useState } from 'react';
import Sidebar, { type NavItem } from '../components/Sidebar';
import StatCard from '../components/StatCard';
import { useStats } from '../hooks/useStats';

// This is everything that used to live directly in App.tsx. Now that App
// owns routing instead of page content, the dashboard becomes just one page
// among several.
export default function Dashboard() {
  const [active, setActive] = useState<NavItem>('Overview');
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
