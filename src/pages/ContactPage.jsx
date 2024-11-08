import React from 'react';
import '../styles/contact.css';
import profilePic from "../assets/images/IMG_1448.jpg";
import { BasicForm } from "../components/contactForm.jsx";
import { Fade, Slide } from 'react-awesome-reveal';

const ContactPage = () => {
    return (
        <>
            <Slide direction='left'>
                <div className='contact-wrapper'>
                    <div className='contact-cards'>
                        <div className='info-card'>
                            <img src={profilePic}></img>
                            <h1>Madeline Beke</h1>
                          
                                <div className='contact-info'>
                                    <h2>Phone:</h2>
                                    <a href="tel:+17277415382">+1 (727) 741‑5382</a>
                                </div>
                                <div className='contact-info'>
                                    <h2>Email:</h2>

                                    <a href="mailto:maddie.beke@outlook.com">maddie.beke@outlook.com</a>
                                </div>
                            
                            <div className='contact-icons'>
                                <i class="devicon-html5-plain-wordmark contact-icon"></i>
                                <i class="devicon-css3-plain-wordmark contact-icon"></i>
                                <i class="devicon-javascript-plain contact-icon"></i>
                                <i class="devicon-sequelize-plain-wordmark contact-icon"></i>
                                <i class="devicon-mysql-plain-wordmark contact-icon"></i>
                                <i class="devicon-handlebars-original-wordmark contact-icon"></i>
                                <i class="devicon-mongodb-plain-wordmark contact-icon"></i>
                                <i class="devicon-express-original-wordmark contact-icon"></i>
                                <i class="devicon-react-original-wordmark contact-icon"></i>
                                <i class="devicon-nodejs-plain-wordmark contact-icon"></i>
                            </div>
                        </div>
                    </div>
                    <div className='contact-cards'>
                        <div className='contact-card'>
                            <h1>Available to hire</h1>
                            <h2>Send me a message!</h2>
                            <BasicForm></BasicForm>
                        </div>
                    </div>
                </div>
            </Slide>
        </>
    )
}

export default ContactPage;