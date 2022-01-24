import './App.css';
import "./Component/Common/Header.css";
import "./Component/Common/Footer.css";
import "./Component/Common/FooterTwo.css";
import { Container, Row, Col, Button} from "react-bootstrap";
              //Common Directory
import Header from "./Component/Common/Header";
import Footer from "./Component/Common/Footer";
import FooterTwo from "./Component/Common/FooterTwo";
              //Component HomePage Directory
import CarouselSlide from "./Component/HomePage/CarouselSlide";
import ServicesFour from "./Component/HomePage/ServicesFour";
import ImageLinks from "./Component/HomePage/ImageLinks";
import Paragraph from "./Component/HomePage/Paragraph";
              
export function App() {
  return (
      <div className="App">
            <Header/>
        <CarouselSlide/>
            <Container fluid>
                <Row><Col>
                    <div className="Header-TextHome">         
        <h1 className="Text-HeadLine">Creative Graphic Design Company <strong className="ChangeText"> in India </strong></h1>
                    <div className="Header-Homeh3">
        <h3 className="HeaderHome-h3">The place to look for All Your GRAPHIC DESIGN Needs</h3>
        <h4 className="HeaderHome-h4"> Find <span className="TextChange-Home">  All Creative Services Under one Roof </span></h4>
                <p className="HeaderHome-P">We can help you with Quality <b>Web Designs, Graphic Designs, Print Designs, Web Based Designs</b> 
                and much more. <b> Since 1990 </b> our graphic designs have been associated with almost all
                the sectors of industry. We can satisfy any and all your graphic designing needs.</p>
        <h5 className="HeaderHome-h5">All this with an experience of 31 years will give you maximum value for money and satisfaction</h5></div></div></Col></Row>
                            </Container>      
                        <hr className="Line" />  
                        {/* ServicesFour Link */}
                            < ServicesFour />
                    {/* Single Paragraph Box Row */}
              <div className="Black-Box">
                      <Container>
                  <Row className="Box-Text">               
        <h3 className="Box-h3"><b>Understanding Client's Needs</b><br /></h3>
        <p className="Box-P">We definitely understand and lend a hand to our clients in building their image. In advertising, we call it, “Brand Image Building”. Along with providing services we assist them in a personalized and in sober manner. Recognizing the needs of the Advertiser / Marketer, we go through in depth and root of the crisis and come out with the creative solution for it..</p>
                      </Row></Container></div>   
                      {/* ImageLinks Link */}
                            <ImageLinks/>
                          {/* Grade Points */}
                          <hr className="Line" /> 
                  <div className="Container-Grade">
                            <Container><Row>                            
                        <Col><div class="Number-Move">
                <span class="Number">0</span></div>
                <span class="Text-Bottom">Years of  Experience</span></Col>                           
                        <Col><div class="Number-Move">
                <span class="Number">5</span>
                <span class="Number">+</span></div>
                <span class="Text-Bottom">Small But Creative Team</span></Col>                              
                        <Col><div class="Number-Move">
                <span class="Number">0</span>
                <span class="Number">+</span></div>
                <span class="Text-Bottom">Domestic Project Completed</span></Col>                           
                        <Col><div class="Number-Move">
                <span class="Number">0</span>
                <span class="Number">+</span></div>
                <span class="Text-Bottom">Abroad Project Completed</span></Col></Row>
                            </Container></div>                           
                            {/* Text align Centre Our Services */}
                                    <hr className="Line" /> 
                                <div className="Services">
                        <h2><b> Our Service </b></h2></div>
                            {/* Paragraph Link */}
                                <Paragraph/>                                                     
                            {/* Why Chooise US */}
                    <div className="Chooise-Us">
                        <Container><Row>
          <h3 className="Chooise-h3"><span  className="Chooise-Span"><b>Why choose us?</b></span></h3>
          <p><span  className="Chooise-P">If you are looking for a company that not only provides a solution to your problem but also, facilitates the services<br />and gives you the absolute result. We are the right agency for you. We offer and resolve all the advertising and<br />designing solutions.</span></p>
                            <div className='Button-One'>
              <Button variant="info">Click Here to Get in Touch With Us</Button></div>
                        </Row></Container></div>
                                {/* Qeustion and Answer */}
                    <div className="Answer">
                           <Container><Row><Col>
                <h2><span className="Answer-h2">You Have Questions, We Have Answers </span></h2>
                <p ><span className="Answer-P">Schedule a 30-Minute Meeting with Our Expert.</span></p>   
          <Button className="Button-Two" variant="light">Schedule a Meeting </Button>
              </Col></Row></Container></div>   
                         {/* Our Branches Locations Paragraph */}
                          <div className="Clients">
                            <Container>
        <p className="Clients-P">Our Happy Domestic Clients from Vadodara, Mumbai, Surat, Rajkot, Bangalore, Pune, Ahmedabad, Kolkata, Chennai, Delhi, Goa, Hyderabad, Pune Our Happy Abroad Clients from USA, UK, Australia, Newzealand, Dubai, China, Singapore, Thailand, Greece, Canada and Korea</p>
                              </Container></div>    
                                    {/* Footer's Link */}  
                                            <Footer/>
                                         <FooterTwo/>
    </div>
  );
}
export default App;