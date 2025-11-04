import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register-container">
      <h2>Admin Registration</h2>
      <form className="register-form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
