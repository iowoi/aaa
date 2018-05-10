import React, { Component } from "react";
import moment from 'moment';
import ContentItem from './ContentItem'
import { Wrapper } from './styled'

const level = level => {
    switch (level) {
        case 2:
            return "新手";
        case 3:
            return "中手";
        case 4:
            return "高手";
        default:
            return "入門";
    }
};

class ActivityContent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
          createdAt,
          start,
          groupName,
          people,
          placeName,
          address,
          badmintonLevel,
          fee,
          placeCount,
          tag
        } = this.props
        
        const startTime = moment.unix(start/1000),
              createdTime = moment.unix(createdAt/1000);
        
        return (
            <Wrapper>
              <ContentItem title="開團時間" content={`${createdAt > 0? createdTime.format('YYYY/MM/DD HH:mm:ss'): ''}`} />
              <ContentItem title="團名" content={`${groupName}`} />
              <ContentItem title="徵求人數" content={`${people}人`} />
              <ContentItem title="打球時間" content={`${start > 0? startTime.format('YYYY/MM/DD HH:mm:ss') : ''}`} />
              <ContentItem title="球場名稱" content={`${placeName}`} />
              <ContentItem title="球場地址" content={`${address}`} />
              <ContentItem title="球場程度" content={level(badmintonLevel)} />
              <ContentItem title="打球費用" content={`${fee} 元`} />
              <ContentItem title="場地數量" content={`${placeCount}`} />
              <ContentItem title="場地特色" content={`${tag.map((data) => data.name).join(' / ')}`} />
         </Wrapper>     
        );
    }
}

ActivityContent.defaultProps = {
  createdAt: 0,
  start: 0,
  groupName: "",
  people: 0,
  placeName: "",
  address: "",
  badmintonLevel: 0,
  fee: 0,
  placeCount: 0,
  tag: []
}

export default ActivityContent;
