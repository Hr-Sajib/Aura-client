import { useLoaderData, useNavigate } from "react-router-dom";
import { PiStarFill } from "react-icons/pi";
import 'animate.css';


const ArtDetails = () => {

    const art = useLoaderData();

    const navigate = useNavigate();

    const handleBack=()=>{
        navigate(-1);
    }


    return (
        <div className="bg-gray-100 lg:h-[750px] lg:py-10 lg:px-20 px-2 lg:flex items-center gap-10 animate__animated animate__fadeInUp">
            <div className="animate__animated animate__fadeInLeft">
                <img className="lg:h-[600px] rounded-xl" src={art.imageurl} alt="" />
            </div>
            <div className=" h-full w-full animate__animated animate__backInRight">
                <p className='dancing-script-font text-4xl my-2'>{art.name}</p>
                <p className="mt-1">{art.description}</p>
                <p className="bg-blue-200 w-48 mt-1 text-center rounded-full text-blue-900 ">{art.category}</p>

                <div className="my-3">
                    <div className="flex items-center gap-1 mb-1">
                        <PiStarFill className="text-red-600" />
                        <p>{art.rating}</p>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 lg:w-[600px] mt-10">
                    <div className="border border-black rounded-xl w-36 p-3">
                        <p className=" text-xl">Price ${art.price}</p>
                        <p>{art.stockStatus}</p>
                    </div>
                    <p className="mt-2">Customization Availability : {art.customization}</p>
                    <p className="mt-2">Processing Time : {art.processingTime}</p>
                    <div>
                        
                    </div>
                </div>
                <p className="bg-white rounded-lg lg:w-[600px] py-1 px-3 mt-3">Product ID : {art._id}</p>
                <div className="border rounded-xl lg:w-[800px] lg:p-5 p-1 mt-3">
                    <p>Username : {art.userName}</p>
                    <p>Username : {art.userEmail}</p>
                </div>
            </div>
            <div className='flex items-end h-full '>
                <button onClick={handleBack} className='bg-black hover:bg-gray-700 rounded-xl h-10 px-10 py-2 text-gray-200'>Back</button>
            </div>
        </div>
    );
};

export default ArtDetails;