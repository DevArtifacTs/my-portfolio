import React, { useState } from "react";
import './Works.css'
import WorkCard from "./WorkCard/WorkCard";
const works = [
    {
        cardTitle: 'Activity Tracker',
        src: '/images/activity-app-crud.png',
        cardDescription: 'This app is allowed you to record your exercise activity like a diary of your exercise.',
        techStacks: ['React', 'Node.js', 'Express.js', 'MongoDB'],
        link: 'https://activity-app-crud.vercel.app/'
    },
    {
        cardTitle: 'Weather App (openweathermap API)',
        src: '/images/weather-app.png',
        cardDescription: 'You can see the weather in your city and also you can see the weather in the world.',
        techStacks: ['React', 'css module', 'HTML'],
        link: 'https://react-weather-ew3gu1pv3-devartifacts.vercel.app/'
    },
    {
        cardTitle: 'Input Form Validation page',
        src: '/images/input-form-validation.png',
        cardDescription: 'The code challenge from Front End Mentor website. User will be warn with the error icon that will be appended if they input invalid data',
        techStacks: ['HTML', 'CSS', 'JS'],
        link: 'https://devartifacts.github.io/intro-component-with-signup-form-master/'
    },
    {
        cardTitle: 'Fully Responsive NFT Card Review',
        src: '/images/nft-card.png',
        cardDescription: 'The code challenge from Front End Mentor website. Show NFT card mockup review that can be display on any device.',
        techStacks: ['HTML', 'CSS'],
        link: 'https://devartifacts.github.io/nft-preview-card-component-main/'
    },
    {
        cardTitle: 'Responsive Portfolio Mockup page',
        src: '/images/mockup-portfolio.png',
        cardDescription: 'Learning how to create responsive landing page from www.freeCodeCamp.com ',
        techStacks: ['HTML', 'CSS'],
        link: 'https://free-code-camp-responsive.vercel.app/'
    },

]

function Works(props) {

    const [showMenu, setShowMenu] = useState(true);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <section id="works" className="works " >
            <h3 className="section-title-text">Previous Project</h3>
            <div className="slider-container d-flex justify-content-center mt-5 mb-0" style={{ paddingLeft: '10rem', paddingRight: '10rem' }}>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        {works.map((item, index) => {
                            if (index > 0) {
                                return <button key={index} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} aria-label={`Slide ${index}`}></button>
                            }
                        })}
                    </div>
                    {works.map((item, index) => {
                        if (index === 0) {
                            return <div className="carousel-item active" style={{ maxHeight: '100%', position: 'relative' }} >
                                <WorkCard cardInfo={item} showMenu={showMenu} handleShowMenu={handleShowMenu} />
                                <img src={item.src} className="d-block w-100" alt="project-img" style={{ objectFit: 'cover' }} />
                            </div>
                        } else {
                            return <div className="carousel-item" style={{ maxHeight: '100%', position: 'relative' }}>
                                <WorkCard cardInfo={item} showMenu={showMenu} handleShowMenu={handleShowMenu} />
                                <img src={item.src} className="d-block w-100" alt="project-img" style={{ objectFit: 'cover' }} />
                            </div>
                        }
                    })}
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Works;