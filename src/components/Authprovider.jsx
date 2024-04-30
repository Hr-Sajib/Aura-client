import { useState } from "react";
import auth from '../firebase/firebase.config'
import { useContext } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from "react";
import { useEffect } from "react";


export const AuthContext = createContext(null);

const Authprovider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);


    // sign up
    const createUser=(auth, email, password)=>{
       setLoader(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }


    //login
    const loginUser=(auth, email, password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    // retain user info
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log(currentUser);
            setLoader(false);
        })
        return()=>{
            unsubscribe();
        }
    },[])

    //log out
    const logOut =()=>{
        setLoader(true);
        return signOut(auth);
    }



    const userInfo = {
        user,
        createUser,
        logOut,
        loginUser,
        loader,

    }



    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;