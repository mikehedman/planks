import React, { Component } from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

export default class Header extends Component {
  render() {
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
    let left = null;
    let right = null;
    if (this.props.leftLink) {
      left =
        <Nav pullLeft>
          <NavItem eventKey={1} href={this.props.leftLink}>{this.props.leftText}</NavItem>
        </Nav>
    }
    if (this.props.rightLink) {
      right =
        <Nav pullRight>
          <NavItem eventKey={2} href="/info">{this.props.rightText}</NavItem>
        </Nav>
    }

    return (
      <Navbar>
        {left}
        {right}
      </Navbar>
    );
  }
}