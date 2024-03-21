import { projects } from "../../utils/ProjectData";

function Portfolio() {
    return (
        <div className="project-cards">
            {projects.map((project) => (
                <div className="project-card">
                    <div className="display-bg">
                        <div className="card-display">
                            <img
                                alt="gallery"
                                className="project-image"
                                src={project.image}
                            />
                            <h1 className="project-title">
                                {project.title}
                            </h1>

                            <div className="card-content">
                                <h2 className="project-subtitle">
                                    {project.subtitle}
                                </h2>
                                <p className="project-description">{project.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-links">
                        <div className="deployed-link">
                            <a href={project.link} className="project-link">CHECK IT OUT</a>
                        </div>
                        <div className="project-repo">
                            <a href={project.repository} className="repo-link">REPOSITORY</a>
                        </div>
                    </div>
                </div>
            ))
            }
        </div >
    );
}

export default Portfolio;