import React, { Component } from 'react';
import { Container, Spinner, Row } from 'reactstrap';
import './ClipLoader.scss';

export class ClipLoader extends Component {
  render() {
    return (
      <Container className="singleContainer">
        <Spinner className="clipLoaderIcon" />
        <p>Loading</p>
      </Container>
    );
  }
}

/*
 <Container>
        <Row className="justify-content-center">
          <Spinner className="clipLoaderIcon" />
        </Row>
        <Row className="justify-content-center">
          <span>Loading</span>
        </Row>
      </Container>
*/
