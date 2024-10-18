import '../styles/about.css';
import profilePic from "../assets/images/IMG_1448.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className='about-page'>
      <div className='mainHeading'>
        <h1>About</h1>
      </div>
      <div className='about-card'>
        <div className='about-content'>
          <div className='about-p'>
            <p>My name is Madeline Beke. I am a recent graduate of UCF's Coding Bootcamp. I used to do freelancing work in Film and TV, but am now seeking a career change, and more stable work.</p>
            <p>Computers have always been a hobby of mine. I've always enjoyed working with them, which eventually led to me discovering a passion for coding. I'm excited to turn that passion into potential job opportunities!</p>

          </div>
          <div className='about-img'>
            <img src={profilePic}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;