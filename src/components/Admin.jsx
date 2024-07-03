import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Aos from "aos";
import Swal from 'sweetalert2'



const Admin = () => {

    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5500/getAllOrders')
        .then(r=>r.json())
        .then(data=>{
            setOrders(data);
        })
    },[])

    const loadedArts = useLoaderData()[0];

    const [arts, setArts] = useState(loadedArts);

    return (
    <>
        <div>
            <p className='text-2xl text-center my-5'>All Orders</p>
            {
                orders.map(order=> <Order order={order} key={order._id}></Order>)
            }

        </div>
        <div>
            <p className='text-2xl text-center my-5'>All Arts and Crafts</p>
        </div>
        <div className='lg:grid grid-cols-4 lg:mx-20  items-center justify-center  p-3 gap-3'>
            {
                arts.map(art =><Myart art={art} key={art._id} setArts={setArts} arts={arts}></Myart>)
            }
        </div>
    
    </>
    
    );
};

export default Admin;



const Myart =({art, setArts, arts})=>{

    useEffect(()=>{
        Aos.init();
      },[])


    //   console.log(art);
    
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
        <div data-aos="fade-up" className='p-5 rounded-xl bg-blue-100 lg:mb-0 mb-3'>
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
                <p>Added by : <b>{art.userEmail}</b></p>
                <p className='mt-2 bg-gray-100 p-2 rounded-xl'>Unique ID : <b>{art._id}</b></p>
            </div>
            <div className="flex justify-end gap-1">
                <button onClick={()=>handleDeleteMyArt(art._id)} className="bg-red-300 text-black px-5 py-2 rounded-xl hover:bg-red-200">X</button>
            </div>
        </div>
    )
}


const Order =({order})=>{

    return(
        <div className='bg-blue-100 mb-2 rounded-xl p-5 mx-24'>
            <p>Order ID <span>{order._id}</span></p>
            <p>Buyer Name <span>{order.buyer}</span></p>
            <p>Buyer Email <span>{order.buyerEmail}</span></p>
            <p>Buyer Phone <span>{order.buyerEmail}</span></p>
        </div>
    )
}