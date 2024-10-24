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
import { Button } from 'react-materialize';
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { mdiMenu } from '@mdi/js';

function Header() {
  return (
    <>
      <nav>
        <Navbar
          alignLinks="right"
          brand={
            <Button
              className='home-btn'
              node="button"
              tooltip="Pronounced 'Becky'"
              tooltipOptions={{
                position: 'bottom'
              }}
            >
              <Link to='/' className="brand-logo">Madeline Beke</Link>
            </Button>}
          id="mobile-nav"
          menuIcon={<Icon className='nav-link' path={mdiMenu} size={2}></Icon>}
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
          <Link to='/About' className='portfolio-link'>About</Link>
          <Link to='/Portfolio'className='portfolio-link'>Projects</Link>
          <Link to='/Resume' className='portfolio-link' >Resume</Link>
          <Link to='/Contact' className='portfolio-link'>Contact Me</Link>
          <NavItem className='nav-link'>
            <Link to='https://github.com/m-beke'
            className='icon-link'
            >
              <Icon
                className='icon'
                path={mdiGithub}
                title="Github"
                size={2}
                horizontal
                vertical
                rotate={180}
                color="white"
              />
            </Link>
          </NavItem>
          <NavItem className='nav-link'>
            <Link to='https://www.linkedin.com/in/madeline-beke-a3679740/' className="icon-link">
              <Icon
                className='icon'
                path={mdiLinkedin}
                title="Linkedin"
                size={2}
                color="White"
              />
            </Link>
          </NavItem>
        </Navbar>
      </nav>
    </>);
}

export default Header;