import '../styles/header.css';
import '../styles/materialize.min.css';
import '../../utils/materialize.js';
import { Link } from 'react-router-dom';
import gitIcon from '../assets/images/github-mark-white.png';
import linkedIcon from '../assets/images/In-White-128@2x.png';

function Header() {
  return (
    <>
      <nav>
        <div class="nav-wrapper">
          <a class="brand-logo"><Link to='/'>Madeline Beke</Link></a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Portfolio'>Projects</Link></li>
            <li><Link to='/Resume'>Resume</Link></li>
            <li><Link to='/Contact'>Contact Me</Link></li>
          </ul>
          <img src={gitIcon} className='git-icon' to='https://github.com/m-beke'></img>
          <img src={linkedIcon} className='linked-icon' to='https://www.linkedin.com/in/matt-beke-a3679740/'></img>
          <ul class="sidenav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>
        </div>

      </nav>


    </>);
}

export default Header;