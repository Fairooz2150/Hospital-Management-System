import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="container form-component login-form">
      <h2>Login In</h2>
      <p>Please Login to Continue</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero possimus
        magnam aliquid tenetur debitis iure?
      </p>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />

        <div
          style={{
            gap: "10px",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <p style={{ marginBottom: 0 }}>Not Registered?</p>
          <Link
            to={"/register"}
            style={{ textDecoration: "none", alignItems: "center" }}
          >
            Register Now
          </Link>
        </div>
        <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
