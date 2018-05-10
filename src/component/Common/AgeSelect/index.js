import React, { Component } from "react";
import Select from "../Select/";
import { FormControl } from "../../../component/Common";

export default class AgeSelect extends Component {
    options() {
        var options = [];
        options.push({ value: "", text:"無限制"  })
        for (let i = 0; i <= 100; i+=5) {
            options.push({ value: i, text: i })
        }
        return options
    }

    render() {
        const options = this.options();

        return (
            <FormControl>
                <Select label={"球友年齡："} options={options} onChange={this.props.onChange} value={this.props.value}/>
            </FormControl>
        );
    }
}
