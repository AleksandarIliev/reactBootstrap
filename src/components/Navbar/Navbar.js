import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import styles from './Navbar.module.css';

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <LinkContainer to="/">
                <Navbar.Brand className={styles['brandName']}>Aleks - M</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                    <NavDropdown title="Products" id="collasible-nav-dropdown">
                        <LinkContainer to="/productDetails"><NavDropdown.Item>All products</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/product"><NavDropdown.Item>Vibro machines</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/product"><NavDropdown.Item>Measuring equipments</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/product"><NavDropdown.Item>Transport machines</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/product"><NavDropdown.Item>Bunkers</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/product"><NavDropdown.Item>Shredder machines</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/product"><NavDropdown.Item>Kitchen equipments</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/product"><NavDropdown.Item>Pneumatic machines</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/product"><NavDropdown.Item>Sieved machines</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/product"><NavDropdown.Item>Hydraulic machines</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/product"><NavDropdown.Item>Filtering machines</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/product"><NavDropdown.Item>Dosing machines</NavDropdown.Item></LinkContainer>
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