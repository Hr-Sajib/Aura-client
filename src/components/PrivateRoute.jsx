import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { Navigate } from "react-router-dom";



const PrivateRoute = ({children}) => {

    const {user, loader } = useContext(AuthContext);

    if(loader){
        return <div className="w-full flex justify-center mt-10"><span className="loading loading-spinner loading-lg"></span></div>
    }



    if(user){
        return children;
    }
    else{
        return <Navigate to="/login"></Navigate>
    }
};

export default PrivateRoute;