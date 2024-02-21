import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import contact1 from '../assets/img/whatsapp.png'
import contact2 from '../assets/img/gmail.png'

const Contact = () => {

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col xs={12} md={6}>
                        <div>
                            <h2>Get In Touch</h2>
                            <span className="contact-link"><a href="https://api.whatsapp.com/send?phone=917719673374" target="_blank"><img src={contact1} alt="Whatsapp" style={{ height: '32px', width: '32px', marginRight: '8px' }} /></a></span>
                            <span className="contact-link"><a href="mailto:vishwask.cs.20@nitj.ac.in" target="_blank"><img src={contact2} alt="Email" style={{ height: '32px', width: '32px', marginRight: '8px' }} /></a></span>
                            <p></p>
                            <Row>
                                <Col xs={12} sm={6} className="px-1">
                                    <input type="text" placeholder="First Name" />
                                </Col>
                                <Col xs={12} sm={6} className="px-1">
                                    <input type="text" placeholder="Last Name" />
                                </Col>
                                <Col xs={12} sm={6} className="px-1">
                                    <input type="email" placeholder="Email Address" />
                                </Col>
                                <Col xs={12} sm={6} className="px-1">
                                    <input type="tel" placeholder="Phone No." />
                                </Col>
                                <Col xs={12} className="px-1">
                                    <textarea rows="6" placeholder="Message" ></textarea>
                                    <br></br>
                                    <button onClick={() => alert('There is no functional backend yet!!')} type="submit"><span>Submit</span></button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;
