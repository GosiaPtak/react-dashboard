import { useEffect, useState } from 'react';
import { fetchStats, type Stat } from '../api/stats';

// A custom hook is just a function that calls other hooks and returns
// whatever a component needs. There's no registration, no DI token —
// importing the function IS the wiring.
export function useStats() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Guards against calling setState after this component has unmounted
    // (e.g. the user navigates away before the fetch resolves) — React
    // warns about that otherwise. Angular solves the same problem by
    // unsubscribing an Observable in ngOnDestroy; this is the manual
    // equivalent since a plain Promise can't be cancelled.
    let cancelled = false;

    setLoading(true);
    setError(null);

    fetchStats()
      .then((data) => {
        if (!cancelled) setStats(data);
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    // The function returned from useEffect is its "cleanup" — React runs
    // it right before the effect re-runs, or on unmount. This is React's
    // answer to ngOnDestroy.
    return () => {
      cancelled = true;
    };
  }, []); // empty deps = "run once after the first render", like ngOnInit

  return { stats, loading, error };
}
