import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <LinkContainer to="/">
                <Navbar.Brand>Aleks - M</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                    <NavDropdown title="Products" id="collasible-nav-dropdown">
                        <LinkContainer to="/product"><NavDropdown.Item>Vibro machine</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/product"><NavDropdown.Item>Screw conveyor</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/product"><NavDropdown.Item>Shredder machine</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/product"><NavDropdown.Item>Conveying belt</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/product"><NavDropdown.Item>Pneumatic machine</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/product"><NavDropdown.Item>Different elevators</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/product"><NavDropdown.Item>Hydraulic machine</NavDropdown.Item></LinkContainer>
                    </NavDropdown>
                    <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
                </Nav>
                <Nav>
                    <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
                    <LinkContainer to="/register"><Nav.Link eventKey={2}>Register</Nav.Link></LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CollapsibleExample;