import { Link } from "react-router-dom";

const Categories = ({categories}) => {

    let categoriesObjArray = [
        {
            name: 'Landscape Painting',
            categoryImage : 'https://i.ibb.co/YdmHmWh/landscape-Icon.jpg'
        },
        {
            name: 'Portrait Drawing',
            categoryImage : 'https://i.ibb.co/8n3xsvW/Portrait-Icon.jpg'
        },
        {
            name: 'Watercolour Painting',
            categoryImage : 'https://i.ibb.co/LnMj385/Watercolor-Icon.png'
        },
        {
            name: 'Oil Painting',
            categoryImage : 'https://i.ibb.co/zb947Ly/Oilpaint-icon.jpg'
        },
        {
            name: 'Charcoal Sketching',
            categoryImage : 'https://i.ibb.co/v32d7Wh/Charcoal-sketch-Icon.jpg'
        },
        {
            name: 'Cartoon Drawing',
            categoryImage : 'https://i.ibb.co/84cvPvC/cartoon-drawing-icon.jpg'
        },
    ];
    



    fetch('http://localhost:5500/postCategories',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(categoriesObjArray)
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data);
    })






    return (
        <div >
            
                <div className="lg:grid grid-cols-4 lg:mx-28 mx-2 gap-5">
                    {
                        categories.map(category => <Category key={category._id} category={category}></Category>)
                    }
                </div>
           

        </div>
    );
};


export default Categories;






const Category =({category})=>{


    return(
        <Link to={`categoryItems/${category.name}`}>
            <div className="border p-5 rounded-xl lg:mb-0 mb-2">
                <img className="h-56 w-full rounded-xl mb-4" src={category.categoryImage} alt="" />
                <p>{category.name}</p>
            </div>
        </Link>

    )
}


