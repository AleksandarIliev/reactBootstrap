import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import styles from './Navbar.module.css';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

function CollapsibleExample({ data, pathname }) {
    const { isAuthenticated, userEmail } = useContext(AuthContext);

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
                        <LinkContainer to="/allProducts"><NavDropdown.Item>All products</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/vibroMachines"><NavDropdown.Item>Vibro machines</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/measuringEquipments"><NavDropdown.Item>Measuring equipments</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/transportMachines"><NavDropdown.Item>Transport machines</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/bunkers"><NavDropdown.Item>Bunkers</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/shredderMachines"><NavDropdown.Item>Shredder machines</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/kitchenEquipments"><NavDropdown.Item>Kitchen equipments</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/pneumaticMachines"><NavDropdown.Item>Pneumatic machines</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/sievedMachines"><NavDropdown.Item>Sieved machines</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/hydraulicMachines"><NavDropdown.Item>Hydraulic machines</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/filteringMachines"><NavDropdown.Item>Filtering machines</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/dosingMachines"><NavDropdown.Item>Dosing machines</NavDropdown.Item></LinkContainer>
                    </NavDropdown>
                    <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
                </Nav>
                {isAuthenticated && (
                    <Nav>
                        <span className={styles['logedUser']}>{userEmail}</span>
                        <LinkContainer to="/logout"><Nav.Link>Logout</Nav.Link></LinkContainer>
                    </Nav>
                )}
                {!isAuthenticated && (
                    <Nav>
                        <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
                        <LinkContainer to="/register"><Nav.Link eventKey={2}>Register</Nav.Link></LinkContainer>
                    </Nav>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CollapsibleExample;