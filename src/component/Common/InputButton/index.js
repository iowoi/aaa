import React, { Component } from "react";
import { Wrapper } from "./styled";

class InputButton extends Component {
    render() {
        const { name, options, input, onChange, onClick } = this.props;
        return (
            <Wrapper className="input-button">
                <input type="text" {...input} />
                <button onClick={onClick}>
                    <img src="./assets/icons/search.png" alt="" />
                    搜尋
                </button>
            </Wrapper>
        );
    }
}

InputButton.defaultProps = {
    label: "",
    onChange: null,
    error: null,
    onClick: null
};

export default InputButton;
