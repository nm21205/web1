const express = require("express")
const app = express();
const port = 5000;
const { User } = require("/models/User");



//몽구스를 이용해서앱과 mongodb를 연결

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nm21205:ghdyd2306598!@cluster0.wuwps.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err))

app.get("/",(req, res) => {
 
  res.send("Hello World")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})