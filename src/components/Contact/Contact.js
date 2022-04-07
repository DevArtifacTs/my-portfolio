import React from "react";
import './Contact.css'
import ContactCard from "./ContactCard/ContactCard";

const contactCards =[
{tag : <i className="fa-brands fa-github fa-6x"></i>,title : 'Visit my GitHub', link : 'https://github.com/DevArtifacTs?tab=repositories'},
{tag : <i className="fa-brands fa-linkedin fa-6x"></i>,title : 'See me in LinkedIn', link: 'https://www.linkedin.com/in/jessada-srimoon'}
]

function Contact(props) {

    return (
        <section id="contact" className="contact">
            <h3  className="section-title-text">Let's Keep In Touch!</h3>
            <div className="contact-card-wrapper" >
                {contactCards.map((card, index) => {
                    return <ContactCard key={index} card={card}/>
                })}
                
            </div>
        </section>
    )
}

export default Contact ;