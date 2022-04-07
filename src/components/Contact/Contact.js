import React from "react";
import './Contact.css'
import ContactCard from "./ContactCard/ContactCard";

const contactCards =[
{tag : <i class="fa-brands fa-github fa-6x"></i>,title : 'Visit my GitHub', link : 'https://github.com/DevArtifacTs?tab=repositories'},
{tag : <i class="fa-brands fa-linkedin fa-6x"></i>,title : 'See me in LinkedIn', link: 'https://www.linkedin.com/in/jessada-srimoon'}
]

function Contact(props) {

    return (
        <section id="contact" className="contact">
            <h3  className="section-title-text">Let's Keep In Touch!</h3>
            <div className="contact-card-wrapper" >
                {contactCards.map((card) => {
                    return <ContactCard card={card}/>
                })}
                
            </div>
        </section>
    )
}

export default Contact ;