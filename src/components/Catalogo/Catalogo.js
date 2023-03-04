import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import mouse1 from "../img/mouse1.jpg";
import casco1 from "../img/casco1.jpg";
import teclado1 from "../img/teclado1.jpg";
import microfono1 from "../img/microfono1.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import "../Catalogo/catalogo.css"
import banner from "../img/Banner.jpg"
import mouse2 from "../img/mouse2.jpg"
import teclado2 from "../img/teclado2.jpg"
import pack1 from "../img/pack1.jpg"
import pack2 from "../img/pack2.jpg"
import axios from 'axios';
import { useEffect, useState } from 'react';


const Catalogo =   () => {
  const baseURL = process.env.REACT_APP_API_URL
  const [post, setPost] = useState([]);

  useEffect(() => {
    const axiosConfig ={
      headers:{
          authorization:"Bearer "+ localStorage.getItem("token")
      }, withCredentials: true,
  
  }
    axios.get( `${baseURL}/product/all`,
    axiosConfig).then((response) => {
      setPost(response.data);
      console.log("respuesta api")
    });
  }, []);

console.log("revision")
console.log(post)


  return (
    <Container fluid>
    <center>
        <Row>


        <img src={banner}/>
        <p className='titulo-seccion pt-5'>Productos más vendidos</p>
        </Row>
  
        <Row className='row-catalogo'>

        {post.products.map(item => (
       <Col sm={6} md={6} lg={3}>
       <Card className="card-catalogo" >
         <Card.Img
           variant="top"
           className="foto-catalogo"
           src={item.img}
         />
         <Card.Body>
           <Card.Title className="card-tittle">{item.name}</Card.Title>
           <Card.Text>
            {item.description}
           </Card.Text>
           <center>
             <Button size="sm" className="product-button" a href='/product'>
               Ver Producto
             </Button>
           </center>
         </Card.Body>
       </Card>
     </Col>
      ))}

          
        </Row>
      </center>
      </Container>
  )
}

export default Catalogo