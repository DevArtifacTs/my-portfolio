import React from "react";
import './WorkCard.css'


function WorkCard(props){

    const handleShowMenu = () => {
        props.handleShowMenu();
    }
    
    return(
        <>
            { props.showMenu && 
                <img 
                className="menu-icon blink-image" 
                src="icons/menu.png" 
                alt="menu-icon"  
                onClick={handleShowMenu}
                />
            }
            { !props.showMenu &&
                <div className="work-description" onMouseLeave={handleShowMenu} >
                    <h3 className="work-card-title">{props.cardInfo.cardTitle}</h3>
                    <p className="work-card-description">{props.cardInfo.cardDescription}</p>
                    <h5>Tech I use</h5>
                    <ul>
                        { props.cardInfo.techStacks.map((tech) => {
                            return (
                                <li>{tech}</li>
                            )
                        })
                        }
                    </ul>
                    <a className="work-card-link" href="#hero"><p>See full project</p></a>
                </div>
            }
        </>
    )
}

export default WorkCard ;