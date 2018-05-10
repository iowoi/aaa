import React, { Component } from "react";
import moment from 'moment'
import { Wrapper } from "./styled";
import { FollowButton } from "../../../../Common";

class MemberInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      let { 
        id,
        name,
        avatar,
        createdAt, 
        registeredAt, 
        index, 
        isFollowing,
        onFollowClick
      } = this.props; 
      console.log(this.props)
      avatar = avatar || "/assets/images/DefaultUserImg.png"
      
      return (
        <Wrapper>
          <img className="avatar" src={`${avatar}`} alt="user avatar"/>
          <div className="user-info">
            <div>
              <div>{name}</div>
              <div>{`報名時間：${moment.unix(registeredAt/1000).format("YYYY/MM/DD")} (${index} 人)`}</div>
            </div>
            <FollowButton isFollowing={isFollowing} onClick={onFollowClick}/>
          </div>
        </Wrapper>
      )
    }
}

MemberInfo.defaultProps = {
  id: 0,
  name: "Name",
  avatar: "/assets/images/DefaultUserImg.png",
  createdAt: 0,
  registeredAt: 0,
  index: 0,
  //registeredNumber: 0,
  isFollowing: false,
  onFollowClick: () => {}
}

export default MemberInfo;
