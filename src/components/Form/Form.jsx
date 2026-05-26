import { useState, useEffect, use } from "react";
import Axios from "../../axios/axios";
import "./Form.css";

export default function Form({ selectdata, openform, setOpenform }) {
  const [form,setForm]= useState({})
 
  

  useEffect(() => {
      setForm(selectdata)
      console.log("Selected data in Form:", selectdata);
  },[selectdata])

  
  function handleSubmit(e) {
    e.preventDefault(); 
    console.log(form,"im here....................")
    console.log(form._id)
    const response= Axios.put(`/updateproduct/${form._id}`,form);
    console.log(response.data)
  }


  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <h2>Edit Product</h2>

      <input
        type="text"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        type="number"
        value={form.price}
        onChange={(e) =>
          setForm({ ...form, price: e.target.value })
        }
      />

      <input
        type="text"
        value={form.category}
        onChange={(e) =>
          setForm({ ...form, category: e.target.value })
        }
      />

      <input
        type="text"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <button type="submit">Update Product</button>
      <button type="button" onClick={() => setOpenform(false)}>
        Cancel
      </button>
    </form>
  );
}
