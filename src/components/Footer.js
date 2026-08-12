import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center mb-4">
                    <Col xs={12} md={7} className="text-center text-md-start mb-3 mb-md-0">
                        <span className="footer-name d-block">Vishwas Kapoor</span>
                        <span className="footer-title d-block mt-1">Software Engineer · Data Engineer · Open Source Contributor</span>
                    </Col>
                    <Col xs={12} md={5} className="text-center text-md-end">
                        <div className="footer-links-container d-flex justify-content-center justify-content-md-end align-items-center gap-2 gap-md-3">
                            <a href="https://github.com/VKspyder2003/" target="_blank" rel='noreferrer' className="footer-text-link">GitHub</a>
                            <span className="footer-link-separator">•</span>
                            <a href="https://www.linkedin.com/in/vishwaskapoor0123" target="_blank" rel='noreferrer' className="footer-text-link">LinkedIn</a>
                            <span className="footer-link-separator">•</span>
                            <a href="mailto:vishwask.cs.20@nitj.ac.in" className="footer-text-link">Email</a>
                        </div>
                    </Col>
                </Row>
                <hr className="footer-divider" />
                <Row>
                    <Col className="text-center text-md-start">
                        <p className="copyright-text mb-0">© {year} Vishwas Kapoor. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;