

import React from "react";
import minilogo from "../img/minilogo.png";
import "../Footer/footer.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";


const Footer = () => {
  
 return (
   <Container fluid className="main-footer">
     <center>
      <Row>
       <Col sm={12} md={4} lg={4} className="mt-3 mb-3">
         <img className="logo-footer" src={minilogo} alt="logo" />
       </Col>
      
       <Col sm={12} md={4} lg={4} className="mt-2 mb-1">
         <p className="titulo-footer">Contacto</p>
         <ul className="list-unstyled">
           <li className="li-footer"><i className="fa-brands fa-whatsapp"> </i> +569 96854511</li>
           <li className="li-footer" ><i className="fa-regular fa-paper-plane"></i>  contacto@wegeek.cl</li>
          
          
         </ul>
       </Col>
     
       <Col sm={12} md={4} lg={4} className="mt-1">
         <p className="titulo-footer">Síguenos</p>
        
         <div  className="d-flex justify-content-center text-center text-light mb-2 redes">
                   <div>
                       <i className="fa-brands fa-square-instagram me-2"></i>
                   </div>
                   <div>
                       <i className="fa-brands fa-tiktok me-3"></i>
                   </div>
                   <div>
                       <i className="fa-brands fa-twitter me-3"></i>
                   </div>
                   <div>
                       <i className="fa-brands fa-facebook-f me-3"></i>
                   </div>
               </div>
               <Button className="boton-comprar" type="submit" size="sm" href='/addproduct'>
               ruta add product
             </Button>
              
       </Col>


        </Row>
        </center>

      
        <hr className="hr" />
        <Row>
          <p className="texto-derechos col-sm">
            &copy;2023 MarceDev & Antoniaarga | Todos los derechos reservados
          </p>
        </Row>
      
      
    
   </Container>
 )
};


export default Footer

