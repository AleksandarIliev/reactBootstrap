import styles from './Error.module.css'

import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const Error = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.errorStl}>
            <h4>ERROR!!!</h4>
            <p>Something's going wrong. Please use the options below:</p>
            <Button className={styles.btn} variant="light" onClick={() => navigate(-1)}>Go back</Button>
            <Button className={styles.btn} variant="light" onClick={() => navigate("/")}>Go home page</Button>
        </div>
    );
}