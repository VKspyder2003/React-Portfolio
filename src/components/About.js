import { Container, Row, Col, Card } from 'react-bootstrap';
import { CodeSlash, Database, Git } from 'react-bootstrap-icons';

const About = () => {
    const focusAreas = [
        {
            icon: <CodeSlash className="focus-card-icon" />,
            title: "SOFTWARE ENGINEERING",
            subtitle: "Backend & Application",
            details: ["Backend APIs", "Full-Stack Applications", "Real-Time Systems", "System Design", "Software Architecture"],
            accent: "purple"
        },
        {
            icon: <Database className="focus-card-icon" />,
            title: "DATA ENGINEERING",
            subtitle: "Scalable Data Systems",
            details: ["Data Pipelines", "Apache Spark / PySpark", "Databricks", "Cloud Data Platforms", "Data Migration"],
            accent: "indigo"
        },
        {
            icon: <Git className="focus-card-icon" />,
            title: "OPEN SOURCE",
            subtitle: "Real-World Codebases",
            details: ["Bug Fixes", "API Improvements", "Testing", "Documentation", "Code Quality"],
            accent: "violet"
        }
    ];

    return (
        <section className="about" id="about">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10} className="text-center">
                        <h2 className="section-title"><span className="section-number">01 /</span> About Me</h2>
                        <p className="about-description">
                            I'm a Software & Data Engineer who enjoys building reliable software and scalable data systems. My work spans backend development, cloud-based data platforms, enterprise data migration, and full-stack applications. I enjoy understanding systems deeply, solving practical engineering problems, and contributing to real-world open-source codebases.
                        </p>
                    </Col>
                </Row>
                <Row className="focus-grid justify-content-center">
                    {focusAreas.map((area, index) => (
                        <Col key={index} md={4} sm={12} className="mb-4">
                            <Card className={`focus-card focus-card-${area.accent} h-100`}>
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="icon-wrapper">
                                        {area.icon}
                                    </div>
                                    <Card.Title className="focus-card-title mb-1">{area.title}</Card.Title>
                                    <span className="focus-card-subtitle mb-3">{area.subtitle}</span>
                                    <ul className="focus-card-list">
                                        {area.details.map((detail, idx) => (
                                            <li key={idx}>{detail}</li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default About;
