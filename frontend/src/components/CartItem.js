import React from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {AiFillDelete} from "react-icons/ai"
import {remove } from '../redux/slice/CartSlice';
import { useNavigate } from "react-router-dom";


const CartItem = ({item,itemIndex})=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const removeFromCart = ()=>{
        dispatch(remove(item.id))
        toast.error("Item removed from cart")
    }
    function clickHandler(){
        navigate("/productform")
    }
    return(
        <div className="flex flex-row mx-auto border-1px-solid shadow-2xl px-3 py-3 w-[800px] max-w-[1200px] mt-[35px] scroll-m-0  hover:scale-105 transition all duration-500 ease-in cursor-pointer"> 
            <div >
            <img src={item.image} alt="" loading='lazy' className="w-[200px] mt-15 "/>
            </div>
            <div className="justify-center items-center ml-10 mt-10">
                <p className="text-xl w-[500px] mt-3">{item.title}</p>
                <p className="w-[500px] mt-3">{item.description}</p>
                <p className="text-green-700 text-[25px] mt-3">${item.price}</p>
                <button 
                onClick={clickHandler}
                className="text-black mt-5 bg-green-300 border border-2px-solid-pink-700 px-7 py-2 rounded-[15px] hover:bg-green-500 ">
                <b>Buy Now</b>
                </button>
            </div>
            
            <AiFillDelete onClick={removeFromCart}
            className=" text-3xl text-red-500 cursor-pointer top-10 right-10"/>
        </div>
    )
}
export default CartItem;