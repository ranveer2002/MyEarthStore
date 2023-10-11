import {useState,useEffect} from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';
import {Link ,useNavigate} from "react-router-dom"
import bg from "../assets/bg.jpg"
const Home = ()=>{
    const navigate = useNavigate();
    const API_URL = "https://fakestoreapi.com/products";
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    async function fetchProductData(){
        setLoading(true);
        try{
            const result = await fetch(API_URL);
            const data = await result.json(); 
            setPosts(data);
        } catch(error){
            setPosts([]);
            throw new Error("error occured in fetching data");
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchProductData();
    },[])
    function clickHandler(){
        navigate("/signup");
    }
    return (
        <div>
            <div className='relative'>
                <div className='absolute top-40 left-20 space-y-3'>
                    <p className='text-green-900 text-9xl font-bold'>EARTH</p>
                    <p className='text-4xl ml-2'>MULTIPURPOSE STORE</p>
                    <button 
                    onClick={clickHandler}
                    className='border solid text-xl px-6 py-1 ml-2 font-semibold shop-now-btn shadow-xl'>Shop Now</button>
                </div>
                <div>
                <img src={bg} loading='lazy' className='w-full mx-auto h-[650px]'/>
                </div>
                
            </div>

            {
                loading ? <Spinner/> :
                posts.length > 0 ? 
                (
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-2xl max-w-6xl mx-auto gap-x-[25px]'>
                        {
                            posts.map((post)=>(
                                <Link to={`/product-details/${post.id}`}>
                                   <Product key={post.id} post={post}/>  
                                </Link>  
                            ))
                        }
                    </div>
                ) :
                <div className='flex justify-center items-center '>
                    <p>No Data Found</p>
                </div>
            }
        </div>
    );
}

export default Home;