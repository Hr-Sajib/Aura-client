import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import 'animate.css';
import {
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import auth from "../firebase/firebase.config";








const LogIn = () => {

    
    const {loginUser} = useContext(AuthContext);

    const handleLogin=(e)=>{

        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        e.target.email.value = '';
        e.target.password.value = '';


        loginUser(auth, email, password)
        .then(res => {
        console.log(res.user);
        toast('Logged in successfully!')
        
        e.target.email.value = "";
        e.target.password.value = "";
        })
        .catch((error) => {
        toast(error.message);
        });

    }


  const handleSignIpWithGithub = () => {
    const provider = new GithubAuthProvider();

    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
        toast('Signed in successfully!')

      })
      .catch((error) => {
        console.log(error.message);
      });
  };

    const [passwordShow, setPasswordShow] = useState(false);

    return (
        <div>
          
      <Helmet>
          <title>Login</title>
      </Helmet>
        <ToastContainer/>
        <div>
        <div className='lg:w-[600px] flex flex-col items-center mb-2 pt-10 lg:p-5 p-3 pb-8 mx-2 lg:mt-20 rounded-xl bg-blue-200 lg:mx-auto animate__animated animate__zoomIn'>
          <form onSubmit={handleLogin} action="">
            <input className='rounded-lg p-2 lg:w-[500px] w-[320px]' type="email" name='email' required placeholder='Email' /> <br /> <br />
            <input className='rounded-lg p-2 lg:w-[500px] w-[320px]' 
              name='password' 
              type={ passwordShow ? 'text' : 'password' }
              placeholder='Password' 
              required/> <br />
            
            <div onClick={()=>setPasswordShow(!passwordShow)} className='w-5 flex justify-end relative lg:left-[460px] left-[280px] lg:bottom-[35px] bottom-[35px]'>
                { passwordShow ? <LuEyeOff/> : <LuEye/> }
            </div>          
            
            <input className='bg-blue-600 rounded-lg text-white w-20 h-10' type="submit" value="Login" />
            
            <div className='flex justify-between gap-2 bg-gray-100 items-center rounded-lg px-1 pl-3 mt-5'>
              <p className='my-3'>Not have an account yet?</p>
              <Link to="/signup"><button className='bg-blue-900 rounded-lg text-white w-20 h-10'>Register</button></Link>
            </div>
          </form>
          <p className='mt-3 '>Or, Sign in with</p>
          <div className='flex gap-3 mt-1'>
            <div onClick={handleSignIpWithGithub} className='flex items-center gap-1 bg-white rounded-lg p-2'><FaGithub />Github</div>
          </div>
        </div>
      </div>
      </div>
    );
};

export default LogIn;