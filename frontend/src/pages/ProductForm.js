
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const ProductForm = ()=>{
    const navigate = useNavigate();
    const[customerData,setCustomerData] = useState({
        fullname:"",
        phone:"",
        address:""
    });
    function changeHandler(event){
        setCustomerData((prevData)=>(
            {
              ...prevData,
              [event.target.name]:event.target.value
            }
           ))
    };

    function submitHandler(){
       toast.success("Congratulations! you've ordered the product");
       navigate("/");
    }
    return(
        <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center itmes-center w-[390px] h-[500px] gap-y-8 mt-6 mx-auto px-5 py-10 border border-2px solid rounded-[15px] bg-slate-100">
            <h1 className="text-green-700 text-xl font-bold ml-9">Customer Details for Product</h1>
            <label className="text-green-950 font-bold"> Full Name
                <input
                required
                type="text"
                name="fullname"
                onChange={changeHandler}
                value={customerData.name}
                placeholder="Enter Name Here"
                className="bg-richblack-800 justify-center items-center rounded-[0.5rem] font-semibold text-richblack-5 w-full px-[8px] py-[12px] outline-none mt-2"
               />
            </label>
            <label className="text-green-950 font-bold"> Phone Number
               <input
               required
               type="tel"
               name="phone"
               onChange={changeHandler}
               value={customerData.phone}
               placeholder="Enter Phome Number"
               className="bg-richblack-800 justify-center items-center rounded-[0.5rem] font-semibold text-richblack-5 w-full px-[8px] py-[12px] outline-none mt-2"
               />
            </label>
            <label className="text-green-950 font-bold"> Address 
               <input
               required
               type="text"
               name="address"
               onChange={changeHandler}
               value={customerData.address}
               placeholder="Enter address"
               className="bg-richblack-800 justify-center items-center rounded-[0.5rem] font-semibold text-richblack-5 w-full px-[8px] py-[12px] outline-none mt-2"
               />
            </label>
               <button
               className="bg-green-300 mt-[20px] w-full rounded-[8px] font-bold text-richblack-900 px-[12px] py-[8px] hover:bg-green-500 transition all 1s ease">
                 Proceed To Buy
               </button>
        </form>
    );
}

export default ProductForm;