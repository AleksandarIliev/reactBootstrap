import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './rotatedPhoto.module.css';

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        height={'600px'}
                        className="d-block w-100"
                        src={require(`./Big-Bag-station.jpg`)}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3><a href='/products'>Big bag station</a></h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={'600px'}
                        className="d-block w-100"
                        src={require(`./Bunker.jpg`)}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3><a href='/products'>Bunker</a></h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={'600px'}
                        className="d-block w-100"
                        src={require(`./Conveying-belt.jpg`)}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3><a href='/products'>Conveying belt</a></h3>
                        {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}