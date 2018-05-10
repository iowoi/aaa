import React, { Component } from "react";
import { FrequencySelect, SkillLevelSelect, Select, CourtPriceSelect, CourtSizeSelect, AgeSelect, GroupPeopleNumberSeelct, ImageUploader, SubmitButton } from "../../component/Common";
import Banner from './Banner';
import GroupNameInput from './GroupNameInput';
import CourtFeatures from "./CourtFeatures";
import CourtName from "./CourtName";
import CourtAddress from "./CourtAddress";
import TimeForPlay from "./TimeForPlay";
import { Wrapper } from './styled';
import { FormControl } from "../Common";
import { connect } from "react-redux";
import { updateGroup, getLevels, createFeature } from "../../actions";
import moment from 'moment'

class EditGroup extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    componentDidMount() {
        const data = localStorage.getItem('myData');
        if (data == null) {
            alert('請先登入')
            window.location.replace('/Login')
        }
        if (this.props.group_name == '')
            window.location.replace('/myInfo/hostActivity')
        this.props.getLevels()
    }

    handleOnChange = (element, e) => {
        if (element == "frequency") {
            if (e.target.value !== "") {
                var frequency = { type: e.target.value, values: 1 }
                this.setState({ frequency: frequency })
            } else {
                this.setState({ frequency: {} })
            }
        } else if (element == "address") {
            this.setState({
                address: e.address,
                city: e.city,
                area: e.area
            }, () => console.log(this.state))
        } else if (element == "dateForPlay") {
            this.setState({ [element]: e.d })
        } else if(element == "timeForPlay"){
            this.setState({ [element]: e })
        }
        else {
            this.setState({ [element]: e.target.value })
        }
    }

    handleSubmit = (e) => {
        if (!this.state.group_name) { alert('團名為必填欄位'); e.preventDefault(); return }
        if (!this.state.place_name) { alert('場地名稱為必填欄位'); e.preventDefault(); return }
        if (!this.state.address) { alert('球場地址為必填欄位'); e.preventDefault(); return }
        var unixTime = moment(this.state.dateForPlay.format("YYYY/MM/DD") + " " + this.state.timeForPlay).unix()
        var tags = this.props.features

        this.setState({ start: unixTime, tag: tags }, () => {
            this.props.onSubmit(this.state);
        })

        e.preventDefault();
    }

    handleAddFeature = (text) => {
        this.props.createFeature({ name: text });
        this.setState({ tagNames: [...this.state.tagNames, text] })
    }

    handleRemoveFeature = (text) => {
        this.setState({ tagNames: this.state.tagNames.filter(x => x !== text) })
    }

    onImagesUrlChange = (e) => {
        this.state.images.url[0] = e.target.value;
    }

    render() {
        const { name, label, levels } = this.props;
        
        return (
            <Wrapper>
                <Banner />
                <form onSubmit={this.handleSubmit} className="main-form">
                    <GroupNameInput value={this.state.group_name} onChange={(e) => this.handleOnChange("group_name", e)} />
                    <GroupPeopleNumberSeelct value={this.state.people} onChange={(e) => this.handleOnChange("people", e)} />
                    <TimeForPlay
                        date={this.state.dateForPlay}
                        time={this.state.timeForPlay}
                        name={'d'}
                        onDateChange={(e) => this.handleOnChange("dateForPlay", e)}
                        onTimeChange={(e) => this.handleOnChange("timeForPlay", e)} />
                    <FrequencySelect value={this.state.frequency.type} onChange={(e) => this.handleOnChange("frequency", e)} />
                    <CourtName value={this.state.place_name} onChange={(e) => this.handleOnChange("place_name", e)} />
                    <CourtAddress address={this.state.address} area={this.state.area} city={this.state.city} onChange={(e) => this.handleOnChange("address", e)} />
                    <SkillLevelSelect levels={this.props.levels} value={this.state.badminton_level} onChange={(e) => this.handleOnChange("badminton_level", e)} />
                    <CourtPriceSelect value={this.state.fee} onChange={(e) => this.handleOnChange("fee", e)} />
                    <CourtSizeSelect value={this.state.place_count} onChange={(e) => this.handleOnChange("place_count", e)} />
                    <AgeSelect label={"球友年齡"} value={this.state.age_min} onChange={(e) => this.handleOnChange("age_min", e)} />
                    <AgeSelect value={this.state.age_max} onChange={(e) => this.handleOnChange("age_max", e)} />
                    <FormControl>
                        {/*  TODO. now use a input to let user to enter the image url link which they want to show becasue now we dont have the uploading file API :D*/}
                        <label>照片網址</label>
                        <input type="text" value={this.state.images.url[0]} onChange={this.onImagesUrlChange} placeholder="請輸入圖片網址" />
                        {/* <ImageUploader /> */}
                    </FormControl>
                    <FormControl>
                        <CourtFeatures features={this.state.tagNames} addFeature={this.handleAddFeature} removeFeature={this.handleRemoveFeature} />
                    </FormControl>
                    <br />
                    <SubmitButton text="確認修改開團資訊" onClick={this.handleSubmit} />
                </form>
            </Wrapper>
        );
    }
}

EditGroup.defaultProps = {
  group_name: '',
  people: 1,
  dateForPlay: moment(),
  timeForPlay: '0:00',
  frequency: {
    type: '',
    value: ''
  },
  place_name: '',
  geo: {
    latitude: '',
    longitude: ''
  },
  address: '',
  badminton_level: 1,
  fee: 0,
  place_count: 1,
  age_min: 20,
  age_max: 60,
  tagNames: [],
  tag: [],
  city: '',
  area: '',
  start: '',
  images: { url: [] },
  ball_brand: ' '
}

const mapStateToProps = state => {
    let { information, levels } = state.newGorupReducer
    let start_date = moment(),
        start_time = '0:00',
        tagNames = [];
    if (information && information.start) {
      start_date = moment.unix(information.start/1000)
      start_time = moment.unix(information.start/1000).format("HH:mm")
    }

    if (information && information.tag) {
      tagNames = information.tag.map((tag) => tag.name)
    }
    
    return { ...information, levels, dateForPlay: start_date, timeForPlay: start_time, tagNames }
};

const mapDispatchToProps = ({
    onSubmit: updateGroup,
    getLevels: getLevels,
    createFeature: createFeature
});

export default connect(mapStateToProps, mapDispatchToProps)(EditGroup);
