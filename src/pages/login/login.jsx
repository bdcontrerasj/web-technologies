import React, { useState } from "react";
import { useAuth } from "../../context/auth-context"; // use useAuth to get login
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between login and register
  const [users, setUsers] = useState([]); // List of registered users
  const { login } = useAuth(); // use useAuth to get login

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      login(username); // Log in the user
    } else {
      setError("Incorrect username or password. Please try again.");
    }

    setUsername("");
    setPassword("");
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Username and password are required to register.");
      return;
    }

    if (users.find((user) => user.username === username)) {
      setError("Username already exists. Please choose a different one.");
    } else {
      setUsers([...users, { username, password }]);
      setError("");
      setIsRegistering(false); // Switch back to login after registration
    }

    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? "Register Page" : "Login Page"}</h2>
      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">{isRegistering ? "Register" : "Login"}</button>
      </form>
      <p>
        {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          onClick={() => {
            setIsRegistering(!isRegistering);
            setError("");
            setUsername("");
            setPassword("");
          }}
          className="toggle-button"
        >
          {isRegistering ? "Login here" : "Register here"}
        </button>
      </p>
    </div>
  );
};

export default Login;

