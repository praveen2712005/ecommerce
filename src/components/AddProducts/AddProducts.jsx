import React from "react";
import Axios from "../../axios/axios"
import "./AddProducts.css";

export default function AddProducts() {
  const [additem, setAdditem] = React.useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: null // Changed from empty string to null for file
  });

  const [imagePreview, setImagePreview] = React.useState(null);

  function handleChange(e) {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setAdditem({
        ...additem,
        [e.target.name]: file
      });
      
      // Create preview URL
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setImagePreview(null);
      }
    } else {
      setAdditem({
        ...additem,
        [e.target.name]: e.target.value
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    // Create FormData for file upload
    const formData = new FormData();
    formData.append("name", additem.name);
    formData.append("price", additem.price);
    formData.append("category", additem.category);
    formData.append("description", additem.description);
    if (additem.image) {
      formData.append("image", additem.image);
    }

    try {
      // Important: Set content-type to multipart/form-data
      let response = await Axios.post("/addproduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      
      console.log("Product added:", response.data);

      // Reset form
      setAdditem({
        name: "",
        price: "",
        category: "",
        description: "",
        image: null
      });
      setImagePreview(null);
      
      // Reset file input
      document.querySelector('input[name="image"]').value = "";

    } catch (error) {
      console.log("Error:", error);
    }
  }

  return (
    <div className="add-products">
      <h2>Add New Product</h2>

      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          name="name"
          value={additem.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          placeholder="Price"
          name="price"
          value={additem.price}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
        />

        <select
          name="category"
          value={additem.category}
          onChange={handleChange}
          required
          className="category-select"
        >
          <option value="">Select Category</option>
          <option value="SEDAN">SEDAN</option>
          <option value="SUV">SUV</option>
          <option value="HATCHBACK">HATCHBACK</option>
          <option value="Sports Cars">SPORTS CAR</option>
          <option value="Electric Cars">ElECTRIC</option>
          <option value ="Pickup Trucks">PICKUP TRUCKS</option>
        </select>

        <input
          type="text"
          placeholder="Description"
          name="description"
          value={additem.description}
          onChange={handleChange}
          required
        />

        {/* Changed from text input to file input */}
        <div className="file-input-wrapper">
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className="file-input"
          />
          <div className="file-input-label">
            <span className="file-icon">📁</span>
            <span className="file-text">
              {additem.image ? additem.image.name : "Choose Product Image"}
            </span>
            <span className="file-browse">Browse</span>
          </div>
        </div>

        {/* Image Preview */}
        {imagePreview && (
          <div className="image-preview-container">
            <span className="image-preview-label">Image Preview:</span>
            <div className="image-preview">
              <img src={imagePreview} alt="Preview" />
            </div>
          </div>
        )}

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}