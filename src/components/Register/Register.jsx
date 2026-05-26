import { useState } from "react";
import Axios from "../../axios/axios";
import { Link,useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [registerdata, setRegisterdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);
    console.log(registerdata);
    
    try {
      const response = await Axios.post("/addnewadmin", registerdata);
      console.log(response.data);
      
      if(response.data.success){
        navigate("/login");
      } else{
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  
  return(
    <>
    <div className="register">
      <h2>REGISTER !...............</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={registerdata.name}
          onChange={(e) => setRegisterdata({ ...registerdata, name: e.target.value })}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={registerdata.email}
          onChange={(e) => setRegisterdata({ ...registerdata, email: e.target.value })}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={registerdata.password}
          onChange={(e) => setRegisterdata({ ...registerdata, password: e.target.value })}
          required
          minLength="6"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
    </>
  )
}