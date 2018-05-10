import React, { Component } from "react";
import { DefaultButton } from "./styled"

class RoundButton extends Component {
  render() {
    const { onClick, className } = this.props;

    return (
      <DefaultButton onClick={onClick} className={className}>
        {this.props.children}
      </DefaultButton>
    )
  }
}

RoundButton.defaultProps = {
  onClick: () => {},
  className: ""
}

export default RoundButton;
