import React from "react";
import './ContactCard.css'

function ContactCard(props){

    return (
        <div className="contact-card-container">
            <a href={props.card.link} target="_blank">
                {props.card.tag}
            </a>
            <h4>{props.card.title}</h4>
        </div>
    )
}

export default ContactCard ;