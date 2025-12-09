const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async(req,res)=>{
  const {email,password} = req.body;
  const hash = await bcrypt.hash(password,10);
  await User.create({email,password:hash});
  res.send({message:"registered"});
});

router.post("/login", async(req,res)=>{
  const {email,password} = req.body;
  const user = await User.findOne({email});
  if(!user) return res.send("user not found");

  const ok = await bcrypt.compare(password,user.password);
  if(!ok) return res.send("wrong password");

  const token = jwt.sign({id:user._id},"secret");
  res.send({token});
});

module.exports = router;
