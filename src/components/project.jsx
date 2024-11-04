import { Link } from "react-router-dom";
import { projects } from "../../utils/ProjectData";
import { Row, Col, Card, Button, CardTitle } from "react-materialize";


function Portfolio() {
    return (
        <div className="project-div">
            {projects.map((project) => (
                <Link to={project.link} className="project-card-link">
                    <Row className="project-row">
                        <Col className="project-col">
                            <Card className="project-card large"
                                actions={[
                                    <Link className="white-text" to={project.repository}>
                                        <Button className="project-link">
                                            Repository
                                        </Button>
                                    </Link>
                                ]}
                                header={
                                    <>
                                        <h2 className="header">{project.title}</h2>
                                        <CardTitle
                                            className="project-picture"
                                            image={project.picture}
                                        >
                                        </CardTitle>
                                    </>
                                }
                            >
                                <p>{project.description}</p>
                                {project.tools.map((tool) => (
                                    <img
                                        className="project-tool"
                                        src={tool}
                                        alt={`Icon for ${project.title}`}
                                        style={{
                                            width: '30px', height: '35px', margin: '5px'
                                        }}
                                    />
                                ))}
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