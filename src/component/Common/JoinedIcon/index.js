import React, { Component } from "react";
import { Wrapper } from "./styled";

class JoinedIcon extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper className={this.props.className} onClick={this.props.onClick}>
        <img src="/assets/icons/SocialPeople.png" alt="people count" />
        <span>{this.props.counts}個報名</span>
      </Wrapper>
    )
  }
}

export default JoinedIcon;
