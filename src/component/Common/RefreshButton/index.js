import React, { Component } from "react";
import { Wrapper } from "./styled";

class RefreshButton extends Component {
  render() {
    const { onClick } = this.props;
    return (
        <Wrapper onClick={onClick} isFollow>
          <img src="/assets/icons/RefreshIcon.png" alt="refresh"/>
        </Wrapper>
    );
  }
}

RefreshButton.defaultProps = {
  onClick: null
};

export default RefreshButton;
