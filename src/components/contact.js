import React from 'react';
import './contact.css';
import { data } from "../data";

//import { IoIosMail, IoIosCall, IoLogoGithub, IoMdHome } from "react-icons/io";

function Contact(props) {
    const items = [];
    for (let item in data.contact) {
        if (data.contact.hasOwnProperty(item)) {
            items.push(data.contact[item])
        }
    }
    return (
        <div className='contact-wrapper'>
            {items.map(item =>
                <div key={item.name}><a href={item.link} target='_blank' rel='noopener noreferrer'>{item.text}</a></div>
            )}
        </div>
    )
}

export { Contact };