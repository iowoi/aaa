import React, { Component } from "react";
import { Modal } from "../../../component/Common/";

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
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
        var { information } = this.props

        if (!information || !information.user)
            return (<div></div>)
        else
            return (
                <div className="banner">
                    <div className="avatarWrapper">
                        <img className='banner-avatar' src="/assets/images/DefaultUserImg.png" alt="" />
                    </div>
                    <div className="userNameWrapper">
                        <span className="userName">
                            {information.user.name}
                            <Modal
                                title="分享到"
                                onClick={(e) => {
                                    this.handleSubmit(e);
                                }}
                                modalIsOpen={this.state.modalIsOpen}
                                noButton={true}
                                btnTheme="one"
                                notButtonStyle={{display: "inline-block"}}
                                modalContent={
                                    <div>
                                       <div onClick={this.copyLink} style={{cursor:"pointer", textAlign: "center"}}>
                                           <img src="/assets/images/linkShareicon.png" />
                                           <br/>
                                           <div>複製連結</div>
                                       </div>
                                    </div>
                                }
                            >
                                <span className="share" onClick={this.openModal}><img src="/assets/images/share.png" /></span>
                            </Modal>
                        </span>
                    </div>
                </div>
            );
    }
}

export default Banner
