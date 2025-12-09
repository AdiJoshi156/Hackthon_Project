import axios from "axios";
import { useState } from "react";

export default function Login(){
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const login = async()=>{
     const res = await axios.post("http://localhost:5000/auth/login",{email,password});
     localStorage.setItem("token",res.data.token);
     window.location="/dashboard";
  }

  return(
    <div>
      <input placeholder="email" onChange={e=>setEmail(e.target.value)}/>
      <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
      <button onClick={login}>Login</button>
    </div>
  )
}
