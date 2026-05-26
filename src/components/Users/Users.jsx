import React, { useEffect, useState } from "react";
import Axios from "../../axios/axios";
import "./Users.css";
import Formuser from "../Fornuser/Formuser";
import Formupdate from "../Formupdate/Formupdate";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [openform1, setOpenform1] = useState(false);
  const [openform2, setOpenform2] = useState(false);
  const [updatedata, setUpdatedata] = useState({});

  useEffect(() => {
    async function fetchusers() {
      try {
        const res = await Axios.get("/viewuser");
        console.log(res.data);
        setUsers(res.data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    }
    fetchusers();
  }, []);

  async function handleDelete(id) {
    try {
      const response = await Axios.delete(`/deleteuser/${id}`);
      console.log(response.data);
      setUsers((prev) => prev.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  function updateuser(id, updateduser) {
    try {
      console.log(id);
      setUpdatedata(updateduser);
      setOpenform2(true);
    } catch (error) {
      console.log("Error editing user:", error);
    }
  }

  return (
    <div className="container">
      <h2>User Management</h2>

      {users.length === 0 ? (
        <div className="empty-state">No users found</div>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td>{user.password}</td>
                <td>
                  <button
                    className="update-btn"
                    onClick={() => updateuser(user._id, user)}
                  >
                    Update
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="button-container">
        <button
          onClick={() => setOpenform1(true)}
          className="add-user-btn"
        >
          Add New User
        </button>
      </div>

      {openform1 && (
        <Formuser openform1={openform1} setOpenform1={setOpenform1} />
      )}

      {openform2 && (
        <Formupdate
          openform2={openform2}
          setOpenform2={setOpenform2}
          updateuser={updatedata}
        />
      )}
    </div>
  );
}