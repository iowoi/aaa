import React, { Component } from "react";
import moment from "moment";

export default class TimePicker extends Component {
    listTimeOptions() {
        var times = [];
        for (let i = 0; i < 24; i++) {
            times.push({ val: `${i}:00`, key: `${i}:00` });
            times.push({ val: `${i}:30`, key: `${i}:30` });
        }
        return times;
    }

    onChange = (e) =>{
        this.props.onChange(e.target.value)
    }

    render() {
        const timeOptions = this.listTimeOptions();

        const optionWidgets = timeOptions.map(({ key, val }) => (
            <option key={key} value={key}>
                {val}
            </option>
        ));
        const { name, value } = this.props;
        return (
            <select name={name} onChange={this.onChange} value={value}>
                {optionWidgets}
            </select>
        );
    }
}
