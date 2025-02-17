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
  GoogleAuthProvider,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

const SignUp = () => {


  const { createUser } = useContext(AuthContext);

  const [passwordShow, setPasswordShow] = useState(false);

  // sign up with email & password
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photoUrl.value;
    const termsChecked = e.target.checkbox.checked;

    if (
      !/^(?=.*\d)/.test(password)
    ) {
      toast("Use a valied password");
      return;
    }
    else if(!/^(?=.*[a-z])/.test(password)){
      toast("Use a small latter");
      return;
    } 
    else if(!/^(?=.*[A-Z])/.test(password)){
      toast("Use a capital latter");
      return;
    } 
    else if(!/^(?=.*[!@#$%^&*])/.test(password)){
      toast("Use a special character");
      return;
    } 
    else if(!/^(?=.{6,})/.test(password)){
      toast("Password length should be at least 6");
      return;
    } 
    else {
      {
        termsChecked
          ? createUser(auth, email, password)
              .then((res) => {
                console.log(res.user);
  
                e.target.name.value = "";
                e.target.email.value = "";
                e.target.password.value = "";
                e.target.photoUrl.value = "";
                e.target.checkbox.checked = false;

                toast("Registered successfully!");
              })
              .catch((error) => {
                toast(error.message);
                console.log(error);
              })
          : toast("Accept terms and conditions first");
      }
    }
  };


  // github sign in
  const handleSignIpWithGithub = () => {
    const provider = new GithubAuthProvider();

    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
        toast("Signed in successfully!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSignIpWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
        toast("Signed in successfully!");

        //user token
        const user = res.user.email;
        axios.post('http://localhost:5500/jwt', {user} , {withCredentials:true})
        .then(res=>{
          console.log(res.data);
        })

      })

      .catch((error) => {
        console.log(error.message);
      });
  };




  
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <ToastContainer />
      <div className="lg:w-[600px] flex flex-col items-center mb-2 lg:p-5 p-2  pt-10 pb-8 mt-3 rounded-xl bg-gray-200 mx-2 lg:mx-auto animate__animated animate__zoomIn">
        <form onSubmit={handleRegister} action="">
          <input
            className="rounded-lg p-2 lg:w-[500px] w-[320px] "
            required
            name="name"
            type="text"
            placeholder="Name"
          />{" "}
          <br /> <br />
          <input
            className="rounded-lg lg:w-[500px] w-[320px]  p-2"
            required
            name="email"
            type="email"
            placeholder="Email"
          />{" "}
          <br /> <br />
          <input
            className="rounded-lg p-2 lg:w-[500px] w-[320px] "
            required
            name="photoUrl"
            type="text"
            placeholder="Photo Url"
          />{" "}
          <br /> <br />
          <input
            className="rounded-lg p-2 lg:w-[500px] w-[320px] "
            required
            name="password"
            type={passwordShow ? "text" : "password"}
            placeholder="Password"
          />
          <br />
          <div
            onClick={() => setPasswordShow(!passwordShow)}
            className="w-5 flex justify-end relative lg:left-[460px] left-[280px] bottom-[35px]"
          >
            {passwordShow ? <LuEyeOff /> : <LuEye />}
          </div>
          <div className="flex gap-2 mb-2">
            <input type="checkbox" name="checkbox" id="" />
            <p>Accept all terms and conditions</p>
          </div>
          <input
            className="bg-blue-600 rounded-lg text-white w-20 h-10"
            type="submit"
            value="Register"
          />
          <div className="flex justify-between gap-2 bg-gray-100 items-center rounded-lg px-1 pl-3 mt-5">
            <p className="my-3">Do you already have an account?</p>
            <Link to="/login">
              <button className="bg-blue-900 rounded-lg text-white w-20 h-10">
                Login
              </button>
            </Link>
          </div>
          <div >
            <p className="text-center mt-5">Or, sign in with</p>
            <div className='flex gap-3 mt-1 justify-center'>
            <div onClick={handleSignIpWithGoogle} className='flex items-center gap-1 bg-white rounded-lg p-2'><FaGoogle />Google</div>
            <div onClick={handleSignIpWithGithub} className='flex items-center gap-1 bg-white rounded-lg p-2'><FaGithub />Github</div>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
