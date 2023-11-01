import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const Presentation = () => {
  const mode = useSelector((state) => state.mainReducer.isdarkMode);

  return (
    <Container
      style={{
        marginBlock: "3rem",
        minHeight: "70vh"
      }}
    >
      <Row>
        <Col style={{ textAlign: "center", margin: "2rem auto" }}>
          <h1 style={{ color: mode ? "black" : "white" }}>
            WELCOME TO MY PORTFOLIO!
          </h1>
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center", margin: "2rem auto" }}>
          <p style={{ color: mode ? "black" : "white" }}>
            I'm a passionate and curious Full Stack Developer, my motto is:
            <br></br>
            <span className="quote">NEVER STOP LEARNING</span>!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Presentation;
