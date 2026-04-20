import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import contactImg from "../assets/img/contact-img.svg";
import contact1 from '../assets/img/whatsapp.png'
import contact2 from '../assets/img/gmail.png'

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
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

        // First name validation
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        } else if (formData.firstName.trim().length < 2) {
            newErrors.firstName = 'First name must be at least 2 characters';
        }

        // Last name validation
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        } else if (formData.lastName.trim().length < 2) {
            newErrors.lastName = 'Last name must be at least 2 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validation (optional but if provided, must be valid)
        if (formData.phone.trim()) {
            const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(formData.phone.replace(/[ \-\(\)]/g, ''))) {
                newErrors.phone = 'Please enter a valid phone number';
            }
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

            const templateParams = {
                from_name: `${formData.firstName} ${formData.lastName}`,
                from_email: formData.email,
                phone: formData.phone || 'Not provided',
                message: formData.message,
                to_name: 'Vishwas Kapoor',
                reply_to: formData.email,
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setSubmitStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
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
                    <Col xs={12} md={6}>
                        <img src={contactImg} alt="Contact illustration" />
                    </Col>
                    <Col xs={12} md={6}>
                        <div>
                            <h2>Get In Touch</h2>
                            <div className="contact-links">
                                <a href="https://api.whatsapp.com/send?phone=917719673374" target="_blank" rel='noreferrer'>
                                    <img src={contact1} alt="WhatsApp" />
                                </a>
                                <a href="mailto:vishwask.cs.20@nitj.ac.in" target="_blank" rel='noreferrer'>
                                    <img src={contact2} alt="Email" />
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

                            <form onSubmit={handleSubmit} noValidate>
                                <Row>
                                    <Col xs={12} sm={6} className="px-1">
                                        <div className="form-group">
                                            <input
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="First Name"
                                                aria-label="First Name"
                                                className={errors.firstName ? 'error' : ''}
                                                required
                                            />
                                            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={6} className="px-1">
                                        <div className="form-group">
                                            <input
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="Last Name"
                                                aria-label="Last Name"
                                                className={errors.lastName ? 'error' : ''}
                                                required
                                            />
                                            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={6} className="px-1">
                                        <div className="form-group">
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
                                            {errors.email && <span className="error-message">{errors.email}</span>}
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={6} className="px-1">
                                        <div className="form-group">
                                            <input
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                type="tel"
                                                placeholder="Phone No. (Optional)"
                                                aria-label="Phone Number"
                                                className={errors.phone ? 'error' : ''}
                                            />
                                            {errors.phone && <span className="error-message">{errors.phone}</span>}
                                        </div>
                                    </Col>
                                    <Col xs={12} className="px-1">
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="6"
                                                placeholder="Message"
                                                aria-label="Message"
                                                className={errors.message ? 'error' : ''}
                                                required
                                            />
                                            {errors.message && <span className="error-message">{errors.message}</span>}
                                        </div>
                                        <button type="submit" disabled={isSubmitting}>
                                            <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
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
