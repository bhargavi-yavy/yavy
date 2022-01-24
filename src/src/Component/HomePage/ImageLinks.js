import { Container, Row, Col, Button} from "react-bootstrap";
import create from './img/create.jpg';
import Dubai from './img/Dubai.jpg';
import Origamil from './img/Origamil.png';
import Palavi from './img/Palavi.jpg';
import Sud from './img/Sud.jpg';
import product from './img/product.jpg';
import Education from './img/Education.jpg';
import Greenovat from './img/Greenovat.jpg';
import "../HomePage/ImageLinks.css"

export default function ImageLinks() {
   return(

           //Section - One, One Row and Three Col Buttons
                     <div className="Img-Link">
                <Container>
                        <Row><Col>                
         <p className="Img-Link-P">Instead of talking blunders, we believe in action and execution. So we will go we offer, from outcome product. We are indulged in every aspect of communication, whether it is advertising or web designing, or else it is corporate identity or brand building. We are the complete solution of all your marketing and designing needs.</p>
                        <Button className="Button-ImageLinks" variant="info">Click here for Portfolio</Button></Col>
                  <Col xs={{ order: 12 }}>          
         <p><a href="#section">
         <img alt="Logo Design USA" class="" src={Dubai} /></a></p></Col>
                      <Col xs={{ order: 12    }}> 
                  <div class="x-text">
         <p><a href="#section">
         <img alt="Uk" class="" src={Origamil} /></a></p></div>
             </Col></Row>
                     </Container>
                  {/* Section-Two, One Row and Three Col Buttons */}
                           <Container><Row>
                      <Col xs={{ order: 12 }}>           
         <p><a href="#section">
         <img alt="Logo Design USA" className="" src={Sud} /></a></p></Col>
                     <Col xs={{ order: 12 }}>
         <p><a href="#section">
         <img alt="Logo Design USA" className="" src={create} /></a></p></Col>
                        <Col xs={{ order: 12 }}>                  
         <p><a href="#section">
         <img alt="Uk" className="" src={Palavi} /></a></p></Col>
                        </Row>
                           </Container>
                {/* Section- Three, One Row and Three Col Buttons */}
                              <Container><Row>
                        <Col xs={{ order: 12 }}>
         <p><a href="#section">
         <img alt="Logo Design USA" className="" src={product} /></a></p></Col>
                     <Col xs={{ order: 12 }}>         
         <p><a href="#section" >
         <img alt="Logo Design USA" classNmae="" src={Education} /></a></p></Col>
                     <Col xs={{ order: 12 }}>
         <p> <a href="#section" > 
         <img alt="Uk" className="" src={Greenovat} /></a></p></Col></Row>
                     </Container>
      </div>
   );
}