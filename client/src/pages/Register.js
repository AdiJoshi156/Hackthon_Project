import axios from "axios";
import { useState } from "react";

export default function Register(){
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const register = async()=>{
     await axios.post("http://localhost:5000/auth/register",{email,password});
     alert("Registered!");
  }

  return(
    <div>
      <input placeholder="email" onChange={e=>setEmail(e.target.value)}/>
      <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
      <button onClick={register}>Register</button>
    </div>
  )
}
