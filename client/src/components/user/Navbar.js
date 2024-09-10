import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    let token = localStorage.getItem("userToken");
    
    
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        
    };

    
    const navigate=useNavigate();
    const logout = ()=>{
        localStorage.removeItem("userToken");
        localStorage.removeItem("username");
        token=null;
        navigate('/')
    }

    return (
        <nav className="bg-green-600">
            <div className="flex justify-between items-center px-4 py-2">
                <div className="text-gray-200 font-bold text-xl">
                    Logo
                </div>
                <div className="flex space-x-4 text-gray-200 hidden md:flex">
                    <Link className="font-semibold" to="/">Home</Link>
                    <Link className="font-semibold" to="/about">About</Link>
                    <Link className="font-semibold" to="/service">Services</Link>
                    <Link className="font-semibold" to="#">Contact</Link>
                </div>
                {
                    !token ? (<div className="flex space-x-4 hidden md:flex">
                    <Link className="font-semibold bg-gray-200 text-gray-800 px-3 py-1 rounded" to="/login">Login</Link>
                    <Link className="font-semibold bg-blue-700 text-gray-100 px-3 py-1 rounded" to="/register">Register</Link>
                </div>)
                    :
                    (<div className="flex space-x-4 hidden md:flex">
                        <div class="text-md font-semibold text-gray-200 "><Link to="/profile">Welcome ! {localStorage.getItem('username')}</Link></div>
                    <button className="font-semibold bg-blue-700 text-gray-100 px-3 py-1 rounded"  onClick={logout}>Logout</button>
                    </div>)
                }
               
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-200 focus:outline-none">
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden flex flex-col space-y-2 text-center bg-green-700 text-gray-200 py-2 fixed w-full">
                    <Link className="font-semibold" to="/users/home" onClick={toggleMenu}>Home</Link>
                    <Link className="font-semibold" to="#" onClick={toggleMenu}>About</Link>
                    <Link className="font-semibold" to="#" onClick={toggleMenu}>Services</Link>
                    <Link className="font-semibold" to="#" onClick={toggleMenu}>Contact</Link>
                    <Link className="font-semibold bg-gray-200 text-gray-800 px-3 py-1 rounded mx-2" to="/login" onClick={toggleMenu}>Login</Link>
                    <Link className="font-semibold bg-blue-700 text-gray-100 px-3 py-1 rounded mx-2" to="/register" onClick={toggleMenu}>Register</Link>
                </div>
            )}
        </nav>
    );
}