import axios from "axios";
import {useEffect, useState} from "react";

export default function Dashboard(){
  const[data,setData]=useState([]);

  useEffect(()=>{
    load();
  },[]);

  const load = async()=>{
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:5000/protected",{
      headers:{Authorization:token}
    });
    setData(res.data);
  }

  return(
    <div>
      <h1>Dashboard</h1>
      {data.map(item=><div>{item.name}</div>)}
    </div>
  )
}
