import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from './Authprovider';
import Aos from "aos";
import 'aos/dist/aos.css'


const CartPage = () => {

    const {cart, user} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire("Payment Progressing");
        setFormData({
            name: '',
            phoneNumber: '',
            email: '',
            address: '',
            paymentOption: ''
        });
    };

    const handleOrderAdd =(e, currentTime)=>{
        e.preventDefault();
        const buyerEmail = user?.email;
        
        const name = e.target.name.value;
        const phoneNumber = e.target.phoneNumber.value;
        const address = e.target.address.value;
        const paymentOption = e.target.paymentOption.value;
        const orderTime = currentTime.toLocaleString();
        
        const newOrder = {buyer: name, buyerEmail,address,phoneNumber,paymentOption,orderTime,  cart};

        // send data to server
        fetch('http://localhost:5500/addOrder',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newOrder)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            Swal.fire("Proceeding Order");
        })

    }

    useEffect(()=>{
        Aos.init();
      },[])

    return (
        <div data-aos="zoom-in" className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-4">Cart Items</h2>
            <ul className="mb-4 bg-blue-100 rounded-xl px-3">
                {cart.map((item) => (
                    <li key={item.id} className="border-b border-gray-200 py-2">
                        <div className="flex justify-between items-center">
                            <div className="text-lg">{item.name}</div>
                            <div className="text-lg font-semibold">${item.price}</div>
                        </div>
                    </li>
                ))}
            </ul>
            <h2 className="text-3xl font-semibold mb-4">Enter Your Information</h2>
            <form onSubmit={(e) => handleOrderAdd(e, new Date())} className="max-w-md">
                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Name:</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                        required // Marked as required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Phone Number:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                        required // Marked as required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Email:</label>
                    <input
                        type="email"
                        name="email"
                       
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                        required // Marked as required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Address:</label>
                    <textarea
                        name="address"
                       
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 h-24 resize-none"
                        required // Marked as required
                    ></textarea>
                </div>
                <div className="mb-4 mt-5">
                    <label className="block mb-1 font-semibold">Payment Option:</label>
                    <div className="flex w-[900px]">
                        <label className="mr-4 flex items-center">
                            <input
                                type="radio"
                                name="paymentOption"
                                value="Payment on Delivery"
                                className="mr-2"
                            />
                            <img src="https://i.ibb.co/qLHj55g/Screenshot-2024-05-21-at-1-44-02-PM.png" alt="Payment on Delivery" className="w-12 h-10 mr-2" />
                            Payment on Delivery
                        </label>
                        <label className="mr-4 flex items-center">
                            <input
                                type="radio"
                                name="paymentOption"
                                value="Bkash Payment"
                                
                                className="mr-2"
                            />
                            <img src="https://i.ibb.co/qjjG3Jd/bkash.webp" alt="Bkash Payment" className="w-10 h-10 mr-2" />
                            Bkash Payment
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="paymentOption"
                                value="Bank Payment"
                                
                                className="mr-2"
                            />
                            <img src="https://i.ibb.co/L0pqrWv/card.png" alt="Bank Payment" className="w-10 h-10 mr-2" />
                            Bank Payment
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 mt-5 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Proceed to Pay
                </button>
            </form>
        </div>
    );
};

export default CartPage;
