import React, { Component } from 'react';
import logo from '../../assets/images/brand-logo/large.png';
import './style.scss';
import { Container, Navbar, NavbarBrand, Nav } from 'reactstrap';
import CounterNavActions from '../Counter/CounterNavActions';

class Header extends Component {
  render() {
    return (
      <header className="appHeader">
        <Container>
          <Navbar expand="md">
            <NavbarBrand href="/">
              <img src={logo} className="appLogo" alt="logo" />
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <CounterNavActions />
            </Nav>
          </Navbar>
        </Container>
      </header>
    );
  }
}

export default Header;
