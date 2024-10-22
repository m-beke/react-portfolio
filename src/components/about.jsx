import { Link } from "react-router-dom";
import { story } from "../../utils/AboutData";
import { Carousel } from "react-materialize";

function About() {
    return (
        <div className="project-cards">
            <Carousel
                carouselId="Carousel-37"
                className="white-text center"
                options={{
                    fullWidth: true,
                    indicators: true,
                }}
            >
                {story.map((about) => (
                    <div className="red">
                        <h2>
                            {about.chapter}
                        </h2>
                        <p>
                            {about.content}
                        </p>
                    </div>
                ))
                }
            </Carousel>
        </div >
    );
}

export default About;