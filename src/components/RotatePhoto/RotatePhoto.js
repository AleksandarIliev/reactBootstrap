import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './rotatedPhoto.module.css';
import { Link } from 'react-router-dom';

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        height={"600px"}
                        className="d-block w-100"
                        src={require(`./Line_for_paqueting.jpg`)}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3><Link className={styles.anch} to="/allProducts">Line for paqueting</Link></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={"600px"}
                        className="d-block w-100"
                        src={require(`./Section_for_spedition.jpg`)}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3><Link className={styles.anch} to="/allProducts">Section for spedition</Link></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={"600px"}
                        className="d-block w-100"
                        src={require(`./Conveying_belt.jpg`)}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3><Link className={styles.anch} to="/allProducts">Conveying belt</Link></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={"600px"}
                        className="d-block w-100"
                        src={require(`./Line_for_recycling_of_nylon.jpg`)}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h3><Link className={styles.anch} to="/allProducts">Line for nylon recycling</Link></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={"600px"}
                        className="d-block w-100"
                        src={require(`./Line_for_transport_and_filtering.jpg`)}
                        alt="Fifth slide"
                    />
                    <Carousel.Caption>
                        <h3><Link className={styles.anch} to="/allProducts">Line for transport and filtering</Link></h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}