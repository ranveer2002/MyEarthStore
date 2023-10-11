const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    cPassword:{
        type:String,
        required:true
    },
    token:{
        type:String
    }
});

module.exports = mongoose.model("user",userSchema);