const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.login = async (req,res) =>{
     try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(422).json({
                message:"pls fill all details carefully!"
            })
        }
        let result = await User.findOne({email:email});
        if(result && password === result.password){
            const token = jwt.sign(
                { id: result._id,
                  email:result.email },
                process.env.JWT_SECRET,
                {
                  expiresIn: "2h",
                }
            );
            console.log("token generated in login-bd",token);
            const updatedUser = await User.findByIdAndUpdate(
                result._id,
                { token: token },
                { new: true } 
            );
            res.status(200).json({
                success : true,
                result:updatedUser,
                token:token,
                message : "User LoggedIn Successfully"
            })
        } else {
            res.status(404).json({
                success : false,
                message : "User does not exist"
            })
        }
     } catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"error in fetching login form data"
        })
     }
}

exports.signup = async(req,res)=>{
    try{
        const {fullname,phone,email,password,cPassword} = req.body;
        if(!fullname || !phone || !email || !password || !cPassword){
            return res.status(422).json({
                message:"pls fill all details carefully!"
            })
        }

        const userExist = await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({
                message:"user already exists!"
            })
        } else if(password !== cPassword){
            return res.status(422).json({
                message:"Password do not match"
            })
        } else {
            let user = await User.create({fullname,phone,email:email.toLowerCase(),password,cPassword});
            console.log("user all data in sign up backend:",user);
            const token = jwt.sign(
                { 
                  id : user._id, 
                  email : user.email
                },
                process.env.JWT_SECRET,
                {
                  expiresIn: "2h",
                }
            );
            const updatedUser = await User.findByIdAndUpdate(
                user._id,
                { token: token },
                { new: true }
              );
            console.log("token generated in signup-bd",token);
            res.status(200).json({
            success:true,
            user:updatedUser,
            token:token,
            message:"user created successfully!"
            })
        }    

    } catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"error in fetching signup data"
        })
    }
}

