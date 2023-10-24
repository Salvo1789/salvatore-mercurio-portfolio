import { Container, Row, Col } from 'react-bootstrap';
import selfie from '../selfie.png';

const Presentation = () => {
    return(
    <Container style={{ marginBlock: "3rem", minHeight: "70vh", }}>
        <Row>
            <Col sm={12} style={{textAlign: "center", margin: "2rem auto", }}>
                <h1>WELCOME TO MY PORTFOLIO!</h1>
            </Col>
            <Col sm={12} style={{textAlign: "center", margin: "2 rem auto"}}>
                <p>I'm a passionate and curious Full Stack Developer, my motto is:
                    <br></br> 
                    <span className="quote">NEVER STOP LEARNING</span>! 
                </p>
            </Col>
        </Row>
    </Container>
    )
}

export default Presentation;
