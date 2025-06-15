import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

function Cartilla(props) {
  return (
    <div className="card m-2 text-center" style={{ width: "18rem" }}>
      <img
        src={props.imagen}
        alt={props.titulo}
        className="mx-auto d-block mt-3"
        style={{ width: "250px", height: "250px", borderRadius: "50%" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
      </div>
    </div>
  );
}

export default Cartilla;