import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="navLinks">
        <Link to="/About">ABOUT ME</Link>
        <a href=''>PORTFOLIO</a>
        <a href=''>RESUME</a>
      </nav>
    );
  }
  
  export default Navbar;
  