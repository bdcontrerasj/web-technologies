import React, { useState } from "react";
import { useAuth } from "../../context/auth-context"; // use useAuth to get login
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // error message
  const { login } = useAuth(); // use useAuth to get login

  const handleLogin = (e) => {
    e.preventDefault();

    // fetch username and passwrod
    if (username === "admin1" && password === "123") {
      login(username); // set user login state
    } else {
      setError("Incorrect username or password. Please try again.");
      setUsername(""); // clear
      setPassword(""); // clear
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
            onChange={(e) => setUsername(e.target.value)} // update username
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // update password
          />
        </div>
        <label className="credentials">UserName: admin1</label>
        <label className="credentials">Password: 123</label>
        {error && <p className="error-message">{error}</p>}{" "}
        {/* show error message */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
