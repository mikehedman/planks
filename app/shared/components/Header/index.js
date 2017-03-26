import React, { Component } from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component {
  render() {
    let left = null;
    let right = null;
    if (this.props.leftLink) {
      left =
        <Nav pullLeft>
          <LinkContainer to={this.props.leftLink}>
            <NavItem eventKey={1}>{this.props.leftText}</NavItem>
          </LinkContainer>
        </Nav>

    }
    if (this.props.rightLink) {
      right =
        <Nav pullRight>
          <LinkContainer to={this.props.rightLink}>
            <NavItem eventKey={2}>{this.props.rightText}</NavItem>
          </LinkContainer>
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