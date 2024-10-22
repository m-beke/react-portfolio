import '../styles/about.css';
import profilePic from "../assets/images/IMG_1448.jpg";
import { Link } from "react-router-dom";
import { Icon } from 'react-materialize';
import { Carousel } from 'react-materialize';

function AboutPage() {
  return (
    <>
      <div className="project-cards">
            <Carousel
                carouselId="Carousel-37"
                className="white-text center"
                options={{
                    fullWidth: true,
                    indicators: true,
                }}
            >
                {projects.map((project) => (
                    <div className="red">
                        <h2>
                            {project.title}
                        </h2>
                        <p>
                            {project.description}
                        </p>
                        <Link to={project.link}>Check it out</Link>
                        <Link to={project.repository}>Repository</Link>
                        <img src={project.image}/>
                    </div>
                ))
                }
            </Carousel>
        </div >
    </>
  );
}

export default AboutPage;