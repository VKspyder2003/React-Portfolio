import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import contactImg from "../assets/img/contact-img.svg";
import contact1 from '../assets/img/whatsapp.png';
import contact2 from '../assets/img/gmail.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    }

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // EmailJS configuration from environment variables
            const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
            const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

            // Split name into first and last for backward compatibility with EmailJS templates
            const nameParts = formData.name.trim().split(/\s+/);
            const firstName = nameParts[0] || '';
            const lastName = nameParts.slice(1).join(' ') || '';

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                phone: 'Not provided',
                message: formData.message,
                to_name: 'Vishwas Kapoor',
                reply_to: formData.email,
                // Backward-compatible properties:
                firstName: firstName,
                lastName: lastName,
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                message: ''
            });

        } catch (error) {
            console.error('Email send failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={5} className="d-none d-md-block text-center">
                        <img src={contactImg} alt="Contact illustration" className="contact-illustration" />
                    </Col>
                    <Col xs={12} md={7}>
                        <div className="contact-form-wrapper">
                            <h2 className="section-title"><span className="section-number">06 /</span> Connect</h2>
                            <p className="contact-intro">
                                Interested in collaborating, discussing an opportunity, or talking about open source? Feel free to reach out.
                            </p>
                            
                            <div className="contact-links d-flex justify-content-start gap-3 mt-2 mb-4">
                                <a href="https://api.whatsapp.com/send?phone=917719673374" target="_blank" rel='noreferrer' className="contact-link-pill" title="WhatsApp">
                                    <img src={contact1} alt="WhatsApp" className="contact-icon" /> <span>WhatsApp</span>
                                </a>
                                <a href="mailto:vishwask.cs.20@nitj.ac.in" target="_blank" rel='noreferrer' className="contact-link-pill" title="Email">
                                    <img src={contact2} alt="Email" className="contact-icon" /> <span>Email</span>
                                </a>
                            </div>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="alert alert-success" role="alert">
                                    <strong>Thank you!</strong> Your message has been sent successfully. I'll get back to you soon!
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="alert alert-danger" role="alert">
                                    <strong>Sorry!</strong> There was an error sending your message. Please try again or contact me directly.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} noValidate className="contact-form-fields">
                                <Row>
                                    <Col xs={12} className="mb-3">
                                        <div className="form-group-v2">
                                            <input
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="Your Name"
                                                aria-label="Your Name"
                                                className={errors.name ? 'error' : ''}
                                                required
                                            />
                                            {errors.name && <span className="error-message">⚠️ {errors.name}</span>}
                                        </div>
                                    </Col>
                                    <Col xs={12} className="mb-3">
                                        <div className="form-group-v2">
                                            <input
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                type="email"
                                                placeholder="Email Address"
                                                aria-label="Email Address"
                                                className={errors.email ? 'error' : ''}
                                                required
                                            />
                                            {errors.email && <span className="error-message">⚠️ {errors.email}</span>}
                                        </div>
                                    </Col>
                                    <Col xs={12} className="mb-4">
                                        <div className="form-group-v2">
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="5"
                                                placeholder="Your Message"
                                                aria-label="Message"
                                                className={errors.message ? 'error' : ''}
                                                required
                                            />
                                            {errors.message && <span className="error-message">⚠️ {errors.message}</span>}
                                        </div>
                                    </Col>
                                    <Col xs={12}>
                                        <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                        </button>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;
