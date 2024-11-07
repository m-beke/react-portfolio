import React, { useState } from 'react';
import '../styles/contact.css';
import { TextInput, Textarea, Button, Icon } from 'react-materialize';

export function BasicForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [error, setError] = useState('')

    function onSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        fetch("https://formcarry.com/s/iSfnpreEbmx", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        })
            .then(response => response.json())
            .then(response => {
                if (response.code === 200) {
                    alert("We received your submission, thank you!");
                }
                else if (response.code === 422) {
                    // Field validation failed
                    setError(response.message)
                }
                else {
                    // other error from formcarry
                    setError(response.message)
                }
            })
            .catch(error => {
                // request related error.
                setError(error.message ? error.message : error);
            });
    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <div className="formcarry-block">
                <label htmlFor="name"></label>
                <TextInput
                    className='input-field'
                    type="text"
                    icon={<Icon>account_circle</Icon>}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    placeholder="Your first and last name"
                />
            </div>

            <div className="formcarry-block">
                <label htmlFor="email"></label>
                <TextInput
                    className='input-field'
                    type="email"
                    icon={<Icon>email</Icon>}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    placeholder="john@doe.com"
                />
            </div>
            <div className="formcarry-block">
                <label htmlFor="message"></label>
                <Textarea
                    className='text-area'
                    value={message}
                    icon={<Icon>message</Icon>}
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    placeholder="Enter your message..."
                >
                </Textarea>
            </div>
            <div className="formcarry-block">
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
            </div>
        </form>
    )
}