import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Axios from "../../axios/axios";

 export default function Login () {
  const navigate = useNavigate();

const [logindata, setLogindata] = useState({
    email: "",
    password: ""
  });
  async function handlelogin(e) {
    e.preventDefault();
    console.log(logindata);
    const response= await Axios.post("/loginadmin", logindata);
    console.log(response.data)
    if(response.data.success){
      localStorage.setItem("admindata",JSON.stringify(response.data.admin))
      navigate("/admin/view-products")
      
    }
    else{
      alert("login failed.Tryagain")
    }
  }

  return(
    <>
    <div className="login-container">
      <h2>LOGIN</h2>

      <form onSubmit={handlelogin}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={logindata.email}
          onChange={(e) => setLogindata({ ...logindata, email: e.target.value })}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={logindata.password}
          onChange={(e) => setLogindata({ ...logindata, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  )
}