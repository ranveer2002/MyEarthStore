import React from "react";
import {useState} from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import login2 from "../assets/login2.jpg";

function Login(props){
    let setIsLoggedIn = props.setIsLoggedIn;

    const navigate = useNavigate();

    const [formData,setFormData] = useState({email:"",password:""});

    const [showPassword , setShowPassword]= useState(false);

    const[passwordError,setPasswordError] = useState('');
    
    function changeHandler(event){
       setFormData( (prevData)=>(
        {
          ...prevData,
          [event.target.name]:event.target.value
        }
       ))
    }
    
    const URL = `${process.env.REACT_APP_BASE_URL}/login`;
    const submitHandler = async (event) => {
          event.preventDefault();
          const {email,password} = formData;
          const result = await fetch(
            URL,
            {
              method : "POST",
              mode:"cors",
              headers : {
                "Content-Type" : "application/json",
              },
              body : JSON.stringify({email,password})
            })
          const data = await result.json();  
          console.log("result of login api data",data);
          const token = data.token;  
          console.log("token got at login UI",token);
          localStorage.setItem("token",token);
          if(result.status === 404 || !result){
              setPasswordError("Invalid Email & Password");
          } else {
              setIsLoggedIn(true);
              toast.success("Logged In Successfully");
              navigate("/");
          } 
    }

    return(
      <div className="flex justify-evenly border rounded-xl w-[1200px] mx-auto shadow-2xl mt-10 py-7" >
        <div>
          <img src={login2} alt="login" loading="lazy"
          className=" h-[420px] mt-4 ml-20"/>
        </div>
       <form onSubmit={submitHandler} method="POST"
        className=" flex flex-col w-[350px] h-[400px] gap-y-4 mt-6 mx-auto border border-2px solid rounded-[15px] px-5 py-10 bg-blue-100">
             <span style={{ color: 'red' }}>{passwordError}</span>
             <label 
                className="text-[0.875rem] text-lg text-richblack-200 mb-1 leading-[1.375rem]">
                  Email Address<sup className="text-pink-900 text-lg ">*</sup>
              
                <input
                  required
                  type ="email"
                  name ="email"
                  value={formData.email}
                  onChange={changeHandler}
                  placeholder="Enter Email Address"
                  className="bg-richblack-800 justify-center items-center rounded-[0.5rem] outline-none text-richblack-5 w-full px-[8px] py-[12px]"
                />
             </label>
             
             <label 
                className="w-full relative text-[0.875rem] text-lg text-richblack-5 mb-1 leading-[1.375rem]">
                Password<sup className="text-pink-900 text-lg">*</sup>
              
                <input
                  required
                  type={showPassword?("text"):("password")}
                  name ="password"
                  value={formData.password}
                  onChange={changeHandler}
                  placeholder="Enter passowrd"
                  className="bg-richblack-800 justify-center items-center rounded-[0.5rem] outline-none text-richblack-5 w-full px-[8px] py-[12px]"
                />
                <span onClick={()=> setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-10 text-black cursor-pointer">
                  {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                </span>
             </label>

               <Link to="#">
                <p className="text-xs mt-1 text-sky-700 max-w-max ml-auto">
                Forgot Passowrd
                </p>
               </Link>
             
             <button className="bg-yellow-200 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] hover:bg-yellow-500 transition all 1s ease">
                Sign In
             </button>
             
        </form>
      </div>
        
    )
}

export default Login;