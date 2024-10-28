import '../styles/home.css';
import profilePic from "../assets/images/IMG_1448.jpg";
import signature from "../assets/images/MadelineBeke.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className='home-wrapper'>
        <div className='home-cards'>
          <div className='home-card'>
            <div className='home-content'>
              <div className='home-img-card'>
                <img src={profilePic}></img>
                <div className='quote'>
                  <p>"Nothing is impossible, the word itself says 'I'm possible'!"</p>
                </div>
                <div className='quote-author'>
                  <p>- Audrey Hepburn</p>
                </div>
              </div>
            </div>
          </div>
          <div className='home-card'>
            <div className='home-content'>
              <div className='home-signature-card'>
                <img src={signature} />
                <h1>Full-Stack Web Developer</h1>
                <h2>Coding with elegance and ease of use in mind.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default HomePage;