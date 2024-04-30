import { Link, NavLink, useLoaderData } from "react-router-dom";
import 'animate.css';
import { useNavigate } from 'react-router-dom';



const ArtCrafts = () => {



    const allarts_categories = useLoaderData();
    
    const allarts = allarts_categories[0];
    
    return (
        <div>
            <div className="overflow-x-auto mr-20 ml-28 mt-5 animate__animated animate__fadeInUp">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>

                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock Status</th>
                        <th></th>

                    </tr>
                    </thead>
                    <tbody>
                        {
                            allarts.map(art=><ArtRow key={art._id} art={art}></ArtRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ArtCrafts;




const ArtRow=({art})=>{

    const navigate = useNavigate();    

    const handleDetailsClicked=(id)=>{
        navigate(`art/${id}`);
    }

    return(
            <tr>
                <td>{art.name}</td>
                <td>{art.category}</td>
                <td>{art.price}</td>
                <td>{art.stockStatus}</td>
                <td>
                    <button onClick={()=>handleDetailsClicked(art._id)} className="bg-[#d6d3d1] text-black px-5 py-2 rounded-xl hover:bg-gray-200">Details</button>
                </td>
            </tr>
    )
}