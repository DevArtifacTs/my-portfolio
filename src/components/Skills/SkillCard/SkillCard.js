import React from "react";
import './SkillCard.css'
import tippy from 'tippy.js';

function SkillCard(props){

    return(
        <div className="skill-card-item">
            {props.icon}
        </div>
    )
}

export default SkillCard ;