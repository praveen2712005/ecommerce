import React, { useEffect, useState } from "react";
import "./Orders.css";
import Axios from "../../axios/axios";

export default function Orders() {
  const [data, setdata] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        retrive();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  async function retrive() {
    let data = await Axios.get('/newdata');
    console.log(data);
  }

  return (
    <div className="orders">
      <h2>Orders List</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1001</td>
            <td>John</td>
            <td>$250</td>
            <td>Delivered</td>
          </tr>
          <tr>
            <td>#1002</td>
            <td>Emma</td>
            <td>$130</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
