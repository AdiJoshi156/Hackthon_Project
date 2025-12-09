const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/hackathon");

app.use("/auth", require("./routes/auth"));

app.get("/protected", (req,res)=>{
    const token = req.headers.authorization;
    if(!token) return res.send("No Token");

    try{
        jwt.verify(token, "secret");
        res.send([{name:"Example secured data"}]);
    }catch{
        res.send("Invalid token");
    }
});

app.listen(5000, ()=> console.log("server running"));
