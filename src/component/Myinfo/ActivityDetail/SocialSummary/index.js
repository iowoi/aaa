import React, { Component } from "react";
import { Wrapper } from './styled';
import { JoinedIcon, MessagesIcon } from '../../../Common';

class SocialSummary extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { 
          join, 
          comment, 
          follow, 
          view 
        } = this.props;

        return (
            <Wrapper>
              <JoinedIcon className="social-item" counts={join} />
              <MessagesIcon className="social-item" counts={comment} />
              <div className="social-item">
                <span> {follow} 人追蹤 </span>
              </div>
              <div className="social-item">
                <span> {view} 人看過 </span>
              </div>
            </Wrapper>
        );
    }
}

SocialSummary.defaultProps = {
  join: 3,
  comment: 2,
  follow: 6,
  view: 1687
}

export default SocialSummary;
