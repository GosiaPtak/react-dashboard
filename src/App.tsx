import { useState } from 'react';
import './App.css';
import Sidebar, { type NavItem } from './components/Sidebar';
import StatCard from './components/StatCard';

// Fake data for now — Phase 2 replaces this with a real fetch() call.
const STATS = [
  { label: 'Total Revenue', value: '$48,290', trend: 12 },
  { label: 'Active Users', value: '2,431', trend: 4 },
  { label: 'Churn Rate', value: '3.2%', trend: -1.5 },
  { label: 'Open Tickets', value: '18', trend: -8 },
];

export default function App() {
  // useState gives us a piece of memory that survives re-renders.
  // `active` is the current value, `setActive` is the ONLY way to change it —
  // calling setActive tells React "re-render me with this new value".
  const [active, setActive] = useState<NavItem>('Overview');

  return (
    <div className="app">
      <Sidebar active={active} onSelect={setActive} />

      <main className="main">
        <header className="header">
          <h2>{active}</h2>
        </header>

        <section className="stats-grid">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>
      </main>
    </div>
  );
}
