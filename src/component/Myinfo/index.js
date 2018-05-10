import React, { Component } from "react";
import { Route } from "react-router-dom";
import Info from "./Info";
import Detail from "./Detail";
import ActivityDetail from "./ActivityDetail";
import SignUpDetail from "./SignUpDetail";
import HostActivity from "./HostActivity";
import JoinActivity from "./JoinActivity";
import { Wrapper } from "./styled";
class Myinfo extends Component {
    componentDidMount() {
      const data = localStorage.getItem('myData');
      if (data == null) {
        alert('請先登入')
        window.location.href = '../Login'
      }
    }
    render() {
        const { match } = this.props;
        return (
            <Wrapper>
                <Route
                    path="/myInfo/activityDetail/:id"
                    component={ActivityDetail}
                />
                <Route path="/myInfo/detail" component={Detail} />
                <Route path="/myInfo/signupDetail/:id" component={SignUpDetail} />
                <Route path="/myInfo/hostActivity" component={HostActivity} />
                <Route path="/myInfo/joinActivity" component={JoinActivity} />
                <Route exact path={match.url} component={Info} />
            </Wrapper>
        );
    }
}

export default Myinfo;
