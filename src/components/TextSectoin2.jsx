import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const TextSection2 = () => {
    useEffect(()=>{
        Aos.init();
      },[])
    
    return (
        <div>
            <div className='lg:mt-40 mt-10'  >
                <p className='poppins-regular text-gray-500 text-center text-4xl'><b>C</b>ategoeis</p>
                <p  className='text-center'>Click on categories to see pictures of that genre</p>
                <hr data-aos="zoom-in"  className='border-b-1 border-black lg:w-[1000px] w-[300px] my-8 mx-auto '/>
            </div>
        </div>
    );
};

export default TextSection2;