import React from "react";

const Home = ({ onLogout }) => {
  return (
    <>
      <h2>Home Screen</h2>
      <button onClick={onLogout}>Logout</button>
    </>
  );
};

export default Home;
