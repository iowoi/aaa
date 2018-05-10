import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { 
  getGroupDetail, 
  editGroup, 
  postSignUpLeaveActivity,
  fetchUpdateActivityData 
} from "../../../actions";
import { Modal, ButtonsGroup, RoundButton, CommentBox } from "../../Common";
import { Wrapper } from '../ActivityDetail/styled'
import Banner from "../ActivityDetail/Banner";
import SocialSummary from "../ActivityDetail/SocialSummary";
import ActivityContent from "../ActivityDetail/ActivityContent";
import SignUpInfo from "./SignUpInfo";
import InviteButton from "../ActivityDetail/InviteButton";
import ShareButton from "../ActivityDetail/ShareButton";

class SignUpDetail extends Component {
    constructor(props) {
      super(props);
      this.onLeaveActivityClick = this.onLeaveActivityClick.bind(this)
    }

    componentDidMount(props) {
      const { onInit, match } = this.props;
      onInit(match.params.id);
    }
    
    onEditGroupClick(data) {
      this.props.dispatch(editGroup(data))
      this.props.history.push('/editGroup')
    }

    onLeaveActivityClick(id) {
      this.props.onLeaveActivityClick({activity: id});
     
    
    }

    render() {
        const {
          id,
          summary,
          content,
          buttonEvents,
          joinHost,
          chatroom,
          data
        } = this.props

        return [
            <Banner key="0"/>,
            <Wrapper key="1">
                <SocialSummary {...summary} />
                <ActivityContent {...content}/>
                <ButtonsGroup>
                    <Modal 
                      title='talk'
                      btnClass='modal-btn'
                      btnText='talk'
                      onClick={(id) => console.log(id)} />
                    <Modal 
                      title='請假/取消'
                      btnClass='modal-btn'
                      btnText='請假/取消'
                      onClick={() => this.onLeaveActivityClick(data.id)} />
                </ButtonsGroup>
                <hr />
                <SignUpInfo onLeaveClick = {(id) => this.onLeaveActivityClick(id)} joinedPeopleData={joinHost.map((data) => data)} people={data.people}/>
                { /* <InviteButton input={{placeholder: '請輸入Email或帳號直接手動報名'}} /> */ }
                <ShareButton url={`http://${window.location.host}/groupDetail?${id}`} />
                <hr />
                <CommentBox chatroom={chatroom}/>
            </Wrapper>
        ];
    }
}

const mapStateToProps = (state) => {
  const { information: data } = state.groupDetailReducer;
  
  const id = data.id,
        summary = {
          join: data.join? data.join.length: 0,
          comment: data.comment,
          follow: data.follow? data.follow: 0,
          view: data.view
          
        }, 
        content = {
          createdAt: data.createdAt,
          groupName: data.group_name,
          people: data.people,
          start: data.start,
          placeName: data.place_name,
          address: data.address,
          badmintonLevel: data.badminton_level,
          fee: data.fee,
          placeCount: data.place_count,
          tag: data.tag
        },
        chatroom = data.chatroom,
        joinHost = data.join;

  return {id, summary, content, joinHost, chatroom, data}
}

const mapDispatchToProps = (dispatch) => ({
  onInit: (id) => {
    dispatch(getGroupDetail(id));
  },
  onLeaveActivityClick: (activity) => {
    dispatch(postSignUpLeaveActivity(activity))
  },
  dispatch: dispatch
})


SignUpDetail.defaultProps = {
  summary: {
    people: 0,
    comment: 0,
    follow: 0,
    view: 0
  },
  joinHost: []
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpDetail));
