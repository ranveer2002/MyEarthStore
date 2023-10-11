const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("Db connected successfully"))
    .catch((error)=>{
        console.log("Db connection failed");
        console.log(error);
        process.exit(1);
    })
}