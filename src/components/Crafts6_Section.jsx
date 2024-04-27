import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Crafts6_Section = ({sixArts}) => {
    useEffect(()=>{
        Aos.init();
      },[])
    


    return (
        <div className='grid grid-cols-3 mt-20 mx-20  items-center justify-center  p-3 gap-3'>
            {
            
                sixArts.map(art=><Art key={art._id} art={art}></Art>)
            
            }
        </div>
    );
};

export default Crafts6_Section;


const Art = ({art})=>{



    return(
        <div data-aos="zoom-in" className='p-5 rounded-xl bg-gray-100'>
            <img className='max-w-[500px] h-[500px] rounded-2xl' src={art.imageurl} alt="" />
            <div>
                <p className='dancing-script-font text-3xl my-2'>{art.name}</p>
                <p className="">{art.category}</p>
            </div>
            <div className="flex justify-end">
                <Link to={`art/${art._id}`}><button className="bg-[#d6d3d1] text-black px-5 py-2 rounded-xl hover:bg-gray-200">Details</button></Link>
            </div>
        </div>
    )
}