import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default () => (
  <div>
    <Navbar fluid={true}>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Right Stuff Brewing</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to="/">
          <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/about-us">
          <NavItem eventKey={2}>About Us</NavItem>
        </LinkContainer>
        <LinkContainer to="/ingredients">
          <NavItem eventKey={4}>Ingredients</NavItem>
        </LinkContainer>            
      </Nav>
    </Navbar>
  </div>
);
