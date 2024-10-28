import { Link } from "react-router-dom";
import { projects } from "../../utils/ProjectData";
import { Row, Col, Card, Icon, CardTitle } from "react-materialize";

function Portfolio() {
    return (
        <div className="project-div">
            {projects.map((project) => (
                <Link to={project.link} className="project-card-link">
                    <Row className="project-row">
                        <Col className="project-col"
                           m={12}
                        s={12}
                        >
                            <Card className="project-card"
                                actions={[
                                    ,
                                    <Link to={project.repository} >Repository</Link>
                                ]}
                                header={
                                    <>
                                        <h2 className="header">{project.title}</h2>
                                        <CardTitle
                                            image={project.image}
                                        >
                                        </CardTitle>
                                    </>
                                }
                            >
                                {project.description}
                            </Card>
                        </Col>
                    </Row></Link>
            ))
            }
        </div >
    );
}



export default Portfolio;