import React from "react";
import './SkillCard.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

//react icons configuration 
import { IconContext } from "react-icons";

function SkillCard(props){
    const name = props.name
    return(
        <div className="skill-card-item">
            
            <Tippy content={name}>
                {props.component}
            </Tippy>
        </div>
    )
}

export default SkillCard ;