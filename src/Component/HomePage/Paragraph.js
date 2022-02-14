import { Container, Row, Col} from "react-bootstrap";
import axios from 'axios';
import React,{useState} from 'react';
import { BsBookHalf, BsFillAlarmFill, BsLaptop, BsMegaphone} from "react-icons/bs";
import "../HomePage/Paragraph.css";

export default function Paragraph() {
      const [text,setText] = useState([]);

      axios.get("http://localhost:5000/text").then
            (response => setText(response.text)
               )
            return (
                        <div className="Aside">
                              <Container fluid><Row>
                  {text.map(value => { 
                        return (           
                  <Col className="P-Black">     
                              <div className="Icon-Symbol">
                        <BsMegaphone className="IconS" /></div>
            <h3  className="P-Header"><span class="P-HeaderText">{value.header}</span></h3>
            <p className="P-TextP">{value.paragraph}</p></Col>
                         ) } 
                  )}           
                              </Row></Container>
                  {/* Section-2 One box Step : 1 -Three Col and step : 2 -Three col */}
                                    <Container fluid>
                                          <Row>
                              <Col className="P-Blue">
                                          <div className="Icon-Symbol">
                                    <BsLaptop className="IconS" /></div>
                  <h3 className="P-Header"><span class="h-custom-headline man h4">Web Graphics and ad Design Service</span></h3>
                  <p class="P-TextP">It is possible that you already have your website and ad campaigns running. So what can we do for you in that case? We can bring your designs to the next level. Maybe you want some new images and theme customization to beautify your online presence (do you know what that is?), banners, on page graphics. Let us create what you have in mind and bring your vision into reality. Our highly skilled, and high on tea design team will create something better than you have imagined.</p></Col>
                              
                              <Col className="P-Black">
                                          <div className="Icon-Symbol">
                                    <BsFillAlarmFill className="IconS" /></div>
                  <h3 className="P-Header"><span class="h-custom-headline man h4">Corporate Identity Design Service</span></h3>
                  <p class="P-TextP"> Abhishek Graphics offers a range of creative Brand Identity Design services. We believe your Brand is the core of your Business. No matter whether you are a sole owner or a multinational business, it is a critical factor to get right in order to be successful. We offer a wide variety of corporate designs for Coffee Mug, Visiting Cards, Letter Heads, Carry Bags, Laptop Skin Calendars, Note Pads, Diary Design and much more.</p></Col>
                              
                              <Col className="P-Blue">
                                     <div className="Icon-Symbol">
                                    <BsBookHalf className="IconS" /></div>
                  <h3 className="P-Header"><span class="h-custom-headline man h4">Designing Pharmaceuticals Company</span></h3>
                  <p class="P-TextP">Illustrative and informative graphics for Pharmaceutical Industry. Get your medicine a catchy graphics and an attractive tagline. In our tenure as a graphic design firm we have worked with several big and small names and designing Ads for Pharma Companies has become our speciality. We provide Visual Aid design too so that you can expressively convince your client.</p></Col></Row>
                                          </Container>
            </div>
                  );
}