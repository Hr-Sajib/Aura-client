import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';



const Banner = () => {

    const sliderSettings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        arrows: false,

      };
    return (
        <div className="flex gap-3 h-[770px] mx-16 justify-end">
            <div>
                <div className="bg-gray-300 h-[350px] w-[1030px] rounded-xl flex gap-10 animate__animated animate__fadeInLeft">
                    <div>
                        <p className=" text-[120px] text-white"><b className="text-[200px]">T</b>he World of</p>
                        <p className=" text-right text-3xl relative bottom-10">Colors and Imaginations</p>
                    </div>
                    <img className="h-[300px] -rotate-90 relative top-10 left-10 animate__animated animate__zoomIn" src="https://i.ibb.co/KXdtQch/1714125736956.png" alt="" />
                </div>
                <div className="flex justify-between">
                    <div className='w-[600px] h-[403px] mt-3 border rounded-xl'>
                        <div className="slider-container rounded-xl h-[403px] p-3 border border-black flex ">
                            <Slider {...sliderSettings}>
                                
                                <div><img className=" h-[370px]  rounded-xl" src="https://i.ibb.co/hLW1TG0/Frame-2.png" alt="" /></div>
                                <div><img className=" h-[370px]  rounded-xl" src="https://i.ibb.co/r4xrwX4/Frame-1.png" alt="" /></div>
                                <div><img className=" h-[370px]  rounded-xl" src="https://i.ibb.co/HDkXNLH/Frame-3.png" alt="" /></div>
                            
                            </Slider> 
                            <p className=" relative right-[-15px] w-[200px] top-10">A<br/>E <br/>S T H E <br/>T <span className="bg-red-700 rounded-full text-white px-1">I</span> C</p>
                        
                        </div>
                        
                       
                    </div>
                    <img className="w-[415px] h-[405px] rounded-xl mt-3 animate__animated animate__fadeInUp" src="https://i.ibb.co/1s4ycr4/Screenshot-2024-04-26-at-1-00-36-PM.png" alt="" />
                </div>
            </div>
            <div className="flex gap-3">
                <img className="w-[300px] rounded-xl " src="https://i.ibb.co/JdLQYgL/flowerbanner.jpg" alt="" />
                <img className="w-[400px] rounded-xl animate__animated animate__fadeInRight" src="https://i.ibb.co/bRJYTMB/Screenshot-2024-04-26-at-11-24-33-AM.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;

