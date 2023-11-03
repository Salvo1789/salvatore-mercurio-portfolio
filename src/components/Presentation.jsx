import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const Presentation = () => {
  const mode = useSelector((state) => state.darkMode.isdarkMode);
  const lang = useSelector((state) => state.language.isEnglish);

  let text1 = "WELCOME TO MY PORTFOLIO!";
  if (lang){
    text1 = "WELCOME TO MY PORTFOLIO!"
   }else{
    text1 = "BENVENUTO NEL MIO PORTFOLIO!";
   }

   let text2 = "I'm a passionate and curious Full Stack Developer, my motto is:";
  if (lang){
    text2 = "I'm a passionate and curious Full Stack Developer, my motto is:";
   }else{
    text2 = "Sono un full-stack Developer appassionato e curioso, il mio motto é:";
   }

   let text3 = "NEVER STOP LEARNING";
  if (lang){
    text3 = "NEVER STOP LEARNING";
   }else{
    text3 = "MAI SMETTERE DI IMPARARE";
   }

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
            {text1}
          </h1>
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center", margin: "2rem auto" }}>
          <p style={{ color: mode ? "black" : "white" }}>
           {text2}
            <br></br>
            <span className="quote">{text3}</span>!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Presentation;
