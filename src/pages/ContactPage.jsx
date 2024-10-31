import React from 'react';
import '../styles/contact.css';
import { TextInput } from 'react-materialize';
import { Textarea } from 'react-materialize';
import { Button } from 'react-materialize';
import { Icon } from 'react-materialize';

const ContactPage = () => {
    return (
        <>
            <div className='contact-wrapper'>
                <div className='contact-cards'>
                    <div className='info-card'>
                        <h1>My Info</h1>
                        <h2>Wanna work together? Gimme a call!</h2>
                        <h3>Phone:</h3>
                        <a href="tel:+17277415382">+1 (727) 741‑5382</a>
                        <h3>Email:</h3>
                        <a href="mailto:maddie.beke@outlook.com">maddie.beke@outlook.com</a>
                    </div>
                </div>
                <div className='contact-cards'>
                    <div className='form-card'>
                        <h1>Contact Me</h1>
                        <h2>Available For Hire!</h2>
                        <TextInput
                            icon={<Icon>account_circle</Icon>}
                            id="TextInput-92"
                            label="Name"
                        />
                        <TextInput
                            email
                            icon={<Icon>email</Icon>}
                            id="TextInput-100"
                            label="Email"
                            validate
                        />
                        <Textarea
                            icon={<Icon>message</Icon>}
                            id="Textarea-114"
                            label="Your Message"
                        />
                        <Button
                            node="button"
                            type="submit"
                            waves="light"
                        >
                            Submit
                            <Icon right>
                                send
                            </Icon>
                        </Button>
                    </div>
                </div >
            </div>
        </>
    )
}

export default ContactPage;