import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import NavBarForm from './Form';

const StyledNavbarBrand = styled(Navbar.Brand)`
  font-size: 1.5rem;
  color: yellow;
  :hover {
    color: red;
  }
`;

const StyledNavbar = styled(Navbar)`
  background-color: blue;
  color: yellow;
`;

const NavBarNav = styled(Nav)`
  margin-right: auto;
  color: yellow;
`;

const StyledLink = styled(Nav.Link)`
  color: yellow;
  :hover {
    color: red;
  }
`;

const NavBar = () => {
  return (
    <StyledNavbar expand="md">
      <StyledNavbarBrand href="./">2023 Manual para Gen23</StyledNavbarBrand>
      <Navbar.Toggle aria-controls="navar-list" />
      <Navbar.Collapse id="navar-list">
        <NavBarNav className="ml-auto">
          <StyledLink href="#action1">Home</StyledLink>
        </NavBarNav>
        <NavBarForm />
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default NavBar;
