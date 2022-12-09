import axios from 'axios';
import React,{useState,useEffect} from 'react';
import "../HomePage/ServicesFour.css";
import {Container,Row,Col} from "react-bootstrap";
 
export default function ServicesFour() {

      const [products,setProducts] = useState([]);
                        useEffect(() => {
            axios.get('http://localhost:5000/products')
                    .then((res) => {
                            const products = res.data;
                           setProducts(products);
                   });
            },[]);  
   return (       
         <div className="Container-One">
               <Container>   
           {products?.map(value => { 
                     return (
               <Row className="Row-Style">
                     <Col>       
      <h2 className="Row-Style-h2">{value.title}</h2>     
      <p><strong className="Row-Style-Strong">{value.subTitle}</strong></p>
      <p className="Row-Style-P">{value.description}</p>
            </Col>
                     <Col>                       
<img alt="Placeholder" className="Graphics" src={value.imagePath} />
                              </Col>
                        </Row>
                  ) } 
            )}           
                  </Container>            
         </div>
   );
}