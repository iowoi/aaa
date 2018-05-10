import React, { Component } from "react";
import { Wrapper } from "./styled";

class FollowButton extends Component {
  render() {
    const { isFollow, onClick } = this.props;
    return (
        <Wrapper onClick={onClick} isFollow>
          <img src={isFollow? '/assets/icons/SocialLike02Active.png': '/assets/icons/SocialLike02.png'} />
          <div> {isFollow? '追蹤中': '追蹤'} </div>
        </Wrapper>
    );
  }
}

FollowButton.defaultProps = {
  label: "",
  onChange: null,
  error: null,
  onClick: null,
  isFollow: false
};

export default FollowButton;
