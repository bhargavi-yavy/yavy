import { Container, Row, Col} from "react-bootstrap";
import axios from 'axios';
import React,{useState} from 'react'
import "../HomePage/ServicesFour.css";
         //Images
import Graphics from './img/Graphics.jpg';
import Print from './img/Print.jpg';
import Based from './img/Based.jpg';
import UI from './img/UI.jpg';
 
export default function ServicesFour() {

   const [data,setData] = useState([
                     {"id":"1",
               "title":"TITLE 1",
               "subTitle":"SUB TITLE 1",
               "description":"Description1...",
               "imagePath":"./img1.jpg"},
                     {"id":"2",
               "title":"",
               "subTitle":"",
               "description":"",
               "imagePath":""},
                     {"id":"3",
               "title":"",
               "subTitle":"",
               "description":"",
               "imagePath":""},
                  {"id":"4",
               "title":"",
               "subTitle":"",
               "description":"",
               "imagePath":""}
]);
   axios.get("http://localhost:5000/products").then
      (response => setData(response.data)
   )
   return(
     
               //Section - 1 Pgh and Image
          <div className="Container-One">
                     <Container>
   
              <Row className="Row-Style"><Col>       
      <h2 className="Row-Style-h2">{data.map(value => <li key={value.id}>{value.title}</li>)}</h2>     
      <p><strong className="Row-Style-Strong"> {data.map(value => <li key={value.id}>{value.subTitle}</li>)}</strong></p>
      <p className="Row-Style-P">{data.map(value => <li key={value.id}>{value.description}</li>)}</p></Col>
                     <Col>                       
      <img alt="Placeholder" className="Graphics" src={Graphics} />
                       </Col></Row>
                   </Container>
               {/* Section-2 Image and Pgh */}
                        <Container>
               <Row className="Row-Style"><Col>
      <img alt="Placeholder" className="Graphics" src={Print} /></Col>
                     <Col>
      <h2 className="Row-Style-h2">{data.map(item => <li key={item.id}>{item.title}</li>)}</h2>
      <p><strong className="Row-Style-Strong">We Believe “<span className="Row-Style-Span">Physical Presence is also needed</span></strong>"</p>
      <p className="Row-Style-P">We all agree that computer has not made paper completely useless, While Web Site is your online brochure you need to have an offline presence too. This includes Brochures, Banners, Cards, Newspaper Ads, Magazine Ads and much more. Contact the best Graphic Design presence visible. </p>
                        </Col></Row>
                           </Container>
               {/* Section-3 Pgh and Image */}
                        <Container>
               <Row className="Row-Style"> <Col>
      <h2 className="Row-Style-h2"> Web Based Graphic Design </h2>
      <p><strong className="Row-Style-Strong">We Believe <span className="Row-Style-Span">That Good Can Be Made Better</span>"</strong></p>
      <p className="Row-Style-P">It is possible that you already have your website and running. We can your next level. Maybe you want some new images and theme banners or page graphics. Let us create what you have in mind and bring your vision into reality. Our highly skilled and team will create something better than you have imagined.</p></Col>
                     <Col>
      <img alt="Placeholder" className="Graphics" src={Based} />
               </Col></Row>
                        </Container>                     
               {/* Section-4 Image and Pgh */}
                        <Container>
               <Row className="Row-Style"><Col>
      <img className="Graphics" src={UI} alt="Placeholder" /></Col>
                     <Col>         
      <h2 className="Row-Style-h2">UI /UX Design</h2>
      <p><strong className="Row-Style-Strong">We cherish “<span className="Row-Style-Span">If you can think about it, an App for it.</span>”</strong></p>
      <p className="Row-Style-P"> We at Abhishek Graphics have taken a new step towards UI-UX designing. We combine art and technology to you a seamless experience. So if you want your business to have an App, look no further we can design it for you.</p>
                  </Col></Row>
                        </Container>
         </div>
   );
}