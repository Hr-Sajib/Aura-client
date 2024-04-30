import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from './Authprovider';
import auth from '../firebase/firebase.config';
import 'animate.css';



const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const navlinks =<>
        <li className='mr-1'><NavLink to="/">Home</NavLink></li>
        <li className='mr-1'><NavLink to="/art&crafts">Art & Crafts</NavLink></li>
        <li className='mr-1'><NavLink to="/addarts">Add Arts</NavLink></li>
        <li className=''><NavLink to={`/myarts/${user?.email}`}>My Arts</NavLink></li>
    </>


    const handleLogOut=()=>{
        logOut(auth)
        .then(() => {
            console.log('signed out')
        }).catch((error) => {
            console.log(error.message);
        });
    }

    const navigate = useNavigate();

    return (
        <div>
            <div className="navbar bg-base-100 pt-10 pb-5 px-16 animate__animated animate__fadeInDown">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                    </div>
                    <div onClick={()=>navigate('/')}><p className="btn btn-ghost text-3xl relative top-1">Aura</p></div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                    { user &&
                        <div className="lg:flex hidden px-3 gap-1">
                            <div>
                                <p className="font-bold text-right">{user.displayName}</p>
                                <p className="text-[14px] text-right">{user.email}</p>
                            </div>
                            <div className="tooltip" data-tip={user.displayName}><img className="w-10 rounded-full" src={user.photoURL} alt="" /></div>

                        </div>}
                    </div>
                    { user ? <button onClick={handleLogOut} className="bg-black text-white px-3 py-2 rounded-lg">Logout</button> :
                     <Link to="/login"><button className="bg-black text-white px-3 py-2 rounded-lg">Login</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;