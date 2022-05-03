import Axios from 'axios';
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form,
         FormControl,InputGroup, SplitButton} from "react-bootstrap";
import {IoCaretForwardOutline, IoChevronForwardOutline, IoMenu} from "react-icons/io5";
      //images
import Google from '../../img/Google.png';
import Budget from '../../img/Budget.jpg';
import Help from '../../img/Help.jpg';
import Digital from '../../img/Digital.jpg';
import Flyers from '../../img/Flyers.jpg';
import React,{ useState } from 'react';

export default function Footer() {
      const [show,setShow]=useState(false)

      const [firstname,setFirstname] = useState("");
      const [lastname,setLastname] = useState("");
      const [companyname,setCompanyname] = useState("");
      const [email,setEmail] = useState("");
      const [contactno,setContactno] = useState("");
      const [servicetype,setServicetype] = useState("");

      const register = () => {
            Axios.post("http://localhost:5000/register", {
              firstname: firstname,
              lastname: lastname,
              companyname: companyname,
              email: email,
              contactno: contactno,
              servicetype: servicetype,
      }).then((response) => {
                console.log(response);
             });
           };
      return (    
                        <div className="Footer">
                              <Container>
                        <Row><Col className="Footer-Content"> 
                              {/* Section-1 */}      
                  <h4><IoMenu className="Foot-Icon-Color" /><span>Quick Links</span></h4>         
                        <ul className="Quick-Side">
            <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Budget Logo Design</Button><br />
            <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Logo Design</Button><br />
            <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Brochure Design</Button><br />
            <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Digital Brochure Design</Button><br />
            <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Packaging Design</Button><br />
            <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Signage Design</Button><br />
            <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Indoor Promotions</Button><br />
            <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Exhibition Stall Design</Button><br />
            <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Video Production</Button><br />
            <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Poster Design</Button><br />
            <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Magazine Design</Button><br />
            <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">WhatsApp Design</Button><br />
            <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Social Media Design</Button><br />
            <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Web Banner Design</Button><br />
            <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Restaurant Branding</Button><br />
            <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Pharma Branding</Button><br />
                  </ul> </Col>
                              {/* Section-2 */}
                        <Col className="Content-One">
                  <h4><IoChevronForwardOutline className="Foot-Icon-Color" /><span>Contact Us:</span></h4>                   
            <p><strong className="ContactUs-Strong">Abhishek Graphics </strong><br />
            <strong  className="ContactUs-Strong Small">(A Division of Abhishek Branding LLP)</strong></p>
      <p className="UsColor">Abhishek Graphics, Brahmayog Apts, Near Passport office, Sama Road, Nizampura<br />Vadodara, Gujarat 390002</p>
      <p><strong className="UsColor">Phone:</strong> <a className="UsLink" href="#section">+91-0123456789</a></p>
      <p><strong className="UsColor">Mobile:</strong> <a className="UsLink" href="#section">+91-0987654321</a><br />
      <strong className="UsColor">Mobile:</strong> <a className="UsLink" href="#section">+91-0123456789</a></p>
      <p><strong className="UsColor">Email:</strong> <a className="UsLink" href="#section">info@Yavi.info</a></p>
                  <ul className="Bottom-Left">
                        <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Blog</Button><br />
                        <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Retainer Services</Button><br />
                        <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Graphic Design Rate</Button><br />
                        <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Graphic Design</Button><br />
                        <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Career</Button><br />
                        <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Bank Detail</Button><br />
                        <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">FAQ</Button><br />
                        <IoCaretForwardOutline className="Foot-Icon-Color" /><Button className="Bottom-One" variant="light">Terms and Condition</Button><br />
                  </ul>
      <img className="Google" alt="" src={Google} /></Col>
                        {/* Section-3 */}
                  <Col className="Recent-Content-Two"><h4>Recent Posts</h4>
                        <ul className="Recent-Side-One">
            <li><a className="Recent-Side" href="#Section"><img className="Awsome" alt="" src={Budget} />
            <span class="Recent-Span">Budget Social Media Post Design in India</span></a></li>
            <li><a className="Recent-Side" href="#Section"><img className="Awsome" alt="" src={Digital}  />
            <span class="Recent-Span">Flyers Design Company India</span></a></li>
            <li><a className="Recent-Side" href="#Section"><img className="Awsome" alt="" src={Help}  />
            <span class="Recent-Span">Graphic Design Agency UK</span></a></li>
            <li><a className="Recent-Side" href="#Section"><img className="Awsome" alt="" src={Flyers}  />
            <span class="Recent-Span">Help your Product Stand out with Eye Catchy Product Packaging</span></a></li>
            <li><a className="Recent-Side" href="#Section"><img className="Awsome" alt="" src={Help}  />
            <span class="Recent-Span">Digital Brochure Makes Your Business Digital</span></a></li>
                        </ul></Col>
                                    {/* Section-4 */}
                              <Col className="Content-Three">
            <h4><IoChevronForwardOutline className="Foot-Icon-Color" /><span>Inquiry</span></h4>
                  <Form>
                        <Row className="mb-3">
                  <Form.Group as={Col}>
            <Form.Label>First Name: <span className="Red">*</span></Form.Label>
                  <Form.Control type="email" id="FirstName" placeholder="First Name" onChange={(e) =>{setFirstname(e.target.value);}} />
                  {show?<p id="demo">Name Invalid</p>:null}
                  
                  </Form.Group>
                        <Form.Group as={Col}>
            <Form.Label> Last Name: <span className="Red">*</span></Form.Label>
                  <Form.Control type="text" id="LastName" placeholder="Last Name" onChange={(e) => {setLastname(e.target.value);}} />
                  {show?<p id="demo">Name Invalid</p>:null}
                        </Form.Group></Row>
                  <Form.Group className="mb-3">
            <Form.Label>Company Name:<span className="Red">*</span></Form.Label>
                  <Form.Control id="CompanyName" placeholder="" onChange={(e) =>{setCompanyname(e.target.value);}} />
                  {show?<p id="demo">Company Name Invalid</p>:null}
                  </Form.Group>
            <Form.Group className="mb-3">
                  <Form.Label>Email: <span className="Red">*</span></Form.Label>
                  <Form.Control id="Email" placeholder="" onChange={(e) =>{setEmail (e.target.value);}} />
                  {show?<p id="demo">Email Address Invalid</p>:null}                             
            </Form.Group> 
                        <>
            <Form.Label>Contact No: <span className="Red">*</span></Form.Label>
                        <InputGroup className="mb-3">
                  <SplitButton variant="outline-secondary" title="+91">
                        {/*<Dropdown.Item href="#">+1</Dropdown.Item>
                        <Dropdown.Item href="#">+2</Dropdown.Item>
                        <Dropdown.Item href="#">+3</Dropdown.Item>
                        <Dropdown.Item href="#">+4</Dropdown.Item> */}
                  </SplitButton>
            <FormControl aria-label="Text input with dropdown button"  onChange={(e)=>{setContactno(e.target.value);}}/>
                  </InputGroup>
                        </> 
            <Col md>
                  <Form.Label>Service Type: <span className="Red">*</span></Form.Label>
                  <Form.Select aria-label="Floating label select example">
            <option>--Select--</option>
            <option value="1" onChange={(e)=>{setServicetype(e.target.value);}}>Inquiry</option>
                  </Form.Select></Col>
            <Form>
                  <Form.Group className="mb-3">
                        <Form.Label>Discription:</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                  </Form.Group>
            </Form>
      <Link className="Menu-One" to="/success"><Button variant="primary" onClick={register}>Submit</Button></Link>
            </Form></Col></Row></Container>     
</div>     
      );
}