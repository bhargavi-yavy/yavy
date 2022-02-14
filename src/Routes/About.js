import '../Routes/About.css';
import axios from 'axios';
import React,{useState} from 'react';
import Circle from '../img/Circle.png';
import {Container, Row, Col,ProgressBar} from "react-bootstrap";
            //Components
import Header from "../Component/Common/Header";
import Footer from "../Component/Common/Footer";
import FooterTwo from "../Component/Common/FooterTwo";

export default function About() {
    const [data,setData] = useState([]);

    axios.get("http://localhost:5000/data").then
        (response => setData(response.data)
            )
    const [content,setContent] = useState([]);

    axios.get("http://localhost:5000/content").then
        (response => setContent(response.content)
            )
return (
            <div className="Header">
        <Header/>
                        <div className="Header-TextAbout">
                 <h1 className="About-h1">Yavi Design Studios</h1>
                 <p className="About-P">Graphics, Logos, Designing and much more</p></div>
                            <div className="White-Box">
                        <h2 className="About-White-h2">Who we are.</h2>
                        <p className="About-White-P">22nd June, 1990 saw the inception of a dynamic enterprise in the name of Abhishek Design Studio. With a bare minimum of resources and infrastructure it managed to see work beyond its potential and saw consistent work premise for its identity. There has always been a concentrated effort on coming up with productive creative output leveled with an insightful overview on brand excellence.</p>
                                </div>
        <div className="Progress-Bar">
                <Container fluid><Row>
                    <Col className="Text-Our-P">
        {data.map(value => { 
                return (
                <div className="Our-History">
                        <h2 className="Our-Bar-h2">{value.title}</h2>
                        <p className="Our-Bar-P">{value.description}</p>
                    </div> 
                    ) } 
                )} </Col>
                            <Col>
                <div className="Our-Skils"> 
    <span className="Text-color">GRAPHIC DESIGN</span><ProgressBar now={99} className="Bar" /><br />
    <span className="Text-color">PRINT MEDIA AND COMMUNICATION</span><ProgressBar now={97} className="Bar" /><br />
    <span className="Text-color">WEB BASED GRAPHIC DESIGN</span><ProgressBar now={95} className="Bar" /><br />
    <span className="Text-color">BRANDING</span><ProgressBar now={97} className="Bar" /><br />
    <span className="Text-color">LOGO DESIGN</span><ProgressBar now={92} className="Bar" /><br />
    <span className="Text-color">UI-UX DESIGN</span><ProgressBar now={90} className="Bar" /><br />
    <span className="Text-color">PHARMA BRANDING</span><ProgressBar now={90} className="Bar" />
                </div></Col></Row>                              
                </Container></div>                            
        <div className="About-Centre">
            <h2 className="About-White-h2">Why to choose US ?</h2>
            <p className="About-White-P">What separates Abhishek Design Studios from other Designing Firms is our Great customer services and response time (we wont make you wait for weeks to hear back from us). We have a quick turn time and an honest and no nonsense approach to all of our projects.</p><br />
            <p className="About-White-P" >We are also very reasonable when it comes to our pricing and more affordable than most legitimate graphic design studios. Yes sure we are not the cheapest provider out there, but our work is top notch and impeccable, no hidden fees pricing structure and no hidden charges.</p>                                      
                            <div className="About-Centre-Two">
                    <Container>
                        <Row><Col>
                                <p className="About-Centre-P">Hello Readers!</p>
                                <p className="About-Centre-P">This is Manish Vaishnav, the proud Creative Head of Abhishek Branding LLP. For 31<br /> years I have had the pleasure of running this design and development firm. Over the <br />years we have transformed into a complete One-Stop solution for your graphic design<br /> needs.  I have the great pleasure of having a team of people who are experts in the fields <br />of Graphic art, website designing, and content writing, most of whom work for us on a <br />very flexible basis. We only employ or contract individuals who reside in INDIA and <br />I guess I could say everything we do is “Made in the<br /> INDIA.” We take great pride in the fact that we do not outsource to other countries like most other design firms.</p>
                                <p className="About-Centre-P">Currently I reside in my home in the heart of the city of Vadodara located in Gujarat,<br /> India. My hobbies, besides work and being creative for our clients are Riding, Travelling,<br /> and other outdoors-related.</p>
                                <p className="About-Centre-P">We look forward to hearing from you whenever you are in need of any Graphic <br />Designing Services. We also look forward to meeting and exceeding your expectations<br /> regarding any graphic design, or other needs you might have.</p>
                                <p className="About-Centre-P"> Sincerely,<br />
                                    Manish Vaishnav<br />
                                    Creative Head<br />
                                    Abhishek Branding LLP<br /></p>                            
                            </Col>
                            <Col> 
                            <img alt="" class="Y-Image" src={Circle} />
                            </Col></Row>
                        </Container>      
                        <hr className="About-Line" /> 
                    <div className="About-Centre-Three">
                <h4 className="About-Centre-h4">How we work</h4>
                        <Container><Row>
                    {content.map(value => {
                        return (
    <Col className="About-Three-P"><span className="About-Number">{value.number}</span>{value.paragraph}</Col>
                                ) } 
                            )} 
                        </Row></Container>
                                    <div className="About-Aside-P">
            <h2 className="About-Aside-h2">We work passionately to provide you with best work possible</h2>
            <p className="About-White-P">What separates Abhishek Design Studios from other Designing Firms is our Great customer services and response time (we wont make you wait for weeks to hear back from us). We have a quick turn time and an honest and no nonsense approach to all of our projects.</p><br />
            <p className="About-White-P" >We are also very reasonable when it comes to our pricing and more affordable than most legitimate graphic design studios. Yes sure we are not the cheapest provider out there, but our work is top notch and impeccable, no hidden fees pricing structure and no hidden charges.</p>
                                    </div></div>
                                </div></div>
            <h1 className="About-Container-h1">Start your project today!</h1>
                                <Footer/>
                    <FooterTwo/>
        </div>
    );
}