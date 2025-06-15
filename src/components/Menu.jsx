import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Nav tabs>
      <NavItem>
        <NavLink tag={Link} to="/" style={{fontSize:'22px'}}>Principal</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/peliculas" style={{fontSize:'22px'}}>Películas</NavLink>
      </NavItem>
    </Nav>
  );
}

export default Menu;