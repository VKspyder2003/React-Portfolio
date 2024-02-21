import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6} >
                        <span className="footer-name">Vishwas Kapoor</span>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/vishwaskapoor0123" target="_blank"><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://www.instagram.com/vishu_kapoor.in/" target="_blank"><img src={navIcon2} alt="Icon" /></a>
                            <a href="https://github.com/VKspyder2003/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;