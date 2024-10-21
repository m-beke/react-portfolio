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
          <div className='home-quote'>
            <p>"Placeholder Quote."</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;