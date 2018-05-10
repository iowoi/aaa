import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper } from "./styled"
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { RefreshButton } from "../../Common";
import { 
  fetchAllComments,
  fetchPostComment
} from "../../../actions";

class CommentBox extends Component {
    constructor(props) {
      super(props);
      this.state = {
        message: '',
        replyName: ''
      }
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.status == 'ok') {
        return {replyName: ' ', message: ''}
      }
      return null;
    }

    componentDidMount(props) {
      let { onInit, chatroom } = this.props;
      if (chatroom && chatroom.id)
        onInit(chatroom.id);
    }

    componentDidUpdate(props) {
      let { onInit, chatroom } = this.props;
      if (chatroom == null || chatroom.id == null) return true;
      if (Object.keys(props.chatroom).length === 0 && Object.keys(this.props.chatroom).length !== 0 ) {
        onInit(chatroom.id);
      }
      if (props.chatroom.id != chatroom.id) {
        onInit(chatroom.id);
      }
    }

    chooseTypes(chatroom) {
      let { activity, lesson, id } = chatroom
      if (activity !== null) {
        return {type: 'activity', id: activity}
      } else if (lesson !== null) {
        return {type: 'lesson', id: lesson}
      } else {
        return {type: 'chatroom', id: id}
      }
    }
    
    onReplyClick(name) {
      this.setState({
        replyName: name,
      });
    }

    onChange(val) {
      this.setState({
        replyName: '',
        message: val
      });
    }
    
    onSubmit(e) {
      let { chatroom } = this.props;
      let { type, id } = this.chooseTypes(chatroom)
      
      if (this.state.message.trim() != "") {
        this.props.onSubmit(id, type, this.state.message)
      }
    }

    render() {
        let { comments, chatroom } = this.props;
        
        return (
            <Wrapper>
              <div className="comment-header-wrapper">
                <div className="comment-header">
                  <div className="comment-count">
                    留言：({comments.length})
                  </div>
                  <RefreshButton onClick={() => this.props.onInit(chatroom.id)}/>
                </div>
                <CommentForm {...(this.chooseTypes(chatroom))} onClick={(e) => this.onSubmit(e)} onChange={(value) => this.onChange(value)} value={this.state.replyName}/>
              </div>
              <div className="comments">
                { comments.map((comment, i) => <Comment key={i} isParent={true} {...comment} onClick={(name) => this.onReplyClick(name)}/>) }
              </div>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => {
  const { chatroom_data: data, status, comment } = state.commentReducer;
  const comments = data.reply;
  
  return { comments, status, comment }
}

const mapDispatchToProps = (dispatch) => ({
  onInit: (chatroom_id) => {
    dispatch(fetchAllComments(chatroom_id))
  },
  onSubmit: (id, type, message) => {
    dispatch(fetchPostComment(id, type, message))
  }
})

CommentBox.defaultProps = {
  chatroom: {},
  comments: [],
  status: ''
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
