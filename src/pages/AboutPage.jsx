import '../styles/about.css';
import About from '../components/about';
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
        <div className="section white">
          <div className="row container">
            <p className="grey-text text-darken-3 lighten-3 about-p">
              My name is Maddie Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odit molestias aperiam sint incidunt debitis quasi perferendis, explicabo tenetur nihil sapiente unde, similique asperiores dolor ab architecto consequatur nostrum rerum dignissimos obcaecati! Nobis ipsa modi ex velit ea sapiente consectetur, commodi eos mollitia, sint doloribus rerum inventore quasi! Totam adipisci enim sit impedit iste quos, distinctio laborum voluptatum cum placeat molestiae, possimus, ipsa repudiandae aspernatur aliquid. Est, officia exercitationem quos hic illum vel iste amet dolore suscipit provident eaque a eum, ea distinctio vero nulla assumenda. Sit dolorem, eaque, natus quos recusandae molestiae blanditiis qui saepe commodi accusamus culpa architecto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ipsa aut, recusandae expedita eos unde numquam explicabo esse quis ullam libero vero. Enim laudantium cum temporibus repudiandae! Quos numquam tempore distinctio doloribus illum explicabo quas, reprehenderit blanditiis modi fugiat quasi assumenda, nesciunt impedit possimus libero magnam maxime quo molestias iste odio delectus optio nostrum enim magni. In consectetur cum commodi omnis optio debitis corrupti doloribus? Quas ad tempora asperiores libero eum nisi labore non sunt mollitia tenetur modi dolorum repudiandae, maiores distinctio iste aspernatur neque numquam quae? Neque ipsam officia eius atque quas similique doloremque, dolor repellendus? Veritatis, iure libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, inventore!
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
            <p className="grey-text text-darken-3 lighten-3 about-p">
              I am a person who is driven by my passions, and ever since I was young, I've always had a passion the arts. After learning how to play guitar at age 10, I learned how to play the saxophone in middle school. I attended the Leadership Conservatory for the Arts at Tarpon Springs High School, where my class would go on to perform in the 2013 Macy's Thanksgiving Day Parade, win 1st place in the Bands of America Grand National Championships, and have the opportunity to perform with famous contemporary jazz musician Wycliffe Gordon, and current leader of the Count Basie Orchestra, Scotty Barnhart. After graduating in 2015, I decided to pursue another art medium I was passionate about: Film. I attended Valencia College, where I got my A.S. degree in Film Production Technology. Once I got my degree in 2018, I moved out to Atlanta, Georgia to start my career as a freelance Production Coordinator. In that time, I worked on numerous film and tv sets, including The Tonight Show with Jimmy Fallon, American Idol, David Makes Man, and more.
            </p>
            <div className='video-wrapper'>
              <iframe width="420" height="236.25" src="https://www.youtube.com/embed/3Qr0TU4Rj7k?si=Xz4V5XDvL9N4VAxm" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
        <div className="section white">
          <div className="row container">
            <p className="grey-text text-darken-3 lighten-3 about-p">
              When the COVID-19 pandemic hit, film work began to dry up. After the pandemic, that well stayed dry; I had to find a new line of work that would fill me with the same drive that music and film had. That led me to exploring one of my other passions: Computers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odit molestias aperiam sint incidunt debitis quasi perferendis, explicabo tenetur nihil sapiente unde, similique asperiores dolor ab architecto consequatur nostrum rerum dignissimos obcaecati! Nobis ipsa modi ex velit ea sapiente consectetur, commodi eos mollitia, sint doloribus rerum inventore quasi! Totam adipisci enim sit impedit iste quos, distinctio laborum voluptatum cum placeat molestiae, possimus, ipsa repudiandae aspernatur aliquid. Est, officia exercitationem quos hic illum vel iste amet dolore suscipit provident eaque a eum, ea distinctio vero nulla assumenda. Sit dolorem, eaque, natus quos recusandae molestiae blanditiis qui saepe commodi accusamus culpa architecto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ipsa aut, recusandae expedita eos unde numquam explicabo esse quis ullam libero vero. Enim laudantium cum temporibus repudiandae! Quos numquam tempore distinctio doloribus illum explicabo quas, reprehenderit blanditiis modi fugiat quasi assumenda, nesciunt impedit possimus libero magnam maxime quo molestias iste odio delectus optio nostrum enim magni. In consectetur cum commodi omnis optio debitis corrupti doloribus? Quas ad tempora asperiores libero eum nisi labore non sunt mollitia tenetur modi dolorum repudiandae, maiores distinctio iste aspernatur neque numquam quae? Neque ipsam officia eius atque quas similique doloremque, dolor repellendus? Veritatis, iure libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, inventore!
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
            <p className="grey-text text-darken-3 lighten-3 about-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odit molestias aperiam sint incidunt debitis quasi perferendis, explicabo tenetur nihil sapiente unde, similique asperiores dolor ab architecto consequatur nostrum rerum dignissimos obcaecati! Nobis ipsa modi ex velit ea sapiente consectetur, commodi eos mollitia, sint doloribus rerum inventore quasi! Totam adipisci enim sit impedit iste quos, distinctio laborum voluptatum cum placeat molestiae, possimus, ipsa repudiandae aspernatur aliquid. Est, officia exercitationem quos hic illum vel iste amet dolore suscipit provident eaque a eum, ea distinctio vero nulla assumenda. Sit dolorem, eaque, natus quos recusandae molestiae blanditiis qui saepe commodi accusamus culpa architecto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ipsa aut, recusandae expedita eos unde numquam explicabo esse quis ullam libero vero. Enim laudantium cum temporibus repudiandae! Quos numquam tempore distinctio doloribus illum explicabo quas, reprehenderit blanditiis modi fugiat quasi assumenda, nesciunt impedit possimus libero magnam maxime quo molestias iste odio delectus optio nostrum enim magni. In consectetur cum commodi omnis optio debitis corrupti doloribus? Quas ad tempora asperiores libero eum nisi labore non sunt mollitia tenetur modi dolorum repudiandae, maiores distinctio iste aspernatur neque numquam quae? Neque ipsam officia eius atque quas similique doloremque, dolor repellendus? Veritatis, iure libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, inventore!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;