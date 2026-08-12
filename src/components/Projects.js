import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { BoxArrowUpRight } from 'react-bootstrap-icons';
import { featuredProjects, otherProjects } from '../data/projects';
import colorSharp2 from '../assets/img/color-sharp2.png';

const Projects = () => {
    const renderProjectCard = (project, index, isFeatured = false) => {
        const hasLiveDemo = project.links.some(l => l.type === 'live');
        return (
            <Card className={`project-card-v2 project-accent-${project.accent} h-100`} key={index}>
                <Row className="g-0 h-100 align-items-stretch">
                    {/* Image Column: 5/12 = 41.7% width on desktop */}
                    <Col lg={5} md={5} xs={12} className="project-image-column">
                        <div className="project-image-container-horizontal h-100">
                            <img src={project.image} alt={project.title} className="project-img-horizontal" />
                        </div>
                    </Col>
                    {/* Content Column: 7/12 = 58.3% width on desktop */}
                    <Col lg={7} md={7} xs={12}>
                        <Card.Body className="d-flex flex-column justify-content-center h-100 p-4 text-start">
                            <div className="mb-1">
                                <span className="project-category-label text-uppercase">{project.category}</span>
                            </div>
                            <Card.Title className="project-title-v2 mb-2">{project.title}</Card.Title>
                            
                            <Card.Text className="project-description-v2 mb-3">
                                {project.description}
                            </Card.Text>
                            
                            {/* Technical Highlights Bullets */}
                            <ul className="project-highlights-bullets ps-3 mb-3 text-start">
                                {project.highlights && project.highlights.map((highlight, hIdx) => (
                                    <li key={hIdx} className="project-highlight-li">{highlight}</li>
                                ))}
                            </ul>

                            <div className="project-tech-badges d-flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, idx) => (
                                    <span className="tech-badge-v2" key={idx}>{tech}</span>
                                ))}
                            </div>

                            <div className="project-actions-v2 d-flex align-items-center flex-wrap gap-4 mt-2">
                                {project.links.map((link, idx) => {
                                    const isPrimary = link.type === 'live' || (!hasLiveDemo && idx === 0);
                                    
                                    if (isPrimary) {
                                        return (
                                            <Button 
                                                href={link.href} 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                key={idx} 
                                                className="primary-button project-primary-btn"
                                            >
                                                {link.label} <BoxArrowUpRight size={14} className="ms-1" />
                                            </Button>
                                        );
                                    } else {
                                        return (
                                            <a 
                                                href={link.href} 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                key={idx} 
                                                className="project-secondary-link"
                                            >
                                                {link.label} <BoxArrowUpRight size={12} className="ms-1" />
                                            </a>
                                        );
                                    }
                                })}
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        );
    };

    return (
        <section className="project-section" id="projects">
            <Container>
                {/* Featured Projects Section */}
                <Row className="justify-content-center mb-4">
                    <Col lg={10} className="text-center">
                        <h2 className="section-title"><span className="section-number">03 /</span> Featured Projects</h2>
                        <p className="section-subtitle">
                            A selection of projects spanning software engineering, backend systems, data engineering, and AI applications.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-5">
                    {featuredProjects.map((project, index) => (
                        <Col lg={10} md={12} xs={12} className="mb-5" key={index}>
                            {renderProjectCard(project, index, true)}
                        </Col>
                    ))}
                </Row>

                {/* Secondary / Other Projects Section */}
                <Row className="justify-content-center mt-5 mb-4">
                    <Col lg={10} className="text-center">
                        <h3 className="sub-section-title">Additional Projects</h3>
                        <p className="sub-section-subtitle">
                            Additional systems development and research projects exploring LLMs and deep learning.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    {otherProjects.map((project, index) => (
                        <Col lg={10} md={12} xs={12} className="mb-4" key={index}>
                            {renderProjectCard(project, index, false)}
                        </Col>
                    ))}
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background" />
        </section>
    );
};

export default Projects;