import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
export default class DateInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            [props.name]: props.value || moment()
        };
    }

    handleChange = date => {
        this.setState(
            {
                [this.props.name]: date
            },
            () => {
                this.props.onChange({
                    [this.props.name]: date
                });
            }
        );
    };

    render() {
        return (
            <DatePicker
                popperClassName={this.props.className}
                dateFormat="YYYY-MM-DD"
                selected={this.state[this.props.name]}
                onChange={this.handleChange}
                readOnly={true}
            />
        );
    }
}
