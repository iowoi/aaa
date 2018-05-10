import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Wrapper } from "./styled";
import Footer from "../Footer";
import { ScrollToTop } from '../Common'
import ActivitySignUp from "../ActivitySignUp";
import Login from "../Login";
import Register from "../Register";
import NewGroup from "../NewGroup";
import EditGroup from "../EditGroup";
import Myinfo from "../Myinfo";
import GroupDetail from "../GroupDetail";

import SelectLocation from "../SelectLocation";

class MiddleContent extends Component {
    render() {
        return [
            <Wrapper key="0" id="content">
              <ScrollToTop>
                <Route path="/activitySignUp" component={ActivitySignUp} />
                <Route path="/newGroup" component={NewGroup} />
                <Route path="/editGroup" component={EditGroup} />
                <Route path="/Login" component={Login} />
                <Route path="/Register" component={Register} />
                <Route path="/myInfo" component={Myinfo} />
                <Route path="/selectLocation" component={SelectLocation} />
                <Route path="/groupDetail" component={GroupDetail} />
              </ScrollToTop>
              <Footer mobile={true}/>
            </Wrapper>,
            <Footer key="1" mobile={false}/>
        ];
    }
}

export default MiddleContent;
