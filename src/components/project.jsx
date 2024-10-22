import { Link } from "react-router-dom";
import { projects } from "../../utils/ProjectData";
import { Row, Col, Card, Icon, CardTitle } from "react-materialize";

function Portfolio() {
    return (
        <div className="project-cards">
            {projects.map((project) => (
                <Row>
                    <Col
                        m={6}
                        s={12}
                    >
                        <Card
                            actions={[
                                <Link to={project.link}>Check it out</Link>,
                                <Link to={project.repository}>Repository</Link>
                            ]}
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image={project.image}>{project.title}</CardTitle>}
                            revealIcon={<Icon>more_vert</Icon>}
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