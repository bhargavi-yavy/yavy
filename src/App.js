import './App.css';
import logo from './img/yavi.png';
import logo1 from './img/Web.jpg';
import Graphics from './img/Graphics.jpg';
import Print from './img/Print.jpg';
import Based from './img/Based.jpg';
import UI from './img/UI.jpg';
import Dubai from './img/Dubai.jpg';
import Origamil from './img/Origamil.png';
import Sud from './img/Sud.jpg';
import create from './img/create.jpg';
import Palavi from './img/Palavi.jpg';
import product from './img/product.jpg';
import Education from './img/Education.jpg';
import Greenovat from './img/Greenovat.jpg';
import Budget from './img/Budget.jpg';
import Flyers from './img/Flyers.jpg';

import Help from './img/Help.jpg';
import Digital from './img/Digital.jpg';
import Google from './img/Google.png';
import { Carousel, Container, Row, Col, Button, Containerfluid, Form, FloatingLabel, InputGroup, SplitButton, Dropdown, FormControl} from "react-bootstrap";
import {  BsFillAlarmFill, BsBookHalf, BsLaptop, BsMegaphone } from "react-icons/bs";
import { IoCaretForwardOutline, IoChevronForwardOutline, IoMenu,  IoLogoFacebook, IoLogoInstagram, IoLogoYoutube, IoLogoWhatsapp, IoLogoTwitter, IoLogoGoogle} from "react-icons/io5";
import { IoLogoChrome  } from "react-icons/io5";
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="navbar">
          <div className="logo">
          <img className="img-1" src={logo} />
          </div>
                <div className="menu menu-1">
          </div>
      </header> 

             <Carousel>
  <Carousel.Item>
  <img className="d-block w-100" src={logo1} alt="First slide" />
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" src={logo1} alt="First slide" />
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100" src={logo1} alt="First slide" />
  </Carousel.Item>
</Carousel>
                            <div className="Section-1 x-section">
<Container>
  <Row className="justify-content-md-center">
    <Col md="auto">
        <div className="header-text">         
                  <h1 className="headline h1">Creative Graphic Design Company <strong> in India </strong> </h1>
                                  <div className="header-h3">
                      <h3 className="one-h3">The place to look for All Your GRAPHIC DESIGN Needs</h3>
                      <h4 className="one-h4"> Find <span>  All Creative Services Under one Roof </span> </h4>
                            <p>We can help you with Quality <b>Web Designs, Graphic Designs, Print Designs, Web Based Designs </b> and much more. <b> Since 1990 </b> our graphic designs have been associated with almost all
                            the sectors of industry. We can satisfy any and all your graphic designing needs.</p>
                                  <h5 className="one-h5">All this with an experience of 31 years will give you maximum value for money and satisfaction</h5>
                                  </div>
                              </div>
                          </Col>
  </Row>
</Container>
</div> <hr className="line" /> 
                      {/* Section-1 Row and Col */}
                <div className="Container-1">
      <Container>
  <Row className="row-1">
    <Col>
    <div className="">
<h2 className="">
<span><h2 className="row-1-h2">Graphic Design</h2></span></h2>
<div id="" className="">
<p><strong className="row-1-stg"> We Understand "<span>A picture is worth a thousand words</span>"</strong></p>
<p className="row-1-p">In today’s fast life people rarely have the time to read something. The best way to convey something fast is by Graphics. We at Abhishek Graphics understand your idea and turn it into a picture that your customer can relate to.</p>
        </div>
            </div>
    </Col>
    <Col>
    <div className="">
<img alt="Placeholder" className="graphics" src={Graphics} />
</div>
    </Col>
  </Row>
      </Container>
                      {/* Section-2 Row and Col */}
    <Container>
  <Row className="row-2">
    <Col>
    <div className="">
<img alt="Placeholder" className="print" src={Print} />
</div>
    </Col>
    <Col>
    <div className="row-two">
<h2 className="">
<span><h2 className="row-2-h2">Print Media and Communication</h2></span></h2>
<div id="" className="">
<p><strong className="row-2-stg">We Believe “<span>Physical Presence is also needed</span></strong>"</p>
<p className="row-2-p">We all agree that computer has not made paper completely useless, we still use pen and paper and it does not seem to fade away. While Web Site is your online brochure you need to have an offline presence too. This includes Brochures, Banners, Cards, Newspaper Ads, Magazine Ads and much more. Contact the best Graphic Design firm in the country to make your physical presence visible. </p>
</div>
    </div>
        </Col>
  </Row>
</Container>
                        {/* Section-3 Row and Col */}
<Container>
  <Row className="row-3">
    <Col>
    <div className="">
<h2 className="">
<span><h2 className="row-3-h2"> Web Based Graphic Design </h2></span></h2>
<div id="" className="">
<p><strong className="row-3-stg">We Believe <span>That Good Can Be Made Better</span>"</strong></p>
<p className="row-3-p">It is possible that you already have your website and ad campaigns running. So what can we do for you in that case? We can your designs to the next level. Maybe you want some new images and theme to beautify your online presence or banners or page graphics. Let us create what you have in mind and bring your vision into reality. Our highly skilled and high on tea design team will create something better than you have imagined.</p>
</div>
    </div>
      </Col>
    <Col><div className="">
<img alt="Placeholder" className="based" src={Based} />
</div>
    </Col>
      </Row>
</Container>
                          {/* Section-4 Row and Col */}
<Container>
  <Row className="row-4">
    <Col>
    <div className="">
<img className="ui" src={UI} alt="Placeholder" />
</div>
    </Col>
    <Col>
      <div className="row-four">
<h2><span><h2 className="row-4-h2">UI /UX Design</h2></span></h2>
<div id="" className="">
<p><strong className="row-4-stg">We cherish “<span>If you can think about it, an App for it.</span>”</strong></p>
<p className="row-4-p"> We at Abhishek Graphics have taken a new step towards UI-UX designing. We combine art and technology to you a seamless experience. So if you want your business to have an App, look no further we can design it for you.</p>
</div>
    </div>
      </Col>
  </Row>
</Container>
    </div>
                    {/* Single Paragraph Box Row */}
              <div className="Black-Box">
    <Container>
  <Row className="justify-content-md-center MR">
    <Col md="auto">
<div id="" className="">
  <h3 className="two-h3">Understanding Client's Needs<br /></h3>
<p className="two-p">We definitely understand and lend a hand to our clients in building their image. In advertising, we call it, “Brand Image Building”. Along with providing services we assist them in a personalized and in sober manner. Recognizing the needs of the Advertiser / Marketer, we go through in depth and root of the crisis and come out with the creative solution for it..</p>
</div></Col>
  </Row>
</Container>
      </div>
                {/* Section-1 1 Row and 3 Col's Buttons */}
                  <div className="Box-1">
          <Container fluid="md">
  <Row>
    <Col xs><div class="x-column x-sm x-1-3">
<div id="" class="x-text cs-ta-justify">
<p className="box-p">Instead of talking blunders, we believe in action and execution. So we will go through services we offer, from scratch to outcome product. We are indulged in every aspect of communication, whether it is advertising or web designing, or else it is corporate identity or brand building. We are the complete solution of all your marketing and designing needs.</p></div>
<Button variant="info">Click here for Portfolio</Button>{' '}</div></Col>
    <Col xs={{ order: 12 }}><div class="">
<div id="" class="x-text">
<p><a href="#"><img alt="Logo Design USA" class=" ls-is-cached lazyloaded" src={Dubai} /></a></p>
</div></div></Col>
    <Col xs={{ order: 1 }}><div class="">
<div id="" class="x-text">
<p><a href="#">
<img alt="Uk" class=" ls-is-cached lazyloaded" src={Origamil} /></a></p>
</div></div></Col>
  </Row>
          </Container>
                           {/* Section-2 1 Row and 3 Col's Buttons */}
              <Container fluid="md">
  <Row>
  <Col xs={{ order: 12 }}><div class="">
<div id="" class="x-text">
<p><a href="#"><img alt="Logo Design USA" class=" ls-is-cached lazyloaded" src={Sud} /></a></p>
</div></div></Col>
    <Col xs={{ order: 12 }}><div class="">
<div id="" class="x-text">
<p><a href="#"><img alt="Logo Design USA" class=" ls-is-cached lazyloaded" src={create} /></a></p>
</div></div></Col>
    <Col xs={{ order: 1 }}><div class="">
<div id="" class="x-text">
<p><a href="#">
<img alt="Uk" class=" ls-is-cached lazyloaded" src={Palavi} /></a></p>
</div></div></Col>
  </Row>
          </Container>
                         {/* Section- 3 Row and 3 Col's Buttons */}

            <Container fluid="md">
  <Row>
  <Col xs={{ order: 12 }}><div class="">
<div id="" class="x-text">
<p><a href="#"><img alt="Logo Design USA" class=" ls-is-cached lazyloaded" src={product} /></a></p>
</div></div></Col>
    <Col xs={{ order: 12 }}><div class="">
<div id="" class="x-text">
<p><a href="#"><img alt="Logo Design USA" class=" ls-is-cached lazyloaded" src={Education} /></a></p>
</div></div></Col>
    <Col xs={{ order: 1 }}><div class="">
<div id="" class="x-text">
<p><a href="#">
<img alt="Uk" class=" ls-is-cached lazyloaded" src={Greenovat} /></a></p>
</div></div></Col>
  </Row>
          </Container>
</div>
                               {/* Grade Points */}

                <div className="Container-md">
    <Container>
  <Row>
    <Col>
    <div class="x-column x-sm x-1-4">
<div class="number-wrap w-h">
<span class="number">0</span></div>
<span class="text-below">Years of  Experience</span></div>
</Col>

    <Col><div class="x-column x-sm x-1-4">
<div class="number-wrap w-h">
<span class="number">5</span>
<span class="suffix">+</span></div>
<span class="text-below">Small But Creative Team</span></div>
</Col>

    <Col><div class="x-column x-sm x-1-4">
<div class="number-wrap w-h">
<span class="number">0</span><span class="suffix">+</span></div>
<span class="text-below">Domestic Project Completed</span></div>
</Col>
    <Col><div class="x-column x-sm x-1-4">
<div class="number-wrap w-h">
<span class="number">0</span>
<span class="suffix">+</span></div>
<span class="text-below">Abroad Project Completed</span></div>
</Col>
  </Row>
</Container>
</div>
                  {/* Text align Centre Service's */}
        <div className="services">
<Container className="x-column x-sm x-1-1">
  <Row>
    <Col>
<h2 class="h-custom-headline cs-ta-center h3 accent">
<span><b className="services-1"> Our Service </b></span></h2></Col>
  </Row>
</Container>
      </div>
                     {/* Section-1 One box Step : 1 -Three Col and step : 2 -Three col */}
                <div className="aside">
        <Container fluid>
  <Row>
    <Col className="p-black">
    <div class="x-column x-sm x-1-3">
      < BsMegaphone className="mani" />
<h3><span class="h-custom-headline man h4">Advertisement Design Service</span></h3>
<div class="x-text cs-ta-center man">
<p className="man">If you currently have or want to start an advertising campaign Abhishek Design Studios can design, customize and execute your ads/ad campaigns for you. We can design and implement your Digital Media Ads, Print Media Ads, Magazine Ads, Newspaper Ads and more. We can also provide you with most economically priced printing for your print media ads! Our ad design will let you stand out amongst your competitors as we use the most creative ideas. We use only the latest versions of software of Adobe Photoshop, In Design, Adobe Professional and Illustrator to create your ads.</p>
</div></div></Col>

    <Col className="p-blue">
    <div class="x-column x-sm x-1-3">
    <IoLogoChrome  />
<h3><span class="h-custom-headline man h4">Creative Logo Design Agency </span></h3>
<div id="" class="x-text">
<p class="man"> Give your business the right first impression because you only get one. Logo is your corporate identity. If you're a startup or an enterprise, Logo is a key element. We offer customized services for company logo design that suites Startups, Mid-size companies and Enterprises. If you're not happy with your current logo design and it was done when you started your business and now that you're established you want the logo speak about your success, please get it touch for redefining your logo. If you're looking for logo design in India, USA, Canada. Abhishek Studios is your answer</p>
</div></div></Col>

    <Col className="p-black-3">
    <div class="x-column x-sm x-1-3">
    <BsBookHalf />
<h3><span class="h-custom-headline man h4">Attractive Brochure Design Company </span></h3>
<div id="" class="x-text cs-ta-center">
<p class="man">We all agree that computer has not made paper completely useless, we still use pen and paper and it does not seem to fade away. While Web Site is your online brochure you need to have an offline brochure too, for walk in clients and to distribute all around the town. Brochures and visual Aids’ are still very important to Marketing and Sales. Any Product / Service cannot have a Marketing Sales plan without Brochures. We create stunning Brochures / Pamphlets that can capture ones attention. Please engage with us for creating Bi-fold, Tri-fold, Z-fold, C-fold, Booklets and any other corporate brochure design.</p>
</div></div>
</Col>
  </Row>
</Container>
                           {/* Section-2 One box Step : 1 -Three Col and step : 2 -Three col */}

          <Container fluid>
  <Row>
    <Col className="two-p-blue">
    <div class="x-column x-sm x-1-3">
    <BsLaptop />
<h3><span class="h-custom-headline man h4">Web Graphics and ad Design Service</span></h3>
<div id="" class="x-text cs-ta-center">
<p class="man">It is possible that you already have your website and ad campaigns running. So what can we do for you in that case? We can bring your designs to the next level. Maybe you want some new images and theme customization to beautify your online presence (do you know what that is?), banners, on page graphics. Let us create what you have in mind and bring your vision into reality. Our highly skilled, and high on tea design team will create something better than you have imagined.</p>
</div></div>
</Col>

    <Col className="two-p-black">
    <div class="x-column x-sm x-1-3">
    <BsFillAlarmFill />
<h3><span class="h-custom-headline man h4">Corporate Identity Design Service</span></h3>
<div id="" class="x-text">
<p class="man"> Abhishek Graphics offers a range of creative Brand Identity Design services. We believe your Brand is the core of your Business. No matter whether you are a sole owner or a multinational business, it is a critical factor to get right in order to be successful. We offer a wide variety of corporate designs for Coffee Mug, Visiting Cards, Letter Heads, Carry Bags, Laptop Skin Calendars, Note Pads, Diary Design and much more.</p>
</div></div>
</Col>

    <Col className="two-p3-blue">
    <div class="x-column x-sm x-1-3">
    <BsBookHalf />
<h3><span class="h-custom-headline man h4">Designing for Pharmaceuticals Company</span></h3>
<div id="" class="x-text cs-ta-center">
<p class="man">Illustrative and informative graphics for Pharmaceutical Industry. Get your medicine a catchy graphics and an attractive tagline. In our tenure as a graphic design firm we have worked with several big and small names and designing Ads for Pharma Companies has become our speciality. We provide Visual Aid design too so that you can expressively convince your client.</p>
</div></div>
</Col>
  </Row>
</Container>
        </div>
                          {/* Why Cjooise US */}
                    <div className="choose-us">
<Container fluid="md">
  <Row>
    <Col><div class="x-column x-sm x-1-1">
<div id="" class="x-text">
<h3 className="chooise-h3"><span  className="choose-span">Why choose us?</span></h3>
<p><span  className="chooise-p">If you are looking for a company that not only provides a solution to your problem but also, facilitates the services<br />and gives you the absolute result. We are the right agency for you. We offer and resolve all the advertising and<br />designing solutions.</span></p></div>
<Button variant="info">Click Here to Get in Touch With Us</Button>{' '}</div>
</Col>
  </Row>
</Container>
</div>
                       {/* Qeustion and Answer */}
          <div className="answer">
<Container fluid="md">
  <Row>
    <Col>
    <div class="x-row-inner">
<div class="x-col e6690-126 m55u-2">
<div class="x-text e6690-127 m55u-3 m55u-4">
<h2><span className="answer-h2">You Have Questions, We Have Answers </span></h2>
<p ><span className="answer-p">Schedule a 30-Minute Meeting with Our Expert.</span></p></div>
          <div className="answer-button">
<Button className="button-2" variant="light">Schedule a Meeting </Button>
</div></div></div>
</Col>
  </Row>
</Container>
    </div>
                          {/* Services in scrolling */}
                    <div className="work">
    <Container fluid="md">
  <Row>
    <Col>
<div class="x-column x-sm x-1-1">
<h2 class="h-custom-headline cs-ta-center h3 accent">
  <b><b><span><b className="b-1"> See Our Work </b></span></b></b></h2>
  </div>
</Col>
  </Row>
</Container>
</div>
                         {/* Paragraph */}
                <div className="clients">
<Container fluid="md">
  <Row>
    <Col>
    <div id="x-section-14" class="x-section">
<div class="x-column x-sm x-1-1">
<div id="" class="x-text cs-ta-center">
<p><span className="clients-p">Our Happy Domestic Clients from Vadodara, Mumbai, Surat, Rajkot, Bangalore, Pune, Ahmedabad, Kolkata, Chennai, Delhi, Goa, Hyderabad, Pune Our Happy Abroad Clients from USA, UK, Australia, Newzealand, Dubai, China, Singapore, Thailand, Greece, Canada and Korea</span></p>
</div></div></div>
</Col>
  </Row>
</Container>
        </div>
                                   {/* footer */}
                    <div className="footer">
        <Container>
  <Row>
    <Col className="content">
    <div class="x-column x-md x-1-4">
<div id="nav_menu-3" class="widget widget_nav_menu">
  <h4><IoMenu /> 
<span class="h-widget">Quick Links</span></h4>
<div class="menu-quick-menu-container">
<ul id="menu-quick-menu" class="menu">
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Budget Logo Design</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Logo Design</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Brochure Design</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Digital Brochure Design</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Packaging Design</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Signage Design</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Indoor Promotions</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Exhibition Stall Design</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Video Production</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Poster Design</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Magazine Design</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">WhatsApp Design</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Social Media Design</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Web Banner Design</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Restaurant Branding</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Pharma Branding</Button><br />
</ul></div></div></div>
</Col>

    <Col className="content-1">
    <div class="x-column x-md x-1-4">
<div id="text-7" class="widget widget_text">
 <h4> <IoChevronForwardOutline /> 
<span class="h-widget">Contact Us:</span></h4>
<div class="textwidget">
  <p><strong className="p-1">Abhishek Graphics </strong><br />
<strong  className="p-1 a1">(A Division of Abhishek Branding LLP)</strong></p>
<p className="a2">Abhishek Graphics, Brahmayog Apts, Near Passport office, Sama Road, Nizampura<br />
Vadodara, Gujarat 390002</p>
<p><strong className="a2">Phone:</strong> <a className="b1" href="#">+91-0123456789</a></p>
<p><strong className="a2">Mobile:</strong> <a className="b1" href="#">+91-0987654321</a><br />
<strong className="a2">Mobile:</strong> <a className="b1" href="#">+91-0123456789</a></p>
<p><strong className="a2">Email:</strong> <a className="b1" href="#">info@Yavi.info</a></p>
</div>
		</div><div id="nav_menu-4" class="widget widget_nav_menu">
<div class="menu-footer-2-container">
<ul id="menu-footer-2" class="menu">
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Blog</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Retainer Services</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Graphic Design Rate</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Graphic Design</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Career</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Bank Detail</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">FAQ</Button><br />
<IoCaretForwardOutline /><Button className="bottom-1" variant="light">Terms and Condition</Button><br />
</ul>
</div></div>
<div id="text-6" class="widget widget_text">
<div class="textwidget"><p><a href="#" target="_blank" rel="noopener">
<img className="rm"  src={Google} /></a></p>
</div>
		</div></div></Col>

    <Col className="content-2">
    <div class="x-column x-md x-1-4">
<div id="recent-posts-widget-with-thumbnails-2" class="widget recent-posts-widget-with-thumbnails">
<div id="rpwwt-recent-posts-widget-with-thumbnails-2" class="rpwwt-widget">
<h4 className="h-widget">Recent Posts</h4>
	<ul className="side-1">
		<li><a className="side" href="#"><img className="Awsome" alt="" src={Budget} />
<span class="rpwwt-post-title">Budget Social Media Post Design in India</span></a></li>
		<li><a className="side" href="#"><img className="Awsome" alt="" src={Flyers}  />
<span class="rpwwt-post-title">Flyers Design Company India</span></a></li>
		<li><a className="side" href="#"><img className="Awsome" alt="" src={Help}  />
<span class="rpwwt-post-title">Graphic Design Agency UK</span></a></li>
		<li><a className="side" href="#"><img className="Awsome" alt="" src={Help}  />
<span class="rpwwt-post-title">Help your Product Stand out with Eye Catchy Product Packaging</span></a></li>
		<li><a className="side" href="#"><img className="Awsome" alt="" src={Digital}  />
<span class="rpwwt-post-title">Digital Brochure Makes Your Business Digital</span></a></li>
	</ul>
</div>
</div></div></Col>

    <Col className="content-3">
    <h4><IoChevronForwardOutline /><span class="h-widget">Inquiry</span></h4>
    <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Full Name: <span className="red">*</span></Form.Label>
      <Form.Control type="email" placeholder="First Name" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label> </Form.Label>
      <Form.Control type="password" className="psw-1" placeholder="Last Name" />
    </Form.Group>
  </Row>
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Company Name:<span className="red">*</span></Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Email: <span className="red">*</span></Form.Label>
    <Form.Control placeholder="" />
  </Form.Group> 
  <>
  <Form.Label>Contact No: <span className="red">*</span></Form.Label>
  <InputGroup className="mb-3">
    <SplitButton
      variant="outline-secondary"
      title="+91"
      id="segmented-button-dropdown-1"
    >
      <Dropdown.Item href="#">+1</Dropdown.Item>
      <Dropdown.Item href="#">+2</Dropdown.Item>
      <Dropdown.Item href="#">+3</Dropdown.Item>
      <Dropdown.Item href="#">+4</Dropdown.Item>
    </SplitButton>
    <FormControl aria-label="Text input with dropdown button" />
  </InputGroup>
</> 
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
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form></Col>
  </Row>
</Container>
    </div>
                {/* Footer-1*/}                
    <Container fluid className="footer-1">
  <Row>
    <Col><div class="x-container max width">      
                  <div class="x-social-global">
<a href="#" class="facebook" title="Facebook" target="blank" rel="">
< IoLogoFacebook /></a>
<a href="#" class="twitter" title="Twitter" target="blank" rel="">
< IoLogoTwitter /></a>
<a href="#" class="google-plus" title="Google+" target="blank" rel="">
< IoLogoGoogle /></a>
<a href="#" class="youtube" title="YouTube" target="blank" rel="">
< IoLogoYoutube /></a>
<a href="#" class="instagram" title="Instagram" target="blank" rel="">
< IoLogoInstagram /></a>
<a href="#" class="whatsapp" title="Whatsapp" target="blank" rel="">
< IoLogoWhatsapp /></a>
</div>        
                  <div class="x-colophon-content">
            Copyright 2021 Yavi Infotech| All Rights Reserved | 
<a className="under-f" href="#" title="Abhishek Graphics - Creative Graphic Design Company" alt=""> Designed By </a> |
<a className="under-f" href="#" title="4web - Web Design Development Company India" alt=""> Developed By </a> | 
<a className="under-f" href="#" title="Abhishek Branding LLP - Branding Digital Marketing Company" alt="">Powered By</a>   
          </div>
      </div>
      </Col>
  </Row>
</Container>
    </div>
  );
}
export default App;
