import { Container, Row, Col, Card } from 'react-bootstrap';
import { Briefcase, Mortarboard, Trophy, BoxArrowUpRight } from 'react-bootstrap-icons';

const ExperienceEducation = () => {
    return (
        <section className="exp-edu-section" id="experience">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col lg={10} className="text-center">
                        <h2 className="section-title"><span className="section-number">05 /</span> Experience & Education</h2>
                        <p className="section-subtitle">
                            My professional journey, enterprise data engineering roles, and academic background.
                        </p>
                    </Col>
                </Row>
                <Row>
                    {/* Experience Column */}
                    <Col lg={7} md={12} className="mb-5 mb-lg-0">
                        <div className="section-header-block d-flex align-items-center mb-4">
                            <Briefcase className="section-icon me-2 text-primary" />
                            <h4 className="text-white mb-0" style={{ fontSize: '1.2rem', fontWeight: '700', letterSpacing: '0.5px' }}>Professional Experience</h4>
                        </div>
                        <div className="timeline-container">
                            {/* Infosys - E.ON */}
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <Card className="exp-edu-card">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                            <div>
                                                <h4 className="card-item-title text-white mb-0">Infosys</h4>
                                                <span className="card-item-subtitle text-primary d-block">Specialist Programmer (Client: E.ON UK)</span>
                                            </div>
                                            <span className="card-timeline-date">Feb 2026 – Present</span>
                                        </div>
                                        <ul className="subproject-bullets ps-3 mb-3">
                                            <li>Developed reusable PySpark transformation logic to ingest data from Oracle, SharePoint, and SQL Server into Databricks Lakehouse tables while maintaining schema consistency and data quality.</li>
                                            <li>Replicated and optimized existing Matillion workflows into Databricks pipelines, reducing processing latency.</li>
                                            <li>Improved pipeline reliability by introducing validation checks and incremental loading, reducing data inconsistencies.</li>
                                        </ul>
                                        <div className="experience-tech-row d-flex flex-wrap gap-2 mt-2">
                                            <span className="tech-badge">PySpark</span>
                                            <span className="tech-badge">Databricks</span>
                                            <span className="tech-badge">SQL Server</span>
                                            <span className="tech-badge">Matillion</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            {/* Infosys - Charter */}
                            <div className="timeline-item mt-4">
                                <div className="timeline-dot"></div>
                                <Card className="exp-edu-card">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                            <div>
                                                <h4 className="card-item-title text-white mb-0">Infosys</h4>
                                                <span className="card-item-subtitle text-primary d-block">Specialist Programmer (Client: Charter Communications)</span>
                                            </div>
                                            <span className="card-timeline-date">May 2025 – Dec 2025</span>
                                        </div>
                                        <ul className="subproject-bullets ps-3 mb-3">
                                            <li>Migrated large-scale telecom datasets from on-prem Cloudera infrastructure to AWS environments using PySpark, Amazon S3, and EC2.</li>
                                            <li>Developed automated PySpark scripts and managed DAGs to ensure reliable data orchestration and pipeline execution.</li>
                                            <li>Optimized PySpark ingestion for 4–5 TB partitioned datasets by introducing partition pruning and executor configuration tuning, reducing runtime by nearly 30%.</li>
                                            <li>Integrated Apache Iceberg table formats to support scalable schema evolution and improve query efficiency.</li>
                                        </ul>
                                        <div className="experience-tech-row d-flex flex-wrap gap-2 mt-2">
                                            <span className="tech-badge">PySpark</span>
                                            <span className="tech-badge">AWS S3</span>
                                            <span className="tech-badge">AWS EC2</span>
                                            <span className="tech-badge">Apache Iceberg</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            {/* Infosys - Trainee */}
                            <div className="timeline-item mt-4">
                                <div className="timeline-dot"></div>
                                <Card className="exp-edu-card">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                            <div>
                                                <h4 className="card-item-title text-white mb-0">Infosys</h4>
                                                <span className="card-item-subtitle text-primary d-block">Specialist Programmer Trainee</span>
                                            </div>
                                            <span className="card-timeline-date">Dec 2024 – May 2025</span>
                                        </div>
                                        <ul className="subproject-bullets ps-3 mb-3">
                                            <li>Completed intensive training under the Big Data track with hands-on exposure to Python, SQL, PySpark, AWS, and Linux/Unix systems.</li>
                                            <li>Cleared multiple technical assessments focused on Big Data engineering, cloud infrastructure, and algorithmic problem-solving.</li>
                                            <li>Developed a PySpark and Unix capstone project involving exploratory analysis of raw datasets to derive insights.</li>
                                        </ul>
                                        <div className="experience-tech-row d-flex flex-wrap gap-2 mt-2">
                                            <span className="tech-badge">Python</span>
                                            <span className="tech-badge">SQL</span>
                                            <span className="tech-badge">PySpark</span>
                                            <span className="tech-badge">AWS</span>
                                            <span className="tech-badge">Unix/Linux</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="view-resume-container mt-4 ps-3">
                            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="view-resume-link">
                                View Full Resume <BoxArrowUpRight size={13} className="ms-1" />
                            </a>
                        </div>
                    </Col>

                    {/* Education & Achievements Column */}
                    <Col lg={5} md={12}>
                        {/* Education Block */}
                        <div className="section-header-block d-flex align-items-center mb-4">
                            <Mortarboard className="section-icon me-2 text-primary" />
                            <h4 className="text-white mb-0" style={{ fontSize: '1.2rem', fontWeight: '700', letterSpacing: '0.5px' }}>Education</h4>
                        </div>
                        <div className="timeline-container mb-5">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <Card className="exp-edu-card">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                            <div>
                                                <h4 className="card-item-title text-white mb-0">NIT Jalandhar</h4>
                                                <span className="card-item-subtitle text-primary edu-degree">B.Tech — CSE</span>
                                            </div>
                                            <span className="card-timeline-date">Nov 2020 – 2024</span>
                                        </div>
                                        <p className="card-item-description mb-2">
                                            Dr. B.R. Ambedkar National Institute of Technology Jalandhar, Punjab.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                        {/* Achievements Block */}
                        <div className="section-header-block d-flex align-items-center mb-4">
                            <Trophy className="section-icon me-2 text-primary" />
                            <h4 className="text-white mb-0" style={{ fontSize: '1.2rem', fontWeight: '700', letterSpacing: '0.5px' }}>Achievements & Activities</h4>
                        </div>
                        <div className="timeline-container">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="achievements-grid d-flex flex-column gap-3">
                                    {/* Metric Card 1 */}
                                    <Card className="achievement-metric-card">
                                        <Card.Body className="d-flex align-items-center gap-3">
                                            <div className="metric-number-wrapper purple">
                                                <span className="metric-number">1000+</span>
                                            </div>
                                            <div>
                                                <h5 className="metric-title text-white mb-0">DSA Problems Solved</h5>
                                                <p className="metric-desc mb-0">Across LeetCode, CodeChef, HackerRank, and GeeksforGeeks.</p>
                                            </div>
                                        </Card.Body>
                                    </Card>

                                    {/* Metric Card 2 */}
                                    <Card className="achievement-metric-card">
                                        <Card.Body className="d-flex align-items-center gap-3">
                                            <div className="metric-number-wrapper blue">
                                                <span className="metric-number">Core</span>
                                            </div>
                                            <div>
                                                <h5 className="metric-title text-white mb-0">0-day Hack Club</h5>
                                                <p className="metric-desc mb-0">Official cybersecurity club of NIT Jalandhar, Blue Team defense member.</p>
                                            </div>
                                        </Card.Body>
                                    </Card>

                                    {/* Metric Card 3 */}
                                    <Card className="achievement-metric-card">
                                        <Card.Body className="d-flex align-items-center gap-3">
                                            <div className="metric-number-wrapper magenta">
                                                <span className="metric-number">Core</span>
                                            </div>
                                            <div>
                                                <h5 className="metric-title text-white mb-0">Gaming Geeks Society</h5>
                                                <p className="metric-desc mb-0">Managed inter-college competitive gaming tournaments and events.</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ExperienceEducation;
