import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

function Peliculas(props) {
  const [modal, setModal] = useState(false);
  const [contenido, setContenido] = useState('');
  const peliculas = [
    { titulo: 'Titanes del Pacifico', resumen: 'En un futuro cercano, la humanidad enfrenta la amenaza de gigantescos monstruos llamados Kaijus que emergen del océano. Para combatirlos, se crean robots gigantes controlados por dos pilotos que deben sincronizar sus mentes. La película sigue a un grupo de pilotos que luchan para salvar a la humanidad de la destrucción total. ' },
    { titulo: 'El conjuro', resumen: 'Basada en hechos reales, esta película sigue a los investigadores paranormales Ed y Lorraine Warren que ayudan a una familia aterrorizada por una presencia maligna en su casa rural. A medida que descubren más sobre el oscuro pasado de la casa, deben enfrentarse a fuerzas sobrenaturales para salvar a la familia. ' },
    { titulo: 'La niña del aro', resumen: 'Una periodista investiga una cinta de video maldita que, después de verla, provoca la muerte de quien la vio en siete días. Mientras intenta desentrañar el misterio, descubre una historia oscura relacionada con una niña llamada Samara y debe encontrar la forma de detener la maldición antes de que sea demasiado tarde.' },
    { titulo: 'Avengers', resumen: 'Varios superhéroes de Marvel como Iron Man, Capitán América, Thor, Hulk, Black Widow y Hawkeye se unen para formar un equipo y enfrentar una amenaza global. Juntos deben detener al villano Loki y su ejército alienígena para salvar la Tierra de la destrucción. ' },
    { titulo: 'Pitufos', resumen: 'Los pequeños y azules Pitufos viven tranquilamente en su aldea en el bosque hasta que, por accidente, son transportados al mundo real en Nueva York. Allí, deben encontrar la forma de regresar a su hogar mientras evitan al malvado Gargamel, que quiere capturarlos para sus propios fines. ' },
  ];

  function toggle(resumen) {
    setContenido(resumen);
    setModal(!modal);
  }

  return (
    <div className="text-center mt-4">
      <h1>Resumen de Peliculas</h1>
      {peliculas.map((peli, index) => (
        <Button key={index} color="primary" className="m-2" onClick={() => toggle(peli.resumen)}>
          {peli.titulo}
        </Button>
      ))}
      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>Resumen</ModalHeader>
        <ModalBody>{contenido}</ModalBody>
      </Modal>
    </div>
  );
}

export default Peliculas;
