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
        <div className="lg:flex gap-3 lg:h-[770px] lg:mx-16 mx-2 justify-end">
            <div>

                <div className="bg-gray-300 lg:h-[350px] h-[200px] lg:w-[1030px] rounded-xl flex gap-10 animate__animated animate__fadeInLeft">
                    <div className="lg:flex">
                        <div>
                            <p className=" lg:text-[120px] text-5xl text-white"><b className="lg:text-[200px]">T</b>he World of</p>
                            <p className=" text-right lg:text-3xl relative ">Colors and Imagination</p>
                        </div>
                        <img className="h-[150px] lg:h-[300px] -rotate-90 relative lg:top-10  bottom-5 lg:left-10 left-20 animate__animated animate__zoomIn" src="https://i.ibb.co/KXdtQch/1714125736956.png" alt="" />
                    </div>
                </div>

                <div className="lg:flex justify-between">
                    <div className='lg:w-[600px] lg:h-[403px] h-[200px] mt-3 lg:border rounded-xl'>
                        <div className="slider-container rounded-xl lg:h-[403px] h-[230px] p-3 border border-black flex ">
                            <Slider {...sliderSettings}>
                                
                                <div><img className=" lg:h-[370px] lg:w-full w-[320px]  rounded-xl" src="https://i.ibb.co/hLW1TG0/Frame-2.png" alt="" /></div>
                                <div><img className=" lg:h-[370px] lg:w-full w-[320px]  rounded-xl" src="https://i.ibb.co/r4xrwX4/Frame-1.png" alt="" /></div>
                                <div><img className=" lg:h-[370px] lg:w-full w-[320px]  rounded-xl" src="https://i.ibb.co/HDkXNLH/Frame-3.png" alt="" /></div>
                            
                            </Slider>                         
                        </div>
                        
                       
                    </div>
                    <img className="w-[415px] h-[405px] lg:flex hidden rounded-xl mt-3 animate__animated animate__fadeInUp" src="https://i.ibb.co/1s4ycr4/Screenshot-2024-04-26-at-1-00-36-PM.png" alt="" />
                </div>
            </div>
            <div className="flex gap-3">
                <img className="w-[300px] lg:flex hidden rounded-xl " src="https://i.ibb.co/JdLQYgL/flowerbanner.jpg" alt="" />
                <img className="w-[400px] lg:flex hidden rounded-xl animate__animated animate__fadeInRight" src="https://i.ibb.co/bRJYTMB/Screenshot-2024-04-26-at-11-24-33-AM.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;

