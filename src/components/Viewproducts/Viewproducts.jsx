import React, { Component, useEffect, useState } from 'react'
import './ViewProducts.css'
import Axios from '../../axios/axios'
import Form from '../Form/Form'

export default function Viewproducts() {

  const [items, setItems] = useState([]);
  const [openform, setOpenform] = useState(false);
  const [selectdata,setSelectdata]=useState([])

   useEffect(()=>{
    async function fetchProducts(){
      try {
        const item= await Axios.get('/viewproduct')
        console.log("Products fetched:", item.data);
        setItems(item.data)
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    }
    fetchProducts()
   },[])

  async function deleteProduct(id){
  try {
    console.log(id, " product_id");
    const deleteproduct = await Axios.delete(`/deleteproduct/${id}`); 
    console.log("Product deleted:", deleteproduct);
    setItems(items.filter((product) => product._id !== id));
    
  } catch (error) {
    console.log("Error deleting product:", error);
  }
}
async function editProduct(id, updatedProduct){
  try {
    console.log(id)
     setSelectdata(updatedProduct);
     setOpenform(true);
  } catch (error) {
    console.log("Error editing product:", error);
  }
}

  return (
      <div className="view-products">
        <div className="products-header">
          <h1>View Products</h1>
          <p>Manage your product inventory</p>
        </div>

        <div className="products-grid">
        {items.map((item) => (
            <div className="product-card" key={item._id}>
            <h3 className="product-name">{item.name}</h3>
            <p className="product-price">Price: ${item.price}</p>
            <p className="product-category">Category: {item.category}</p>
            <p className="product-description">{item.description}</p>
            <button onClick={() => deleteProduct(item._id)}>Delete</button>
            <button onClick={() => { editProduct(item._id,item); }}>Edit</button>
           
  </div>
))}

       
        {openform ? <Form 
        selectdata={selectdata}
        openform={openform}
        setOpenform={setOpenform}
        /> : ""}
      
      </div>
      </div>
     
    )
  }