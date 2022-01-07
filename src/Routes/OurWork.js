import "../Routes/OurWork.css";
import Header from "../Component/Common/Header";
import Footer from "../Component/Common/Footer";
import FooterTwo from "../Component/Common/FooterTwo";
import CarouselOne from "../Component/Our WorkPage/CarouselOne";
import CarouselTwo from "../Component/Our WorkPage/CarouselTwo";
import {Carousel,Container,Col,Row,Button} from "react-bootstrap";
             // images
import Cafe from "../Component/HomePage/img/Cafe.jpg";
import Creative from "../Component/HomePage/img/Creative.jpg";
import Meet from "../Component/HomePage/img/Meet.jpg";
import Whatsapp from "../Component/HomePage/img/Whatsapp.jpg";
import Lab from '../Component/HomePage/img/Lab.jpg';
import Watch from '../Component/HomePage/img/Watch.jpg';
import Starb from '../Component/HomePage/img/Starb.jpg';

export default function OurWork() {
    return (
        <div className="Header">
            <Header/>
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
                                <hr className="Line" />  
                    <div className="OurWork-Header">
            <h2 className="OurWork-Header-h2">Graphic Design Packages</h2>
            <h3 className="OurWork-Header-h3">Custom Packages available to Fit Your Budget</h3>
            <p className="OurWork-Header-P">Our professional designers are at your service! Everything will be designed for your special needs with 100% personal attention.</p>
                            </div>                    
                        <CarouselOne />       
                    <CarouselTwo />                 
         {/* Section-11, Total 14-Section's */}                      
 <h2 className="Logo-Design-h2">WhatsApp Invitation Package</h2>
         <   div className="Logo-Design">                  
         <Container><Row>
 <Col><h3 className="Logo-Design-h3">WhatsApp Invites Design Services India</h3>
     <p className="Logo-Design-P">We at Abhishek Graphic Designs in Vadodara, India provide specialized service for WhatsApp cards for all occasions including personal or commercial through a dedicated team of experienced WhatsApp invitation makers.</p>
     <p className="Logo-Design-P">The professionally designed WhatsApp invitations are good looking, theme-oriented, more impressive and more memorable. The engagement of our WhatsApp greetings and invitation card specialists for designing an impressive and content enriched invitation save you lots of time and effort.</p>
     <p className="Logo-Design-P">The design and content are created in the line with your liking and preferences like highlighting the special events, event theme, special guests, or venue etc.</p></Col>
 <Col> <img alt="" class="Logo-Images" src={Whatsapp} /> </Col></Row>                          
                 <div className="d-grid gap-2">
     <Button className="Logo-Button" variant="primary" size="lg">Hava a Look @ Our WhatsApp Invitation Sample & Packages</Button></div>
         </Container></div>
         {/* Section-12, Total 14-Section's */}                      
 <h2 className="Logo-Design-h2">Magazine & Newsletter Design Package</h2>
         <   div className="Logo-Design">                  
         <Container><Row>
 <Col><h3 className="Logo-Design-h3">Magazine and Newsletter Design Services</h3>
     <p className="Logo-Design-P">Local magazines are highly valued and respected publications that build a sense of community among local consumers. In fact, many people turn to local publications as a source of advice, information, entertainment, knowledge, and more. Advertisers can greatly benefit from this credibility when their ads are viewed not as ads but as recommendations from a trusted source.</p>
     <p className="Logo-Design-P">Abhishek helps in marketing and promotion with the incredible magazine designs. Hire our Magazine Layout Design services today! Abhishek Graphic Services offers expert magazine design, layout, and production services. We have very good experience in print and advertising design We offer a fixed per-page price for your magazine design, layout, and production services.</p></Col>
 <Col> <img alt="" class="Logo-Images" src={Meet} /> </Col></Row>                          
                 <div className="d-grid gap-2">
     <Button className="Logo-Button" variant="primary" size="lg">Hava a Look @ Our Magazine & Newsletter Sample & Packages</Button></div>
         </Container></div>
         {/* Section-13, Total 14-Section's */}                      
 <h2 className="Logo-Design-h2">Web Banner / Social Banner Design Package</h2>
         <   div className="Logo-Design">                  
         <Container><Row>
 <Col><h3 className="Logo-Design-h3">Web & Social Banner Design Services</h3>
     <p className="Logo-Design-P">We design all types of web banners and social media graphics as per our clients’ specifications and requirements, incorporating their company branding and follow all branding guidelines. We design web graphics that are reflective of our clients’ company’s branding in a style that they want so you can say everything we design starts and ends with our clients. They have 100% control over the whole design process.</p>
     <p className="Logo-Design-P">we use our banner design methods to promote company visibility across the internet. If you want your company to become more recognized than before, you should rely on our banner design services. If you require a website banner design and Social Media banner, we can provide the best banner design services at affordable costs. We are backed up by a team of expert banner designers who understand your requirements and produce unique and eye-catchy banner designs.</p>
     <p className="Logo-Design-P">Technology has empowered the advertising industry to transform into a variety of different mediums including social media, online promotions, and digital marketing, etc.</p>
     <p className="Logo-Design-P">Abhishek Graphics is a Graphics Design company that has dedicated its services to the propelling of businesses to higher heights. We are the pioneers of the internet marketing industry and it is our utmost desire to satisfy our clients.</p></Col>
 <Col> <img alt="" class="Logo-Images" src={Creative} /> </Col></Row>                          
                 <div className="d-grid gap-2">
     <Button className="Logo-Button" variant="primary" size="lg">Hava a Look @ Our Web Banner Sample & Packages</Button></div>
         </Container></div>
         {/* Section-14, Total 14-Section's */}                      
 <h2 className="Logo-Design-h2">Poster Design (Print media) Package</h2>
         <   div className="Logo-Design">                  
         <Container><Row>
 <Col><h3 className="Logo-Design-h3">Creative Poster Design Services in India</h3>
     <p className="Logo-Design-P">Posters are a great way to convey your message. It is the visual appeal of this promotional tool, which contributes to its success. No wonder, posters have always been in vogue, as far as offline marketing is concerned. We, at Abhishek Graphics (Abhishek Branding LLP), are known for creating poster designs for various kinds of businesses. Whether you are launching a new product or service or announcing an event, our poster design services can meet your expectations with full flair.</p>
     <p className="Logo-Design-P">Abhishek Graphics is one of the best poster design service providing company. Already you have come across the points for which we are unique in the market not only within nations but internationally also. We don't see whether the company is big or small, all clients are treated with the same importance and gesture.</p></Col>
 <Col> <img alt="" class="Logo-Images" src={Cafe} /> </Col></Row>                          
                 <div className="d-grid gap-2">
     <Button className="Logo-Button" variant="primary" size="lg">Hava a Look @ Our Poster Design Sample & Packages</Button></div>
         </Container>
                                        <div className="OurWork-Links">
            <h2 className="OurWork-End-h2">We have Affordable Graphic Design Packages for you to Choose From:</h2>
                <a href="#section" className="First-Link">Custom Logo Design Company in India <span className="Vertical-Bar">|</span></a>
                <a href="#section" className="First-Link">Brochure Design Company India <span className="Vertical-Bar">|</span></a>
                <a href="#section" className="First-Link">Product Packaging Design Company India <span className="Vertical-Bar">|</span></a>
                <a href="#section" className="First-Link">Exhibition Stall Designer in India <span className="Vertical-Bar">|</span></a>
                <a href="#section" className="First-Link">Company Profile Design Service India <span className="Vertical-Bar">|</span></a>
                <a href="#section" className="First-Link">Signage Design Company in India <span className="Vertical-Bar">|</span></a>
                <a href="#section" className="First-Link">Calendar Design Services India <span className="Vertical-Bar">|</span></a>
                <a href="#section" className="First-Link">Indoor - Outdoor Graphics Design <span className="Vertical-Bar">|</span></a>
                <a href="#section" className="First-Link">Video Production Company India <span className="Vertical-Bar">|</span></a>
                <a href="#section" className="First-Link">UI/UX Designer <span className="Vertical-Bar">|</span></a>
                <a href="#section" className="First-Link">Magazine & Newsletter Design <span className="Vertical-Bar">|</span></a>
                <a href="#section" className="First-Link">Whatsapp Invited Design Services India <span className="Vertical-Bar">|</span></a>
                <a href="#section" className="First-Link">Social Media Post Design Agency India <span className="Vertical-Bar">|</span></a>
                <a href="#section" className="First-Link">Web & Social Banner Design Services India</a>
                                    </div></div>
                                <hr className="Line" />  
                        <Footer/>
                    <FooterTwo/>
            </div>
    );
  }