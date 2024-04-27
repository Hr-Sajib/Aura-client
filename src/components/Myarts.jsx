import { useContext } from "react";
import { useLoaderData } from "react-router-dom";

const Myarts = () => {
    
    const arts = useLoaderData();
    console.log(arts);

    
    return (
        <div>
            
        </div>
    );
};

export default Myarts;