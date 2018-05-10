import React, { Component } from "react";

export default class FormControl extends Component {
    render() {
        return (
          <div className="form-control">{this.props.children}</div>
        );
    }
}

