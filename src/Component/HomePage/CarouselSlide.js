import { Carousel } from 'react-bootstrap';
import Technology from './img/Technology.jpg';
import Trains from './img/Trains.jpg';
import Glob from './img/Glob.jpg';

export default function CarouselSlide() {
  return (

<Carousel>
  <Carousel.Item>
  <img className="d-block w-100" src={Trains} alt="First slide" />
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" src={Technology} alt="Second slide" />
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" src={Glob} alt="Three slide" />
  </Carousel.Item>
</Carousel>
  );
}