import React, { Component } from "react";
import { Wrapper } from "./styled";

export default class SubmitButton extends Component {
  render() {
    const { name, options, input, onChange, onClick } = this.props;
    return (
        <Wrapper onClick={onClick}>
          <div>
          <span>確認註冊</span>
          <img src="./assets/icons/ArrowW.png" alt="" />
          </div>
        </Wrapper>
    );
  }
}

SubmitButton.defaultProps = {
  label: "",
  onChange: null,
  error: null,
  onClick: null
};