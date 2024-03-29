import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="navLinks">
        {/* <Link to="/About">ABOUT ME</Link> */}
        <Link to='/Portfolio'>PROJECTS</Link>
        <Link to='/Resume'>RESUME</Link>
        <Link to='/Contact'>CONTACT ME</Link>
      </nav>
    );
  }
  
  export default Navbar;
  