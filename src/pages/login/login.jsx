import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // show errors
  const navigate = useNavigate(); // React Router nav hook

  const handleLogin = (e) => {
    e.preventDefault();

    // fetch username and password
    if (username === "admin1" && password === "123") {
      navigate("/"); // just to shop page
    } else {
      setError("Incorrect username or password. Please try again.");
      setUsername(""); // clear textfeild
      setPassword("");
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>UserName:</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // update user state
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // update password state
          />
        </div>
        <label className="credentials">UserName: admin1</label>
        <label className="credentials">Password: 123</label>
        {error && <p className="error-message">{error}</p>}{" "}
        {/* show error messages */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
