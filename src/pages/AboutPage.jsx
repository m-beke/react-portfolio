import '../styles/about.css';
import About from '../components/about';
import { assets } from '../../utils/Assets';
import { Parallax } from 'react-materialize';

function AboutPage() {
  return (
    <>
      <div className='about-wrapper'>
        <Parallax
          image={<img className="about-img" alt="" src={assets.aboutHeader}/>}
          options={{
            responsiveThreshold: 0, 
          }}
          children={<h1 className='about-heading'>About</h1>}
        />
        <div className="section white">
          <div className="row container">
            <h2 className="header">
              Past
            </h2>
            <p className="grey-text text-darken-3 lighten-3 about-p">
              My name is Maddie
            </p>
          </div>
        </div>
        <Parallax
          image={<img className='about-img' alt="" src={assets.aboutMusicHeader} />}
          options={{
            responsiveThreshold: 0
          }}
          children={<h1 className='about-heading'>Past</h1>}
        />
         <div className="section white">
          <div className="row container">
            <h2 className="header">
              Past
            </h2>
            <p className="grey-text text-darken-3 lighten-3 about-p">
              I am a person who is driven by my passions, and ever since I was young, I've always had a passion the arts. After learning how to play guitar at age 10, I learned how to play the saxophone in middle school. I attended the Leadership Conservatory for the Arts at Tarpon Springs High School, where my class would go on to perform in the 2013 Macy's Thanksgiving Day Parade, win 1st place in the Bands of America Grand National Championships, and have the opportunity to perform with famous contemporary jazz musician Wycliffe Gordon, and current leader of the Count Basie Orchestra, Scotty Barnhart. After graduating in 2015, I decided to pursue another art medium I was passionate about: Film. I attended Valencia College, where I got my A.S. degree in Film Production Technology. Once I got my degree in 2018, I moved out to Atlanta, Georgia to start my career as a freelance Production Coordinator. In that time, I worked on numerous film and tv sets, including The Tonight Show with Jimmy Fallon, American Idol, David Makes Man, and more. When the COVID-19 pandemic hit, film work began to dry up. After the pandemic, that well stayed dry; I had to find a new line of work that would fill me with the same drive that music and film had. That led me to exploring one of my other passions: Computers.
            </p>
            <iframe className="youtube-vid" width="560" height="315" src="https://www.youtube.com/embed/3Qr0TU4Rj7k?si=Xz4V5XDvL9N4VAxm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
        <Parallax
          image={<img className='about-img' alt="" src={assets.aboutFilmHeader} />}
          options={{
            responsiveThreshold: 0
          }}
          children={<h1 className='about-heading'>Present</h1>}
        />
         <div className="section white">
          <div className="row container">
            <h2 className="header">
              Past
            </h2>
            <p className="grey-text text-darken-3 lighten-3 about-p">
              Present Text
            </p>
          </div>
          </div>
        <Parallax
          image={<img className='about-img' alt="" src={assets.aboutCodeHeader} />}
          options={{
            responsiveThreshold: 0
          }}
          children={<h1 className='about-heading'>Future</h1>}
        />
        <div className="section white">
          <div className="row container">
            <h2 className="header">
              Past
            </h2>
            <p className="grey-text text-darken-3 lighten-3 about-p">
              Future Text
            </p>
          </div>
          </div>
      </div>
    </>
  );
}

export default AboutPage;