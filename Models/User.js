const mongoose=require("mongoose");

const UserSchema= new mongoose.Schema({

    fname:{
        type:String,
    },
    lname:{
        type:String,
    },

    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    gender:{
        type:String
    },
    dob:{
        type:String
    },
    profile:{
        type:String
    }

},{
    timestamps:true
})
const Usermodel=mongoose.model("user",UserSchema);

module.exports=Usermodel