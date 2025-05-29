import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login credentials:", credentials);
    // TODO: Authenticate with backend
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4">Login to Zerodha</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            required
            value={credentials.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            required
            value={credentials.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Log In</button>

        <p className="text-center mt-3">
          Don’t have an account? <Link to="/signup">Create one</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
