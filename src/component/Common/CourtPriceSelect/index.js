import React, { Component } from "react";
import Select from "../Select/";
import { FormControl } from "../../../component/Common";

export default class CourtPriceSelect extends Component {

    options() {
        var options = [];
        for (var i = 0; i <= 3000; i += 50) {
            options.push({ value: i })
        }
        return options
    }

    render() {
        const options = this.options();

        return (
            <FormControl>
                <Select label={"打球費用："} options={options} onChange={this.props.onChange} value={this.props.value} />
            </FormControl>
        );
    }
}
