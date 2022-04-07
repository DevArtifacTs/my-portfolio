import React from "react";
import './ExperienceCard.css'


function ExperienceCard(props){

    return (
        <div className="experience-card-wrapper">
            <div className="experience-card-content exp-section-card-item">
                <p className="experience-card-date exp-section-card-date">{props.exp.yearDuration}</p>
                <h4>{props.exp.title}</h4> 
                <h5 className="organizer-name"> <i>{props.exp.company}</i> </h5> 
                <h6>Acheivements</h6>
                <ul className="experience-card-duty">
                    <li className="experience-duty-item">
                        {props.exp.acheivements}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ExperienceCard;