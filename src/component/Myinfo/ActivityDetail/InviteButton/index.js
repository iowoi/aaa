import React, { Component } from "react";
import { Wrapper } from "./styled"

class InviteButton extends Component {
    render() {
        const { name, options, input, onChange, onClick } = this.props;
        return (
            <Wrapper className="input-button">
                <input type="text" {...input} onChange={onChange} />
                <button onClick={onClick}>
                    邀請/新增
                </button>
            </Wrapper>
        );
    }
}

InviteButton.defaultProps = {
    label: "",
    onChange: null,
    error: null,
    onClick: null
};

export default InviteButton;
