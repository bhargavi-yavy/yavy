import { Container, Row, Col} from "react-bootstrap";
import { IoLogoChrome} from "react-icons/io5";
import { BsBookHalf, BsFillAlarmFill, BsLaptop, BsMegaphone} from "react-icons/bs";
import "../HomePage/Paragraph.css";

export default function Paragraph() {
      return (
                        <div className="Aside">
                              <Container fluid>
                                    <Row>
                  <Col className="P-Black">     
                              <div className="Icon-Symbol">
                        <BsMegaphone className="IconS" /></div>
            <h3  className="P-Header"><span class="P-HeaderText">Advertisement Design Service</span></h3>
            <p className="P-TextP">If you currently have or want to start an advertising campaign Abhishek Design Studios can design, customize and execute your ads/ad campaigns for you. We can design and implement your Digital Media Ads, Print Media Ads, Magazine Ads, Newspaper Ads and more. We can also provide you with most economically priced printing for your print media ads! Our ad design will let you stand out amongst your competitors as we use the most creative ideas. We use only the latest versions of software of Adobe Photoshop, In Design, Adobe Professional and Illustrator to create your ads.</p></Col>

                  <Col className="P-Blue">
                              <div className="Icon-Symbol">
                        <IoLogoChrome  className="IconS" /></div>
            <h3 className="P-Header"><span class="P-HeaderText">Creative Logo Design Agency </span></h3>
            <p class="P-TextP"> Give your business the right first impression because you only get one. Logo is your corporate identity. If you're a startup or an enterprise, Logo is a key element. We offer customized services for company logo design that suites Startups, Mid-size companies and Enterprises. If you're not happy with your current logo design and it was done when you started your business and now that you're established you want the logo speak about your success, please get it touch for redefining your logo. If you're looking for logo design in India, USA, Canada. Abhishek Studios is your answer</p></Col>

                  <Col className="P-Black">
                              <div className="Icon-Symbol">
                        <BsBookHalf className="IconS" /></div>
            <h3  className="P-Header"><span class="P-HeaderText">Attractive Design Company </span></h3>
            <p class="P-TextP">We all agree that computer has not made paper completely useless, we still use pen and paper and it does not seem to fade away. While Web Site is your online brochure you need to have an offline brochure too, for walk in clients and to distribute all around the town. Brochures and visual Aids are still very important to Marketing and Sales. Any Product / Service cannot have a Marketing Sales plan without Brochures. We create stunning Brochures / Pamphlets that can capture ones attention. Please engage with us for creating Bi-fold, Tri-fold, Z-fold, C-fold, Booklets and any other corporate brochure design.</p></Col></Row>
                        </Container>

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