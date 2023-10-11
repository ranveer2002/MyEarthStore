
const Product = ({post})=>{

   return(

      <div
      className="flex flex-col justify-between items-center  hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-2xl overflow-x-hidden cursor-pointer">
           <div>
            <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
           </div>
           <div>
            <p className="text-gray-400 w-40 font-normal text-[10px] text-left">{post.description.split(' ').slice(0,10).join(" ")+"..."}</p>
           </div>
           <div className="h-[170px]">
            <img className= 'w-full h-full' src={post.image} alt=""/>
           </div>

           <div className="flex gap-x-12 justify-between items-center">
           <div>
            <p className="text-green-600 font-semibold gap-12 items-center w-full mt-4">${post.price}</p>
           </div>
            </div>
          
           
            
      </div>
   );
}
export default  Product;