import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';
import { NavItem, NavLink } from 'reactstrap';
import { StoreState, CounterStatus } from '../../types';
import * as counterActions from '../../actions/Counter';

interface HeaderNavProps {
  cancelCounter: any;
  counterStatusActive: boolean;
}

class CounterNavActions extends Component<HeaderNavProps> {
  render() {
    if (this.props.counterStatusActive) {
      return (
        <NavItem>
          <NavLink href="#" onClick={this.props.cancelCounter}>
            Cancel
          </NavLink>
        </NavItem>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    counterStatusActive:
      state.counterState.counterStatus == CounterStatus.Active
  };
};

const mapDispachToProps = (dispach: any) => {
  return {
    cancelCounter: () => {
      dispach(counterActions.cancellCounter());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(CounterNavActions);
