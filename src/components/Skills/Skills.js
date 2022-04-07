import React from "react";
import './Skills.css';
import SkillCard from "./SkillCard/SkillCard";

const skills = [
    <i class="fa-brands fa-html5 fa-6x"></i>,
    <i class="fa-brands fa-css3-alt fa-6x"></i>,
    <i class="fa-brands fa-js fa-6x"></i>,
    <i class="fa-brands fa-bootstrap fa-6x"></i>,
    <i class="fa-brands fa-react fa-6x"></i>,
    <i class="fa-brands fa-node fa-6x"></i>,
    <i class="fa-brands fa-git-alt fa-6x"></i>,
    <i class="fa-solid fa-square-terminal fa-6x"></i>,
    <i class="fa-brands fa-envira fa-6x"></i>
]

function Skills(props){

    return (
        <section id="skills" className="skills container-fluid">
            <h3 className="section-title-text">Skills</h3>
            <div className="skills-wrapper">
                {
                    skills.map((skill, index) => {
                        return (
                            <SkillCard icon={skill} key={index} />
                        )
                    })
                }
                
            </div>
        </section>
    )
}

export default Skills ;