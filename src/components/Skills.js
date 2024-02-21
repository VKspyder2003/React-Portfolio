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

    return (
        <section className='skill' id='skills' >
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>Skills</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus rerum ipsum ratione architecto quia mollitia ad dolore obcaecati delectus optio.</p>
                            <Carousel responsive={responsive} infinite={false} className='skill-slider' >
                                <div className="item">
                                    <img src={skill1} alt='Skill Image' />
                                    <h5>HTML/CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={skill2} alt='Skill Image' />
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <img src={skill3} alt='Skill Image' />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={skill4} alt='Skill Image' />
                                    <h5>Node.Js</h5>
                                </div>
                                <div className="item">
                                    <img src={skill5} alt='Skill Image' />
                                    <h5>React.Js</h5>
                                </div>
                                <div className="item">
                                    <img src={skill6} alt='Skill Image' />
                                    <h5>Linux</h5>
                                </div>
                                <div className="item">
                                    <img src={skill7} alt='Skill Image' />
                                    <h5>Flask</h5>
                                </div>
                                <div className="item">
                                    <img src={skill8} alt='Skill Image' />
                                    <h5>Competitive Coding</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                    <Col>
                        <div className='skill-bx'>
                            <p>Links to my coding profiles across various platforms</p>
                            <Row>
                                <Col>
                                    <a href='https://leetcode.com/kapoorvishwas0123/' target='_blank' className='coding-profile'><h5 className='coding-profile-text'>Leetcode</h5></a>
                                </Col>
                                <Col>
                                    <a href='https://auth.geeksforgeeks.org/user/kapoorvishwas0123/' target='_blank' className='coding-profile'><h5 className='coding-profile-text'>GeeksforGeeks</h5></a>
                                </Col>
                                <Col>
                                    <a href='https://www.codechef.com/users/vishu_spyder' target='_blank' className='coding-profile'><h5 className='coding-profile-text'>Codechef</h5></a>
                                </Col>
                                <Col>
                                    <a href='https://www.hackerrank.com/profile/kapoorvishwas011' target='_blank' className='coding-profile'><h5 className='coding-profile-text'>Hackerrank</h5></a>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;