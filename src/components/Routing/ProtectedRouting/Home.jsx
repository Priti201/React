import React from "react";
import { useAuth } from "./AuthProvider";

const Home = () => {
  const { token, onLogin } = useAuth();
  return (
    <>
      <h2>Home (Public)</h2>
      {!token && <button onClick={onLogin}>Sign In</button>}
    </>
  );
};

export default Home;
