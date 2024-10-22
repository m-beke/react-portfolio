import '../styles/home.css';
import profilePic from "../assets/images/IMG_1448.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className='home-page'>
      <div className='home-card'>
        <div className='home-content'>
          <div className='home-img'>
            <img src={profilePic}></img>
          </div>
          <div className='home-quote-display'>
            <div className='home-quote'>
              <p>"Success is like reaching an important birthday and finding you're exactly the same."</p>
            </div>
            <div className='home-quote-author'>
              <p>- Audrey Hepburn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;