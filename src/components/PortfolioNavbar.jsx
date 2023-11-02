import { Container, Nav, Navbar } from "react-bootstrap";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handledarkMode } from "../redux/action";

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
      <Container style={{ paddingInline: 0 }}>
        <Navbar.Brand href="#home" style={{ color: mode ? "black" : "white" }}>
          SALVATORE MERCURIO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#link" style={{ color: mode ? "black" : "white"}}>
              My Projects
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: mode ? "black" : "white"}}>
              Tech Skills
            </Nav.Link>
            <Nav.Link href="#home" style={{ color: mode ? "black" : "white"}}>
              Contacts
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
