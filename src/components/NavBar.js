import { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import { ArrowUpCircle, Globe2 } from 'react-bootstrap-icons'

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);

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
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                            <Nav.Link href="#connect" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                            <Nav.Link href="https://vkspyder2003.github.io/Portfolio/" target='_blank' rel='noreferrer' className='navbar-link old-website-link'><Globe2 /> Old website</Nav.Link>
                        </Nav>
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                <a href="https://www.linkedin.com/in/vishwaskapoor0123" target="_blank" rel='noreferrer'><img src={navIcon1} alt="LinkedIn icon" /></a>
                                <a href="https://www.instagram.com/vishu_kapoor.in/" target="_blank" rel='noreferrer'><img src={navIcon2} alt="Instagram icon" /></a>
                                <a href="https://github.com/VKspyder2003/" target="_blank" rel='noreferrer'><img src={navIcon3} alt="GitHub icon" /></a>
                            </div>
                        </span>
                        <Button href='https://drive.google.com/file/d/1lb4YZSfOgah_02uZm4El-qYg9pDGvFx1/view?usp=drive_link' target='_blank' rel='noreferrer' className='resume-button' variant="info" >
                            My Resume
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {scrolled && (
                <div className="scroll-to-top" onClick={scrollToTop}>
                    <ArrowUpCircle />
                </div>
            )}
        </>
    )
}

export default NavBar;