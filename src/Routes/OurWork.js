import "../Routes/OurWork.css";
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import Header from "../Component/Common/Header";
import Footer from "../Component/Common/Footer";
import FooterTwo from "../Component/Common/FooterTwo";
import {Carousel,Container,Col,Row,Button} from "react-bootstrap";
import OurWorkCarousel from "../Component/Our WorkPage/OurWorkCarousel";
             // images
import DNK from "../img/DNK.jpg";
import Pad from "../img/Pad.jpg";
import Dubai from "../img/Dubai.jpg";
import Desposible from "../img/Desposible.jpg";

export default function OurWork () {
        const [services,setServices] = useState ([
                
        ]);
                useEffect(() => {
axios.get('http://localhost:5000/services')
        .then((res) => {
                const services = res.data;
               setServices(services)
                });
},[]);  
    return (
        <div className="Header">
                <Header/>
                        <OurWorkCarousel/>
                                <hr className="Line" />  
                    <div className="OurWork-Header">
            <h2 className="OurWork-Header-h2">Graphic Design Packages</h2>
            <h3 className="OurWork-Header-h3">Custom Packages available to Fit Your Budget</h3>
            <p className="OurWork-Header-P">Our professional designers are at your service! Everything will be designed for your special needs with 100% personal attention.</p>
                            </div>                                   
                                    {/* Total 14-Section's */}      
                    {services.map(value => { 
                            return (                
            <><h2 className="Logo-Design-h2">{value.headerCentre}</h2>
                    < div className="Logo-Design">                  
                    <Container><Row>
            <Col><h3 className="Logo-Design-h3">{value.title}</h3>
                <p className="Logo-Design-P">{value.description}</p>
                <p className="Logo-Design-P">{value.descriptionOne}</p>
                <p className="Logo-Design-P">{value.descriptionTwo}</p></Col>
            <Col><Carousel>
                <Carousel.Item>
                <img className="d-block w-100" src={Dubai} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                <img className="d-block w-100" src={DNK} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                <img className="d-block w-100" src={Pad} alt="Three slide" />
                </Carousel.Item>
                <Carousel.Item>
                <img className="d-block w-100" src={Desposible} alt="Fourth slide" />
                </Carousel.Item>
            </Carousel></Col></Row>                          
                            <div className="d-grid gap-2">
                <Button className="Logo-Button" variant="primary" size="lg">{value.button}</Button></div>
                        </Container></div></>
          ) }
        )}       
                                {/* Services Links*/}
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
                                    </div>
                                <hr className="Line" />  
                        <Footer/>
                    <FooterTwo/>
            </div>
    );
}