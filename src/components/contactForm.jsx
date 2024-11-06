import React from 'react';
import '../styles/contact.css';
import { TextInput, Textarea, Button, Icon } from 'react-materialize';

function ContactForm() {
    return (
        <form id="contact-form" netlify data-netlify="true">
            <h1>Contact Me</h1>
            <h2>Available For Hire!</h2>
            <TextInput
                className="input-field"
                icon={<Icon>account_circle</Icon>}
                id="TextInput-92"
                label="Name"
                name="name"
            />
            <TextInput
                className="input-field"
                email
                icon={<Icon>email</Icon>}
                id="TextInput-100"
                label="Email"
                validate
                name="email"
            />
            <Textarea
                className="text-area"
                icon={<Icon>message</Icon>}
                id="Textarea-114"
                label="Message"
                name="message"
            />
            <Button
                className='submit-btn'
                node="button"
                type="submit"
                waves="light"
            >
                Submit
                <Icon right>
                    send
                </Icon>
            </Button>
        </form>
    );
}

export default ContactForm;
