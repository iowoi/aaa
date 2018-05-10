import React, { Component } from "react";
import Select from "../Select/";
import { FormControl } from "../../../component/Common";

export default class SkillLevelSelect extends Component {
    options = forSearch => {
        var options = [];
        if (forSearch) {
            options.push({
                text: "不限",
                value: ""
            });
        }

        if (this.props.levels) {
            for (var i = 0; i < this.props.levels.length; i++) {
                options.push({
                    text: this.props.levels[i].description,
                    value: this.props.levels[i].id
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
                    name="badminton_level"
                    label={"打球程度："}
                    options={this.options(this.props.forSearch)}
                    onChange={this.props.onChange}
                    value={this.props.value}
                />
            </FormControl>
        );
    }
}
