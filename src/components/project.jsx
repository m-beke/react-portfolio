import { Link } from "react-router-dom";
import { projects } from "../../utils/ProjectData";
import { Row, Col, Card, Icon, CardTitle } from "react-materialize";

function Portfolio() {
    return (
        <div className="project-div">
            {projects.map((project) => (
                <Row className="project-row">
                    <Col className="project-col"
                        m={12}
                        s={12}
                    >
                        <Card className="project-card"
                            actions={[
                                <Link to={project.link} className="project-link">Check it out</Link>,
                                <Link to={project.repository} className="project-link">Repository</Link>
                            ]}
                            header={<CardTitle className="card-title"image={project.image}>{project.title}</CardTitle>}
                        >
                            {project.description}
                        </Card>
                    </Col>
                </Row>
            ))
            }
        </div>
    );
}



export default Portfolio;