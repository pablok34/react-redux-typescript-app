import React, { Component } from 'react';
import './style.scss';
import { Container } from 'reactstrap';
import qrchainsidepay from '../../assets/images/qrchainsidepay.png';

const initialState = { show: false };
type State = Readonly<typeof initialState>;

export class QRCode extends Component<object, State> {
  readonly state: State = initialState;

  render() {
    let qrImage = () => {
      if (this.state.show) {
        return <img className="qrCode" src={qrchainsidepay} />;
      }
    };

    let qrTitle = () => {
      if (this.state.show) {
        return <h1>Here a nice QR code!</h1>;
      } else {
        return (
          <h1>
            QR codes are cool.
            <br />
            Want to see one?
          </h1>
        );
      }
    };

    return (
      <Container className="qrCodeContainer moduleContainer">
        {qrTitle()}
        {qrImage()}
        <a href="#" onClick={this.handleClick} className="appLink">
          {this.state.show ? 'Hide' : 'Show'} QR code
        </a>
      </Container>
    );
  }

  private handleClick = () => this.setState(toogleQR);
}

const toogleQR = (prevState: State) => ({ show: !prevState.show });
