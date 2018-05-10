import React, { Component } from "react";
import { Wrapper } from "./styled";

class MessagesIcon extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper className={this.props.className} onClick={this.props.onClick}>
        <img src="/assets/icons/SocialMessage.png" alt="comments count" />
        <span>{this.props.counts}筆留言 </span>
      </Wrapper>
    )
  }
}

export default MessagesIcon;
