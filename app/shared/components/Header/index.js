import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import styles from './styles.css';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';


export default function Header() {
  return (
    // <header role="banner" className={styles.wrapper}>
    //   <div className={styles.wrapperInner}>
    //     <nav className={styles.menu}>
    //       <ul>
    //         <li><IndexLink to="/">Settings</IndexLink></li>
    //         <li><Link to="timer">Timer</Link></li>
    //         <li><Link to="notes">Notes</Link></li>
    //         <li><Link to="info">Info</Link></li>
    //         <li><Link to="intervals">Intervals</Link></li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>
    <Navbar>
      <Nav pullLeft>
        <NavItem eventKey={1} href="/">Settings</NavItem>
      </Nav>

      <Nav pullRight>
        <NavItem eventKey={2} href="/info">Info</NavItem>
      </Nav>
    </Navbar>
  );
}