import styles from './Footer.module.css'
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
    return (
        <Navbar className={styles['footer']} expand="lg" fixed="bottom" bg="dark" variant="dark">
            <p>&copy; All rights reserved by <i><a className={styles['link']} href="https://github.com/AleksandarIliev" target="_blank" rel="noreferrer noopener">Aleks - M</a></i></p>
        </Navbar>
    );
}