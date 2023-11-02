import { Container, Nav, Navbar } from "react-bootstrap";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'
import { FaFileDownload} from 'react-icons/fa'
import italy_flag from '../italy_flag.png';
import uk_flag from '../uk_flag.png';

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleLanguage, handledarkMode } from "../redux/action";

import CV_Salvatore_Mercurio from '../assets/CV_Salvatore_Mercurio.pdf'

const PortfolioNavbar = () => {

  // assigning useDispatch hook of redux to a variable
  const dispatch = useDispatch();

  // calling our state from the reduxer using useSelector hook of redux
  const mode = useSelector((state) => state.darkMode.isdarkMode);
  const lang = useSelector((state) => state.language.isEnglish);

  // destructuring isdarkMode state from mode variable called using useSelector hook of redux
  // const { isdarkMode } = mode;

  // function to be fired on onChange method to switch the mode
  const switchDarkMode = () => {
    mode
      ? dispatch(handledarkMode(false))
      : dispatch(handledarkMode(true));
  };

  const switchLanguage = () => {
    lang
      ? dispatch(handleLanguage(false))
      : dispatch(handleLanguage(true));
  };


  useEffect(() => {
    //changing color of body with darkmode in useEffect
    document.body.style.backgroundColor = mode ? "#fff" : "#000";
  }, [mode]);

  return (
    <Navbar expand="lg" style={{ border: mode ? "3px solid black" : "3px solid white" }}>
      <Container style={{ paddingInline: 5 }}>
        <Navbar.Brand href="#home" style={{ color: mode ? "black" : "white" }}>
          SALVATORE MERCURIO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="https://github.com/Salvo1789" target="_blank" style={{ color: mode ? "black" : "white"}}>
            <AiFillGithub style={{ width: "3rem", height: "3rem", color: mode ? "black" : "white"}}/>
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/salvatore-mercurio-full-stack-web-developer/" target="_blank" style={{ color: mode ? "black" : "white"}}>
            <AiFillLinkedin style={{ width: "3rem", height: "3rem", color: mode ? "black" : "white"}}/>
            </Nav.Link>
            <Nav.Link href="mailto:salvo.mercurio89@gmail.com" style={{ color: mode ? "black" : "white"}}>
            <AiOutlineMail style={{ width: "3rem", height: "3rem", color: mode ? "black" : "white"}}/>
            </Nav.Link>
            <Nav.Link href={CV_Salvatore_Mercurio} download="cv-salvatore-mercurio" style={{ color: mode ? "black" : "white"}}>
            <FaFileDownload style={{ width: "3rem", height: "3rem", color: mode ? "black" : "white"}}/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div
          id="darkmode"
      >
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox1"
          // onChange prop to fire our internal function for changing the dark mode value
          onChange={switchDarkMode}
          // checking checked prop with dark mode state
          checked={mode}
        />
        <label htmlFor="checkbox1" className="label">
          <BsMoonStarsFill color="white" />
          <BsFillSunFill color="yellow" />
          <div className="ball"></div>
        </label>
      </div>

      <div
          id="darkmode"
      >
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox2"
          // onChange prop to fire our internal function for changing the dark mode value
          onChange={switchLanguage}
          // checking checked prop with dark mode state
          checked={lang}
        />
        <label htmlFor="checkbox2" className="label">
          <img className="flag" src={italy_flag} />
          <img className="flag" src={uk_flag} />
          <div className="ball"></div>
        </label>
      </div>
      </Container>
    </Navbar>
  );
};

export default PortfolioNavbar;
