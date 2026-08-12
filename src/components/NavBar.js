import { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import { ArrowUpCircle } from 'react-bootstrap-icons'

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 80);
            setShowScrollTop(window.scrollY > 500);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id === 'connect' ? 'contact' : entry.target.id;
                    setActiveLink(sectionId);
                }
            });
        }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.1 });

        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => observer.observe(section));

        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            observer.disconnect();
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const onUpdateActiveLink = (value) => setActiveLink(value)

    return (
        <>
            <Navbar expand="lg" className={`${scrolled ? 'scrolled' : ''}`}>
                <Container>
                    <Navbar.Brand href="#home">
                        <span className='navbar-name-title'>Vishwas Kapoor</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                            <Nav.Link href="#opensource" className={activeLink === 'opensource' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('opensource')}>Open Source</Nav.Link>
                            <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                            <Nav.Link href="#connect" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                        </Nav>
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                <a href="https://www.linkedin.com/in/vishwaskapoor0123" target="_blank" rel='noreferrer' title="LinkedIn"><img src={navIcon1} alt="LinkedIn" /></a>
                                <a href="https://github.com/VKspyder2003/" target="_blank" rel='noreferrer' className="github-highlight" title="GitHub"><img src={navIcon3} alt="GitHub" /></a>
                            </div>
                        </span>
                        <Button href='/resume.pdf' target='_blank' rel='noreferrer' className='resume-btn-nav' variant="outline-light" >
                            Resume ↗
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {showScrollTop && (
                <div className="scroll-to-top" onClick={scrollToTop}>
                    <ArrowUpCircle />
                </div>
            )}
        </>
    )
}

export default NavBar;