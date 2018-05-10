import React, { Component } from "react";
import moment from "moment";

export default class TimePicker extends Component {
    hoursToMinutes = h => {
        return h * 60;
    };
    listTimeOptions() {
        var times = [];
        for (let i = 0; i < 24; i++) {
            times.push({ val: `${this.hoursToMinutes(i)}`, text: `${i}:00` });
            times.push({
                val: `${this.hoursToMinutes(i) + 30}`,
                text: `${i}:30`
            });
        }
        return times;
    }

    render() {
        const timeOptions = this.listTimeOptions();

        const optionWidgets = timeOptions.map(({ text, val }, i) => (
            <option key={i} value={val}>
                {text}
            </option>
        ));
        const { name, onChange, value } = this.props;
        return (
            <select name={name} onChange={onChange} value={value}>
                {optionWidgets}
            </select>
        );
    }
}
