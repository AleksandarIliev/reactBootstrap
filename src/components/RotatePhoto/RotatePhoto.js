import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './rotatedPhoto.module.css';

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
                        <h3><a className={styles.anch} href="/products">Line for paqueting</a></h3>
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
                        <h3><a className={styles.anch} href='/products'>Section for spedition</a></h3>
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
                        <h3><a className={styles.anch} href='/products'>Conveying belt</a></h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}