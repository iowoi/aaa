import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ModalContent from '../ModalContent';
import {
    DatePicker,
    Select,
    InputButton,
    Modal,
} from '../../../component/Common';
import { Wrapper } from './styled';
const options = [
    {
        text: '人數',
        value: '',
        selected: true
    }
];

for (let i = 1; i <= 30; i++) {
    options.push({ text: i, value: i });
}

class SearchBar extends Component {
    constructor(props) {
        super(props);
        const { query } = props.data;
        this.state = {
            search: query.search || '',
            city: query.city || '台北市',
            area: query.area || '中正區',
            start: query.start || moment(),
            end: query.end || moment().add(2, 'M'),
            interval_start: query.interval_start || 0,
            interval_end: query.interval_end || 1410,
            badminton_level: query.badminton_level || "",
            sort: 'start asc',
            address: query.address || ""
        };
    }
    componentWillMount() {
        this.props.onUpdateSearch(this.state);
    }
    handleInputChange = e => {
        const target = e.target;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        const inputName = target.name;
        this.setState({
            [inputName]: value
        });
    };
    handleInputOnBlur = e => {
        this.props.onUpdateSearch(this.state);
    };
    handleDatePickerChange = state => {
        this.setState(state, () => {
            this.props.onUpdateSearch(this.state);
        });
    };
    handleSubmit = () => {
        this.props.onSubmit(this.state);
    };

    render() {
        const { search, start, end, remain } = this.state;
        const { data, levels } = this.props;
        return (
            <Wrapper>
                <div className="date">
                    日期:
                    <DatePicker
                        name="start"
                        ref={this.startDate}
                        value={start}
                        onChange={this.handleDatePickerChange}
                    />
                    -
                    <DatePicker
                        className="right-date"
                        ref={this.endDate}
                        name="end"
                        value={end}
                        onChange={this.handleDatePickerChange}
                    />
                    <Select
                        options={options}
                        name="remain"
                        value={remain}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputOnBlur}
                    />
                </div>
                <div className="search-info">
                    <Link className="loc" to="/selectLocation">
                        <img src="./assets/icons/location.png" alt="" />
                        <span>
                            {data.query.city.substring(0, 2)}
                            {' - '}
                            {data.query.area.substring(0, 2)}
                        </span>
                    </Link>
                    <InputButton
                        input={{
                            placeholder: '團名/課程',
                            name: 'search',
                            value: search,
                            onChange: this.handleInputChange,
                            onBlur: this.handleInputOnBlur
                        }}
                        onClick={this.handleSubmit}
                    />
                    <Modal
                        title="進階搜尋"
                        btnClass="btn"
                        btnText="進階搜尋"
                        onClick={this.handleSubmit}
                        modalContent={
                            <ModalContent
                                levels={levels}
                                onChange={this.handleInputChange}
                                onBlur={this.handleInputOnBlur}
                                data={this.state}
                            />
                        }
                    />
                </div>
            </Wrapper>
        );
    }
}

export default SearchBar;
