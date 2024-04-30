import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Crafts6_Section from './Crafts6_Section';
import TextSection1 from './TextSection1';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Categories from './Categories';
import TextSection2 from './TextSectoin2';



const Home = () => {

    //load all arts 
    const allarts_categories = useLoaderData();

    const allarts = allarts_categories[0];
    const categories = allarts_categories[1];

    //slice for crafts section
    const craftarts = allarts.slice(0,6);

    useEffect(()=>{
        Aos.init();
      },[])


    return (
        <div className=''>
            <Banner/>
            <TextSection1/>
            <Crafts6_Section sixArts={craftarts}/>
            <TextSection2/>
            <Categories categories={categories}/>
            
            {/* extra sect 1 */}
            <div className='mx-[115px] mt-40 flex justify-between'>
                <div className='w-[29.8%]'>
                    <p data-aos="fade-right" className='border-2 border-black poppins-semibold text-gray-400 text-[140px]'>Sketch</p>
                    <p data-aos="fade-up" className='mt-1 poppins-regular'>Sketching is a fundamental artistic practice that involves creating rough or preliminary drawings to explore ideas, concepts, or compositions. It serves as a means of visual communication, allowing artists to convey their thoughts and visions through simple lines, shapes, and forms. Sketching can be done using various tools such as pencils, pens, charcoal, or digital tablets, offering artists flexibility in their approach. It is often used as a starting point for more polished artworks or as a standalone form of artistic expression. Sketching encourages creativity, observation, and experimentation, making it an essential skill for artists across different disciplines and levels of expertise.</p>
                </div>
                <img data-aos="fade-left" className='w-[70%] border border-black' src="https://i.ibb.co/tLn9y6r/sectoin-sketch.png" alt="" />
            </div>

            {/* extra sect 2 */}
            <div className=' h-[700px] mx-[115px] my-48 flex'>
                <div data-aos="fade-right" className=' my-1 flex flex-col justify-between'>
                    <img className='h-[170px] w-[180px] rounded-xl' src="https://i.ibb.co/7W99P9H/Screenshot-2024-04-28-at-10-50-56-PM.png" alt="" />
                    <img className='h-[170px] w-[180px] rounded-xl' src="https://i.ibb.co/9TYkL9q/Screenshot-2024-04-28-at-10-52-01-PM.png" alt="" />
                    <img className='h-[170px] w-[180px] rounded-xl' src="https://i.ibb.co/tD2SQvW/14945463-des06.jpg" alt="" />
                    <img className='h-[170px] w-[180px] rounded-xl' src="https://i.ibb.co/FDHdGyz/23673346-6817267.jpg" alt="" />

                </div>
                <div data-aos="fade-left" className='h-full w-full '>
                    <p className='poppins-semibold text-7xl text-right border-2 rounded-xl mt-2 ml-1 h-[160px]'>ABOUT US</p>
                    <p className='ml-52 mt-3  text-right'>At our gallery, we are dedicated to showcasing diverse works from both emerging talents and established artists, ensuring a dynamic and enriching experience for all. Whether you're a seasoned collector or a curious enthusiast, our doors are open to you, offering a sanctuary where art transcends boundaries and inspires the soul.</p>
                    <div data-aos="fade-up" className='flex justify-end'>
                        <div className='border-2 border-black mb-[1px] w-full mt-[20px] mx-2 flex justify-center'>
                            <img className='h-[390px]' src="https://i.ibb.co/BLy0JmT/man.jpg" alt="" />
                        </div>
                        <img className='h-[400px] mt-4 ' src="https://i.ibb.co/bvLxgzr/Screenshot-2024-04-28-at-9-08-20-PM.png" alt="" />
                    </div>
                </div>
                
            </div>
            

          
        </div>
    );
};

export default Home;

