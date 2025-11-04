import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">Flipzy</h2>
      <div className="nav-links">
        <Link to="/admin/add-products">Add Products</Link>
        <Link to="/admin/orders">Orders</Link>
        <Link to="/admin/profile">Profile</Link>
        <Link to="/admin/users">Users</Link>
        <Link to="/admin/settings">Settings</Link>
        <Link to="/admin/view-products">View Products</Link>
      </div>
    </div>
  );
}
