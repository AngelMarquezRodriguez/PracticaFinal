import React from "react";
import { Row, Col } from "reactstrap";
import Publicidad from "./Publicidad"; // importa el componente ya hecho

function Footer() {
  return (
    <footer className="bg-dark text-white p-3">
      <Row>
        <Col md="6" className="text-center d-flex align-items-center justify-content-center">
          <p>Ángel Dante Márquez Rodríguez</p>
        </Col>
        <Col md="6" className="text-center">
          <Publicidad />
        </Col>
      </Row>
    </footer>
  );
}
export default Footer;