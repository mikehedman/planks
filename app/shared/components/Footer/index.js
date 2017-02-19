import React, { Component } from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';


export default function Footer() {
  return (
    <Navbar fixedBottom>
      <Nav>
        <NavItem eventKey={1} href="#">the bottom</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
      </Nav>
    </Navbar>
  );
}