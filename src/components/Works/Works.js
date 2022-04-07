import React, {useState} from "react";
import './Works.css'
import WorkCard from "./WorkCard/WorkCard";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const works = [
    {
        cardTitle : 'Fully Responsive Academic Website',
        cardDescription : 'A academic webpage mockup that can be display on any device.',
        techStacks : ['HTML', 'CSS', 'Bootstrap']
    },
    {
        cardTitle : 'Spotify Jammming',
        cardDescription : 'The Spotify 3rd party for music playlist creation',
        techStacks : ['React', 'CSS']
    },
    {
        cardTitle : 'Input Form Validation page',
        cardDescription : 'The code challenge from Front End Mentor website. User will be warn with the error icon that will be appended if they input invalid data',
        techStacks : ['HTML', 'CSS', 'JS']
    },
    {
        cardTitle : 'Fully Responsive NFT Card Review',
        cardDescription : 'The code challenge from Front End Mentor website. Show NFT card mockup review that can be display on any device.',
        techStacks : ['HTML', 'CSS']
    }

]

function Works(props){
    
    const[showMenu, setShowMenu] = useState(true);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <section id="works" className="works " >
            <h3 className="section-title-text">Recently Works</h3>
            <div className="slider-container">       
                <AwesomeSlider style={{borderRadius : '20px' , border : '10px solid rgb(138, 145, 177)', padding : '2rem'}}>
                    <div data-src="/images/colmar-academy.png">
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
                    <div data-src="/images/jammming.png" > 
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

                    <div data-src="/images/input-form-validation.png"  > 
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

                    <div data-src="/images/nft-card.png" >
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