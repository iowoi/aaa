import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { 
  getGroupDetail, 
  editGroup, 
  postLeaveActivity,
  fetchUpdateActivityData 
} from "../../../actions";
import { Modal, ButtonsGroup, RoundButton, CommentBox } from "../../Common";
import { Wrapper } from './styled'
import Banner from "./Banner";
import SocialSummary from "./SocialSummary";
import ActivityContent from "./ActivityContent";
import GroupInfo from "./GroupInfo";
import InviteButton from "./InviteButton";
import ShareButton from "./ShareButton";

class ActivityDetail extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount(props) {
      const { onInit, match } = this.props;
      onInit(match.params.id);
    }
    
    onEditGroupClick(data) {
      this.props.dispatch(editGroup(data))
      this.props.history.push('/editGroup')
    }

    onCancelClick(id) {
      this.props.onCancelGroup(id)
      window.location.replace("/myInfo/hostActivity")
    }

    onLeaveActivityClick(id) {
      this.props.onLeaveActivityClick({user: id, activity: this.props.id})

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
                    <RoundButton onClick={() => this.onEditGroupClick(data)}> 編輯開團資訊 </RoundButton>
                </ButtonsGroup>
                <ButtonsGroup>
                    <Modal 
                      title='報名截止'
                      btnClass='modal-btn'
                      btnText='報名截止'
                      onClick={(id) => console.log(id)} />
                    <Modal 
                      title='取消開團'
                      btnClass='modal-btn'
                      btnText='取消開團'
                      onClick={() => this.onCancelClick(id)} />
                </ButtonsGroup>
                <hr />
                <GroupInfo onLeaveClick = {(id) => this.onLeaveActivityClick(id)} joinedPeopleData={joinHost.map((data) => data)} people={data.people}/>
                { /* <InviteButton input={{placeholder: '請輸入Email或帳號直接手動報名'}} /> */ }
                <ShareButton url={`http://${window.location.host}/groupDetail?${id}`} />
                <hr />
                <ButtonsGroup>
                    <RoundButton> 再次開團? </RoundButton>
                </ButtonsGroup>
                <ButtonsGroup>
                    <RoundButton> 一日內不再提醒 </RoundButton>
                    <RoundButton> 暫不開團並取消提醒 </RoundButton>
                </ButtonsGroup>
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
  onCancelGroup: (id) => {
    dispatch(fetchUpdateActivityData(id, {status: 0}))
  },
  onLeaveActivityClick: (data) => {
    dispatch(postLeaveActivity(data))
  },
  dispatch: dispatch
})

ActivityDetail.defaultProps = {
  summary: {
    people: 0,
    comment: 0,
    follow: 0,
    view: 0
  },
  joinHost: []
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActivityDetail));
