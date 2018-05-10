import React, { Component } from "react";
import { Wrapper } from "./styled";

class Features extends Component {
  constructor(props) {
    super(props)
  }
  handleClick = (e) => {
    this.props.onClick(e.target.innerText)
  }
  render() {
    if (!this.props.features || this.props.features.length == 0)
      return (<div></div>)
    else
      return (
        <Wrapper>
          {this.props.features.map((opt, index) => (
            <label className="features"
              onClick={this.handleClick}
              value={opt}
              key={index}>
              {opt}
            </label>
          ))}
        </Wrapper>
      )
  }
}

export default Features;
