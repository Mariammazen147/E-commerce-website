import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { signIn } from "../services/firebaseService"; // Adjust the import path if necessary

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Get the navigate function
  const location = useLocation(); // Get the current location

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password); // Call the signIn function
      navigate(location.state?.from || "/"); // Redirect to the previous page or home
    } catch (error) {
      console.error("Failed to sign in:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Sign In</button>
    </form>
  );
};

export default SignInForm;
