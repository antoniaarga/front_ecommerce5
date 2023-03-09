import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import "../Product/product.css"
import teclado1 from "../img/teclado1.jpg"
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'
import vistateclado1 from "../img/vistateclado1.jpg"
import vistateclado2 from "../img/vistateclado2.jpg"
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'

const Product = () => {
  const {id} =useParams();//llaves porque useparams es una funcion que devuelve parametros y uno de ellos es id
  const [post, setPost] = useState([]);

  useEffect(() => {
    const baseURL = process.env.REACT_APP_API_URL;
    const axiosConfig = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      withCredentials: true,
    };
    axios.get(`${baseURL}/product/item/${id}`, axiosConfig).then((response) => {
      setPost(response.data.products);
      console.log(response.data.products);
    });
  }, [id]);
 return (
   <Container fluid>
     <center>
     <Row>
      
       <Col lg={6} sm={12}>
       <img src={teclado1} className="imagen-principal"  alt=""/>
     <Row>
       <Col lg={6} md={6}>
       <img src={vistateclado1} className="imagen-secundaria" alt =""/>
       </Col>
       <Col lg={6} md={6} >
       <img src={vistateclado2} className="imagen-secundaria" alt =""/>
       </Col>
     </Row>
       </Col>
       <Col lg={6} sm={12}>
        <Col lg={6} sm={12}>
          
          <p className='text-infor-product'>Magma Mini</p>
          
            <li className='li-product'>Mini 60% form factor frees up space on your desktop</li>
            <li className='li-product'>5-Zone AIMO RGB Lighting with translucent top plate</li>
            <li className='li-product'>Durable IP33 rating protects from accidental spills</li>
            <li className='li-product'>Quiet, fast, and responsive membrane keys</li>
            <li className='li-product'>Easy-Shift[+] button duplicator enables function layers</li>
            <li className='li-product'>Left side mounted cable</li>

            <p className='precio'>$145.000</p>

            <Button className="boton-comprar" type="submit" size="sm" a href='/cart'>
                Agregar al Carrito
              </Button>
          
        </Col>

      </Col>
     </Row>
     </center>
   </Container>
 )
}


export default Product

