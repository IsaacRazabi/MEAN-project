const express = require('express');
const app = express() //create an express app- big chain of middleware
const bodyParser = require("body-parser");
app.use((req,res,next)=>{ //handle cors on development (client and server on different ports)
app.use(bodyParser.json());

res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader('Access-Control-Allow-Headers' ,"Origin,X-Requested-With, Content-Type, Accept",'*');
res.setHeader("Access-Control-Allow-Methods", "GET","POST","PATCH","OPTIONS,DELETE")
  next();
})
app.post("/api/posts",(req,res,next)=>{
  const post = req.body ;
console.log(post);
res.status(201).json({
  message: "posts fetched !"
})
})
app.use('/api/posts',(req,res)=>{ // add new  middleware
const posts =[
{id:'dfd', title : 'server side posts' , content : 'this is coming from server'},
{id:'dfd 2', title : 'server side posts 2' , content : 'this is coming from server 2'}
];
  res.status(200).json({
    message :'posts fetch correctly',
    posts:posts
  })
}); 

module.exports = app ;