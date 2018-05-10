import React, { Component } from "react";
import { Wrapper } from "./styled";

class SubmitButton extends Component {
    render() {
        const { name, text, onClick, imgType } = this.props;
        return (
            <Wrapper onClick={onClick}>
                {text}
                {imgType === "search" ? (
                    <img src="./assets/icons/search.png" alt="" />
                ) : (
                    <img src="./assets/icons/ArrowW.png" alt="" />
                )}
            </Wrapper>
        );
    }
}

SubmitButton.defaultProps = {
    label: "",
    text: "確認",
    error: null,
    onClick: null
};

export default SubmitButton;
