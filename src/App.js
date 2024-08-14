import { useState } from "react";
import "./App.css";
import AdminDashboard from "./components/AdminDashboard";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsAdmin(true);
  };
  const handleSignUpSuccess  = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };
  if (!isLoggedIn && !isSignUp) {
    return (
      <>
        <Login onLoginSuccess={handleLoginSuccess} />
        <button onClick={() => setIsSignUp(true)}>Sign Up</button>
      </>
    );
  }
  if ( isSignUp && !isLoggedIn) {
    return <SignUp onSignUpSuccess={handleSignUpSuccess} />;
  }
  if (isLoggedIn && isAdmin) {
    return <AdminDashboard />;
  }
  return <Home  onLogout={handleLogout}/>;
}

export default App;
