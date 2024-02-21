import { Container, Row, Col, Button } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/vishwas.jpg'
import { useEffect, useState } from 'react'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import myResume from "../assets/Vishwas Resume.pdf"

const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const [index, setIndex] = useState(1);

    const toRotate = ['Web Developer', 'Curious Learner']
    const period = 500

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }


    return (<>
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>Hi, I'm Vishwas Kapoor</h1>
                        <h6><span className="txt-rotate" dataPeriod="500" data-rotate={toRotate}><span className="wrap">{text}</span></span></h6>
                        <span>You can also call me <i>SPYDER</i></span>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, atque distinctio eius voluptas sunt quidem laborum sit. Est ipsum ducimus quam earum adipisci exercitationem dolore animi placeat deserunt sapiente officia doloremque, commodi saepe. Cumque, ex praesentium quae corporis accusamus atque fugit iusto unde nisi excepturi eveniet harum saepe similique dolores</p>
                        <Container>
                            <Row className='align-items-center flex-column flex-md-row'>
                                <Col>
                                    <a href='#connect'><Button>Let's Connect <ArrowRightCircle size={'25px'} /> </Button></a>
                                </Col>
                                <Col>
                                    <a href={myResume} target='_blank'><Button>See Resume <ArrowRightCircle size={'25px'} /> </Button></a>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </section>
    </>)
}

export default Banner;