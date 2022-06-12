import React from "react";
import './About.css'
import 'animate.css';

function About(props){

    return(
        <section id="about" className="about container-fluid ">
            <h3 className="about-title section-title-text ">About Me</h3>
                <div className="about-wrapper animate__animated animate__backInLeft ">
                    <div className="about-content-frame">
                        <img src="./images/jessada.png" alt="profile-image" className="about-image " />
                        <div className="about-content-right">
                            <h3 className="blurb-heading greeting ">
                                Hello, I'm James
                                <i className="about-full-name">(Jessada Srimoon)</i>
                            </h3>
                            <p className="about-content lh-5">
                                {/* I am a mechanical engineer with a strong interest in software development.  */}
                                {/* I am currently designing my works using MERN stack technology.I am a never-ending learner.  */}
                                {/* I'd love to learn something new and work with others to complete the tasks. */}
                                I am a Front-End developer.
                                <br />
                                I encode your ideas into reality.
                                <br />
                                Currently designing my works using MERN stack technology.
                            </p>
                            <h4 className="blurb-heading" id="my-manifest">
                                I blending my skills and experiences to invent a technology solution.
                            </h4>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default About ;