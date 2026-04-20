import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import skill1 from "../assets/img/browser.png";
import skill2 from "../assets/img/c-.png";
import skill3 from "../assets/img/python.png";
import skill4 from "../assets/img/social.png";
import skill5 from "../assets/img/library.png";
import skill6 from "../assets/img/linux.png";
import skill7 from "../assets/img/flask.png";
import skill8 from "../assets/img/programming.png";

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const skills = [
        {icon: skill1, title: 'HTML/CSS'},
        {icon: skill2, title: 'C++'},
        {icon: skill3, title: 'Python'},
        {icon: skill4, title: 'Node.js'},
        {icon: skill5, title: 'React.js'},
        {icon: skill6, title: 'Linux'},
        {icon: skill7, title: 'Flask'},
        {icon: skill8, title: 'Competitive Coding'}
    ];

    const profiles = [
        {href: 'https://leetcode.com/kapoorvishwas0123/', label: 'Leetcode'},
        {href: 'https://auth.geeksforgeeks.org/user/kapoorvishwas0123/', label: 'GeeksforGeeks'},
        {href: 'https://www.codechef.com/users/vishu_spyder', label: 'CodeChef'},
        {href: 'https://www.hackerrank.com/profile/kapoorvishwas011', label: 'HackerRank'}
    ];

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>Skills</h2>
                            <p>These are the technologies and tools I use to build fast, accessible, and maintainable apps.</p>
                            <Carousel responsive={responsive} infinite={false} className='skill-slider'>
                                {skills.map((skill, index) => (
                                    <div className="item" key={index}>
                                        <img src={skill.icon} alt={skill.title} />
                                        <h5>{skill.title}</h5>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                    <Col>
                        <div className='skill-bx'>
                            <p>Links to my coding profiles across various platforms</p>
                            <Row>
                                {profiles.map((profile, index) => (
                                    <Col key={index} xs={12} sm={6} className='mb-3'>
                                        <a href={profile.href} target='_blank' rel='noreferrer' className='coding-profile'>
                                            <h5 className='coding-profile-text'>{profile.label}</h5>
                                        </a>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills; 