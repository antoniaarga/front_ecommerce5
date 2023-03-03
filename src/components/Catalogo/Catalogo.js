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


const Catalogo = async  () => {
  const axiosConfig ={
    headers:{
        authorization:"Bearer "+ localStorage.getItem("token")
    }, withCredentials: true,

}
const res = await axios.get(
    `${baseURL}/product/all`,
  axiosConfig
);
console.log("hola")
console.log(res)


  return (
    <Container fluid>
    <center>
        <Row>


        <img src={banner}/>
        <p className='titulo-seccion pt-5'>Productos más vendidos</p>
        </Row>
        <Row className='row-catalogo'>
          
          <Col sm={6} md={6} lg={3}>
            <Card className="card-catalogo" >
              <Card.Img variant="top" className="foto-catalogo" src={casco1} />
              <Card.Body>
                <Card.Title className="card-tittle">Syn Max Air</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <center>
                  <Button size="sm" className="product-button" a href='/product'>
                    Ver Producto
                  </Button>
                </center>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="card-catalogo" >
              <Card.Img
                variant="top"
                className="foto-catalogo"
                src={teclado1}
              />
              <Card.Body>
                <Card.Title className="card-tittle">Magma Mini</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <center>
                  <Button size="sm" className="product-button" a href='/product'>
                    Ver Producto
                  </Button>
                </center>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="card-catalogo" >
              <Card.Img
                variant="top"
                className="foto-catalogo"
                src={microfono1}
              />
              <Card.Body>
                <Card.Title className="card-tittle">Torch</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <center>
                  <Button size="sm" className="product-button" a href='/product'>
                    Ver Producto
                  </Button>
                </center>
              </Card.Body>
            </Card>
          </Col>
        </Row>


        <Row className='row-catalogo'>
          <Col sm={6} md={6} lg={3}>
            <Card className="card-catalogo" >
              <Card.Img variant="top" className="foto-catalogo" src={mouse2} />
              <Card.Body>
                <Card.Title className="card-tittle">Kone XP Air</Card.Title>
                <Card.Text className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <center>
                  <Button size="sm" className="product-button" a href='/product'>
                    Ver Producto
                  </Button>
                </center>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="card-catalogo" >
              <Card.Img variant="top" className="foto-catalogo" src={teclado2} />
              <Card.Body>
                <Card.Title className="card-tittle">Syn Max Air</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <center>
                  <Button size="sm" className="product-button" a href='/product'>
                    Ver Producto
                  </Button>
                </center>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="card-catalogo" >
              <Card.Img
                variant="top"
                className="foto-catalogo"
                src={pack1}
              />
              <Card.Body>
                <Card.Title className="card-tittle">Pack Phantom</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <center>
                  <Button size="sm" className="product-button" a href='/product'>
                    Ver Producto
                  </Button>
                </center>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="card-catalogo" >
              <Card.Img
                variant="top"
                className="foto-catalogo"
                src={pack2}
              />
              <Card.Body>
                <Card.Title className="card-tittle">Torch</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <center>
                  <Button size="sm" className="product-button" a href='/product'>
                    Ver Producto
                  </Button>
                </center>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </center>
      </Container>
  )
}

export default Catalogo