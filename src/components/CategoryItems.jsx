import { Link, useLoaderData, useParams } from "react-router-dom";

const CategoryItems = () => {
    const arts = (useLoaderData()[0]);

    const categoryName = useParams().categoryName;
    
    const categoryItemsList = arts.filter(art=> art.category === categoryName);
    
    console.log(categoryItemsList.length)

    if(categoryItemsList.length > 0){
        return (

            <div className="lg:grid grid-cols-3 gap-3 lg:mx-24 mx-2 mb-20">
                {
                    categoryItemsList.map(categoryItem=> <CategoryItem categoryItem={categoryItem}/>)
                }
            </div>
        );
    }
    else{
        return(
            <p className="text-center my-20 text-red-800 font-bold">No Items Added in this category</p>
        )
    }
    
};

export default CategoryItems;






const CategoryItem =({categoryItem})=>{

    return(
        <div className='lg:p-5 p-2 rounded-xl bg-gray-100 lg:mb-0 mb-3'>
            <img className='lg:w-[500px] lg:h-[500px] rounded-2xl' src={categoryItem.imageurl} alt="" />
            <div>
                <p className='dancing-script-font text-3xl my-2'>{categoryItem.name}</p>
                <p className="">{categoryItem.category}</p>
            </div>
            <div className="bg-white rounded-xl p-3 my-3">
                <p>{categoryItem.description}</p>
            </div>
            <div className="bg-white rounded-xl p-3 my-3">
                <p>Price : ${categoryItem.price}</p>
                <p>Rating : {categoryItem.rating}</p>
                <p>Processing Time : {categoryItem.processingTime}</p>
            </div>
            <div className="flex justify-end">
                <Link to={`/art&crafts/art/${categoryItem._id}`}><button className="bg-[#d6d3d1] text-black px-5 py-2 rounded-xl hover:bg-gray-200">Details</button></Link>
            </div>
        </div>
    )
}