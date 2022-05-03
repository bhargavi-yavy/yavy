import {Card,Button} from "react-bootstrap"
import "../Routes/Success.css";
import { Link } from "react-router-dom";
import Success from '../img/Success.png';

export default function SuccessMsg() {
    return(
        <>
        <h1 className="Success-h1">Registration Completed Successfully</h1>
        <Card style={{ width: '20rem' }} className="Box-Card">
  <Card.Img variant="top" src={Success} />
  <Card.Body className="Card-One">
    <Card.Title>SUCCESS</Card.Title>
    <Card.Text className="Card-Text">Congratulations, your account has been successfully created.</Card.Text>
    <Link className="Menu-One" to="/"><Button variant="primary" className="Success-Button">+ Add another response.</Button></Link>
  </Card.Body>
</Card>
        </>
    );
}