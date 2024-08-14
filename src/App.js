import { useState } from "react";
import "./App.css";
import AdminDashboard from "./components/AdminDashboard";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

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

  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }
  if (isLoggedIn && isAdmin) {
    return <AdminDashboard />;
  }
  return <Home  onLogout={handleLogout}/>;
}

export default App;
