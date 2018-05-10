import React, { Component } from "react";
import Select from "../../../component/Common/Select";
import { FormControl } from "../../../component/Common";

export default class OccupationSelect extends Component {
    options = forSearch => {
        var options = [];
        if (forSearch) {
            options.push({
                text: "不限",
                value: ""
            });
        }

        if (this.props.occupation) {
            for (var i = 0; i < this.props.occupation.length; i++) {
                options.push({
                    text: this.props.occupation[i].name,
                    value: this.props.occupation[i].id
                });
            }
        }

        return options;
    };

    render() {
        const options = this.options();
        return (
            <FormControl>
                <Select
                    name= "occupation"
                    label={"職業："}
                    options={this.options(this.props.forSearch)}
                    onChange={this.props.onChange}
                    value={this.props.value}
                />
            </FormControl>
        );
    }
}

