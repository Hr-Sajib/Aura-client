import { Link, useLoaderData } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";
import Swal from 'sweetalert2'
import { useState } from "react";



const Myarts = () => {
    
    const loadedArts = useLoaderData();

    const [arts, setArts] = useState(loadedArts);

    
    return (
        <div className='grid grid-cols-4 mx-20  items-center justify-center  p-3 gap-3'>
            {
                arts.map(art =><Myart art={art} key={art._id} setArts={setArts} arts={arts}></Myart>)
            }
        </div>
    );
};

export default Myarts;





const Myart =({art, setArts, arts})=>{

    useEffect(()=>{
        Aos.init();
      },[])


    
    //delete handle
    const handleDeleteMyArt=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
            
                fetch(`http://localhost:5500/delete/${id}`,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.deletedCount>0){
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                        });


                        //change UI
                        const remainedArts = arts.filter(art=> art._id!==id);
                        setArts(remainedArts);
            
                }
                })
        
            }
        });

    }




    return(
        <div data-aos="fade-up" className='p-5 rounded-xl bg-gray-100 '>
            <img className='h-[300px] w-full rounded-2xl' src={art.imageurl} alt="" />
            <div>
                <p className='dancing-script-font text-2xl my-2'>{art.name}</p>
                <p className="">{art.category}</p>
            </div>
            <div className="bg-white rounded-xl p-3 my-2">
                <p>Price : <b>{art.price}</b></p>
                <p>Rating : <b>{art.rating}</b></p>
                <p>Customization : <b>{art.customization}</b></p>
                <p>Processing Time : <b>{art.processingTime}</b></p>
                <p>Stock Status : <b>{art.stockStatus}</b></p>
            </div>
            <div className="flex justify-end gap-1">
                <button onClick={()=>handleDeleteMyArt(art._id)} className="bg-red-300 text-black px-5 py-2 rounded-xl hover:bg-red-200">X</button>
                <Link to={`update/${art._id}`}><button className="bg-[#d6d3d1] text-black px-5 py-2 rounded-xl hover:bg-gray-200">Update</button></Link>
            </div>
        </div>
    )
}