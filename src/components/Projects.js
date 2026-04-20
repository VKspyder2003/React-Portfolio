import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import colorSharp2 from '../assets/img/color-sharp2.png';
import project1 from '../assets/img/project1.jpg';
import project2 from '../assets/img/project3.jpg';
import project3 from '../assets/img/project2.jpg';

const projectTabs = [
    { eventKey: 'first', label: 'Real Time Chat App' },
    { eventKey: 'second', label: 'Keylogger' },
    { eventKey: 'third', label: 'Upload Fetch App' }
];

const projectData = [
    {
        eventKey: 'first',
        image: project1,
        title: 'WhatsApp Clone Using React.js',
        description: 'A MERN stack chat application built with Socket.io for real-time messaging and responsive UI.',
        links: [
            { href: 'https://github.com/VKspyder2003/whatsapp-frontend', label: 'Source Code', variant: 'success' },
            { href: 'https://whatsapp-frontend-mu.vercel.app/', label: 'Live Website', variant: 'primary' }
        ]
    },
    {
        eventKey: 'second',
        image: project2,
        title: 'Keylogger using Python',
        description: 'A demonstration of keyboard event handling and local logging for educational and research purposes.',
        links: [
            { href: 'https://github.com/VKspyder2003/KeyLogger', label: 'Source Code', variant: 'success' }
        ]
    },
    {
        eventKey: 'third',
        image: project3,
        title: 'File Upload and Retrieval Web App',
        description: 'A file management app that allows uploading, listing, and retrieving files with metadata and preview support.',
        links: [
            { href: 'https://github.com/VKspyder2003/UploadFetchApp', label: 'Source Code', variant: 'success' },
            { href: 'https://fetch-file-app.onrender.com/', label: 'Live Website', variant: 'primary' }
        ]
    }
];

const Projects = () => {
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>These are a few hand-picked projects that showcase my skills and practical experience.</p>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                {projectTabs.map(tab => (
                                    <Nav.Item key={tab.eventKey}>
                                        <Nav.Link eventKey={tab.eventKey}>{tab.label}</Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                            <Tab.Content id="slideInUp">
                                {projectData.map(project => (
                                    <Tab.Pane eventKey={project.eventKey} key={project.eventKey}>
                                        <div className="d-flex justify-content-center">
                                            <Card className='project-card'>
                                                <a href={project.links[0].href} target="_blank" rel='noreferrer'>
                                                    <Card.Img className='project-image' variant="top" src={project.image} alt={project.title} />
                                                </a>
                                                <Card.Body>
                                                    <Card.Title>{project.title}</Card.Title>
                                                    <div className='card-text'>{project.description}</div>
                                                    <div className='project-actions'>
                                                        {project.links.map(link => (
                                                            <Button href={link.href} target="_blank" rel='noreferrer' key={link.label} className="projects-link" variant={link.variant}>{link.label}</Button>
                                                        ))}
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <p className='more-projects'>You can check out more projects on my GitHub <a href="https://github.com/VKspyder2003" target="_blank" rel='noreferrer'>here</a>.</p>
            <img className="background-image-right" src={colorSharp2} alt="background" />
        </section>
    );
};

export default Projects; 