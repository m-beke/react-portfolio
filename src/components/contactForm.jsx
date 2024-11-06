import React from 'react';
import '../styles/contact.css';
import { TextInput, Textarea, Button, Icon } from 'react-materialize';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:3002/send', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.status === 'success') {
                    alert("Message Sent.");
                    this.resetForm();
                } else if (response.status === 'fail') {
                    alert("Message failed to send.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("An error occurred while sending the message.");
            });
    }

    onNameChange(event) {
        this.setState({ name: event.target.value });
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value });
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            message: ''
        });
    }

    render() {
        return (
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <h1>Contact Me</h1>
                <h2>Available For Hire!</h2>
                <TextInput
                    className="input-field"
                    icon={<Icon>account_circle</Icon>}
                    id="TextInput-92"
                    label="Name"
                    value={this.state.name}
                    onChange={this.onNameChange.bind(this)}
                />
                <TextInput
                    className="input-field"
                    email
                    icon={<Icon>email</Icon>}
                    id="TextInput-100"
                    label="Email"
                    value={this.state.email}
                    onChange={this.onEmailChange.bind(this)}
                    validate
                />
                <Textarea
                    className="text-area"
                    icon={<Icon>message</Icon>}
                    id="Textarea-114"
                    label="Message"
                    value={this.state.message}
                    onChange={this.onMessageChange.bind(this)}
                />
                <Button
                    className='submit-btn'
                    node="button"
                    type="submit"
                    waves="light"
                >
                    Submit
                    <Icon right>send</Icon>
                </Button>
            </form>
        );
    }
}

export default ContactForm;
