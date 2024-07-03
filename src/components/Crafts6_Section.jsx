import Aos from "aos";
import 'aos/dist/aos.css'
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import Swal from 'sweetalert2'

const Crafts6_Section = ({sixArts}) => {

    const {cart, setcart} = useContext(AuthContext);

    const handleAddToCart = (art)=>{
        const newcart = [...cart, art];
        setcart(newcart);
        Swal.fire("Added to cart");
        document.getElementById(`id${art._id}`).classList.add('hidden');
    }





    useEffect(()=>{
        Aos.init();
      },[])
    return (
        <div className='lg:grid grid-cols-3 lg:mt-20 lg:mx-20 mx-2  items-center justify-center  lg:p-3 gap-3'>
            {
            
                sixArts.map(art=><Art key={art._id} art={art} handleAddToCart={handleAddToCart}></Art>)
            
            }
        </div>
    );
};

export default Crafts6_Section;


const Art = ({art, handleAddToCart})=>{



    return(
        <div data-aos="zoom-in" className='lg:p-5 p-2 rounded-xl bg-gray-100 lg:mb-0 mb-3'>
            <img className='lg:w-[500px] lg:h-[500px] h-[300px] w-[400px] rounded-2xl' src={art.imageurl} alt="" />
            <div>
                <p className='dancing-script-font text-3xl my-2'>{art.name}</p>
                <p className="">{art.category}</p>
            </div>
            <div className="flex justify-end">
                <Link to={`art/${art._id}`}><button className="bg-[#d6d3d1] text-black px-5 py-2 rounded-xl hover:bg-gray-200">Details</button></Link>
                <button id={`id${art._id}`} onClick={()=>handleAddToCart(art)} className="bg-blue-200 hover:bg-blue-100 ml-1 text-black px-5 py-2 rounded-xl">Add to cart</button>
            </div>
        </div>
    )
}