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
            <div class='absolute top-0 w-full h-16 bg-darkGreen opacity-80 items-center flex justify-center space-x-4 text-lightGray z-50'>
                {/* <NavLink class='px-8' to='/'>
                    <img src={icon} width='50'/>
                </NavLink> */}
                {/* <div className='menu-icon' onClick={handleShowNavbar}>
                    <img src={hamburger} width='40'></img>
                </div> */}
                <div class={`${showNavbar && 'active'}`}>
                    <ul class='justify-between flex list-none space-x-8'>
                        <li>
                            <NavLink to='/' activestyle>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' activestyle>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/blog' activestyle>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to='/projects' activestyle>Projects</NavLink>
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