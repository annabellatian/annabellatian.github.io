import React from 'react';
import icon from './icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// function scrolleAlt(id) { 
// document.getElementById(id).scrollIntoView({
//     behavior: 'smooth'
// })
// }

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    const scrolle = (id) => { 
        const element = document.getElementById(id);
        if (element) {
            document.getElementById(id).scrollIntoView({
                behavior: 'smooth'
            })
        } else {
            console.warn(`Element with id "${id}" not found.`);
        }
    }
    
    return (
        <div>
        
            <div className='overflow-hidden fixed top-0 w-full h-16 items-center flex justify-center space-x-4 text-textColor min-w-[300px] my-4'>
                {/* <div class={`${showNavbar && 'active'}`}> */}
                    <ul className='justify-between flex list-none space-x-8'>
                        <li>
                            <Link to="#home">
                                <button onClick={() => scrolle('home')}><div className='active nav-button' id="home-button">Home</div></button>
                            </Link>
                        </li>
                        <li>
                            <Link to="#about">
                                <button onClick={() => scrolle('about')}><div className='nav-button' id="about-button">About</div></button>
                            </Link>
                        </li>
                        <li>
                            <Link to="#projects">
                                <button onClick={() => scrolle('projects')}><div className='nav-button' id="projects-button">Projects</div></button>
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/#blog">
                                <button onClick={() => scrolle('blog')}><div className='nav-button'>Blog</div></button>
                            </Link>
                        </li> */}
                    </ul>
                {/* </div> */}
            </div>  
        </div>
    )
}

export default Navbar;