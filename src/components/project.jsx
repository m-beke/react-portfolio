import { Link } from "react-router-dom";
import { projects } from "../../utils/ProjectData";
import { Row, Col, Card, Icon, CardTitle } from "react-materialize";


function Portfolio() {
    return (
        <div className="project-div">
            {projects.map((project) => (
                <Link to={project.link} className="project-card-link">
                    <Row className="project-row">
                        <Col className="project-col">
                            <Card className="project-card large"
                                actions={[
                                    <a href={project.repository} className="white-text project-link">Repository</a>
                                ]}
                                header={
                                    <>
                                        <h2 className="header">{project.title}</h2>
                                        <CardTitle
                                            image={project.picture}
                                        >
                                        </CardTitle>
                                    </>
                                }
                            >
                                <p>{project.description}</p>
                            </Card>
                        </Col>
                    </Row>
                </Link>
            ))
            }
        </div >
    );
}



export default Portfolio;