import '../Routes/Contact.css';
import Iframe from 'react-iframe'
import Header from "../Component/Common/Header";
import Footer from "../Component/Common/Footer";
import FooterTwo from "../Component/Common/FooterTwo";
import Enquire from '../Component/HomePage/img/Enquire.png';
import { Container, Row, Col,Form,Button,Dropdown,InputGroup,
        SplitButton,FormControl,Accordion,OverlayTrigger,Tooltip} from 'react-bootstrap';

export default function Contact() {
    return (
        <div className="Header">
            <Header/>
            <div className="Header-TextContact">
    <h1 className="Contact-h1">Start your project today.</h1></div>
    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2324.9116926304937!2d73.1809213404089!3d22.337187606476405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x257a302b51d38ef8!2sAbhishek+Graphics!5e0!3m2!1sen!2sus!4v1497507210403" width="100%" height="500px"/>
        <div className="Aside-Centre">
                         <Container>
                              <Row>
                                  <Col className="Close-Forms">
                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
        <Accordion.Header>Registered Office</Accordion.Header>
            <Accordion.Body className="Font-Color">Abhishek Graphics<br />
(A Division of Abhishek Branding LLP) <br />
    <span className="Font-Color-Span">Abhishek Graphics, Brahmayog Apts, Near Passport Office, Sama Road, Nizampura, Vadodara, Gujarat 390002</span>
            </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                                        <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                <Accordion.Header>Abhishek Design House</Accordion.Header>
                                    <Accordion.Body className="Font-Color">Abhishek Graphics<br />
                        (A Division of Abhishek Branding LLP)<br />
                            <span className="Font-Color-Span">36 Kadam Nagar, Nizampura,
                            Vadodara - 390024 Gujarat, India</span>
                                    </Accordion.Body>
                                        </Accordion.Item>
                                        </Accordion>               
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
    <Accordion.Header>Contact Us</Accordion.Header>
        <Accordion.Body>Phone : +91-265-2792211 <br />
                        Mobile :+91-937 707 2211, +91-99988 21262 <br />
                        US/CA: +1 (650) 550 9513 <br />
                        Email: info@abhishek.info <br />
        </Accordion.Body>
            </Accordion.Item>
            </Accordion>                
                                        <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                <Accordion.Header>Office Hours</Accordion.Header>
                                    <Accordion.Body>Mon - Fri:  09:00 AM to 08:00 PM<br />
                                                    Sat: 09:00 AM to 3:00 PM <br />
                                                    Sunday closed <br />
                                    </Accordion.Body>
                                        </Accordion.Item>
                                        </Accordion></Col>
                {/* Forms */}              
        <Col className="Forms">
                    <img alt="" class="Enquire-Img" src={Enquire} />
            <Form><Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Full Name: <span className="red">*</span></Form.Label>
                    <Form.Control type="email" placeholder="First Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label> </Form.Label>
                    <Form.Control type="password" className="psw-1" placeholder="Last Name" />
            </Form.Group></Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Company Name:<span className="red">*</span></Form.Label>
                    <Form.Control placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Email: <span className="red">*</span></Form.Label>
                    <Form.Control placeholder="" />
            </Form.Group> <>
                <Form.Label>Contact No: <span className="red">*</span></Form.Label>
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
                    <Form.Label>Service Type: <span className="red">*</span></Form.Label>
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
                <Button className="ContButton" variant="primary" type="submit">Submit</Button>
            </Form></Col></Row>
            </Container></div>
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