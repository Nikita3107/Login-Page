import React, { useState } from "react";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("email and password are required");
      return;
    }
    onLoginSuccess();
  };

  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input><br></br>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input><br></br>
      <button onClick={handleLogin}>Login</button><br></br>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default Login;
