import React, { Component } from 'react';
import logo from '../../assets/images/brand-logo/small.png';
import './style.scss';
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export class Footer extends Component {
  render() {
    let footerLinks = [
      'Terms',
      'Privacy Policy',
      'Cookie Policy',
      'Help',
      'FAQ'
    ];
    let linkList = footerLinks.map(function(name, index) {
      return (
        <NavItem key={index}>
          <NavLink href="#">{name}</NavLink>
        </NavItem>
      );
    });

    return (
      <footer className="appFooter">
        <Container>
          <Navbar expand="md">
            <NavbarBrand href="/">
              <img src={logo} className="App-logo" alt="logo" />
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              {linkList}
            </Nav>
          </Navbar>
        </Container>
      </footer>
    );
  }
}
