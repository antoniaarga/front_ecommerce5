import React from "react";
import Container from "react-bootstrap/esm/Container";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "../Catalogo/catalogo.css";
import banner from "../img/Banner.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Catalogo = () => {
 
  const [post, setPost] = useState([]);

  useEffect(() => {
    const baseURL = process.env.REACT_APP_API_URL;
    const axiosConfig = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      withCredentials: true,
    };
    axios.get(`${baseURL}/product/all`, axiosConfig).then((response) => {
      setPost(response.data.products);
      console.log("respuesta api");
    });
  }, []);

  console.log("revision");
  console.log(post);

  return (
    <Container fluid>
      <center>
        <Row>
          <img src={banner} alt = ""/>
          <p className="titulo-seccion pt-5">Productos más vendidos</p>
        </Row>

        <Row className="row-catalogo">
          {post.map((item) => (
            <Col sm={6} md={6} lg={3}>
              <Card className="card-catalogo">
                <Card.Img
                  variant="top"
                  className="foto-catalogo"
                  src={item.img}
                />
                <Card.Body>
                  <Card.Title className="card-tittle">{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <center>
                    <Button
                      size="sm"
                      className="product-button"
                      a
                      href={"/product?id=" + item._id} //signo de interrogacion es para incluir parametros a una url
                    >
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
  );
};

export default Catalogo;
