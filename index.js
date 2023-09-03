const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json())
const users = [
    {id:1, name:'Md Shohanoor Rahman Shohan', email:'snrshohan21@gmail.com'},
    {id:2, name:'Md Sadman Hafiz Shohan', email:'snrshohan22@gmail.com'},
    {id:3, name:'Md RedWon Islam Shezan', email:'rdishezan@gmail.com'}
]
app.get('/',(req,res)=>{
    res.send("nodemon is running")
})
app.get('/users',(req,res)=>{
    res.send(users)
})
app.post('/users',(req,res)=>{
    console.log('user api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})
app.listen(port,(req,res)=>{
    console.log(`server is running on port: ${port}`)
})