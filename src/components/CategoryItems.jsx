import { useLoaderData, useParams } from "react-router-dom";

const CategoryItems = () => {
    const arts = (useLoaderData()[0]);

    const categoryName = useParams().categoryName;
    
    const categoryItemsList = arts.filter(art=> art.category === categoryName);
    


    return (
        <div className="">
            {
                categoryItemsList.map(categoryItem=> <CategoryItem categoryItem={categoryItem}/>)
            }
        </div>
    );
};

export default CategoryItems;






const CategoryItem =({categoryItem})=>{

    return(
        <div>
                <p>{categoryItem.name}</p>
        </div>
    )
}