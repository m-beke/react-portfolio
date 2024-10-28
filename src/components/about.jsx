import { Link } from "react-router-dom";
import { story } from "../../utils/AboutData";
import { Carousel } from "react-materialize";
import { Icon } from "react-materialize";

function About() {
    return (
        <div className="about-cards">
            <Carousel
                carouselId="Carousel-37"
                className="white-text center"
                options={{
                    fullWidth: true,
                    indicators: true,
                    noWrap: true,
                    numVisible: 3,
                    onCycleTo: null,
                }}
                fixedItem={
                    <>
                        <Icon>
                            arrow_backward
                        </Icon>
                        <Icon>
                            arrow_forward
                        </Icon>
                    </>
                }
            >
                {story.map((about) => (
                    <div className="about-card">
                        <h2 className="about-chapter">
                            {about.chapter}
                        </h2>
                        <p className="about-p">
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