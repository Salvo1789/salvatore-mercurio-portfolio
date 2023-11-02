import { Container, Nav, Navbar } from "react-bootstrap";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'
import { FaFileDownload} from 'react-icons/fa'

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handledarkMode } from "../redux/action";

import CV_Salvatore_Mercurio from '../assets/CV_Salvatore_Mercurio.pdf'

const PortfolioNavbar = () => {

  // assigning useDispatch hook of redux to a variable
  const dispatch = useDispatch();

  // calling our state from the reduxer using useSelector hook of redux
  const mode = useSelector((state) => state.mainReducer.isdarkMode);

  // destructuring isdarkMode state from mode variable called using useSelector hook of redux
  // const { isdarkMode } = mode;

  // function to be fired on onChange method to switch the mode
  const switchDarkMode = () => {
    mode
      ? dispatch(handledarkMode(false))
      : dispatch(handledarkMode(true));
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
            <Nav.Link href="#link" style={{ color: mode ? "black" : "white"}}>
            <a href="https://github.com/Salvo1789" target="_blank" class="nav-link px-2 text-light"><AiFillGithub style={{ width: "3rem", height: "3rem", color: mode ? "black" : "white"}}/></a>
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: mode ? "black" : "white"}}>
            <a href="https://www.linkedin.com/in/salvatore-mercurio-full-stack-web-developer/" target="_blank" class="nav-link px-2"><AiFillLinkedin style={{ width: "3rem", height: "3rem", color: mode ? "black" : "white"}}/></a>
            </Nav.Link>
            <Nav.Link href="#home" style={{ color: mode ? "black" : "white"}}>
            <a href="mailto:salvo.mercurio89@gmail.com" class="nav-link px-2 "><AiOutlineMail style={{ width: "3rem", height: "3rem", color: mode ? "black" : "white"}}/></a>
            </Nav.Link>
            <Nav.Link href="#home" style={{ color: mode ? "black" : "white"}}>
            <a href={CV_Salvatore_Mercurio} download="cv-salvatore-mercurio" class="nav-link px-2 "><FaFileDownload style={{ width: "3rem", height: "3rem", color: mode ? "black" : "white"}}/></a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div
          id="darkmode"
      >
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          // onChange prop to fire our internal function for changing the dark mode value
          onChange={switchDarkMode}
          // checking checked prop with dark mode state
          checked={mode}
        />
        <label htmlFor="checkbox" className="label">
          <BsMoonStarsFill color="white" />
          <BsFillSunFill color="yellow" />
          <div className="ball"></div>
        </label>
      </div>
      </Container>
    </Navbar>
  );
};

export default PortfolioNavbar;
