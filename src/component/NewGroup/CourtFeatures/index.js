import React, { Component } from "react";
import { FormControl, Features } from "../../../component/Common";
import { Wrapper } from './styled';

export default class CourtFeatures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featureName: ''
        };
    }
    
    handleClick = (text) => {
        this.props.removeFeature(text)
    }

    handleKeyPress = (e) => {
        if (e.key == 'Enter') {
            this.props.addFeature(e.target.value)
            this.setState({ featureName: '' })
            e.preventDefault();
        }
    }

    handleChange = (e) => {
        this.setState({ featureName: e.target.value })
    }

    render() {
        return (
            <Wrapper>
                <label>場地特色: tag(可複選)</label>
                <input
                    maxLength={4}
                    type="text"
                    placeholder="特色關鍵字 可新增"
                    value={this.state.featureName}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress} />
                <Features features={this.props.features} onClick={this.handleClick} />
            </Wrapper>
        );
    }
}
