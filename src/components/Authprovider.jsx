import { useState } from "react";
import auth from '../firebase/firebase.config'
import { useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";


export const AuthContext = createContext(null);

const Authprovider = ({children}) => {

    const [user, setUser] = useState(null);


    // sign up
    const createUser=(auth, email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }


    //login
    const loginUser=(auth, email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }





    const userInfo = {
        user,
        createUser,
        setUser

    }



    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;