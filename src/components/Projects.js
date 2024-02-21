import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import colorSharp2 from '../assets/img/color-sharp2.png';
import project1 from '../assets/img/project1.jpg';
import project2 from '../assets/img/project3.jpg';
import project3 from '../assets/img/project2.jpg';

const Projects = () => {

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Here are some of my projects to prove my skills</p>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Real Time Chat App</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Keylogger</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Upload Fetch App</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp">
                                <Tab.Pane eventKey="first">
                                    <div className="d-flex justify-content-around">
                                        <Card style={{ width: '30rem' }}>
                                            <a href="https://whatsapp-frontend-mu.vercel.app/" target="_blank">
                                                <Card.Img className='project-image' variant="top" src={project1} alt="image" />
                                            </a>
                                            <Card.Body>
                                                <Card.Title>Whatsapp Clone Using React.Js</Card.Title>
                                                <div className='card-text'>
                                                    This project is a WhatsApp Clone, developed using the MERN stack (MongoDB, Express.js, React, Node.js) with Socket.io for real-time messaging. It incorporates various features to create a comprehensive chat application
                                                </div>
                                                <Button href="https://github.com/VKspyder2003/whatsapp-frontend" target="_blank" className="projects-link" variant="success">Source Code</Button>
                                                <Button href="https://whatsapp-frontend-mu.vercel.app/" target="_blank" className="projects-link" variant="primary">Live Website</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div className="d-flex justify-content-around">
                                        <Card style={{ width: '30rem' }}>
                                            <a href="https://github.com/VKspyder2003/KeyLogger" target="_blank">
                                                <Card.Img className='project-image'  variant="top" src={project2} alt="image" />
                                            </a>
                                            <Card.Body>
                                                <Card.Title>KeyLogger using Python</Card.Title>
                                                <div className='card-text'>
                                                    A Python application with malicious code, capable of logging keystrokes, capturing screenshots, and retrieving system information for exfiltration.
                                                </div>
                                                <Button href="https://github.com/VKspyder2003/KeyLogger" target="_blank" className="projects-link" variant="success">Source Code</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div className="d-flex justify-content-around">
                                        <Card style={{ width: '30rem' }}>
                                            <a href="https://fetch-file-app.onrender.com/" target="_blank">
                                                <Card.Img className='project-image' style={{ border: '2px solid black' }} variant="top" src={project3} alt="image" />
                                            </a>
                                            <Card.Body>
                                                <Card.Title>File Upload and Retrieval Web App</Card.Title>
                                                <div className='card-text'>
                                                    A web application that enables users to upload files, view a list of uploaded files with their names and sizes, and access detailed information about each file.
                                                </div>
                                                <Button href="https://github.com/VKspyder2003/UploadFetchApp" target="_blank" className="projects-link" variant="success">Source Code</Button>
                                                <Button href="https://fetch-file-app.onrender.com/" target="_blank" className="projects-link" variant="primary">Live Website</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <p>You can check out some more projects on my github <a href="https://github.com/VKspyder2003" target="_blank">here</a></p>
            <img className="background-image-right" src={colorSharp2} alt="background"></img>
        </section>
    );
};

export default Projects;