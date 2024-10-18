import '../styles/contact.css';

const ContactPage = () => {
    return (
        <>
        <div className='contact'>
            <h1>Contact</h1>
            <div className='contact-card'>
                <h2>Email:</h2>
                <a href = "mailto: madeline.taylor.beke@gmail.com">madeline.taylor.beke@gmail.com</a>
                <h2>Phone Number:</h2>
                <a href="tel:727-741-5382">(727)-741-5382</a>
            </div>
        </div>
        </>
    )
}

export default ContactPage;