import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'



const UpdatePage = () => {
    const art = useLoaderData();



    const handleUpdate=(e)=>{
        e.preventDefault();

        const name = e.target.name.value;
        const category = e.target.category.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const customization = e.target.customization.value;
        const imageurl = e.target.imageurl.value;
        const processingTime = e.target.processingTime.value;
        const description = e.target.description.value;
        const stockStatus = e.target.stockStatus.value;



        const newItem ={name, category, price, rating, customization, imageurl, processingTime, description, stockStatus};
    
    
        
        // send updates to server
        fetch(`http://localhost:5500/update/${art._id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newItem)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            Swal.fire("Information Updated");

        })


    }

    const navigate = useNavigate();

    const handleBack=()=>{
        navigate(-1);
    }

    return (
        <div>
            <div className='bg-gray-100 lg:h-[760px] lg:flex flex-col justify-center lg:px-24 px-3 animate__animated animate__fadeInUp'>
            <form onSubmit={handleUpdate}>
                <div className='lg:flex gap-24'>
                    <div className='lg:w-[600px] animate__animated animate__fadeInLeft'>
                        <div className=''>
                            <label className='mt-3' htmlFor=""><b>Name</b></label>
                            <input defaultValue={art.name} type="text" name="name" placeholder='Name of Artwork' className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br />
                        </div>
                        <div className=''>
                            <label className='mt-3' htmlFor=""><b>Category</b></label>
                            <input defaultValue={art.category} type="text" name="category" placeholder='Category '   className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br />
                        </div>
                        <div className=''>
                            <label className='mt-3' htmlFor=""><b>Price</b></label>
                            <input defaultValue={art.price} type="number" name="price" placeholder='Price '       className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br />
                        </div>
                        <div className=''>
                            <label className='mt-3' htmlFor=""><b>Rating</b></label>
                            <input defaultValue={art.rating} type="text" name="rating" placeholder='Rating '       className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br />
                        </div>
                        <div className=''>
                            <label className='mt-3 font-bold' htmlFor="">Customization</label>
                            <input defaultValue={art.customization} type="text" name="customization" placeholder='Customization' className='bg-gray-100 h-12 border-b-[1px] border-black w-full' />
                        </div>
                    </div>
                    <div className='lg:w-[600px] animate__animated animate__fadeInRight'>
                        <div>
                            <label htmlFor=""><b>Image Url</b></label>
                            <input    defaultValue={art.imageurl}   type="text" name="imageurl" placeholder='Image URL '   className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br />
                        </div>
                        <div>
                            <label htmlFor=""><b>Processing Time</b></label>
                            <input    defaultValue={art.processingTime}   type="text" name="processingTime" placeholder='Processing Time '       className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br /> 
                        </div>
                        <div>
                            <label htmlFor=""><b>Stock Status</b></label>
                            <input    defaultValue={art.stockStatus}   type="text" name="stockStatus" placeholder='Stock Status '       className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br />
                        </div>
                        <div className='mt-6'>
                            <label htmlFor=""><b>Description</b></label>
                            <textarea defaultValue={art.description} name="description" placeholder="Description" className="bg-gray-100 h-24 mt-6 border-b-[3px] border-gray-400 w-full resize-none p-2" />
                        </div>
                    </div>
                </div>

                <input type="submit" value="Update" className='mt-5 bg-gray-600 hover:bg-black text-white px-5 py-2 rounded-xl' />
            </form>
            <div className='flex justify-end'>
                <button onClick={handleBack} className='bg-black hover:bg-gray-700 rounded-xl px-10 py-2 text-gray-200'>Back</button>
            </div>
        </div>
        </div>
    );
};

export default UpdatePage;