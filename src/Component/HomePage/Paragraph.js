import { Container, Row, Col} from "react-bootstrap";
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { BsBookHalf, BsFillAlarmFill, BsLaptop, BsMegaphone} from "react-icons/bs";
import "../HomePage/Paragraph.css";

export default function Paragraph() {
      const [text,setText] = useState([]);
            useEffect(() => {
axios.get('http://localhost:5000/text')
  .then((res) => {
          const text = res.data;
         setText(text);
            });
      },[]);  
            return (
                        <div className="Aside">
                              <Container fluid><Row>
                  {text?.map(value => { 
                        return (           
                  <Col className="P-Black">     
                              <div className="Icon-Symbol">
                        <BsMegaphone className="IconS" /></div>
            <h3  className="P-Header"><span class="P-HeaderText">{value.header}</span></h3>
            <p className="P-TextP">{value.paragraph}</p></Col>
                         ) } 
                  )}           
                        </Row></Container>        
            </div>
      );
}