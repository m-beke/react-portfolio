import '../styles/header.css';
import '../styles/materialize.min.css';
import '../../utils/materialize.min.js';
import { Link } from 'react-router-dom';
import gitIcon from '../assets/images/github-mark-white.png';
import linkedIcon from '../assets/images/In-White-128@2x.png';
import { Navbar } from 'react-materialize';
import { NavItem } from 'react-materialize';
import { SideNav } from 'materialize-css';
import { SideNavItem } from 'materialize-css';
import { Icon } from 'react-materialize';


function Header() {
  return (
    <>
      <nav>
        <Navbar
          alignLinks="right"
          brand={<Link to='/' className="brand-logo">Madeline Beke</Link>}
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true,
          }}
        >
          <Link to='/About'>About</Link>
          <Link to='/Portfolio'>Projects</Link>
          <Link to='/Resume'>Resume</Link>
          <Link to='/Contact'>Contact Me</Link>
          <Link to='https://github.com/m-beke'>GitHub</Link>
          <Link to='https://www.linkedin.com/in/madeline-beke-a3679740/'>LinkedIn</Link>
        </Navbar>
      </nav>
    </>);
}

export default Header;