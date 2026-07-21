import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>That page doesn't exist.</p>
      {/* <Link> renders an <a>, but intercepts the click and updates the
          route via JS instead of doing a full page reload — same idea as
          Angular's routerLink directive. */}
      <Link to="/dashboard">Back to dashboard</Link>
    </div>
  );
}
