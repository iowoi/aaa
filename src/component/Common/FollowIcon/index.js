import React, { Component } from "react";
import { Wrapper } from "./styled";

class FollowIcon extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper className={this.props.className} onClick={this.props.onClick}>
        <img src="/assets/icons/SocialLike02.png" alt="comments count" />
        <span>追蹤 </span>
      </Wrapper>
    )
  }
}

export default FollowIcon;
