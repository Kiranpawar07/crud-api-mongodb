const express= require('express');
const port  = process.env.PORT || 9000
const dbConnect = require('./db')
const app = require('./app');

dbConnect('mongodb://localhost:27017/crud_api').then(()=>{
  console.log('DB Connected')  
}).catch(err=>{
        console.log(err)
        console.log('Error in db connection')
})

app.listen(port,(req,res)=>{
    console.log(`Server connected at ${port}`);
})