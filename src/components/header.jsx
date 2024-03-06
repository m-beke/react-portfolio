import '../styles/header.css';
import { Link } from 'react-router-dom';

  function Header() {
    return (
      <header className="heading">
        <Link to="/">MATTHEW BEKE</ Link>
      </header>
    );
  }
  
  export default Header;