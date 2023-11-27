import React from 'react';
import icon from './icon.png';
import { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
// import menu from './menu.svg';
import hamburger from './menu.svg';
import './Navbar.css';


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <div>
            <div className='top-0 w-full h-16 items-center flex justify-center space-x-4 text-textColor min-w-[300px] my-4'>
                {/* <NavLink class='px-8' to='/'>
                    <img src={icon} width='50'/>
                </NavLink> */}
                {/* <div className='menu-icon' onClick={handleShowNavbar}>
                    <img src={hamburger} width='40'></img>
                </div> */}
                <div class={`${showNavbar && 'active'}`}>
                    <ul className='justify-between flex list-none space-x-8'>
                        <li>
                            <NavLink to='/' activestyle><div className='rounded-full border border-textColor py-1 px-2 border-opacity-50'>Home</div></NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' activestyle><div className='rounded-full border border-textColor py-1 px-2 border-opacity-50'>About</div></NavLink>
                        </li>
                        <li>
                            <NavLink to='/blog' activestyle><div className='rounded-full border border-textColor py-1 px-2 border-opacity-50'>Blog</div></NavLink>
                        </li>
                        <li>
                            <NavLink to='/projects' activestyle><div className='rounded-full border border-textColor py-1 px-2 border-opacity-50'>Projects</div></NavLink>
                        </li>
                        {/* <li>
                            <NavLink to='/contact' activestyle>Contact</NavLink>
                        </li> */}
                    </ul>
                    
                    {/* </div> */}
                </div>
            </div>  
        {/* <div class='fade1'></div> */}
        {/* <div class='fade'></div> */}
        </div>
    )
}

export default Navbar;