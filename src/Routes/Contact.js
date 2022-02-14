import axios from 'axios';
import '../Routes/Contact.css';
import Iframe from 'react-iframe';
import React,{ useState } from 'react';
import Enquire from '../img/Enquire.png';
import { Container, Row, Col,Form,Button,Dropdown,InputGroup,
        SplitButton,FormControl,Accordion,OverlayTrigger,Tooltip} from 'react-bootstrap';
            //Components
import Header from '../Component/Common/Header.js';
import Footer from '../Component/Common/Footer.js';
import FooterTwo from '../Component/Common/FooterTwo.js';

export default function Contact() {
        const [show,setShow]=useState(false)
        const [animation,setAnimation] = useState([]);

axios.get("http://localhost:5000/animation").then
(response => setAnimation(response.animation)
        )
    return (               
        <div className="Header">
            <Header/>
            <div className="Header-TextContact">
    <h1 className="Contact-h1">Start your project today.</h1></div>
    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2324.9116926304937!2d73.1809213404089!3d22.337187606476405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x257a302b51d38ef8!2sAbhishek+Graphics!5e0!3m2!1sen!2sus!4v1497507210403" width="100%" height="500px"/>
                            <hr className="Line" />  
        <div className="Aside-Centre">
                         <Container><Row>      
                    <Col className="Close-Forms">
            {animation.map(value => { 
                return ( 
                    <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
        <Accordion.Header>{value.header}</Accordion.Header>
            <Accordion.Body className="Font-Color">{value.title} <br />
    <span className="Font-Color-Span">{value.description}</span>
            </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                ) } 
          )}   
              </Col> 
                {/* Forms */}              
        <Col className="Forms">
                    <img alt="" class="Enquire-Img" src={Enquire} />
            <Form><Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name: <span className="Red">*</span></Form.Label>
                    <Form.Control type="email" placeholder="First Name" />
                    {
            show?<p id="demo">First Name Invalid</p>:null
                    }
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name <span className="Red">*</span></Form.Label>
                    <Form.Control type="password" className="psw-1" placeholder="Last Name" />
                    {
            show?<p id="demo">Last Name Invalid</p>:null
                    }
            </Form.Group></Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Company Name:<span className="Red">*</span></Form.Label>
                    <Form.Control placeholder="" />
                    {
            show?<p id="demo">Company Name Invalid</p>:null
                    }
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Email: <span className="Red">*</span></Form.Label>
                    <Form.Control placeholder="" />
                    {
            show?<p id="demo">Email Invalid</p>:null
                    }
            </Form.Group> <>
                <Form.Label>Contact No: <span className="Red">*</span></Form.Label>
            <InputGroup className="mb-3">
                <SplitButton variant="outline-secondary" title="+91" id="segmented-button-dropdown-1">
                    <Dropdown.Item href="#">+1</Dropdown.Item>
                    <Dropdown.Item href="#">+2</Dropdown.Item>
                    <Dropdown.Item href="#">+3</Dropdown.Item>
                    <Dropdown.Item href="#">+4</Dropdown.Item>
                </SplitButton>
            <FormControl aria-label="Text input with dropdown button" />
            </InputGroup></> 
                <Col md>
                    <Form.Label>Service Type: <span className="Red">*</span></Form.Label>
                    <Form.Select aria-label="Floating label select example">
                        <option>--Select--</option>
                        <option value="1">Inquiry</option>
            </Form.Select>
                </Col>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Discription:</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
                <Button onClick={()=>setShow(!show)} variant="primary">Submit</Button>
            </Form></Col>             
            </Row>
            </Container></div>
                        {/* Booking Sloat*/}
                <div className="Content">
        <h1 className="Content-h1">Have a project in mind?</h1>
        <h3 className="Content-h3">Book a meeting with our team</h3>
                        <div className="Contact-Button">
                                <>
                        {[ 'right'].map((placement) => (
                            <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                                <Tooltip id={`tooltip-${placement}`}> Book A Meeting</Tooltip>
                            }>
                            <Button className="Contact-Right" variant="secondary">Book A Meeting </Button>
                            </OverlayTrigger>
                        ))}
                        </></div></div>
                <Footer/>
                    <FooterTwo/>
            </div>         
    );
  }