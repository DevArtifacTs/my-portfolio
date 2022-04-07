import React, {useState, useEffect} from "react";
import './Navbar.css'

import NavbarButton from "./NavbarButton/NavbarButton";


const navbarItem = [
    {text : 'About', id : 'nav-about', linkTo : '#about' },
    {text : 'Experiences', id : 'nav-experiences', linkTo : '#experiences'},
    {text : 'Skills', id : 'nav-skills', linkTo : '#skills'},
    {text : 'Works', id : 'nav-works', linkTo : '#works'},
    {text : 'Contact', id : 'nav-contact', linkTo : '#contact'}
]

function Navbar(props) {

    // access to element
    const menuBar = document.getElementById('navbar-menu')

    // logic for handle NavbarButton click event
    const [menuToggle, setMenuToggle] = useState(false); 

    function handleToggle(){
        setMenuToggle(!menuToggle);
        appendMenu()

    }
    function appendMenu(){
        if(menuToggle){
            menuBar.style.display = 'flex'
        } else {
            menuBar.style.display = 'none'
        }
    }

    return (
        <nav id='nav' className="top-nav container-fluid">
            <div className="navigation-logo-wrapper">
                <a href="#" className='navigation-logo'>Jes Sri</a>
            </div>
            <ul className="navbar-button-container ">
                {
                    navbarItem.map((navItem) => {
                        return(
                            <NavbarButton navItem={navItem}/>
                        )
                    })
                }
            </ul>
            <ul id="navbar-menu" className="navbar-button-container navbar-menu  ">
                {
                    navbarItem.map((navItem) => {
                        return(
                            <NavbarButton navItem={navItem}/>
                        )
                    })
                }
            </ul>
            <img 
                onClick={handleToggle}
                id="nav-menu-icon" 
                src="./icons/nav-menu-icon.png" 
                alt="menu-icon" />
      </nav>
        
            
        
    )
}

export default Navbar ;