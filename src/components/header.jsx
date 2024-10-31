import '../styles/header.css';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-materialize';
import { NavItem } from 'react-materialize';
import { Button } from 'react-materialize';
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { mdiMenu } from '@mdi/js';
import { mdiFileDownloadOutline } from '@mdi/js';
import { mdiInformationOutline } from '@mdi/js';
import { mdiApplicationBracketsOutline } from '@mdi/js';
import { mdiEmailArrowRightOutline } from '@mdi/js';




import profilePic from "../assets/images/IMG_1448.jpg";
import pdf from "../assets/pdf/MB_Coding_Resume.pdf";

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
                position: 'bottom',
              }}
            >
              <Link to='/' className="brand-logo">Madeline Beke</Link>
            </Button>}
          id="mobile-nav"
          menuIcon={<Icon className='menu-icon' path={mdiMenu} size={1.5}></Icon>}
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
          sidenav={
            <>
              <div className='sidenav-card'>
                <img src={profilePic} class='sidenav-pfp'></img>
                <div className='sidenav-title'>
                  <Link to='/' className="sidenav-logo">Madeline Beke</Link>
                  <div className='sidenav-links'>
                    <Link to='https://github.com/m-beke'
                      className='sidenav-icon'
                    >
                      <Icon
                        className='sidenav-git'
                        path={mdiGithub}
                        title="Github"
                        size={2}
                        horizontal
                        vertical
                        rotate={180}
                        color="white"
                      />
                    </Link>
                    <Link to='https://www.linkedin.com/in/madeline-beke-a3679740/' className="sidenav-icon">
                      <Icon
                        className='sidenav-linked'
                        path={mdiLinkedin}
                        title="Linkedin"
                        size={2}
                        color="White"
                      />
                    </Link></div>
                </div>
              </div>
              <li class="sidenav-close">
                <Link to='/About'>
                  <Icon className="nav-icon" path={mdiInformationOutline} size={1} />
                  About</Link>
              </li>
              <li class="sidenav-close">
                <Link to='/Portfolio'><Icon className="nav-icon" path={mdiApplicationBracketsOutline} size={1} />Projects
                </Link>
              </li>
              <li class="sidenav-close">

                <Link to='/Contact'>
                  <Icon className="nav-icon" path={mdiEmailArrowRightOutline} size={1} />Contact</Link>
              </li>
              <li class="sidenav-close">
                <a href={pdf} download="MB_Coding_Resume">
                  <Icon className="nav-icon" path={mdiFileDownloadOutline} size={1}></Icon>
                  Resume</a>
              </li>
            </>
          }
        >
          <Link to='/About' className='portfolio-link'>
            <Icon className="nav-icon" path={mdiInformationOutline} size={1} />
            About
          </Link>
          <Link to='/Portfolio' className='portfolio-link'>
            <Icon className="nav-icon" path={mdiApplicationBracketsOutline} size={1} />
            Projects
          </Link>
          <Link to='/Contact' className='portfolio-link'>
            <Icon className="nav-icon" path={mdiEmailArrowRightOutline} size={1} />
            Contact
          </Link>

          <a href={pdf} className='portfolio-link' download="MB_Coding_Resume">
            <Icon className="nav-icon" path={mdiFileDownloadOutline} size={1} color="white" ></Icon>
            Resume
          </a>


          <NavItem className='nav-link'>
            <Link to='https://github.com/m-beke'
              className='icon-link'
            >
              <Icon
                className='git-icon'
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
                className='linked-icon'
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
