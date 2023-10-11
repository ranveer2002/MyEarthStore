const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getUserData = async(req,res)=>{
    try {
        console.log("req header at bd",req.headers);
        const authHeader = req.headers.authorization;
        const token = authHeader.replace("Bearer ","");
        console.log("token at getuserdata",token);
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    
        const id = decodedToken.id;
        
        const user = await User.findById({_id:id});

        if(user){
            res.status(200).json({
                success:true,
                user,
                message:"user data fetched successfully"
            })
        } else {
            res.status(500).json({
                success:false,
                message:"user data can't be fetched"
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          message: "Error in fetching user data",
        });
      }
}  

