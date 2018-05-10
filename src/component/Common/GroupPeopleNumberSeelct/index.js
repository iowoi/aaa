import React, { Component } from "react";
import Select from "../Select/";

class GroupPeopleNumberSeelct extends Component {
    options() {
        var opitons = [];
        for (let i = 1; i <= 30; i++) {
            opitons.push({ value: i })
        }

        return opitons
    }

    render() {
        const options = this.options();

        return (
            <div className="form-control">
                <Select label={"徵求人數："} options={options} values={this.props.value} onChange={this.props.onChange} />
            </div>
        );
    }
}
GroupPeopleNumberSeelct.defaultProps = {
  value: 1
}

export default GroupPeopleNumberSeelct;
