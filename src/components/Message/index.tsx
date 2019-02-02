import React, { Component, PureComponent } from 'react';
//import './style.scss';
import { Container, Button } from 'reactstrap';
import errorLogo from '../../assets/images/error.png';
import warningLogo from '../../assets/images/alert.png';
import successLogo from '../../assets/images/success.png';

export enum MessageTypes {
  error = 'ERROR',
  warning = 'WARNING',
  success = 'SUCCESS'
}

interface MessageButtonProps {
  title: string;
  onClick: () => void;
}

interface MessageProps {
  title?: string;
  text?: string;
  type: MessageTypes;
  messageButton?: MessageButtonProps;
}

export class Message extends PureComponent<MessageProps> {
  render() {
    let logo = '';
    let colorClass = '';
    switch (this.props.type) {
      case MessageTypes.error: {
        logo = errorLogo;
        colorClass = 'appErrorColor';
        break;
      }
      case MessageTypes.success: {
        logo = successLogo;
        colorClass = 'appSuccesColor';
        break;
      }
      case MessageTypes.warning: {
        logo = warningLogo;
        colorClass = 'appWarningColor';
        break;
      }
    }

    let renderMessageButton = () => {
      if (this.props.messageButton) {
        return (
          <Button
            className="appButton appButtonIcon"
            onClick={this.props.messageButton.onClick}
          >
            {this.props.messageButton.title}
          </Button>
        );
      }
    };

    return (
      <Container className="singleContainer">
        <img src={logo} className="appIcon" />
        <h1 className={colorClass}>{this.props.title}</h1>
        <p>{this.props.text}</p>
        {renderMessageButton()}
      </Container>
    );
  }
}
