import { Container, Row, Col} from "react-bootstrap";
import Graphics from './img/Graphics.jpg';
import Print from './img/Print.jpg';
import Based from './img/Based.jpg';
import UI from './img/UI.jpg';
import "../HomePage/ServicesFour.css";
 
export default function ServicesFour() {
   return(

               //Section - 1 Pgh and Image
          <div className="Container-One">
                     <Container>
              <Row className="Row-Style"><Col>       
      <h2 className="Row-Style-h2">Graphic Design</h2>     
      <p><strong className="Row-Style-Strong"> We Understand "<span className="Row-Style-Span">A picture is worth a thousand words</span>"</strong></p>
      <p className="Row-Style-P">In today's fast life people rarely have the time to read something. The best way to convey something fast is by Graphics. We at Abhishek Graphics understand your idea and turn it into a picture that your customer can relate to.</p></Col>
                     <Col>                       
      <img alt="Placeholder" className="Graphics" src={Graphics} />
                       </Col></Row>
                   </Container>
               {/* Section-2 Image and Pgh */}
                        <Container>
               <Row className="Row-Style"><Col>
      <img alt="Placeholder" className="Graphics" src={Print} /></Col>
                     <Col>
      <h2 className="Row-Style-h2">Print Media and Communication</h2>
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