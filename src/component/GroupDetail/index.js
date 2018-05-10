import React, { Component } from "react";
import moment from 'moment'
import { SubmitButton, FormControl, CommentBox } from "../Common";
import Banner from './Banner';
import Information from './Information';
import { Wrapper } from './styled';
import { connect } from "react-redux";
import { signUpGroup, getGroupDetail, getJoinedList } from "../../actions";
import { Modal } from "../../component/Common/";
import { withRouter } from 'react-router-dom';

var id = 0
class GroupDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignUp: false,
            modalIsOpen: false
        };
    }

    componentDidMount() {
        var url = window.location.href;
        var index = url.indexOf("?")
        id = url.substring(index + 1, url.length);
        this.props.getGroupDetail(id)
        this.props.getJoinedList()
    }

    handleSubmit = (e) => {
        const userInfo = JSON.parse(localStorage.getItem("myData"));
        const token = userInfo ? userInfo.token : "";
        if(!token){
            window.location.href = '/'
            alert('請先登入')
        }
            
        this.props.signUpGroup({ activity: id });
    }

    openModal = (e) => {
        this.setState({ modalIsOpen: true });
    }

    copyLink = () => {
        let textField = document.createElement('textarea');
        textField.innerText = window.location.href;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
        alert("連結已經複製")
    }

    render() {
        var { joinedList } = this.props
        var isSignUp = false;
        if (joinedList && Array.isArray(joinedList)) {
            joinedList.map(x => {
                if (x.id == id) isSignUp = true;
            })
        }
        return (
            <Wrapper>
                <Banner information={this.props.information} />
                <div className="main-form">
                    <Information information={this.props.information} />
                    <br />
                    {
                        isSignUp ?
                            (
                                <div class="b1">
                                    已報名
                                </div>
                            ) :
                            <Modal
                                title="報名確認"
                                onClick={(e) => {
                                    this.handleSubmit(e);
                                }}
                                btnTheme={"two"}
                                text1="確認"
                                modalIsOpen={this.state.modalIsOpen}
                                noButton={true}
                                modalContent={
                                    <div>
                                        <div>點擊確認即完成報名，如需與團主聯絡可於我的>我的報隊中查看開團資訊與討論。</div>
                                        <br />
                                        <div onClick={this.copyLink} style={style}>分享連結</div>
                                    </div>
                                }
                            >
                                <SubmitButton text={"我要報名"} onClick={this.openModal} />
                            </Modal>
                    }

                </div>
                <CommentBox chatroom={this.props.information.chatroom} />
            </Wrapper>
        );
    }
}

let style = {
    textAlign: "center",
    border: "1px solid #5590BE",
    padding: "5px",
    borderRadius: "20px",
    cursor: "pointer"
}
const mapStateToProps = state => {
    return {
        information: state.groupDetailReducer.information,
        joinedList: state.groupDetailReducer.joinedList,
    }
};

const mapDispatchToProps = ({
    signUpGroup: signUpGroup,
    getGroupDetail: getGroupDetail,
    getJoinedList: getJoinedList
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GroupDetail));
