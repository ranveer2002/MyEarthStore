import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import {useNavigate} from 'react-router-dom'
import { useState,useEffect } from "react";

const Cart = ()=>{
    const navigate = useNavigate();
    const {cart} = useSelector((state)=>state);
    const [totalAmount,setTotalAmount] = useState(0);
    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
    },[cart])

    return (
        <div>
                       
            {
                cart.length > 0 ? 
                (
                    <div className="flex flex-row justify-evenly">   
                    <div className="ml-[30px] mt-10 space-y-3">
                            <div className="space-y-3">
                                <div className="text-green-900 font-bold text-xl">Your Cart</div>
                                <p>
                                  <span className="text-lg font-semibold ">Total Items : <span className="text-blue-800 font-semibold">{cart.length}</span></span>
                                </p>
                            </div>

                            <div>
                                 <p className="text-lg font-semibold">Total amount : <span className="text-lg text-green-800 font-semibold">${totalAmount}</span></p>
                                 <button 
                                 onClick={()=>{navigate('/productform')}}
                                  className="mt-3 text-xl font-semibold border border-2px px-5 py-2 bg-violet-400 hover:bg-violet-900 text-white transition all 3s ease rounded-xl">
                                   CheckOut Now
                                 </button>
                             </div>  
                            </div>
            
                           <div>
                                {
                                 cart.map((item,index)=>{
                                 return <CartItem key={item.id} item={item} itemIndex={index}/>
                                 })
                                }
                            </div>      
                    </div> 
                ) : 
                (
                    <div className="flex flex-col justify-center items-center mx-auto mt-60">
                       <h1 className="text-2xl text-blue-900">Cart Empty</h1>
                       <button 
                       onClick={()=>{navigate('/')}}
                       className="mt-3 text-2xl border border-2px px-5 py-2 font-semibold bg-green-300 hover:bg-green-700 rounded-xl">Shop Now</button>
        
                    </div>
                    
                )
            
            }
            
        </div>
    )
}

export default Cart;