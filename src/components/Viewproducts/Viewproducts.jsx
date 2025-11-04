import React, { Component } from 'react'
import './ViewProducts.css'

export default class ViewProducts extends Component {
  render() {
    return (
      <div className="view-products">
        <div className="products-header">
          <h1>View Products</h1>
          <p>Manage your product inventory</p>
        </div>

        <div className="products-grid">
          {/* Product Card 1 */}
          <div className="product-card">
            <div className="product-image">
              <img src="https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-wireless-headphone-png-image_15830312.png" alt="Product" />
            </div>
            <div className="product-info">
              <h3>Wireless Headphones</h3>
              <p className="product-category">Electronics</p>
              <p className="product-price">$129.99</p>
              <span className="stock-status in-stock">In Stock</span>
            </div>
            <div className="product-actions">
              <button className="btn-view" onClick={() => alert('View details clicked')}>
                👁️ View Details
              </button>
              <button className="btn-edit" onClick={() => alert('Edit clicked')}>
                ✏️ Edit
              </button>
              <button className="btn-track" onClick={() => alert('Track order clicked')}>
                📦 Track Order
              </button>
              <button className="btn-delete" onClick={() => alert('Delete clicked')}>
                🗑️ Delete
              </button>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="product-card">
            <div className="product-image">
              <img src="https://png.pngtree.com/png-vector/20240125/ourmid/pngtree-orange-office-chair-png-image_11548338.png" alt="Product" />
            </div>
            <div className="product-info">
              <h3>Office Chair</h3>
              <p className="product-category">Furniture</p>
              <p className="product-price">$299.99</p>
              <span className="stock-status low-stock">Low Stock</span>
            </div>
            <div className="product-actions">
              <button className="btn-view" onClick={() => alert('View details clicked')}>
                👁️ View Details
              </button>
              <button className="btn-edit" onClick={() => alert('Edit clicked')}>
                ✏️ Edit
              </button>
              <button className="btn-track" onClick={() => alert('Track order clicked')}>
                📦 Track Order
              </button>
              <button className="btn-delete" onClick={() => alert('Delete clicked')}>
                🗑️ Delete
              </button>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="product-card">
            <div className="product-image">
              <img src="https://png.pngtree.com/png-vector/20241025/ourmid/pngtree-smart-watch-png-image_14171827.png " alt="Product" />
            </div>
            <div className="product-info">
              <h3>Smart Watch</h3>
              <p className="product-category">Electronics</p>
              <p className="product-price">$199.99</p>
              <span className="stock-status out-of-stock">Out of Stock</span>
            </div>
            <div className="product-actions">
              <button className="btn-view" onClick={() => alert('View details clicked')}>
                👁️ View Details
              </button>
              <button className="btn-edit" onClick={() => alert('Edit clicked')}>
                ✏️ Edit
              </button>
              <button className="btn-track" onClick={() => alert('Track order clicked')}>
                📦 Track Order
              </button>
              <button className="btn-delete" onClick={() => alert('Delete clicked')}>
                🗑️ Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}