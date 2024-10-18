import '../styles/header.css';
import '../styles/materialize.min.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav>
        <div class="nav-wrapper">
        <a class="brand-logo"><Link to='/About'>Madeline Beke</Link></a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><Link to='/Portfolio'>PROJECTS</Link></li>
            <li><Link to='/Resume'>RESUME</Link></li>
            <li><Link to='/Contact'>CONTACT ME</Link></li>
          </ul>
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