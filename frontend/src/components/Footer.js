import React from "react";
import {CiLocationOn} from "react-icons/ci"
import {AiTwotonePhone,AiOutlineMail,AiFillFacebook,AiFillInstagram,AiFillLinkedin,AiFillGithub} from "react-icons/ai"
const Footer = ()=>{
    
    return(
        <div className="flex justify-evenly items-center mt-20 px-15 py-14">
            <div className="px-8 py-8 pb-10">
              <div className="flex">
                  <CiLocationOn className="text-2xl mt-1 text-white hover:text-violet-500 cursor-pointer"/>
                  <span className="text-[20px] px-2 text-white hover:text-violet-500 cursor-pointer">21,Mahrana Pratap Marg,Jaipur</span>
              </div>  
              <div className="flex mt-4">
                  <AiTwotonePhone className="text-2xl mt-1 text-white hover:text-violet-500 cursor-pointer"/>
                  <span className="text-[20px] px-2 text-white hover:text-violet-500 cursor-pointer">+91 9923469800</span>
              </div>  
              <div className="flex mt-4">
                  <AiOutlineMail className="text-2xl mt-1 text-white hover:text-violet-500 cursor-pointer"/>
                  <a href="mailto:virat@gmail.com" className="text-[20px] px-2 text-white hover:text-violet-500 cursor-pointer">virat@gmail.com</a>
              </div>  
              
            </div>
            <div>
                <p className="text-[20px] px-2 text-white hover:text-violet-500 cursor-pointer">About US</p>
                <p className="w-[400px] mt-3 px-2 text-white hover:text-violet-500 cursor-pointer">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                </p>
                <div className="flex mt-3  space-x-3 ml-3">
                     <AiFillFacebook className="text-2xl text-white hover:text-violet-500 cursor-pointer"/>
                     <AiFillInstagram className="text-2xl text-white hover:text-violet-500 cursor-pointer"/>
                     <AiFillLinkedin className="text-2xl text-white hover:text-violet-500 cursor-pointer"/>
                     <AiFillGithub className="text-2xl text-white hover:text-violet-500 cursor-pointer"/>
                </div>   
            </div>
    
        </div> 
        
    )
}
export default Footer;