import React from "react";
import './Footer.css'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Footer(props) {

    return (
        <footer className="footer-section container-fluid">
            <div className="footer-content-wrapper">
                <p className="footer-copy-right">© 2022 Jessada Srimoon</p>
                <a href="#nav" className="footer-logo"> Jes Sri </a>
                <a className="footer-link" href="#hero">Go to Top</a>
            </div>
        </footer>
    )
}

export default Footer ;