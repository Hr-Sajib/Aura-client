import React from 'react';

const AddArt = () => {
    return (
        <div className='bg-gray-100 h-[700px] flex flex-col justify-center px-24'>
            <form>
                <div className='flex gap-24 '>
                    <div className='w-[600px] '>
                        <input type="text" name="name" placeholder='Name of Artwork' className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br />
                        <input type="text" name="category" placeholder='Category '   className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br />
                        <input type="number" name="price" placeholder='Price '       className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br />
                        <input type="text" name="rating" placeholder='Rating '       className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br />
                        <input type="text" name="customization" placeholder='Customization' className='bg-gray-100 h-12 border-b-[1px] border-black w-full' />
                    </div>
                    <div className='w-[600px] '>
                        <input type="text" name="imageurl" placeholder='Image URL '   className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br />
                        <input type="text" name="processingTime" placeholder='Processing Time '       className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br />
                        <input type="text" name="stockStatus" placeholder='Stock Status '       className='bg-gray-100 h-12 border-b-[1px] border-black w-full' /> <br /><br />
                        <textarea name="description" placeholder="Description" className="bg-gray-100 h-24 mt-6 border rounded-xl border-b-[1px] border-gray-400 w-full resize-none p-2" />
                    </div>
                </div>

                <input type="submit" value="Add Item" className='mt-5 bg-gray-600 hover:bg-black text-white px-5 py-1 rounded-xl' />
            </form>
        </div>
    );
};

export default AddArt;