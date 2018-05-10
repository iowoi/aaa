import React, { Component } from "react";
import TimePicker from "../TimePicker/";
import DatePicker from "../DatePicker/";
import { Wrapper } from './styled';

export default class DateInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <div className="date">
          <DatePicker value={this.props.date} name={this.props.name} onChange={this.props.onDateChange} />
        </div>
        <div className="time">
          <TimePicker value={this.props.time} onChange={this.props.onTimeChange} />
        </div>
      </Wrapper>
    );
  }
}
