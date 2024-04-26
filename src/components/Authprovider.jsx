import { useState } from "react";
import auth from '../firebase/firebase.config'
import { useContext } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from "react";
import { useEffect } from "react";
import { LuCurrency } from "react-icons/lu";


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


    // retain user info
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log(currentUser);
        })
        return()=>{
            unsubscribe();
        }
    },[])

    //log out
    const logOut =()=>{
        return signOut(auth);
    }



    const userInfo = {
        user,
        createUser,
        logOut,
        loginUser

    }



    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;