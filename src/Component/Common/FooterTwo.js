import { Container, Row, Col} from "react-bootstrap";
import {IoLogoFacebook, IoLogoInstagram,IoLogoYoutube,IoLogoWhatsapp,
        IoLogoTwitter, IoLogoGoogle} from "react-icons/io5";

export default function FooterTwo() {
    return (

                  <Container fluid className="Footer-End">
                                <Row><Col>                       
                    <div class="SocialMedia-Icons">
      <a href="#section" class="facebook" title="Facebook" target="blank" rel="">
              < IoLogoFacebook className="IconTwo" /></a>
      <a href="#section" class="whatsapp" title="Whatsapp" target="blank" rel="">
              < IoLogoWhatsapp className="IconTwo-W" /></a>
      <a href="#section" class="twitter" title="Twitter" target="blank" rel="">
              < IoLogoTwitter className="IconTwo-T" /></a>
      <a href="#section" class="youtube" title="YouTube" target="blank" rel="">
              < IoLogoYoutube className="IconTwo-Y" /></a>  
      <a href="#section" class="google-plus" title="Google+" target="blank" rel="">
              < IoLogoGoogle className="IconTwo-G" /></a>   
      <a href="#section" class="instagram" title="Instagram" target="blank" rel="">
              < IoLogoInstagram className="IconTwo-I" /></a></div>        

                      <div class="Footer-Under-P">
                        Copyright "2021" Yavi Infotech| All Rights Reserved | 
      <a className="Under-Footer" href="#section" title="" alt=""> Designed By </a> |
      <a className="Under-Footer" href="#section" title="" alt=""> Developed By </a> | 
      <a className="Under-Footer" href="#section" title="" alt="">Powered By</a>   
              </div>
            </Col></Row>
        </Container>           
    );
}         