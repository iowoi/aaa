import React, { Component } from "react";

class ActList extends Component {
    render() {
        return <div className="act-list"> {this.props.children} </div>;
    }
}

export default ActList;
