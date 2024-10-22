import '../styles/contact.css';

const ContactPage = () => {
    return (
        <>
        <div className='contact'>
            <h1>Contact</h1>
            <div className='contact-card'>
                <h2>Email:</h2>
                <a href = "mailto: maddie.beke@outlook.com">maddie.beke@outlook.com</a>
                <h2>Phone Number:</h2>
                <a href="tel:727-741-5382">(727)-741-5382</a>
            </div>
        </div>
        </>
    )
}

export default ContactPage;