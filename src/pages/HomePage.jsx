import { Link } from "react-router-dom";
import '../styles/home.css';

const HomePage = () => {
  return (
    <>
    <div className='home-heading'>
      <h1>Home Test</h1>
    </div>
    <div className="home-cards">
      <div className="home-about">
        <Link to='/About'>ABOUT ME</Link>
      </div>
      <div className="home-portfolio">
        <Link to='/Portfolio'>PORTFOLIO</Link>
      </div>
      <div className="home-resume">
        <Link to='/Resume'>RESUME</Link>
      </div>
      <div className="home-contact">
        <Link to='/Contact'>CONTACT ME</Link>
      </div>
    </div>
    </>
  )
}

export default HomePage;