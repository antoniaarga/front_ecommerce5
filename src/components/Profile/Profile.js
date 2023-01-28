

import React from "react";
import Container from "react-bootstrap/esm/Container";
import "../Profile/profile.css";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import profile from "../img/profile.jpg";
import { useAuth } from "../../services/AuthProvider";

const Profile = () => {
  const { user } = useAuth();
 
  return (
    <Container>
        <center>
      <Row className="w-50">
        
          <Col >
          <img className="profile-icon" src={profile} alt=""/>
            <p className="titulo-seccion mb-5">Mi Perfil</p>
          </Col>

          <Row className="align-items-center">
            <Col lg={6} className="d-flex flex-column">
              <p className="datos-profile">Nombre:</p>
            </Col>

            <Col lg={6} className="d-flex flex-column texto-datos">
              <p> Antonia Argandoña</p>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col lg={6} className="d-flex flex-column">
              <p className="datos-profile">Mail:</p>
            </Col>

            <Col lg={6} className="d-flex flex-column texto-datos">
              <p> mantito@gmail.com</p>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col lg={6} className="d-flex flex-column">
              <p className="datos-profile">Username:</p>
            </Col>

            <Col lg={6} className="d-flex flex-column texto-datos">
              <p> Antoniaarga</p>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col lg={6} className="d-flex flex-column">
              <p className="datos-profile">Contraseña:</p>
            </Col>

            <Col lg={6} className="d-flex flex-column texto-datos">
              <p> ******</p>
            </Col>
          </Row>
        
      </Row>
      </center>
    </Container>
  );
};
export default Profile;
