import React from "react";
import Card from "react-bootstrap/Card";
import "../Cart/cart.css";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import logo from "../img/logo.png";

const Cart = () => {
  return (
    <Container>
      <center>
      <img className="logo-login" src={logo} alt = "logo" />
      <p className='titulo-seccion pt-5'>Carrito de Compras</p>
        <Card
          className="card-carrito d-flex flex-column"
          style={{ width: "75%" }}
        >
          <Card.Body>
            <Row className="align-items-center justify-content-center">
              

              <Col lg={2}>
              <p className="texto-mini">Artículo</p>
                <p>Kone XP Air</p>
              </Col>

              <Col lg={2}>
              <p className="texto-mini">Cantidad</p>
                <input
                  id="number"
                  type="number"
                  value="42"
                  className="w-50 input-number mb-3 text-center"
                />
              </Col>

              <Col lg={2}>
              <p className="texto-mini">Precio</p>
                <p>$45.990</p>
              </Col>
              <Col lg={2}>
              <Button className="boton-comprar" type="submit" size="sm" >
                x
              </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>


        

        <Button className="boton-comprar" type="submit" size="sm" a href='/checkout'>
                Proceder al pago
              </Button>
            
      </center>
   
    </Container>

  );
};

export default Cart;
