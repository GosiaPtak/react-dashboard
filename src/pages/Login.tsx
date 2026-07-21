import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin: () => void;
}

// No form, no validation, no real credentials yet — that's Phase 4
// (react-hook-form + zod) and Phase 6 (real auth). Right now this page only
// exists to prove routing + protected routes work end to end.
export default function Login({ onLogin }: LoginProps) {
  // useNavigate is the imperative way to change routes from inside an event
  // handler — think router.navigate([...]) in Angular. Declarative <Navigate>
  // (used in ProtectedRoute) is for "redirect purely because of current
  // state/props"; useNavigate is for "redirect because the user did something".
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin(); // updates isAuthenticated in App
    navigate('/dashboard'); // then explicitly leave the login route
  };

  return (
    <div className="login-page">
      <h1>Log in</h1>
      <p>Placeholder login — click below to simulate a successful sign-in.</p>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}
