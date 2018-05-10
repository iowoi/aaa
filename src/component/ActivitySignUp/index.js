import React, { Component } from "react";
import { connect } from "react-redux";
import {
    fetchActivity,
    getBannerList,
    updateSearch,
    getLevels
} from "../../actions";
import SearchBar from "./SearchBar";
import { ActList, Card, Banner } from "../Common";
class ActivitySignUp extends Component {
    componentDidMount() {
        this.props.getBannerList("activity");
        this.props.getLevels();
        this.props.onSubmit();
    }
    render() {
        const { data, onSubmit, onUpdateSearch, levels } = this.props;
        return [
            <Banner key="0" data={data.banner} className="banner-slide" />,
            <SearchBar
                key="1"
                onSubmit={onSubmit}
                onUpdateSearch={onUpdateSearch}
                data={data}
                levels={levels}
            />,
            <ActList key="2">
                {data.activity &&
                    data.activity.map((data, i) => (
                        <Card
                            data={data}
                            key={i}
                            url={`/groupDetail?${data.id}`}
                        />
                    ))}
            </ActList>
        ];
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    data: state.activity,
    levels: state.newGorupReducer.levels
});

const mapDispatchToProps = {
    onSubmit: fetchActivity,
    getBannerList: getBannerList,
    getLevels: getLevels,
    onUpdateSearch: updateSearch
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivitySignUp);
