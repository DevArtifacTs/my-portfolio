import React from "react";
import './NavbarButton.css'


function NavbarButton(props) {

    return (
        <li className="navbar-button-item">
            <a  href={props.navItem.linkTo} id={props.navItem.id}>{props.navItem.text}</a>
        </li>
    )
}

export default NavbarButton