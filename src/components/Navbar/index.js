import React from 'react';
import icon from './icon.png';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                    <NavBtn>
                        <NavBtnLink to='/'>
                            <img src={icon} width='50'/>
                        </NavBtnLink>
                    </NavBtn>
                <NavMenu>
                    <NavLink to='/about' activestyle>
                        About
                    </NavLink>
                    <NavLink to='/blog' activestyle>
                        Blog
                    </NavLink>
                    <NavLink to='/projects' activestyle>
                        Projects
                    </NavLink>
                    <NavLink to='/contact' activestyle>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;