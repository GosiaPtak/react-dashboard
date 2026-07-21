// Nav items live here as plain data — not hardcoded JSX.
// This is a common React pattern: describe the UI as data, then .map() over it.
const NAV_ITEMS = ['Overview', 'Revenue', 'Users', 'Settings'] as const;

// A TS union type derived from the array above — the active page can ONLY
// ever be one of these four strings. Try passing something else and TS will complain.
export type NavItem = (typeof NAV_ITEMS)[number];

// This is a "props interface" — it documents exactly what this component needs
// from its parent, and TypeScript will enforce it at compile time.
interface SidebarProps {
  active: NavItem;
  onSelect: (item: NavItem) => void;
}

// Sidebar doesn't own any state itself. It receives `active` and a callback
// from its parent (App) and just renders + reports clicks. This is called
// a "controlled" / "presentational" component — more on this pattern later.
export default function Sidebar({ active, onSelect }: SidebarProps) {
  return (
    <aside className="sidebar">
      <h1>Dashboard</h1>
      <nav>
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            className={item === active ? 'active' : ''}
            onClick={() => onSelect(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}
