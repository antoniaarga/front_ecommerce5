import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "../Product/product.css";
import teclado1 from "../img/teclado1.jpg";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import vistateclado1 from "../img/vistateclado1.jpg";
import vistateclado2 from "../img/vistateclado2.jpg";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const { id } = useParams(); //llaves porque useparams es una funcion que devuelve parametros y uno de ellos es id
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
            <img src={post.img} className="imagen-principal" alt="" />
          </Col>
          <Col lg={6} sm={12}>
            <Col lg={6} sm={12}>
              <p className="text-infor-product">{post.name}</p>
              
              <li className="li-product">
                {post.description}
              </li>
             

              <p className="precio">{post.price}</p>

              <Button
                className="boton-comprar"
                type="submit"
                size="sm"
                a
                href="/cart"
              >
                Agregar al Carrito
              </Button>
            </Col>
          </Col>
        </Row>
      </center>
    </Container>
  );
};

export default Product;
