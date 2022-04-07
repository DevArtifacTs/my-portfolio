import React, {useState} from "react";
import './Hero.css'

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
        <header id="hero" className="hero container-fluid">
            <h1 className="hero-content">
                <span className="hero-name hero-secondary">I am...</span>
                <span className="hero-description hero-main" 
                onMouseEnter={handleContent}
                onMouseLeave={handleContent}>
                        {heroContent}
                </span>
                <span className="hero-job hero-secondary">Developer</span>
            </h1>
        </header>
    )
}

export default Hero ;