import '../styles/home.css';
import profilePic from "../assets/images/IMG_1448.jpg";
import signature from "../assets/images/MadelineBeke.png";
import { Link } from 'react-router-dom';
import { Button } from "react-materialize"

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
                <div className='divider'></div>
                <div className='dev-icons'>
                  <i class="devicon-html5-plain-wordmark dev-icon"></i>
                  <i class="devicon-css3-plain-wordmark dev-icon"></i>
                  <i class="devicon-javascript-plain dev-icon"></i>
                  <i class="devicon-sequelize-plain-wordmark dev-icon"></i>
                  <i class="devicon-mysql-plain-wordmark dev-icon"></i>
                  <i class="devicon-handlebars-original-wordmark dev-icon"></i>
                  <i class="devicon-mongodb-plain-wordmark dev-icon"></i>
                  <i class="devicon-express-original-wordmark dev-icon"></i>
                  <i class="devicon-react-original-wordmark dev-icon"></i>
                  <i class="devicon-nodejs-plain-wordmark dev-icon"></i>
                </div>
              </div>
              <div className='mobile-btn-wrapper'>
                <Button
                  className='mobile-btn'
                  node='button'
                  small='true'>
                  <Link to='/about'
                    className='btn-text'
                  >
                    About
                  </Link>
                </Button>
                <Button
                  className='mobile-btn'
                  node='button'
                  small='true'>
                  <Link to='/portfolio'
                    className='btn-text'
                  >
                    Projects
                  </Link>
                </Button>
                <Button
                  className='mobile-btn'
                  node='button'
                  small='true'>
                  <Link to='/contact'
                    className='btn-text'
                  >
                    Contact
                  </Link>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default HomePage;