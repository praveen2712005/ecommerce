import React, { useEffect, useState } from "react";
import "./Orders.css";
import Axios from "../../axios/axios";

export default function Orders() {
  const [data, setData] = useState([]); 
  const [name, setName] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    model: "",
    year: "",
    price: "",
    status: "pending"
  });
  
  // Add new state for create functionality - placed below your existing state
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [createFormData, setCreateFormData] = useState({
    name: "",
    model: "",
    year: "",
    price: "",
    status: "pending"
  });
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await retrive();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  async function retrive() {
    try {
      let response = await Axios.get('/getcar');
      console.log(response);
      setName(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteCar(id) {
    try {
      console.log(id, "car_id");
      let deletedCars = await Axios.delete(`/deletecar/${id}`);
      console.log(deletedCars);
      await retrive();
    } catch (error) {
      console.log(error);
    }
  }

  async function Updatecar(item) {
    try {
      console.log(item, "update_item");
      // Show the popup form when update button is clicked
      setShowUpdateForm(true);
      setSelectedCar(item);
      setFormData({
        name: item.name || "",
        model: item.model || "",
        year: item.year || "",
        price: item.price || "",
        status: item.status || "pending"
      });
    } catch (error) {
      console.log(error);
    }
  }

  // Close the update form
  function closeUpdateForm() {
    setShowUpdateForm(false);
    setSelectedCar(null);
    setFormData({
      name: "",
      model: "",
      year: "",
      price: "",
      status: "pending"
    });
  }

  // Handle form input changes
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  // Handle form submission
  async function handleUpdateSubmit(e) {
    e.preventDefault();
    try {
      console.log("Updating car:", selectedCar._id, formData);
      setShowUpdateForm(false);
      let carUpdate = await Axios.put(`/updatecar/${selectedCar._id}`, formData);
      console.log("Car updated successfully!");
      await retrive();
    } catch (error) {
      console.log(error);
    }
  }

  // NEW FUNCTIONS FOR CREATE - Added below your existing functions
  function showCreateFormPopup() {
    setShowCreateForm(true);
  }

  function closeCreateForm() {
    setShowCreateForm(false);
    setCreateFormData({
      name: "",
      model: "",
      year: "",
      price: "",
      status: "pending"
    });
  }

  function handleCreateInputChange(e) {
    const { name, value } = e.target;
    setCreateFormData(prevState => ({
      ...prevState,
      [name]: value
      
    }));
  }

  async function handleCreateSubmit(e) {
    e.preventDefault();
    try {
      console.log("Creating new car:", createFormData);
      let newCar = await Axios.post('/addcar', createFormData);
      console.log("Car created successfully!");
      setShowCreateForm(false);
      await retrive();
    } catch (error) {
      console.log(error);
    }
  }

  // Format price for display
  function formatPrice(price) {
    if (!price || price === "N/A") return "N/A";
    // If price is already formatted with $, return as is
    if (typeof price === 'string' && price.includes('$')) return price;
    // If price is a number, format it with $
    return `$${price}`;
  }

  return (
    <>
      <div className="orders">
        <h2>Orders List ({name.length})</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Year</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {name.map((item, index) => (
              <tr key={index}>
                <td>{item.id || index + 1}</td>
                <td>{item.name}</td>
                <td>{item.year || "N/A"}</td>
                <td>{formatPrice(item.price)}</td>
                <td>
                  <span className={`status ${item.status ? item.status.toLowerCase() : 'pending'}`}>
                    {item.status || "Pending"}
                  </span>
                </td>
                <td>
                  <button className="btn-delete" onClick={() => deleteCar(item._id)}>Delete</button>
                  <button className="btn-update" onClick={() => Updatecar(item)}>Update</button>
                </td>
              </tr>
            ))}
            <button className="btn-add-new" onClick={showCreateFormPopup}>Add new item</button>
          </tbody>
        </table>
      </div>
       
      {/* Update Form Popup */}
      {showUpdateForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Update Car Details</h3>
              <button className="close-btn" onClick={closeUpdateForm}>×</button>
            </div>
            <form onSubmit={handleUpdateSubmit} className="update-form">
              <div className="form-group">
                <label htmlFor="name">Car Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="model">Model:</label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="year">Year:</label>
                <input
                  type="text"
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="price">Price ($):</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="Enter price without $ symbol"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="status">Status:</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="processing">Processing</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              
              <div className="form-actions">
                <button type="button" className="btn-cancel" onClick={closeUpdateForm}>
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  Update Car
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* NEW CREATE FORM POPUP - Added below your existing popup */}
      {showCreateForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Create New Car</h3>
              <button className="close-btn" onClick={closeCreateForm}>×</button>
            </div>
            <form onSubmit={handleCreateSubmit} className="update-form">
              <div className="form-group">
                <label htmlFor="create-name">Car Name:</label>
                <input
                  type="text"
                  id="create-name"
                  name="name"
                  value={createFormData.name}
                  onChange={handleCreateInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="create-model">Model:</label>
                <input
                  type="text"
                  id="create-model"
                  name="model"
                  value={createFormData.model}
                  onChange={handleCreateInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="create-year">Year:</label>
                <input
                  type="text"
                  id="create-year"
                  name="year"
                  value={createFormData.year}
                  onChange={handleCreateInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="create-price">Price ($):</label>
                <input
                  type="number"
                  id="create-price"
                  name="price"
                  value={createFormData.price}
                  onChange={handleCreateInputChange}
                  placeholder="Enter price without $ symbol"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="create-status">Status:</label>
                <select
                  id="create-status"
                  name="status"
                  value={createFormData.status}
                  onChange={handleCreateInputChange}
                >
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="processing">Processing</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              
              <div className="form-actions">
                <button type="button" className="btn-cancel" onClick={closeCreateForm}>
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  Create Car
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}