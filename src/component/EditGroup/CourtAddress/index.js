import React, { Component } from "react";
import { CityData } from "../../SelectLocation/tw-city";
import { Select, FormControl } from "../../Common";
import { Wrapper } from './styled';

const style = {
    marginTop: "10px"
};

const counties = [
    {
        value: "選擇其他縣市",
        disabled: true
    }
];

const makeAreaOption = () => {
    const districts = [];

    CityData.counties.map(value => counties.push({ value: value }));
    CityData.districts[0][0].map(value =>
        districts.push({ text: `${value}`, value: value })
    );

    return districts;
};

class GoogleMapInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: props.address || "",
            area: props.area || "大安區",
            city: props.city || "台北市",
            cityOptions: counties,
            areaOptions: makeAreaOption(),
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            address: e.target.value
        }, () =>  this.props.onChange(this.state));
       
    }

    handleSelect = (e) => {
        const index = e.nativeEvent.target.selectedIndex;
        const currentCity = e.target.value;
        const districts = [];
        CityData.districts[index - 1][0].map(value =>
            districts.push({
                text: `${value}`,
                value: value
            })
        );
        this.setState({
            city: currentCity,
            area: CityData.districts[index-1][0][0],
            areaOptions: districts
        }, () =>  this.props.onChange(this.state));
    }

    handleSelectArea = (e) => {
        this.setState({
            area: e.target.value
        }, () =>  this.props.onChange(this.state));
    }

    render() {
        const { address, cityOptions, areaOptions, area, city } = this.state;
        var cityAndArea = `${city} ${area}`
        var googleMpaAddress = `${city} ${area} ${address}`
        return (
            <Wrapper>
                <FormControl>
                    <label>球場地址：</label>
                    <div className="city">
                        <Select
                            value={city}
                            options={cityOptions}
                            onChange={this.handleSelect}
                        />
                    </div>
                    <div className="area">
                        <Select
                            value={area}
                            options={areaOptions}
                            onChange={this.handleSelectArea}
                        />
                    </div>

                    <input className="address"
                        type="text"
                        onChange={this.handleChange}
                        name="address"
                        value={address}
                        placeholder="請輸入球場地址"
                    />

                    <iframe
                        width="100%"
                        height="130"
                        frameBorder="0"
                        style={style}
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD3OkqTsjWvjcBLnokcsil3I23rZvLYl5g
    &q=${googleMpaAddress}`}
                        allowFullScreen
                    />
                </FormControl>
            </Wrapper>
        );
    }
}

export default GoogleMapInput;
