import React from "react";
import './Skills.css';
import SkillCard from "./SkillCard/SkillCard";

// react icons 
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { GrNode } from 'react-icons/gr';
import { SiMongodb } from 'react-icons/si';
import { DiGit } from 'react-icons/di';
import { BsTerminalFill } from 'react-icons/bs';



const skills = [
    {
        component : <i className="fa-brands fa-html5 fa-6x"></i>,
        name : 'HTML'
    },
    {
        component : <i className="fa-brands fa-css3-alt fa-6x"></i>,
        name : 'CSS'
    },
    {
        component : <i className="fa-brands fa-js fa-6x"></i>,
        name : 'JavaScript'
    },
    {
        component : <i className="fa-brands fa-bootstrap fa-6x"></i>,
        name : 'Bootstrap'
    },
    {
        component : <i className="fa-brands fa-react fa-6x"></i>,
        name : 'React'
    },
    {
        component : <i className="fa-brands fa-node fa-6x"></i>,
        name : 'Node.js & Express.js'
    },
    {
        component : <i className="fa-brands fa-git-alt fa-6x"></i>,
        name : 'Git Version Control'
    },
    {
        component : <i className="fa-solid fa-square-terminal fa-6x"></i>,
        name : 'Terminal'
    },
    {
        component : <i className="fa-brands fa-envira fa-6x"></i>,
        name : 'MongoDB'
    }
    ,  
]
// const skills = [
//     <AiFillHtml5/>,
//     <FaCss3Alt/>,
//     <SiJavascript/>,
//     <BsFillBootstrapFill/>,
//     <FaReact/>,
//     <GrNode/>,
//     <SiMongodb/>,
//     <DiGit/>,
//     <BsTerminalFill/>
// ]

function Skills(props){

    return (
        <section id="skills" className="skills container-fluid">
            <h3 className="section-title-text">Skills</h3>
            <div className="skills-wrapper">
                {
                    skills.map((skill, index) => {
                        return (
                            <SkillCard 
                            component={skill.component} 
                            name={skill.name}
                            key={index} />
                        )
                    })
                }
                
            </div>
        </section>
    )
}

export default Skills ;