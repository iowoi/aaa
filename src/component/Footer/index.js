import React, { Component } from "react";
import { Wrapper } from "./styled";
import { Link } from "react-router-dom";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginIn: false
        };
    }
    componentDidMount() {
        const userInfo = JSON.parse(localStorage.getItem("myData"));
        this.setState({
            loginIn: userInfo && true
        });
    }
    render() {
        const { loginIn } = this.state;
        return (
            <Wrapper id="footer" displayOnMobile={this.props.mobile}>
                <div className="nav">
                    <Link to="/activitySignUp">
                        <img src="/assets/icons/SignUpMenu.png" alt="" />
                        臨打報名
                    </Link>
                    <Link to="/newGroup">
                        <img src="/assets/icons/GroupMenu.png" alt="" />
                        開團找我
                    </Link>
                    <a
                        href="https://www.bonny-live.com/WebDocument/SportCategory"
                        target="_blank"
                    >
                        <img src="/assets/icons/KnowHowMenu.png" alt="" />
                        羽球知識家
                    </a>
                    <a
                        href="https://www.bonny-live.com/Live/List"
                        target="_blank"
                    >
                        <img src="/assets/icons/HotLiveMenu.png" alt="" />
                        Live 直播
                    </a>
                    {loginIn ? (
                        <Link to="/myInfo">
                            <img src="/assets/icons/MyBonnyMenu.png" alt="" />
                            My Bonny
                        </Link>
                    ) : (
                        <Link to="/login">
                            <img src="/assets/icons/MyBonnyMenu.png" alt="" />
                            My Bonny
                        </Link>
                    )}
                </div>
            </Wrapper>
        );
    }
}

export default Footer;
