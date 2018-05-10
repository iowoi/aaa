import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSearch } from "../../actions";
import { Wrapper } from "./styled";
import { Select, SubmitButton } from "../Common";
import { CityData } from "./tw-city";

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
        districts.push({ text: `--- 台北市 ${value}---`, value: value })
    );

    return districts;
};

class SelectLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityOptions: counties,
            areaOptions: makeAreaOption(),
            area: props.data.query.area,
            city: props.data.query.city
        };
    }
    handleSelect = e => {
        const index = e.nativeEvent.target.selectedIndex;
        const currentCity = e.target.value;
        const districts = [];
        CityData.districts[index - 1][0].map(value =>
            districts.push({
                text: `--- ${currentCity} ${value}---`,
                value: value
            })
        );
        this.setState({
            city: currentCity,
            area: CityData.districts[index - 1][0][0],
            areaOptions: districts
        });
    };
    handleSelectArea = e => {
        this.setState({
            area: e.target.value
        });
    };
    handleUpdateSearch = () => {
        const data = {
            area: this.state.area,
            city: this.state.city
        };
        this.props.onUpdateSearch(data);
        this.props.history.push("/activitySignUp");
    };
    render() {
        const { data } = this.props;
        const { cityOptions, areaOptions, area, city } = this.state;

        return (
            <Wrapper>
                <img src="/assets/images/TaipeiBanner.jpg" className="banner" />
                <div className="main-form">
                    <Select
                        value={area}
                        options={areaOptions}
                        onChange={this.handleSelectArea}
                    />
                    <Select
                        value={city}
                        options={cityOptions}
                        onChange={this.handleSelect}
                    />
                    <SubmitButton
                        text="確認"
                        onClick={this.handleUpdateSearch}
                    />
                </div>
            </Wrapper>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    data: state.activity
});

const mapDispatchToProps = {
    onUpdateSearch: updateSearch
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectLocation);
