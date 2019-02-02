import React, { Component } from 'react';
import './style.scss';
import { Container, Row, Col } from 'reactstrap';
import Counter from '../Counter';
import { QRCode } from '../QRCode';
import { connect } from 'react-redux';
import * as counterActions from '../../actions/Counter';
import { StoreState, CounterStatus } from '../../types';
import { ClipLoader } from '../Loading/ClipLoader';
import { Message, MessageTypes } from '../Message';

interface BodyProps {
  onInit: any;
  counterStatus: CounterStatus;
}

class Body extends Component<BodyProps> {
  componentDidMount() {
    this.props.onInit();
  }

  render() {
    const renderActiveStatus = () => {
      return (
        <section>
          <Container>
            <Row className="justify-content-md-center">
              <Col sm={{ size: 'auto' }}>
                <Counter />
              </Col>
              <Col sm={{ size: 'auto' }}>
                <QRCode />
              </Col>
            </Row>
          </Container>
        </section>
      );
    };

    return (
      <section>
        <Container className="bodyContainer">
          {
            {
              INITIAL: '',
              LOADING: <ClipLoader />,
              ACTIVE: renderActiveStatus(),
              ERROR: (
                <Message
                  type={MessageTypes.error}
                  title="Error"
                  text="An error ocurred"
                />
              ),
              CANCELLED: (
                <Message
                  type={MessageTypes.error}
                  title="Cancelled"
                  text="Nothing to do here anymore"
                  messageButton={{
                    title: 'Reset',
                    onClick: () => window.location.reload()
                  }}
                />
              ),
              EXPIRED: (
                <Message
                  type={MessageTypes.warning}
                  title="Expired"
                  text="Time's up"
                  messageButton={{
                    title: 'Reset',
                    onClick: () => window.location.reload()
                  }}
                />
              ),
              COMPLETED: (
                <Message
                  type={MessageTypes.success}
                  title="Completed"
                  text="Oh yeah"
                  messageButton={{
                    title: 'Continue',
                    onClick: () => window.location.assign('http://example.com')
                  }}
                />
              )
            }[this.props.counterStatus]
          }
        </Container>
      </section>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return { counterStatus: state.counterState.counterStatus };
};

const mapDispachToProps = (dispach: any) => {
  return {
    onInit: () => {
      dispach(counterActions.fetchMaximum());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Body);
