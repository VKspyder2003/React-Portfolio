import { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import myResume from "../assets/My Resume.pdf"
import { ArrowUpCircle, Globe2 } from 'react-bootstrap-icons'

const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [oldLink, setOldLink] = useState(true);
    const [contactLink, setContactLink] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 80) {
                setScrolled(true)
            } else {
                setScrolled(false);
            }
        }
        const checkScreenWidth = () => {
            setIsMobile(window.innerWidth <= 991);
            setOldLink(window.innerWidth<=1400 && window.innerWidth>991);
            setContactLink(window.innerWidth<=1200 && window.innerWidth>991);
        }
        checkScreenWidth();

        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', checkScreenWidth);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', checkScreenWidth);
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <>
            <Navbar expand="lg" className={`${scrolled || isMobile ? 'scrolled' : ''}`}>
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
                            {!contactLink && <Nav.Link href="#connect" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>}
                            {!oldLink && <Nav.Link href="https://vkspyder2003.github.io/Portfolio/" target='_blank' className={'navbar-link'}><Globe2/> Old website</Nav.Link>}
                        </Nav>
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                <a href="https://www.linkedin.com/in/vishwaskapoor0123" target="_blank"><img src={navIcon1} alt="Icon" /></a>
                                <a href="https://www.instagram.com/vishu_kapoor.in/" target="_blank"><img src={navIcon2} alt="Icon" /></a>
                                <a href="https://github.com/VKspyder2003/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
                            </div>
                        </span>
                        <Button href='https://drive.google.com/file/d/1lb4YZSfOgah_02uZm4El-qYg9pDGvFx1/view?usp=drive_link' target='_blank' className='resume-button' variant="info" >
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