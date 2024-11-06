import '../styles/about.css';
import { assets } from '../../utils/Assets';
import { Parallax } from 'react-materialize';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { DrawUp, EnterRight, EnterLeft } from '../components/animations';

function AboutPage() {
  return (
    <>

        <div className='about-wrapper'>
          <Fade
        triggerOnce='true'
      >
          <Parallax
            image={<img className="about-img-main" alt="" src={assets.aboutHeader} />}
            options={{
              responsiveThreshold: 0,
            }}
            children={<Fade
              delay={1000}
            >
              <h1 className='about-heading-main'>
                About
              </h1>
            </Fade>}
          />
          <div className="section">
            <div className="row container">
              <DrawUp>
                <div className='p-wrapper'>
                  <EnterRight>
                    <p className="about-p">
                      Hello! My name is Maddie and I am a 28 year old Full-Stack Web Developer from Tampa, FL. I utilize problem-solving and creativity to create elegant, user-friendly applications. My hobbies include reading, writing, music, and gaming.
                    </p>
                    <p className='about-p'>
                      I am passionate about art and creation in any form. That passion has been a driving force throughout my life, as I've navigated school and the workforce.
                    </p>
                  </EnterRight>
                </div>
              </DrawUp>
            </div>
          </div></Fade>
          <Parallax
            image={<img className='about-img' alt="" src={assets.aboutMusicHeader} />}
            options={{
              responsiveThreshold: 0
            }}
            children={<Fade><h1 className='about-heading'>Past</h1></Fade>}
          />
          <div className="section">
            <div className="row container">
              <DrawUp>
                <div className='p-wrapper'>
                  <EnterRight>
                    <p className="about-p">
                      Music was one of my first passions. After learning how to play guitar at age 10, I picked the saxophone in middle school. I would go on to attended the Leadership Conservatory for the Arts at Tarpon Springs High School, where I got to perform in the 2013 Macy's Thanksgiving Day Parade, win 1st place in the Bands of America Grand National Championships, and perform with famous contemporary jazz musicians Wycliffe Gordon and Scotty Barnhart.
                    </p>
                  </EnterRight>
                </div>
              </DrawUp>
              <Fade
                delay={1000}>
                <div className='video-wrapper'>
                  <iframe
                    width="378" height="212.4" src="https://www.youtube.com/embed/3Qr0TU4Rj7k?si=Xz4V5XDvL9N4VAxm" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                  >
                  </iframe>
                </div>
              </Fade>
              <DrawUp>
                <div className='secondary-p-wrapper'>
                  <EnterLeft>
                    <p className='about-p-end'>
                      After graduating in 2015, I moved to Orlando, FL, where I would attend Valencia College, and pursue another art medium I was passionate about: Film...
                    </p>
                  </EnterLeft>
                </div>
              </DrawUp>
            </div>
          </div>
          <Parallax
            image={<img className='about-img' alt="" src={assets.aboutFilmHeader} />}
            options={{
              responsiveThreshold: 0
            }}
            children={<Fade><h1 className='about-heading'>Present</h1></Fade>}
          />
          <div className="section">

            <div className="row container">
              <DrawUp>
                <div className='p-wrapper'>
                  <EnterRight>
                    <p className="about-p">
                      Once I received my A.S. degree in Film Production Technology in 2018, I moved out to Atlanta, Georgia to start my career as a freelance Production Coordinator. In that time, I worked on numerous film and tv sets, including The Tonight Show with Jimmy Fallon, American Idol, David Makes Man, and more.
                    </p></EnterRight>
                </div></DrawUp>
              <DrawUp>
                <div className='secondary-p-wrapper'>
                  <EnterLeft>
                    <p className="about-p-end">
                      When the COVID-19 pandemic hit, film work began to dry up. After the pandemic, that well stayed dry; I had to find a new line of work that would fill me with the same drive that music and film had. That search took me back to school, where I would discover a new passion in coding...
                    </p>
                  </EnterLeft>
                </div>
              </DrawUp>
            </div>
          </div>
          <Parallax
            image={<img className='about-img' alt="" src={assets.aboutCodeHeader} />}
            options={{
              responsiveThreshold: 0
            }}
            children={<Fade><h1 className='about-heading'>Future</h1></Fade>}
          />
          <div className="section">
            <div className="row container">
              <DrawUp>
                <div className='p-wrapper'>
                  <EnterRight>
                    <p className="about-p">
                      From 2023-2024, I attended the Coding Bootcamp at the University of Central Florida. There, I became certified in HTML5, CSS3, Javascript, MySQL, MongoDB, Express, React, and Node.Js. I utilized these skills to create numerous projects with my classmates.
                    </p>
                  </EnterRight>
                </div>
              </DrawUp>
              <div className='link-wrapper'>
                <Fade
                  delay={1000}
                >
                  <Link to='/Portfolio' className='about-portfolio-link'>
                    Check out my Work!
                  </Link>
                </Fade>
              </div>
              <DrawUp>
                <div className='secondary-p-wrapper'>
                  <EnterLeft>
                    <p className="about-p-end">
                      I am still looking for my niche when it comes to coding, but I have a hunger for knowledge and a strong desire to learn as much as I can so that I may find that niche. I'm confident that my passion for it will lead me to success and I can't wait to get to work!
                    </p>
                  </EnterLeft>
                </div>
              </DrawUp>
            </div>
          </div>
        </div>
    </>
  );
}

export default AboutPage;