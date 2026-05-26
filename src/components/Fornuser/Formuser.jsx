import { useState } from "react";
import Axios from "../../axios/axios";
import "./Formuser.css";

export default function Formuser( {openform1,setOpenform1}) {

const [formuser,setFormuser]=useState({
    name:"",
    email:"",
    number: "",
    password:""
});

async function handleSubmit(e) {
    e.preventDefault();
    console.log(formuser)
    const response= await Axios.post(`/addnewuser`,formuser);
    console.log(response.data)
}

    return(
        <>
        <div>
            <h2>Add user</h2>

        <form onSubmit={handleSubmit} className="user-form">
            <input 
            type="text"
            name="name"
            placeholder="Name"
            value={formuser.name}
            onChange={(e) => setFormuser({ ...formuser, name: e.target.value })}

            />
            
            <input 
            type="text"
            name="email" 
            placeholder="Email"
            value={formuser.email}
            onChange={(e) => setFormuser({ ...formuser, email: e.target.value })}

            />

            <input 
            type="text"
            name="number"
            placeholder="Number"
            value={formuser.number}
            onChange={(e) => setFormuser({ ...formuser, number: e.target.value })}
            />

            <input                                                                    
            type="password"
            name="password"
            placeholder="Password"
            value={formuser.password}
            onChange={(e) => setFormuser({ ...formuser, password: e.target.value })}
            />

            <button  type="submit">submit</button>

            <button onClick={() => setOpenform1(false)}>close</button>
            

        </form>
        
        </div>
        </>
    )
}