var cloudinary = require('cloudinary').v2;
const User = require('../Models/User');
const path  = require('path')
const fs = require('fs')
cloudinary.config({ 
    cloud_name: 'arukiran', 
    api_key: '293681843764335', 
    api_secret: 'wC3aDzbo5FxTq1JzrM7OwNlhtQo',
    secure: true 
  });


const getData = (req,res) =>{
    User.find().then((data)=>{
        res.json({
            message: 'User data Find Sucessfully',
            data
        })
    }).catch(err=>{
        res.json({
            message:'Data Not Found'
        })
    })
}

const saveData= (req,res,next) =>{
    const imgPath = req.files.file.path ;
    cloudinary.uploader.upload(imgPath, function(error, result) {
            if(error){
                console.log(error)
            }else{
                 const user = new User({
                    fname:req.body.fname,
                    lname:req.body.lname,
                    email:req.body.email,
                    password:req.body.password,
                    dob:req.body.dob,
                    gender:req.body.gender,
                    profile:result.url,
                 })
              
                    user.save().then(result=>{
                        res.json({
                            message:"Data Inserted",
                                data:result
                            })
                        }).catch(err=>{
                            res.json({
                                message:err,
                            })
                    })
            }
    });
   
}

const updateOneData= (req,res) =>{

    // User.updateOne({_id:req.body.id},{$set:{fname:req.body.fname,lname:req.body.lname,email:req.body.email,gender:req.body.gender,dob:req.body.dob}}).then((result)=>{

    User.updateOne({name:req.body.name},{$set:req.body}).then((result)=>{
        res.json({
            message:"User is updated"
        })
    }).catch(err=>{
        res.json({
            message: "User is Not Updated"
        })
    })
}

const deleteOne = (req,res)=>{
    User.deleteOne({_id:req.params.id}).then((result)=>{
        res.json({
            message:"User is deleted"
        })
    }).catch(err=>{
        res.json({
            message: "User is Not delete"
        })
    })
}

module.exports = {
    getData,
    saveData,
    updateOneData,
    deleteOne
}