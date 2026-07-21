import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: ReactNode;
}

// The React Router equivalent of an Angular route guard (CanActivate) —
// except instead of a config-level function that returns true/false, it's
// just a component: render the children if allowed, or render a <Navigate>
// (a declarative redirect) if not.
export default function ProtectedRoute({ isAuthenticated, children }: ProtectedRouteProps) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
