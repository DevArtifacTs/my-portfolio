import React, {useState} from "react";
import './Works.css'
import WorkCard from "./WorkCard/WorkCard";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const works = [
    {
        cardTitle : 'Activity Tracker',
        cardDescription : 'This app is allowed you to record your exercise activity like a diary of your exercise.',
        techStacks : ['React', 'Node.js', 'Express.js', 'MongoDB'],
        link : 'https://activity-app-crud.vercel.app/'
    },
    {
        cardTitle : 'Weather App (openweathermap API)',
        cardDescription : 'You can see the weather in your city and also you can see the weather in the world.',
        techStacks : ['React', 'css module', 'HTML'],
        link : 'https://react-weather-ew3gu1pv3-devartifacts.vercel.app/'
    },
    {
        cardTitle : 'Input Form Validation page',
        cardDescription : 'The code challenge from Front End Mentor website. User will be warn with the error icon that will be appended if they input invalid data',
        techStacks : ['HTML', 'CSS', 'JS'],
        link : 'https://devartifacts.github.io/intro-component-with-signup-form-master/'
    },
    {
        cardTitle : 'Fully Responsive NFT Card Review',
        cardDescription : 'The code challenge from Front End Mentor website. Show NFT card mockup review that can be display on any device.',
        techStacks : ['HTML', 'CSS'],
        link : 'https://devartifacts.github.io/nft-preview-card-component-main/'
    },

]

function Works(props){
    
    const[showMenu, setShowMenu] = useState(true);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <section id="works" className="works " >
            <h3 className="section-title-text">Previous Project</h3>
            <div className="slider-container">       
                <AwesomeSlider style={{borderRadius : '20px' , border : '10px solid rgb(138, 145, 177)', padding : '2rem'}}>
                    <div data-src="/images/activity-app-crud.png">
                        {works.map((card, index) => {
                            if(index === 0){
                                return (
                                    <WorkCard 
                                    key = {index}
                                    id = {index}
                                    cardInfo ={card}
                                    showMenu={showMenu}
                                    handleShowMenu={handleShowMenu} 
                                    />
                                )
                            }
                        })
                        } 
                    </div>
                    <div data-src="/images/weather-app.jpg" style={{ objectFit: 'cover'}}  > 
                        {works.map((card, index) => {
                                if(index === 1){
                                    return (
                                        <WorkCard 
                                        key = {index}
                                        id = {index}
                                        cardInfo ={card}
                                        showMenu={showMenu}
                                        handleShowMenu={handleShowMenu} 
                                        />
                                    )
                                }
                            })
                            } 
                    </div>
                    <div data-src="/images/input-form-validation.png" > 
                        {works.map((card, index) => {
                                if(index === 2){
                                    return (
                                        <WorkCard 
                                        key = {index}
                                        id = {index}
                                        cardInfo ={card}
                                        showMenu={showMenu}
                                        handleShowMenu={handleShowMenu} 
                                        />
                                    )
                                }
                            })
                            } 
                    </div>

                    <div data-src="/images/nft-card.png"  > 
                        {works.map((card, index) => {
                                if(index === 3){
                                    return (
                                        <WorkCard 
                                        key = {index}
                                        id = {index}
                                        cardInfo ={card}
                                        showMenu={showMenu}
                                        handleShowMenu={handleShowMenu} 
                                        />
                                    )
                                }
                            })
                            } 
                    </div>
                    
                </AwesomeSlider>
            </div>
            {/* <WorkCard/> */}
        </section>
    )
}

export default Works ;