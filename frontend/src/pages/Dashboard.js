import React , {useState,useEffect} from "react";
import {CiEdit} from "react-icons/ci"
import {useNavigate} from "react-router-dom"
const Dashboard = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState({
      fullname:"",
      phone:"",
      email:"",
      });
    const URL = `${process.env.REACT_APP_BASE_URL}/userdata` 
    async function getUserData(){
      const token = localStorage.getItem('token');
      console.log("sending token from dashboard",token);
      const response = await fetch(
        URL,
        {
            headers: {
                authorization: `Bearer ${token}`
            },
        }        
      )
      const data = await response.json();
      console.log("dashboard data",data);
      setUser(data.user); 
    }

    useEffect(()=>{
      getUserData();
    },[]);
  let imageUrl = user.fullname.charAt(0).toUpperCase();  

  return (
    <div>
      <button onClick={()=>{navigate("/")}}
      className="text-xl font-semibold ml-10 mt-5 border px-3 py-2 bg-violet-600 hover:bg-violet-800 text-white rounded-lg">Home</button>
       <div className="flex justify-evenly items-center mt-10 border ml-[200px] mr-[200px]">
      <div className="-mt-[30px]">
            <p className="-mt-[210px] text-white inline-block w-[150px] h-[150px] rounded-full bg-no-repeat bg-center-center bg-cover bg-rose-400
            text-8xl px-12 py-5">{imageUrl}</p>
            <CiEdit className="text-2xl text-#111111 ml-[130px] -mt-[20px]"/>
      </div>
      <div className="w-[300px] h-[350px] mt-10">
        <p className="px-5 py-2 font-semibold text-lg text-violet-800">{user.fullname}</p>
        <CiEdit className="text-2xl text-#111111 ml-[140px] -mt-[35px]"/>
        <p className="px-5 py-2 font-semibold text-lg text-violet-800">{user.email}</p>
        <CiEdit className="text-2xl text-#111111 ml-[310px] -mt-[35px]"/>
        <p className="px-5 py-2 font-semibold text-lg text-violet-800">+91  {user.phone}</p>
        <CiEdit className="text-2xl text-#111111 ml-[155px] -mt-[35px]"/>
      </div>  
    </div>
    </div>

   
  );
};

export default Dashboard;
