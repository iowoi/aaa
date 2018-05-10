import React, { Component } from "react";
import { connect } from "react-redux";
import moment from 'moment';
import { Wrapper } from "./styled";
import { 
  fetchUser,
} from "../../../../actions";
import { RoundButton } from "../../../Common";

class Comment extends Component {
    constructor(props) {
      super(props)
    }
    
    handleClick() {
      const { onClick, user } = this.props;
      onClick(user.name)
    }

/*  
    renderChildren() {
      const { 
        content,
        avatar
      } = this.props; 

      return [
        <div className="comment" key={0}>
          <img className="avatar" src={`${avatar}`} alt="user avatar" />
          <div className="content">
            <div>
              {content}
            </div>
          </div>
        </div>
      ]
    }
*/
    renderParent() {
      const { 
        id,
        user,
        message,
        createdAt,
        comments,
      } = this.props;
      const createdTime = moment.unix(createdAt/1000)
      let avatar = user.avatar || "/assets/images/DefaultUserImg.png"
      return [
        <div className="comment" key={0}>
          <img className="avatar" src={avatar} alt="user avatar" />
          <div className="content-wrapper">
            <div className="user-block">
              <div>{user.name}</div>
              <div>{createdAt > 0? createdTime.format('YYYY/MM/DD HH:mm:ss') : ''}</div>
            </div>
            <div className="content">
              {message}
            </div>
          </div>
        </div>,
        <div className="reply" key={1}>
          { comments.map((comment, i) => <Comment key={i} isParent={false} {...comment} />) }
        </div>,
        <div className="reply-btn" key={2}>
          <RoundButton onClick={() => this.handleClick()}> 回覆 </RoundButton>
        </div>
      ]
    }

    render() {
      const { 
        isParent
      } = this.props; 
      
      return (
        <Wrapper className={`${!isParent? 'child-comment': 'parent-comment'}`}>
          { isParent? this.renderParent(): ''/*this.renderChildren()*/ }
        </Wrapper>
      )
    }
}

Comment.defaultProps = {
  id: 0,
  user: {
    id: 0,
    name: "Name",
    avatar: "/assets/images/DefaultUserImg.png",
  },
  message: "",
  createdAt: 0,
  isParent: false,
  comments: [], //used to children comment
}

export default Comment;
