import React, { Component } from "react";
import { Wrapper } from "./styled";
import { Link } from "react-router-dom";

class SubmitButton extends Component {
  render() {
    const { name, options, input, onChange, onClick } = this.props;
    return (
      <Link to="/Register">
        <Wrapper onClick={onClick}>

          <Link to="/Register">
          <span className='text'>立即註冊</span>
          <img src="./assets/icons/ArrowB.png" alt="" />
          </Link>
        </Wrapper>
        </Link>
    );
  }
}

SubmitButton.defaultProps = {
  label: "",
  onChange: null,
  error: null,
  onClick: null
};

export default SubmitButton;
