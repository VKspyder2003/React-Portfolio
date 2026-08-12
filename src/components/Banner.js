import { Container, Row, Col, Button } from 'react-bootstrap'
import { ArrowRightCircle, Github } from 'react-bootstrap-icons'
import headerImg from '../assets/img/vishwas.jpg'
import { useEffect, useState, useCallback, useRef, useMemo } from 'react'

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const deltaRef = useRef(delta);

    const toRotate = useMemo(() => ['Building APIs', 'Building Data Pipelines', 'Contributing to Open Source'], [])
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
                    <Col xs={12} md={6} xl={5} className="text-center mb-5 mb-md-0">
                        <div className='banner-image-wrapper'>
                            <img src={headerImg} alt="Portrait of Vishwas Kapoor" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>Hi, I'm Vishwas Kapoor</h1>
                        <h2 className="banner-title-static">Software Engineer & Data Engineer</h2>
                        <h4 className="banner-roles">
                            <span className="txt-rotate" dataPeriod="500" data-rotate={toRotate}>
                                <span className="wrap">{text}</span>
                            </span>
                        </h4>
                        <span className='banner-subtitle-handle'>aka <i>SPYDER</i></span>
                        <p className="banner-desc">Software & Data Engineer building scalable data pipelines, backend systems, and cloud solutions. Experienced in enterprise data migration, Apache Spark, Databricks, AWS, and open-source development.</p>
                        <p className="banner-tech-stack">
                            <strong>Tech Stack:</strong> Python · C++ · SQL · React · Spark · Databricks
                        </p>
                        <div className="banner-actions-container d-flex flex-wrap gap-3 mt-4 justify-content-center">
                            <a href='#projects'><Button className='primary-button'>View My Work <ArrowRightCircle size={20} /> </Button></a>
                            <a href="https://github.com/VKspyder2003/" target="_blank" rel='noreferrer'><Button className='secondary-button github-btn'>GitHub <Github size={20} /> </Button></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner; 
