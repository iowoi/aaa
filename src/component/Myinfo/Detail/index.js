import React, { Component } from "react";
import { connect } from "react-redux";
import {
    fetchUserInfo,
    sendUserInfo,
    getoccupationlist,
    getHobbyList,
    getLevels
} from "../../../actions";
import { Wrapper, List } from "./styled";
import { Modal } from "../../../component/Common";
import Banner from "../Banner";
import ModalContent from "./ModalContent";

let valueArr = [];
class MyInfoDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
    }
    componentDidMount() {
        this.props.getUserInfo();
        this.props.getoccupationlist();
        this.props.getHobbyList();
        this.props.getLevels();
        this.setState({
            name: this.props.data.name
        });
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps.data) {
            this.setState(nextProps.data);
        }
    }
    handleInputChange = e => {
        const target = e.target;
        const value = target.value;
        const inputName = target.name;
        if (inputName === "hobby") {
            valueArr.push(value);
            this.setState({
                [inputName]: valueArr
            });
        } else {
            this.setState({
                [inputName]: value
            });
        }
    };
    handleOpenModal = type => {
        this.setState({
            type: type,
            modalIsOpen: true
        });
    };
    handleSubmit = data => {
        const object = typeof(this.state[data]) ==='object' && !Array.isArray(this.state[data]);

        console.log(this.state[data],object)
        this.props.sendUserInfo({ [data]: object?this.state[data].id :this.state[data] });
        valueArr = [];
    };

    render() {
        const {
            name,
            email,
            phone,
            home,
            occupation,
            badminton_level
        } = this.state;
        const { data, occupations, levels, hobby } = this.props;
        const Hobbies =
            data.hobby &&
            data.hobby.map((item, i) => <span key={i}>{item.name}</span>);

        return [
            <Banner key={0} />,
            <Wrapper key={1}>
                <h2>個人資料</h2>
                <List>
                    <Modal
                        title="修改個人資料"
                        onClick={e => {
                            this.handleSubmit("name");
                        }}
                        modalIsOpen={this.state.modalIsOpen}
                        modalContent={
                            <ModalContent
                                label="姓名"
                                name="name"
                                value={name}
                                placeholder="姓名"
                                note="可輸入中英文及數字(共計20字元內)"
                                onChange={this.handleInputChange}
                            />
                        }
                    >
                        <img src="/assets/icons/MyBonnyIcon01.png" />
                        {data.name}
                    </Modal>

                    <button disabled>
                        <img src="/assets/icons/MyBonnyIcon02.png" />
                        {data.email}
                    </button>

                    <Modal
                        title="修改個人資料"
                        onClick={e => {
                            this.handleSubmit("phone");
                        }}
                        modalIsOpen={this.state.modalIsOpen}
                        modalContent={
                            <ModalContent
                                label="行動電話"
                                name="phone"
                                value={phone}
                                placeholder="請輸入您的行動電話"
                                onChange={this.handleInputChange}
                            />
                        }
                    >
                        <img src="/assets/icons/MyBonnyIcon03.png" />
                        {data.phone}
                    </Modal>

                    <button disabled>
                        <img src="/assets/icons/MyBonnyIcon04.png" />
                        *******
                    </button>

                    <Modal
                        title="修改個人資料"
                        onClick={e => {
                            this.handleSubmit("home");
                        }}
                        modalIsOpen={this.state.modalIsOpen}
                        modalContent={
                            <ModalContent
                                label="地址"
                                name="home"
                                value={home}
                                placeholder="請輸入您的地址"
                                onChange={this.handleInputChange}
                            />
                        }
                    >
                        <img src="/assets/icons/MyBonnyIcon05.png" />
                        {data.home}
                    </Modal>

                    <Modal
                        title="修改個人資料"
                        onClick={e => {
                            this.handleSubmit("occupation");
                        }}
                        modalIsOpen={this.state.modalIsOpen}
                        modalContent={
                            <ModalContent
                                label="職業"
                                name="occupation"
                                value={occupation&&occupation.id}
                                occupations={occupations}
                                placeholder="請選擇您的職業"
                                onChange={this.handleInputChange}
                            />
                        }
                    >
                        <img src="/assets/icons/MyBonnyIcon06.png" />
                        {occupation&&occupation.name}
                    </Modal>

                    <Modal
                        title="修改個人資料"
                        onClick={e => {
                            this.handleSubmit("badminton_level");
                        }}
                        modalIsOpen={this.state.modalIsOpen}
                        modalContent={
                            <ModalContent
                                label="請選擇您的打球程度"
                                name="badminton_level"
                                value={badminton_level&&badminton_level.id}
                                levels={levels}
                                placeholder="請選擇您的打球程度"
                                onChange={this.handleInputChange}
                            />
                        }
                    >
                        <img src="/assets/icons/MyBonnyIcon07.png" />
                        {badminton_level&&badminton_level.description}
                    </Modal>

                    <Modal
                        title="修改個人資料"
                        onClick={e => {
                            this.handleSubmit("hobby");
                        }}
                        modalIsOpen={this.state.modalIsOpen}
                        modalContent={
                            <ModalContent
                                label="興趣/目的: (可複選)"
                                name="hobby"
                                hobby={hobby}
                                placeholder="興趣/目的: (可複選)"
                                onChange={this.handleInputChange}
                            />
                        }
                    >
                        <img src="/assets/icons/MyBonnyIcon08.png" />
                        {Hobbies}
                    </Modal>
                </List>
            </Wrapper>
        ];
    }
}

const mapStateToProps = state => ({
    data: state.myInfoReducer.userInfo,
    occupations: state.registerReducer.occupation,
    levels: state.newGorupReducer.levels,
    hobby: state.myInfoReducer.hobby
});

const mapDispatchToProps = {
    getUserInfo: fetchUserInfo,
    sendUserInfo: sendUserInfo,
    getoccupationlist: getoccupationlist,
    getLevels: getLevels,
    getHobbyList: getHobbyList
};

export default connect(mapStateToProps, mapDispatchToProps)(MyInfoDetail);
