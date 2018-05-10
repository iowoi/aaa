import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Wrapper, Buttons } from "./styled";
import Header from "../Header";
import MiddleContent from "../MiddleContent";

class Home extends Component {
    render() {
        const isIndex = this.props.location.pathname === "/";
        return (
            <Wrapper isIndex={isIndex}>
                <Header />{" "}
                {isIndex ? (
                    <Buttons>
                        <Link to="/activitySignUp" />
                        <Link to="/newGroup" />
                        <a href="http://www.bonny-live.com/Product/List?categoryId=2c104aa9-8945-43dc-a150-efb4c3e5b863" target="_blank"></a>
                        <a href="https://www.bonny-live.com/WebDocument/SportCategory" target="_blank"></a>
                        <a href="https://www.bonny-live.com/Live/List" target="_blank">
                            <img src="/assets/images/liveButton.png" />
                        </a>
                    </Buttons>
                ) : (
                    <MiddleContent />
                )}
            </Wrapper>
        );
    }
}

export default Home;
