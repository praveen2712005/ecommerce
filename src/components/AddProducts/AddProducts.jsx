import React from "react";
import "./AddProducts.css";

export default function AddProducts() {
  return (
    <div class="add-products">
  <h2>Add New Product</h2>
  <form class="product-form">
    <input type="text" placeholder="Product Name" />
    <input type="number" placeholder="Price" />
    <input type="text" placeholder="Category" />
    <input type="text" placeholder="description" />
    <input type="file" />
    <button type="submit">Add Product</button>
  </form>
</div>
  );
}
