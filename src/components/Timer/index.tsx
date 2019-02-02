import React, { Component } from 'react';
import { StoreState } from '../../types';
import { connect } from 'react-redux';
import * as actions from '../../actions/Timer';

interface TimerProps {
  totalTime: number;
  pendingTime: number;
  onInit: any;
}

class Timer extends Component<TimerProps> {
  componentDidMount() {
    this.props.onInit(this.props.totalTime);
  }
  render() {
    return <p>Time left: {this.props.pendingTime} seconds</p>;
  }
}

const mapDispachToProps = (dispach: any) => {
  return {
    onInit: (totalTime: number) => {
      dispach(actions.startCountdown(totalTime));
    }
  };
};

const mapStateToProps = (state: StoreState) => {
  return {
    pendingTime: state.timerState.pendingTime
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Timer);
