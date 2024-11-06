import React from 'react';
import '../styles/contact.css';
import profilePic from "../assets/images/IMG_1448.jpg";
import ContactForm from '../components/contactForm.jsx';
import { Fade, Slide } from 'react-awesome-reveal';

const ContactPage = () => {
    return (
        <>
            <Slide direction='up'>
                <div className='contact-wrapper'>
                    <div className='contact-cards'>
                        <div className='info-card'>
                            <img src={profilePic}></img>
                            <h1>Madeline Beke</h1>
                            <h2>Contact Info:</h2>
                            <h3>Phone:</h3>
                            <a href="tel:+17277415382">+1 (727) 741‑5382</a>
                            <h3>Email:</h3>
                            <a href="mailto:maddie.beke@outlook.com">maddie.beke@outlook.com</a>
                        </div>
                    </div>
                    <div className='contact-cards'>
                        <div className='form-card'>
                            <ContactForm></ContactForm>
                        </div>
                    </div>
                </div>
            </Slide>
        </>
    )
}

export default ContactPage;