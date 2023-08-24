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
            <div class='header'>
                <nav class='navbar'>
                    <nav class='navbtn'>
                        <NavLink class='navbtnlink' to='/'>
                            <img src={icon} width='50'/>
                        </NavLink>
                    </nav>
                    <div className='menu-icon' onClick={handleShowNavbar}>
                        <img src={hamburger} width='40'></img>
                        {/* <Hamburger /> */}
                    </div>
                    <div class={`nav-elements  ${showNavbar && 'active'}`}>
                        <ul>
                            <li>
                                <NavLink class='navlink' to='/about' activestyle>About</NavLink>
                            </li>
                            <li>
                                <NavLink class='navlink' to='/blog' activestyle>Blog</NavLink>
                            </li>
                            <li>
                                <NavLink class='navlink' to='/projects' activestyle>Projects</NavLink>
                            </li>
                            <li>
                                <NavLink class='navlink' to='/contact' activestyle>Contact</NavLink>
                            </li>
                        </ul>
                        
                        {/* </div> */}
                    </div>
                </nav>  
            </div>
            <div class='fade1'></div>
            <div class='fade'></div>
        </div>
    )
}

export default Navbar;