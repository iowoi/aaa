import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Wrapper } from "./styled";

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
export default class extends Component {
    render() {
        const { data, url } = this.props;
        return (
            <Wrapper>
                <Link to={url}>
                    <div className="act-img">
                        <img src={data.images.url[0]} alt="" />
                        <div className="type">
                            {level(data.badminton_level)}
                        </div>
                    </div>
                    <div className="act-info">
                        <p className="title">
                            {data.group_name}
                            {data.tag && data.tag.map((tag, i) => {
                                if (i < 2)
                                    return <label key={i}>{tag.name}</label>;
                            })}
                        </p>
                        <p>
                            {data.area} - {data.place_name}
                        </p>

                        <small>
                            {moment(data.start).format("YYYY/MM/DD LT")}
                        </small>
                        <small>
                            {data.fee}/每人 | 尚缺 {data.remain} 人
                        </small>
                    </div>
                </Link>
                { this.props.children }
            </Wrapper>
        );
    }
}
