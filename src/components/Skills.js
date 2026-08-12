import { Container, Row, Col, Card } from 'react-bootstrap';
import { Github, CodeSlash, Award, ArrowRight } from 'react-bootstrap-icons';
import { skillsData } from '../data/skills';

const Skills = () => {
    // Map profile names to icons
    const getProfileIcon = (name) => {
        switch (name.toLowerCase()) {
            case 'github':
                return <Github size={28} className="profile-card-icon" />;
            case 'leetcode':
                return <CodeSlash size={22} className="profile-card-icon text-warning" />;
            case 'geeksforgeeks':
                return <Award size={22} className="profile-card-icon text-success" />;
            default:
                return <CodeSlash size={22} className="profile-card-icon" />;
        }
    };

    // Find profiles in data
    const githubProfile = skillsData.profiles.find(p => p.name.toLowerCase() === 'github');
    const leetcodeProfile = skillsData.profiles.find(p => p.name.toLowerCase() === 'leetcode');
    const gfgProfile = skillsData.profiles.find(p => p.name.toLowerCase() === 'geeksforgeeks');

    return (
        <section className="skills-section" id="skills">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col lg={10} className="text-center">
                        <h2 className="section-title"><span className="section-number">02 /</span> Skills & Profiles</h2>
                        <p className="section-subtitle">
                            Technologies and tools I use to build software, engineer data systems, and solve real-world problems.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-5">
                    <Col lg={10}>
                        {/* Skills Grid */}
                        <Row className="skills-grid">
                            {skillsData.categories.map((cat, idx) => (
                                <Col key={idx} md={4} sm={6} xs={12} className="mb-4">
                                    <Card className={`skills-card skills-card-${cat.accent} h-100`}>
                                        <Card.Body>
                                            <h4 className={`skills-card-title skills-card-title-${cat.accent}`}>
                                                {cat.title}
                                            </h4>
                                            <div className="skills-pills-container d-flex flex-wrap gap-2 mt-3">
                                                {cat.skills.map((skill, sIdx) => {
                                                    const pillClass = `skill-pill-v2 skill-pill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
                                                    return (
                                                        <span className={pillClass} key={sIdx}>
                                                            {skill}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>

                {/* Developer Profiles Grid */}
                <Row className="justify-content-center mt-5">
                    <Col lg={10}>
                        <h3 className="sub-section-title text-center mb-4">Developer Profiles</h3>
                        <Row className="profiles-dashboard">
                            {/* GitHub Card */}
                            {githubProfile && (
                                <Col md={4} xs={12} className="mb-4">
                                    <Card className="profile-card profile-card-github h-100">
                                        <Card.Body className="d-flex flex-column justify-content-between">
                                            <div>
                                                <div className="d-flex align-items-center gap-3 mb-3">
                                                    <div className="profile-icon-wrapper-large">
                                                        {getProfileIcon(githubProfile.name)}
                                                    </div>
                                                    <div>
                                                        <Card.Title className="profile-card-title mb-0">{githubProfile.name}</Card.Title>
                                                        <span className="profile-card-username">{githubProfile.username}</span>
                                                    </div>
                                                </div>
                                                <Card.Text className="profile-card-description">
                                                    Explore my personal repositories, open-source packages, documentation improvements, and contribution logs.
                                                </Card.Text>
                                            </div>
                                            <div className="mt-3">
                                                <a href={githubProfile.url} target="_blank" rel="noreferrer" className="profile-card-action">
                                                    Explore GitHub <ArrowRight className="ms-1" />
                                                </a>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )}

                            {/* LeetCode Card */}
                            {leetcodeProfile && (
                                <Col md={4} xs={12} className="mb-4">
                                    <Card className="profile-card profile-card-leetcode h-100">
                                        <Card.Body className="d-flex flex-column justify-content-between">
                                            <div>
                                                <div className="d-flex align-items-center gap-3 mb-3">
                                                    <div className="profile-icon-wrapper-large">
                                                        {getProfileIcon(leetcodeProfile.name)}
                                                    </div>
                                                    <div>
                                                        <Card.Title className="profile-card-title mb-0">{leetcodeProfile.name}</Card.Title>
                                                        <span className="profile-card-username">{leetcodeProfile.username}</span>
                                                    </div>
                                                </div>
                                                <Card.Text className="profile-card-description">
                                                    Review my problem-solving activity, verified badges, and structured algorithms practice history.
                                                </Card.Text>
                                            </div>
                                            <div className="mt-3">
                                                <a href={leetcodeProfile.url} target="_blank" rel="noreferrer" className="profile-card-action">
                                                    View LeetCode <ArrowRight className="ms-1" />
                                                </a>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )}

                            {/* GeeksforGeeks Card */}
                            {gfgProfile && (
                                <Col md={4} xs={12} className="mb-4">
                                    <Card className="profile-card profile-card-gfg h-100">
                                        <Card.Body className="d-flex flex-column justify-content-between">
                                            <div>
                                                <div className="d-flex align-items-center gap-3 mb-3">
                                                    <div className="profile-icon-wrapper-large">
                                                        {getProfileIcon(gfgProfile.name)}
                                                    </div>
                                                    <div>
                                                        <Card.Title className="profile-card-title mb-0">{gfgProfile.name}</Card.Title>
                                                        <span className="profile-card-username">{gfgProfile.username}</span>
                                                    </div>
                                                </div>
                                                <Card.Text className="profile-card-description">
                                                    Check my competitive programming stats, school assessment points, and technical articles.
                                                </Card.Text>
                                            </div>
                                            <div className="mt-3">
                                                <a href={gfgProfile.url} target="_blank" rel="noreferrer" className="profile-card-action">
                                                    View GFG Profile <ArrowRight className="ms-1" />
                                                </a>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Skills;