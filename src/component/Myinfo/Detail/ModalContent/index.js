import React, { Component } from "react";
import { Wrapper, LabelWrapper } from "./styled";
import OccupationSelect from "../../../../component/Register/OccupationSelect";
import { SkillLevelSelect } from "../../../../component/Common";

class ModalContent extends Component {
    render() {
        const {
            onChange,
            value,
            label,
            note,
            name,
            placeholder,
            hobby
        } = this.props;

        return (
            <Wrapper>
                <div className="form-control">
                    {name == "badminton_level" && (
                        <SkillLevelSelect
                            value={value}
                            levels={this.props.levels}
                            onChange={e => onChange(e)}
                        />
                    )}
                    {name == "occupation" && (
                        <OccupationSelect
                            occupation={this.props.occupations}
                            value={value}
                            name={name}
                            onChange={e => onChange(e)}
                        />
                    )}
                    {name == "hobby" && (
                        <LabelWrapper>
                            <label key={0}>{label}</label>
                            {hobby &&
                                hobby.map((lebel, i) => {
                                    return (
                                        <LabelButton
                                            key={i}
                                            value={lebel.id}
                                            onClick={e => onChange(e)}
                                            text={lebel.name}
                                        />
                                    );
                                })}
                        </LabelWrapper>
                    )}
                    {name !== "occupation" &&
                        name !== "badminton_level" &&
                        name !== "hobby" && [
                            <label key={0}>{label}</label>,
                            <input
                                key={1}
                                type="text"
                                name={name}
                                value={value}
                                onChange={e => onChange(e)}
                                placeholder={placeholder}
                            />
                        ]}

                    <p>{note}</p>
                </div>
            </Wrapper>
        );
    }
}
class LabelButton extends Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    }
    handleClick = e => {
        this.setState({
            active: !this.state.active
        });
        this.props.onClick(e);
    };
    render() {
        const { value, onClick, name, text } = this.props;
        return (
            <button
                className={this.state.active ? "active" : ""}
                value={value}
                onClick={e => this.handleClick(e)}
                name="hobby"
            >
                {text}
            </button>
        );
    }
}
export default ModalContent;
