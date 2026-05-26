import { useState, useEffect } from "react";
import Axios from "../../axios/axios";
import "./Formupdate.css";

export default function Formupdate({ updateuser, setOpenform2 }) {
  const [form2, setForm2] = useState({});

  
  useEffect(() => {
    setForm2(updateuser);
    console.log("Selected user in form:", updateuser);
  }, [updateuser]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Updating:", form2);
    const response = await Axios.put(`/updateuser/${form2._id}`, form2);
    console.log(response.data);

    setOpenform2(false);
  }

  return (
    <>
      <form className="edit-form" onSubmit={handleSubmit}>
        <h2>Edit User</h2>

        <input
          type="text"
          value={form2.name || ""}
          onChange={(e) => setForm2({ ...form2, name: e.target.value })}
        />

        <input
          type="email"
          value={form2.email || ""}
          onChange={(e) => setForm2({ ...form2, email: e.target.value })}
        />

        <input
          type="number"
          value={form2.number || ""}
          onChange={(e) => setForm2({ ...form2, number: e.target.value })}
        />

        <input
          type="text"
          value={form2.password || ""}
          onChange={(e) => setForm2({ ...form2, password: e.target.value })}
        />

        <button type="submit">Update</button>
        <button type="button" onClick={() => setOpenform2(false)}>
          Cancel
        </button>
      </form>
    </>
  );
}
