import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from '../redux/slice/CartSlice';
import  toast  from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ProductFullPage = (props)=>{
    const navigate = useNavigate();
    const {id} = useParams();
    console.log("id",id);
    const url = `https://fakestoreapi.com/products/${id}`
    console.log(url);
    const [post,setPost] =useState({});
    const fetchData =  async ()=>{
       const result = await fetch(url);
       const data = await result.json();
    //    const resultData = [];
    
    //    resultData.push({
    //        image:data.image,
    //        title: data.title,
    //        description: data.description,
    //        price: data.price,
    //        id: data.id,
    //    })
       setPost(data);
    } 
    
    useEffect(()=>{
        fetchData();
    },[])

    console.log("post data",post);

    const {cart} = useSelector((state)=>state);
   const dispatch = useDispatch();
   const addToCart = ()=>{
      dispatch(add(post));
      toast.success("Item added to cart");
      navigate("/cart");
   }
   const removeFromCart = ()=>{
      dispatch(remove(post));
      
      toast.error("Item removed to cart")
   }
   function clickHandler(){
      navigate("/productform")
  }
    return(
        <div className="flex justify-center items-center mt-10 mx-auto px-20 py-3 w-[1100px] h-[500px] rounded-xl shadow-2xl overflow-x-hidden">
            <div className="h-[300px] mr-1">
            <img className= 'w-full h-full rounded-xl' src={post.image} alt=""/>
           </div>
           <div className="ml-20">
           <div>
            <p className="text-green-700 font-semibold text-[25px] text-left truncate w-[500px] -mt-25">{post.title}</p>
           </div>
           <div className="mt-2">
            <p className="text-gray-400 w-[400px] font-normal text-[15px] text-left">{post.description}</p>
           </div>
           
           <div className="space-x-12 justify-between items-center">
            <p className="text-green-600 text-lg font-semibold gap-12 items-center w-full mt-4">${post.price}</p>
           </div>
           <div className="mt-2">
           {
               cart.some((p)=> p.id === post.id) ?
               (<button 
               className="text-gray-700 border-2 border-gray-700 mt-4 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 
               hover:text-white transition duration-300 ease-in"   
               onClick={removeFromCart}>
                  Remove Item
               </button>) :
               ( 
           <button 
           onClick={addToCart}
           className="text-xl font-bold text-green-600 bg-green-150  px-3 py-1 mx-auto border rounded-lg shadow-xl outline-none hover:bg-green-950 transition all 3s ease-in">
            Add To Cart
           </button>)
           }
           </div>
          <button onClick={clickHandler}
          className=" flex -mt-10 text-xl font-bold text-green-600 bg-green-150  px-3 py-1 mx-auto border rounded-lg shadow-xl outline-none hover:bg-green-950 transition all 3s ease-in">
            Buy Now
          </button>
           </div> 
        </div>
    );
}

export default ProductFullPage;