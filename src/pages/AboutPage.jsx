import '../styles/about.css';
import { assets } from '../../utils/Assets';
import { Parallax } from 'react-materialize';

function AboutPage() {
  return (
    <>
      <div className='about-wrapper'>
        <Parallax
          image={<img className="about-img" alt="" src={assets.aboutHeader} />}
          options={{
            responsiveThreshold: 0,
          }}
          children={<h1 className='about-heading-main'>About</h1>}
        />
        <div className="section">
          <div className="row container">
            <div className='p-wrapper'>
              <p className="about-p">
                Hello! My name is Maddie and I am a 28 year old Full-Stack Web Developer from Tampa, FL. I utilize problem-solving and creativity to create elegant, user-friendly applications. My hobbies include reading, writing, music, and gaming.
              </p>
              <p className='about-p'>
                I am passionate about art and creation in any form. That passion has been a driving force throughout my life, as I've navigated school and the workforce.
              </p>
            </div>
          </div>
        </div>
        <Parallax
          image={<img className='about-img' alt="" src={assets.aboutMusicHeader} />}
          options={{
            responsiveThreshold: 0
          }}
          children={<h1 className='about-heading'>Past</h1>}
        />
        <div className="section">
          <div className="row container">
            <div className='p-wrapper'>
              <p className="about-p">
                Music was one of my first passions. After learning how to play guitar at age 10, I picked the saxophone in middle school. I would go on to attended the Leadership Conservatory for the Arts at Tarpon Springs High School, where I got to perform in the 2013 Macy's Thanksgiving Day Parade, win 1st place in the Bands of America Grand National Championships, and perform with famous contemporary jazz musician Wycliffe Gordon, and current leader of the Count Basie Orchestra, Scotty Barnhart. After graduating in 2015, I decided to pursue another art medium I was passionate about: Film...
              </p>
            </div>
            <div className='video-wrapper'>
              <iframe width="378" height="212.4" src="https://www.youtube.com/embed/3Qr0TU4Rj7k?si=Xz4V5XDvL9N4VAxm" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <Parallax
          image={<img className='about-img' alt="" src={assets.aboutFilmHeader} />}
          options={{
            responsiveThreshold: 0
          }}
          children={<h1 className='about-heading'>Present</h1>}
        />
        <div className="section">
          <div className="row container">
            <div className='p-wrapper'>
              <p className="about-p">
                I attended Valencia College, where I got my A.S. degree in Film Production Technology. Once I got my degree in 2018, I moved out to Atlanta, Georgia to start my career as a freelance Production Coordinator. In that time, I worked on numerous film and tv sets, including The Tonight Show with Jimmy Fallon, American Idol, David Makes Man, and more.
              </p>
              <p className="about-p">
                When the COVID-19 pandemic hit, film work began to dry up. After the pandemic, that well stayed dry; I had to find a new line of work that would fill me with the same drive that music and film had. That led me to exploring one of my other passions: Computers...
              </p>
            </div>
          </div>
        </div>
        <Parallax
          image={<img className='about-img' alt="" src={assets.aboutCodeHeader} />}
          options={{
            responsiveThreshold: 0
          }}
          children={<h1 className='about-heading'>Future</h1>}
        />
        <div className="section">
          <div className="row container">
            <div className='p-wrapper'>
              <p className="about-p">
                I decided to go back to school. From 2023-2024, I attended UCF's Coding Bootcamp, where I became certified in HTML5, CSS3, Javascript, MySQL, MongoDB, Express, React, and Node.Js. I am still looking for my niche when it comes to coding, but I'm confident that my passion for it will guide my way as I enter this new profession...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;