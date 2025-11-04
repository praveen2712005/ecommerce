import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AddProducts from "./components/AddProducts/AddProducts";
import Orders from "./components/Orders/Orders";
import Profile from "./components/Profile/Profile";
import Users from "./components/Users/Users";
import Settings from "./components/Settings/Settings";
import ViewProducts from "./components/Viewproducts/Viewproducts";
import body from "./components/body/body";


function AdminLayout() {
  return (
    <>
    
      <Navbar />
      <div className="admin-content">
        <Routes>
          <Route path="add-products" element={<AddProducts />} />
          <Route path="orders" element={<Orders />} />
          <Route path="profile" element={<Profile />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="view-products" element={<ViewProducts />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
