import { Container, Row, Col } from 'react-bootstrap';
import selfie from '../selfie.png';

const ProjectsList = () => {
    return(
        <Container className=' mt-5 d-flex justify-content-center'>
            <Row className='mt-5' style={{textAlign: "center", margin: "2 rem auto"}}>
                <Col>
                <h1> MY PROJECTS</h1>
                <img src={selfie} alt="selfie" style={{ maxWidth:"100%", maxHeight:"100%", opacity: "0.35", borderRadius: "50%"}}/>
                <div class="box">
		<span id="img1" style={{"--i":1}}><img src="https://wallpapercave.com/wp/wp5734608.jpg"/></span>
		<span style={{"--i":2}}><img src="https://wallpapercave.com/wp/wp5734591.jpg"/></span>
		<span style={{"--i":3}}><img src="https://wallpapercave.com/wp/wp5464214.jpg"/></span>
		<span style={{"--i":4}}><img src="https://wallpapercave.com/wp/wp7142478.jpg"/></span>
		<span style={{"--i":5}}><img src="https://wallpapercave.com/wp/wp6969736.jpg"/></span>
		<span style={{"--i":6}}><img src="https://wallpapercave.com/wp/wp4761163.jpg"/></span>
		<span style={{"--i":7}}><img src="https://wallpapercave.com/wp/wp7142652.jpg"/></span>
		<span style={{"--i":8}}><img src="https://wallpapercave.com/wp/wp7142676.jpg"/></span>
	</div>
                </Col>
            </Row>
        
    </Container>
    )
}

export default ProjectsList;