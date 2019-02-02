import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../types';
import * as actions from '../../actions/Counter';
import './style.scss';
import { Container, Button, Input, Form, FormGroup, Col } from 'reactstrap';
import plusLogo from '../../assets/images/plus.png';
import minusLogo from '../../assets/images/minus.png';
import Timer from '../Timer';

interface CounterProps {
  counterValue: number;
  maxValue: number;
  onClickPlus: any;
  onClickMinus: any;
}

class Counter extends Component<CounterProps> {
  render() {
    return (
      <Container className="counterContainer moduleContainer">
        <h1>Click plus and reach {this.props.maxValue} before time expires!</h1>
        <Form inline>
          <FormGroup>
            <Col>
              <Button
                data-testid="counter-decrement"
                disabled={this.props.counterValue == 0 ? true : false}
                className="appButton appButtonIcon"
                onClick={this.props.onClickMinus}
              >
                <img src={minusLogo} />
              </Button>{' '}
            </Col>
            <Col>
              <Input
                data-testid="counter-value-input"
                disabled
                className="counterIndicator"
                name="counterIndicator"
                value={this.props.counterValue}
              />
            </Col>
            <Col>
              <Button
                data-testid="counter-increment"
                className="appButton appButtonIcon"
                onClick={this.props.onClickPlus}
              >
                <img src={plusLogo} />
              </Button>{' '}
            </Col>
          </FormGroup>
        </Form>
        <Timer totalTime={60} />
      </Container>
    );
  }
}
const mapStateToProps = (state: StoreState) => {
  return {
    counterValue: state.counterState.counterValue,
    maxValue: state.counterState.maxValue
  };
};

const mapDispachToProps = (dispach: any) => {
  return {
    onClickPlus: () => {
      dispach(actions.incrementCounter());
    },
    onClickMinus: () => {
      dispach(actions.decrementCounter());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Counter);
