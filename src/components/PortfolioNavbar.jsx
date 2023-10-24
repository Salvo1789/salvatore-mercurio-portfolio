import { Container, Nav, Navbar } from 'react-bootstrap';

const PortfolioNavbar = () => {
    return(
    <Navbar expand="lg" style={{border: '3px solid white'}}>
      <Container style={{ paddingInline: 0}}>
        <Navbar.Brand href="#home" className="text-light">SALVATORE MERCURIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home"className="text-light">About me</Nav.Link>
            <Nav.Link href="#link" className="text-light">Tech Skills</Nav.Link>
            <Nav.Link href="#link" className="text-light">My Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default PortfolioNavbar