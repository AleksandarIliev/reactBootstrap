import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Aleks - M</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <NavDropdown title="Products" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#product/3.1">Vibro machine</NavDropdown.Item>
                            <NavDropdown.Item href="#product/3.2">Screw conveyor</NavDropdown.Item>
                            <NavDropdown.Item href="#product/3.3">Shredder machine</NavDropdown.Item>
                            <NavDropdown.Item href="#product/3.4">Conveying belt</NavDropdown.Item>
                            <NavDropdown.Item href="#product/3.5">Pneumatic machine</NavDropdown.Item>
                            <NavDropdown.Item href="#product/3.6">Different elevators</NavDropdown.Item>
                            <NavDropdown.Item href="#product/3.7">Hydraulic machine</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#partners">Partners</Nav.Link>
                        <Nav.Link eventKey={2} href="#relations">Relations</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;