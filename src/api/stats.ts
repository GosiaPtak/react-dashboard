export interface Stat {
  label: string;
  value: string;
  trend?: number;
}

// Same data App.tsx used to hardcode — now it lives behind a "server" boundary.
const MOCK_STATS: Stat[] = [
  { label: 'Total Revenue', value: '$48,290', trend: 12 },
  { label: 'Active Users', value: '2,431', trend: 4 },
  { label: 'Churn Rate', value: '3.2%', trend: -1.5 },
  { label: 'Open Tickets', value: '18', trend: -8 },
  { label: 'Average Response Time', value: '150ms' },
];

// Flip this to true and reload to see the error state in the UI.
const SIMULATE_ERROR = false;

// A real fetch() returns a Promise that resolves once the network responds.
// We fake that shape with setTimeout wrapped in `new Promise`, so callers
// can't tell the difference — swapping this for a real fetch() later won't
// require touching useStats() or App.tsx at all.
export function fetchStats(): Promise<Stat[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (SIMULATE_ERROR) {
        reject(new Error('Failed to load dashboard stats'));
      } else {
        resolve(MOCK_STATS);
      }
    }, 1000);
  });
}
