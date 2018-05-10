import React, { Component } from "react";
import { SkillLevelSelect, CourtAddress } from "../../../component/Common";
import TimePicker from "./TimePicker";
import { Wrapper, TimePickerWrapper } from "./styled";

export default class extends Component {
    render() {
        const { onChange, data } = this.props;
        return (
            <Wrapper>
                <label>打球時段</label>
                <TimePickerWrapper>
                    <TimePicker
                        name="interval_start"
                        onChange={onChange}
                        value={data.interval_start}
                    />
                    <TimePicker
                        name="interval_end"
                        onChange={onChange}
                        value={data.interval_end}
                    />
                </TimePickerWrapper>
                <SkillLevelSelect
                    value={data.badminton_level}
                    forSearch={true}
                    levels={this.props.levels}
                    onChange={onChange}
                />
                <CourtAddress onChange={onChange} data={data} />
            </Wrapper>
        );
    }
}
