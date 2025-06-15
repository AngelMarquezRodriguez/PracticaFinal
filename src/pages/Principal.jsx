import React from 'react';
import Cartilla from '../components/Cartilla';
import { Container, Row, Col } from 'reactstrap';

function Principal() {
  return (
    <Container className="mt-4">
      <Row>
        <Col><Cartilla imagen="descarga.jpeg" titulo="Scarllet Johanson" /></Col>
        <Col><Cartilla imagen="descarga (1).jpeg" titulo="Jhonny Deep" /></Col>
        <Col><Cartilla imagen="descarga (2).jpeg" titulo="Will Smith" /></Col>
      </Row>
    </Container>
  );
}

export default Principal;