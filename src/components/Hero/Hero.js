import React, {useState} from "react";
import './Hero.css';
import './HeroAnimation.css';
import 'animate.css';

function Hero(props){

    const [heroContent, setHeroContent] = useState('front-end')

    function handleContent(e) {
        if(e.type==='mouseenter'){
            const heroElem = document.getElementsByClassName('hero')
            // console.log(heroPseudo);
            setHeroContent('full-stack')
        } else {
            setHeroContent('front-end')
        }
    }

    return(
        <header id="hero" className="hero container-fluid animate__animated animate__backInLeft animate__slow ">
            <h1 className="hero-content">
                <span className="hero-name hero-secondary">I am...</span>
                <span className="hero-description hero-main animate__animated animate__backInLeft animate__slower">
                        {heroContent}
                </span>
                <span className="hero-job hero-secondary">Developer</span>
            </h1>
        </header>
    )
}

export default Hero ;