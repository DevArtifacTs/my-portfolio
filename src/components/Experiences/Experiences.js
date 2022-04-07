import React from "react";
import './Experiences.css'
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import EducationCard from "./EducationCard/EducationCard";

const educations = [
    {
        yearDuration : 'Jan|2021- Apr|2022',
        title : 'Junior Software Developer Bootcamp',
        organizer : 'Generation, Thailand',
        acheivements : ["Launched a full stack web application named 'Exeract' that allowed user to track their activities eg. running, cycling.", "Provide the challenge project on 'Front End Mentor' community and got enhanced myself with the constructive comment from community."]
    },
    {
    yearDuration : '2016-2019',
    title : 'Mechanical Engineering',
    organizer : 'Chiangmai University',
    acheivements :['Team member of Enginerring Inventor Club. ']
    }
]
const workExperiences = [
    {
        yearDuration : '2019-2021',
        title : 'Production Engineer',
        company : 'Murata Electronics, Ltd',
        acheivements : ["Increase factory's profit around 2.6MBaht per month by invent new equipment that allow the machine to have more efficiency."]
    },
    {
        yearDuration : 'May|2018 - Nov|2019',
        title : 'Intern Mechatronics Engineer',
        company : 'Xenoptics, Ltd',
        acheivements : ["Designed electrical product testing support machine with electronic device(micro-controller) that powered by C# window application and collaborate by senior mechanical, electrical and computer engineer."]
    },

]

function Experiences(props){

    return(
        <section id='experiences' className="experiences-section">
            <h2 className="section-title-text">Experiences</h2>
            {/* <i class="fa-brands fa-envira fa-6x"></i> */}
                <div className="experiences-card-container">
                    <div className="experiences-wrapper">
                        <h4 className="blurb-heading" >Works</h4>
                    {/* <img className="work-experience-icon" src="./icons/worker.png" alt="" /> */}
                        {workExperiences.map((exp)=> {
                            return (
                                <ExperienceCard exp={exp}/>
                            )
                        }

                        )}

                    </div>
                    <div className="educations-wrapper">
                        <h4 className="blurb-heading" >Educations</h4>
                        {educations.map((edu)=> {
                            return (
                                <EducationCard edu={edu}/>
                            )
                        }

                        )}

                    </div>
                </div>
        </section>
    )
}
export default Experiences ;