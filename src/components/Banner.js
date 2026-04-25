import { Container, Row, Col, Button } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/vishwas.jpg'
import { useEffect, useState, useCallback, useRef, useMemo } from 'react'
import myResume from "../assets/My Resume.pdf"

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const deltaRef = useRef(delta);

    const toRotate = useMemo(() => ['Web Developer', 'Curious Learner'], [])
    const period = 500

    // Update ref whenever delta changes
    useEffect(() => {
        deltaRef.current = delta;
    }, [delta]);

    const tick = useCallback(() => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }, [loopNum, isDeleting, text, toRotate, period]);

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, deltaRef.current);

        return () => clearInterval(ticker);
    }, [tick]);

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={5}>
                        <div className='banner-image-wrapper'>
                            <img src={headerImg} alt="Portrait of Vishwas Kapoor" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>Hi, I'm Vishwas Kapoor</h1>
                        <h6>
                            <span className="txt-rotate" dataPeriod="500" data-rotate={toRotate}>
                                <span className="wrap">{text}</span>
                            </span>
                        </h6>
                        <span className='banner-subtitle'>You can also call me <i>SPYDER</i></span>
                        <p>I build scalable software solutions using Python, the MERN stack, and data engineering practices, with a focus on full-stack development, efficient systems, and real-world problem solving.</p>
                        <Container>
                            <Row className='align-items-center flex-column flex-md-row'>
                                <Col className='mb-3 mb-md-0'>
                                    <a href='#connect'><Button className='primary-button'>Let's Connect <ArrowRightCircle size={25} /> </Button></a>
                                </Col>
                                <Col>
                                    <a href={myResume} target='_blank' rel='noreferrer'><Button className='secondary-button'>See Resume <ArrowRightCircle size={25} /> </Button></a>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner; 
