import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function Header() {
  return (
    <Navbar color="dark" dark>
      <NavbarBrand href="/">Cinemateca Boliviana</NavbarBrand>
    </Navbar>
  );
}

export default Header;