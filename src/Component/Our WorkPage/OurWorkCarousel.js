import {Carousel} from 'react-bootstrap';
        //images
import Lab from '../../img/Lab.jpg';
import Watch from '../../img/Watch.jpg';
import Starb from '../../img/Starb.jpg';

export default function OurWorkCarousel() {
    return (                           
                <Carousel>
        <Carousel.Item>
        <img className="d-block w-100" src={Lab} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={Watch} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={Starb} alt="Three slide" />
        </Carousel.Item>
                </Carousel>
    );
  }