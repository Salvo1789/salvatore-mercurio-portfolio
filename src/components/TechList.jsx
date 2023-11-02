import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from "react-redux";

import selfie from '../selfie.png';
import HTML5_logo from '../assets/HTML5_logo.png';
import CSS_logo from '../assets/CSS_logo.png';
import JS_logo from '../assets/JS_logo.png';
import react_logo from '../assets/react_logo.png';
import bootstrap_logo from '../assets/bootstrap_logo.png';
import java_logo from '../assets/java_logo.png';
import spring_boot_logo from '../assets/spring_boot_logo.png';
import postgresql_logo from '../assets/postgresql_logo.png';

const TechList = () => {

    const mode = useSelector((state) => state.mainReducer.isdarkMode);

    return(
        <Container className=' my-5 d-flex justify-content-center'>
            <Row className='mt-5' style={{textAlign: "center", margin: "2 rem auto"}}>
                <Col>
                <h1 style={{ color: mode ? "black" : "white" }}> TECH SKILLS</h1>
                <br></br>
                <img src={selfie} alt="selfie" style={{ maxWidth:"100%", maxHeight:"100%", opacity: "0.35", borderRadius: "50%"}}/>
                <div className="box">
		<span id="img1" style={{"--i":1}}><img src={HTML5_logo}/></span>
		<span style={{"--i":2}}><img src={CSS_logo}/></span>
		<span style={{"--i":3}}><img src={JS_logo}/></span>
		<span style={{"--i":4}}><img src={react_logo}/></span>
		<span style={{"--i":5}}><img src={bootstrap_logo}/></span>
		<span style={{"--i":6}}><img src={java_logo}/></span>
		<span style={{"--i":7}}><img src={spring_boot_logo}/></span>
		<span style={{"--i":8}}><img src={postgresql_logo}/></span>
	</div>
                </Col>
            </Row>
        
    </Container>
    )
}

export default TechList;