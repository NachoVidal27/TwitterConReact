import React from "react";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import { useState } from "react";

function Landing() {
  const [isLogin, setIsLogin] = useState(true);
  return isLogin ? (
    <Login setIsLogin={setIsLogin} />
  ) : (
    <SignUp setIsLogin={setIsLogin} />
  );
}

export default Landing;
