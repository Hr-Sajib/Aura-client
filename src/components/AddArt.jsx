import React from 'react';
import 'animate.css';
import { useContext } from 'react';
import { AuthContext } from './Authprovider';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';




const AddArt = () => {

    const {user} = useContext(AuthContext);

    const handleSubmit=(e)=>{
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

        const userName = user.displayName;
        const userEmail = user.email;


        const newItem ={name, category, price, rating, customization, imageurl, processingTime, description, stockStatus, userName, userEmail};



        // send data to server
        fetch('https://aura-serverside.vercel.app/addart',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newItem)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            Swal.fire("Information Added");
        })



    }


    const navigate = useNavigate();

    const handleBack=()=>{
        navigate(-1);
    }

    return (
        <div className='bg-gray-100 lg:h-[700px] flex flex-col justify-center lg:px-24 mb-20  lg:p-0 p-2 lg:mt-0 lg:mt-28 animate__animated animate__fadeInUp'>
            <form onSubmit={handleSubmit}>
                <div className='lg:flex gap-24 '>
                    <div className='w-[600px] animate__animated animate__fadeInLeft'>
                        <input type="text" name="name" placeholder='Name of Artwork' className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br />
                        <input type="text" name="category" placeholder='Category '   className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br />
                        <input type="number" name="price" placeholder='Price '       className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br />
                        <input type="text" name="rating" placeholder='Rating '       className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br />
                        <input type="text" name="customization" placeholder='Customization' className='bg-gray-100 h-12 border-b-[1px] border-black w-full' />
                    </div>
                    <div className='w-[600px] animate__animated animate__fadeInRight'>
                        <input type="text" name="imageurl" placeholder='Image URL '   className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br />
                        <input type="text" name="processingTime" placeholder='Processing Time '       className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br />
                        <input type="text" name="stockStatus" placeholder='Stock Status '       className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br />
                        <textarea name="description" placeholder="Description" className="bg-gray-100 h-24 mt-6 border-b-[3px] border-gray-400 w-full resize-none p-2" />
                    </div>
                </div>

                <input type="submit" value="Add Item" className='mt-5 bg-gray-600 hover:bg-black text-white px-5 py-2 rounded-xl' />
            </form>
            <div className='flex justify-end'>
                <button onClick={handleBack} className='bg-black hover:bg-gray-700 rounded-xl px-10 py-2 text-gray-200'>Back</button>
            </div>
        </div>
    );
};

export default AddArt;