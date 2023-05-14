import Accordion from 'react-bootstrap/Accordion';
import styles from './About.module.css';

export const About = () => {
    return (
        <Accordion className={styles.aboutStyle}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>For company</Accordion.Header>
                <Accordion.Body>
                    <p>
                        Our company is with more than 10 years of experience behind it.
                        What sets us apart from others companies is that we don't just talk, we work and do everything perfectly from beginning to the end.
                        We develop, create, bild and implement from big to small project, according to the customer's order.
                        We keep in touch with the best specialists in their sphere.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Experience we have</Accordion.Header>
                <Accordion.Body>
                    <p>We have established solid ties with proven specialists in the field of:</p>
                    <ul>
                        <li>Mechanical engineering</li>
                        <li>Construction - any type</li>
                        <li>Electrical engineering</li>
                        <li>Geodesic</li>
                        <li>Architectural</li>
                        <li>Robotics</li>
                    </ul>
                    <p>...and many other near and far industries.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Our partners</Accordion.Header>
                <Accordion.Body>
                    We have a partners in many areas.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Our certificates</Accordion.Header>
                <Accordion.Body>
                    <p>Here are some of the certificates we have:</p>
                        {/* image with certificates we have*/}
                    <p>...and we won't stop there.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Our team</Accordion.Header>
                <Accordion.Body>
                    <p>Eng. Michail Mihailov - civil engineer/civil construction</p>
                    <p>Eng. Danail Angelov - machanical engineer/automotive</p>
                    <p>Eng. Marian Iliev - mechanical engineer/printing industry</p>
                    <p>Eng. Ivailo Lalov - electrical engineer</p>
                    <p>Eng. Aleksandar Iovchev - mechanical engineer/automotive</p>
                    <p>Eng. Plamen Angelov - mechanical engineer/metrologist</p>
                    <p>Arch. Bogdana Nikolova - architect/civil construction</p>
                    <p>Eng. Aleksandar Iliev - mechanical engineer/constructor</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}