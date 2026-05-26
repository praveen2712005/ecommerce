import React, { useEffect, useState } from "react";
import "./Profile.css";

export default function Profile() {
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("admindata");
    console.log(data);
    if (data) {
      setAdmin(JSON.parse(data));
    }
  }, []);

  return (
    <div className="profile">
      <h2>Admin Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {admin?.name}</p>
        <p><strong>Email:</strong> {admin?.email}</p>
        <p><strong>Role:</strong> {admin?.role}</p>
      </div>
    </div>
  );
}
