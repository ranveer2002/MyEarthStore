import React from "react";
import {useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import {AiOutlineSearch,AiOutlineShoppingCart} from "react-icons/ai"
// import logo4 from '../assets/logo4.jpeg'
import logo from '../assets/logo.png'
const Navbar = (props)=>{
    const navigate = useNavigate();
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    const {cart} = useSelector((state)=>state);
    function clickHandler(){
        setIsLoggedIn(false);
        navigate('/');
    }
    return(
         <div className="flex justify-evenly items-center w-full h-[80px] max-w-[full] ml-[20px] py-4 mx-auto gap-x-10 overflow-y-hidden ">
            <NavLink to="/" >
            <img src={logo} alt="logo" loading="lazy" className="cursor-pointer h-[49px] mt-1 hover:scale-90 transition-all 3s ease"/>
            </NavLink>
            <nav>
                <ul className="flex gap-x-10 ml-[15px] mx-auto text-white">
                   <NavLink to="/">
                        <li className="text-black text-2xl mx-[3px] mt-2 cursor-pointer font-semibold hover:text-violet-700">Home</li>
                   </NavLink> 
                   
                   <div className="text-black mt-1">
                   <select 
                   className="px-3 py-1 mx-auto rounded-lg text-2xl font-semibold outline-none appearance-none bg-slate-200 hover:text-violet-700 cursor-pointer">
                    <option className="text-black text-xl mx-[3px] mt-1 cursor-pointer hover:text-sky-700">Category</option>
                    <option className="text-xl ">
                    <NavLink to="/men">
                        <li className="text-black text-xl mx-[3px] mt-1 cursor-pointer hover:text-sky-700">Men</li>
                   </NavLink>
                    </option>
                    <option className="text-xl ">
                    <NavLink to="/women">
                        <li className="text-black text-xl mx-[3px] mt-1 cursor-pointer hover:text-sky-700">Women</li>
                   </NavLink>
                    </option>
                   </select>
                   
                   </div>

                   <li className="relative">
                      <input
                      type="text"
                      placeholder="what do you like to search?"
                      className="mt-1 ml-3 px-10 py-2 w-[300px] mx-auto rounded-xl text-black  font-semibold bg-black-200 border outline-none"
                      />
                      <AiOutlineSearch className="absolute text-violet-700 top-3 left-5 mx-auto text-[23px]"/>
                   </li>
                </ul>   
            </nav>   
            <div className="mx-auto">
                <NavLink to="/cart">
                    <div className="relative">
                    <AiOutlineShoppingCart className="text-[28px] font-weight-500 mr-5 hover:text-violet-700 cursor-pointer"/>
                   {
                           cart.length > 0 &&
                           <span className='absolute -top-1 right-1 bg-green-600 texr-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>
                             {cart.length}
                           </span>
                        }
                    </div>
                  
                </NavLink>
            </div>
            <div className="flex gap-x-1  ml-15 mx-auto text-white">
                { !isLoggedIn &&
                    <NavLink to="/login">
                    <button className="text-xl mx-[2px]  border border-2px solid px-3 py-2 font-semibold bg-slate-300 rounded-[10px] hover:bg-violet-700">
                    Log IN
                    </button>
                    </NavLink>
                }
                { !isLoggedIn &&
                    <NavLink to="/signup">
                    <button className="text-xl mx-[3px]  border border-2px solid px-3 py-2 font-semibold bg-slate-300  rounded-[10px] hover:bg-violet-700">
                    Sign Up
                    </button>
                    </NavLink>
                }
                { isLoggedIn &&
                    <button 
                    onClick={clickHandler}
                    className="text-xl mx-[3px]  border border-2px solid px-3 py-2 font-semibold bg-slate-300  rounded-[10px] hover:bg-violet-700">
                    Log Out
                    </button>
                }
                { isLoggedIn &&
                    <NavLink to="/profile">
                    <button className="text-xl mx-[3px]  border border-2px solid px-3 py-2 font-semibold bg-slate-300  rounded-[10px] hover:bg-violet-700">
                    Profile
                    </button>
                    </NavLink>
                }
            </div>
                     
         </div>
    );
}

export default Navbar;