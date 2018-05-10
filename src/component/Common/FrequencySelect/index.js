import React, { Component } from "react";
import Select from "../Select/";
import { FormControl } from "../../../component/Common";

export default class FrequencySelect extends Component {
    options() {
        var opitons = [];

        opitons.push({ text: '不固定', value:'' })
        opitons.push({ text: '每周', value:'week' })
        opitons.push({ text: '每月', value:'month'})

        return opitons
    }

    render() {
        const options = this.options();

        return (
            <FormControl>
                <Select label={"開團頻率："} options={options} value={this.props.value} onChange={this.props.onChange}/>
            </FormControl>
        );
    }
}

