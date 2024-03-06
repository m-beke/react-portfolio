import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="navLinks">
        <Link to="/About">ABOUT ME</Link>
        <Link to='/Portfolio'>PORTFOLIO</Link>
        <Link to='/Resume'>RESUME</Link>
      </nav>
    );
  }
  
  export default Navbar;
  