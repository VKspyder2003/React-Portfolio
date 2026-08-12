import { Container, Row, Col, Card } from 'react-bootstrap';
import { Github, ArrowRight } from 'react-bootstrap-icons';
import { contributionsData } from '../data/contributions';

const OpenSource = () => {
    return (
        <section className="opensource" id="opensource">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10} className="text-center">
                        <h2 className="section-title"><span className="section-number">04 /</span> Open Source</h2>
                        <p className="section-subtitle">
                            I contribute to open-source projects by working on bug fixes, API improvements, testing, documentation, and developer tooling.
                        </p>
                    </Col>
                </Row>
                <Row className="contributions-grid justify-content-center mt-5">
                    {contributionsData.map((contribution, index) => (
                        <Col key={index} lg={6} md={6} sm={12} className="mb-4">
                            <Card className={`contribution-card contribution-accent-${contribution.accent} h-100`}>
                                <Card.Body className="d-flex flex-column justify-content-between h-100">
                                    <div>
                                        <div className="contribution-header d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                                            <div className="d-flex align-items-center">
                                                <Github className="repo-icon me-2" />
                                                <span className="repo-name">{contribution.repository}</span>
                                            </div>
                                            {contribution.pr && (
                                                <div className="contribution-pr-badge d-flex align-items-center gap-1">
                                                    <span className="pr-number">{contribution.pr}</span>
                                                    <span className="pr-bullet">•</span>
                                                    <span className={`pr-status ${contribution.status.toLowerCase()}`}>{contribution.status}</span>
                                                </div>
                                            )}
                                        </div>
                                        <Card.Title className="contribution-title mb-2">
                                            {contribution.title}
                                        </Card.Title>
                                        <Card.Text className="contribution-description">
                                            {contribution.description}
                                        </Card.Text>
                                    </div>
                                    <div className="contribution-footer mt-4">
                                        <div className="contribution-tags mb-3 d-flex flex-wrap gap-2">
                                            {contribution.technologies.map((tech, idx) => (
                                                <span className="tech-badge" key={idx}>{tech}</span>
                                            ))}
                                        </div>
                                        {contribution.url && contribution.url !== "#" ? (
                                            <a href={contribution.url} target="_blank" rel="noreferrer" className="contribution-link">
                                                View Contribution <ArrowRight className="ms-1" />
                                            </a>
                                        ) : (
                                            <span className="contribution-link-placeholder">
                                                Contribution Active <Github className="ms-1" />
                                            </span>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default OpenSource;
