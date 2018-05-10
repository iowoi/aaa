import React, { Component } from "react";
import Select from "../Select/";
import { FormControl } from "../../../component/Common";

export default class CourtSizeSelect extends Component {

    options() {
        var options = [];

        for (var i = 1; i <= 30; i++)
            options.push({ value: i })

        return options
    }

    render() {
        const options = this.options();

        return (
            <FormControl>
                <Select label={"場地數/面："} options={options} onChange={this.props.onChange} value={this.props.value}/>
            </FormControl>
        );
    }
}
