'use client';
import React from 'react';
import icon from './icon.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '../../index.css';
import Magnetic from '../Animate/magnetic';

const Navbar = () => {
    // const [showNavbar, setShowNavbar] = useState(false)
    // const handleShowNavbar = () => {
    //     setShowNavbar(!showNavbar)
    // }

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

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        }
      }, []);
    
      const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }
      }
    
    
    return (
        <div className='flex overflow-hidden fixed top-0 w-full h-16 justify-center'>
            <div className='relative items-center justify-center space-x-4 text-textColor min-w-[300px] my-4'>
                {/* <div class={`${showNavbar && 'active'}`}> */}
                    <ul className='justify-between flex list-none space-x-8'>
                        <li>
                            <Link to="#home">
                                <button onClick={() => scrolle('home')}><div className='nav-button' id="home-button">Home</div></button>
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
            <div className="absolute right-0 top-0 bottom-0 my-auto pt-1 px-4 mr-4 place-content-center">
                <Magnetic>
                    <button onClick={toggleTheme} className='justify-items-center'>
                        <svg className="transition-all ease-in-out fill-darkGray stroke-darkGray stroke-1 dark:fill-offWhite dark:stroke-offWhite dark:stroke-1 hover:fill-lightBlue hover:stroke-lightBlue size-[30px] opacity-80" viewBox="0 -3 25 25">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    </button>
                </Magnetic>
            </div>
            
        </div>
    )
}

export default Navbar;