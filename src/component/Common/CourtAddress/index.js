import React, { Component } from "react";
import FormControl from "../FormControl";

const style = {
    marginTop: "10px"
};

class GoogleMapInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address:  props.data.address || ""
        };
    }
    handleChange = e => {
        this.setState({
            address: e.target.value
        });
        this.props.onChange(e);
    };

    render() {
        const { address } = this.state;
        const { city, area } = this.props.data;
        return (
            <FormControl>
                <label>球場地址：</label>
                <input
                    type="text"
                    onChange={this.handleChange}
                    name="address"
                    value={address}
                    placeholder="請輸入球場地址"
                />
                {city && (
                    <iframe
                        width="100%"
                        height="130"
                        frameBorder="0"
                        style={style}
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD3OkqTsjWvjcBLnokcsil3I23rZvLYl5g
    &q=${city}${area}${address}`}
                        allowFullScreen
                    />
                )}
            </FormControl>
        );
    }
}

export default GoogleMapInput;
