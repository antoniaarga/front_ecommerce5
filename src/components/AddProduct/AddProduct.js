import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import "../AddProduct/addproduct.css";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import logo from "../img/logo.png"
import Button from 'react-bootstrap/esm/Button';


const AddProduct = () => {
 return (
   <Container fluid>
     <Row>
       <center>
       <Col>
<img className="logo-login" src={logo} alt=""/>
<form className='w-50'>
<Form.Group className="mb-3">
       <Form.Label className='text-add'>Nombre</Form.Label>
       <Form.Control   />
     

        <Form.Label className='text-add'>Nombre</Form.Label>
        <Form.Control   />
      </Form.Group>

     <Form.Group className="mb-3">
       <Form.Label className='text-add'>Descripción</Form.Label>
       <Form.Control   />
     </Form.Group>


     <Form.Group className="mb-3">
       <Form.Label className='text-add'>Stock</Form.Label>
       <Form.Control   />
     </Form.Group>


     <Form.Group className="mb-3">
       <Form.Label className='text-add'>Status</Form.Label>
       <Form.Control   />
     </Form.Group>


     <Form.Group className="mb-3">
       <Form.Label className='text-add'>Precio</Form.Label>
       <Form.Control   />
     </Form.Group>


     <Form.Group className="mb-3">
       <Form.Label className='text-add'>URL imagen</Form.Label>
       <Form.Control   />
     </Form.Group>
     </form>
    
     <Button className="boton-comprar" type="submit" size="sm" href='/addproduct'>
               agregar producto
             </Button>
     </Col>
     </center>


     </Row>
   </Container>
 )
}


export default AddProduct

