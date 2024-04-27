import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const TextSection1 = () => {
    useEffect(()=>{
        Aos.init();
      },[])
    
    return (
        <div>
            <div className='mt-40' >
                <p className='poppins-regular text-gray-500 text-center text-4xl'><b>S</b>triking Collections</p>
                <p  className='text-center'>Here all the significant art collections are presented</p>
                <hr data-aos="zoom-in"  className='border-b-1 border-black w-[1000px] my-8 mx-auto '/>
            </div>
        </div>
    );
};

export default TextSection1;