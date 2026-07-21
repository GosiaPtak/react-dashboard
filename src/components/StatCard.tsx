interface StatCardProps {
  label: string;
  value: string;
  trend?: number; // optional — the `?` means a parent can omit this prop
}

export default function StatCard({ label, value, trend }: StatCardProps) {
  const hasTrend = trend !== undefined;
  const isUp = hasTrend && trend >= 0;

  return (
    <div className="stat-card">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
      {hasTrend && (
        <div className={`trend ${isUp ? 'up' : 'down'}`}>
          {isUp ? '▲' : '▼'} {Math.abs(trend)}% vs last month
        </div>
      )}
    </div>
  );
}
