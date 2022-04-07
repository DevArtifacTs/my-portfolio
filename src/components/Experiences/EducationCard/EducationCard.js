import React from "react";
import './EducationCard.css'


function EducationCard(props) {

    return (
        <div className="education-card-wrapper">
            <div className="education-card-content exp-section-card-item">
                <p className="education-card-date exp-section-card-date">{props.edu.yearDuration}</p>
                <h4>{props.edu.title}</h4> 
                <h5 className="organizer-name"> <i>{props.edu.organizer}</i> </h5> 
                
                { props.edu.organizer === 'Generation, Thailand' &&
                <>
                <h6>Acheivements</h6>
                    <ul className="experience-card-duty">
                        <li className="experience-duty-item">
                            {props.edu.acheivements}
                        </li>
                    </ul>
                </>
                }
                { props.edu.organizer === 'Chiangmai University' &&
                <>
                <h6>Acheivements</h6>
                    <ul className="experience-card-duty">
                        <li className="experience-duty-item">
                            {props.edu.acheivements}
                        </li>
                    </ul>
                </>
                }
                
            </div>
        </div>
    )
}

export default EducationCard ;