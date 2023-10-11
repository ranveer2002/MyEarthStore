import React from "react";
import {useState} from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import login2 from "../assets/login2.jpg";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"

const Signup = (props)=>{
    let setIsLoggedIn = props.setIsLoggedIn;
    const navigate = useNavigate();
    const [formData,setFormData]=useState({
        fullname:"",
        phone:"",
        email:"",
        password:"",
        cPassword:""
    });
    const [showPassword , setShowPassword]= useState(false);
    const [showCPassword , setShowCPassword]= useState(false);
    const[passwordError,setPasswordError] = useState('');
    function changeHandler(event){
       setFormData((prevData)=>(
        {
          ...prevData,
          [event.target.name]:event.target.value
        }
       ))
    };

    const URL = `${process.env.REACT_APP_BASE_URL}/signup`;
    const  submitHandler = async(event)=>{
        event.preventDefault();
        const {fullname,phone,email,password,cPassword} = formData;
        console.log("formdata = ",formData);
        const response = await fetch(
            URL,
            {
            method:"POST",
            mode:"cors",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({fullname,phone,email,password,cPassword})
            }
        );
        const result = await response.json();
        console.log("result of signup api",result);
        const token = result.token;  
        console.log("token got at sign-UI",token);
        localStorage.setItem("token",token);
          
        if (password !== cPassword) {
            setPasswordError('Passwords do not match');
        } else if(response.status===422 || !result){
            toast.error("invalid signup");
        }
        else {
            setIsLoggedIn(true);
            toast.success("Account created!");
            navigate("/");
        }   
    }

    return(
        <div className="flex justify-evenly border rounded-xl w-[1200px] mx-auto shadow-2xl mt-7 py-3 h-[600px]">
            <div>
               <img src={login2} alt="login" loading="lazy"
               className=" h-[420px] mt-4 ml-20"/>
            </div>
            <form method="POST"
               onSubmit={submitHandler}
               className="flex flex-col justify-center itmes-center w-[390px] h-[530px] gap-y-5 mt-3 mx-auto px-5 py-10 border border-2px solid rounded-[15px] bg-slate-200">
              <div className="">
               <label className="w-full">
                <p className="text-[0.875rem] text-xl text-richblack-5 mb-1 leading-[1.375rem]">Full Name<sup className="text-pink-900 text-lg">*</sup></p>
                <input 
                required
                type="text"
                name="fullname"
                onChange={changeHandler}
                value={formData.fullname}
                placeholder="Enter your name"
                className="bg-richblack-800 justify-center items-center rounded-[0.5rem] outline-none text-richblack-5 w-full px-[8px] py-[12px]"
                />
               </label>
               <label className="w-full ">
                <p className="text-[0.875rem] text-xl text-richblack-5 mb-1 mt-[5px] leading-[1.375rem]">Phone<sup className="text-pink-900 text-lg">*</sup></p>
                <input 
                required
                type="tel"
                name="phone"
                pattern="[0-9]{10}"
                onChange={changeHandler}
                value={formData.phone}
                placeholder="Enter your number"
                className="bg-richblack-800 justify-center items-center rounded-[0.5rem] outline-none text-richblack-5 w-full px-[8px] py-[12px]"
                />
               </label>
               <label className="w-full ">
                <p className="text-[0.875rem] text-xl text-richblack-5 mb-1 mt-[5px] leading-[1.375rem]">Email<sup className="text-pink-900 text-lg">*</sup></p>
                <input 
                required
                type="email"
                name="email"
                onChange={changeHandler}
                value={formData.email}
                placeholder="Enter your email"
                className="bg-richblack-800 justify-center items-center rounded-[0.5rem] outline-none text-richblack-5 w-full px-[8px] py-[12px]"
                />
               </label>
               <label className="w-full relative">
                <p className="text-[0.875rem] text-xl text-richblack-5 mb-1 mt-[5px] leading-[1.375rem]">Password<sup className="text-pink-900 text-lg">*</sup></p>
                <input 
                required
                type={showPassword?("text"):("password")}
                name="password"
                minlength="8"
                maxlength="20"
                onChange={changeHandler}
                value={formData.password}
                placeholder="Enter your password"
                className="bg-richblack-800 justify-center items-center rounded-[0.5rem] outline-none text-richblack-5 w-full px-[8px] py-[12px]"
                />
                <span onClick={()=> setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-[82px] text-black cursor-pointer">
                  {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                </span>
               </label>
               <label className="w-full relative">
                <p className="text-[0.875rem] text-xl text-richblack-5 mb-1 mt-[5px] leading-[1.375rem]">Confirm Password<sup className="text-pink-900 text-lg">*</sup></p>
                <input 
                required
                type={showCPassword?("text"):("password")}
                name="cPassword"
                minlength="8" 
                maxlength="20"
                onChange={changeHandler}
                value={formData.cPassword}
                placeholder="Enter your password again"
                className="bg-richblack-800 justify-center items-center rounded-[0.5rem] outline-none text-richblack-5 w-full px-[8px] py-[12px]"
                />
                <span onClick={()=> setShowCPassword((prev) => !prev)}
                  className="absolute right-3 top-[82px] text-black cursor-pointer">
                  {showCPassword?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                </span>
               </label>
               <span style={{ color: 'red' }}>{passwordError}</span>
               <button
               className="bg-yellow-200 mt-[20px] w-full rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] hover:bg-yellow-500 transition all 1s ease">
                 Create Account
               </button>
            </div>
            </form> 
        </div>
        
    );
}

export default Signup;