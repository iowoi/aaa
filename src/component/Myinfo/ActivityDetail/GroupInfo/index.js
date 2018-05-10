import React, { Component } from "react";
import moment from 'moment';
import { Wrapper } from "./styled";
import MemberInfo from './MemberInfo';
import { ButtonsGroup, RoundButton } from "../../../Common";

class GroupInfo extends Component {
    constructor(props) {
        super(props)
        this.onLeaveActivityClick = this.onLeaveActivityClick.bind(this)
    }

    onLeaveActivityClick(id) {
      this.props.onLeaveClick(id)
    }

    renderRegisteredMembers() {
      const { joinedPeopleData } = this.props
      console.log(joinedPeopleData)

      return joinedPeopleData
        .sort((a, b) => a.createdAt - b.createdAt)
        .map((data, i) => (
          <div className="registeredMember" key={i}>
            <MemberInfo {...(data.user)} index={i+1} registeredAt={data.createdAt}/>
            <ButtonsGroup className="btn-group">
              { /* <RoundButton>talk</RoundButton> */ }
              <RoundButton onClick={() => this.onLeaveActivityClick(data.user.id)}>請假/取消</RoundButton>
              <RoundButton className={ `red ${data.user.isPaid? 'active': ''}`}>未付款</RoundButton>
            </ButtonsGroup>
          </div>
        )
      );
    }

    render() {
      return (
        <Wrapper>
          <div className="info-title">
            已報名人員：{this.props.joinedPeopleData.length} / {this.props.people}
          </div>
          {this.renderRegisteredMembers()}
        </Wrapper>
      )
    }
}

GroupInfo.defaultProps = {
  joinedPeopleData: {
      createdAt: 0,
      user: {
        id: 0,
        name: "Name",
        avatar: "/assets/images/DefaultUserImg.png",
        createdAt: 0,
        //registeredNumber: 0,
        isPaid: false,
        isFollowing: false,
      }
  },
  people: 0,
  onLeaveClick: (id) => {}
}

export default GroupInfo;
