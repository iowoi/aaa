// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators,createStore, combineReducers, applyMiddleware  } from 'redux';
import { connect } from 'react-redux';
import {render} from "react-dom";
import ModalContent from "./ModalContent";
import {
    Modal,
} from "../Common";
import { fetchRegister,getlevellist,getoccupationlist } from '../../actions';
import Name from './NameInput';
import Email from './EmailInput';
import Phone from './PhoneInput';
import Password from './PasswordInput';
import AuthPassword from './AuthPasswordInput';
import OccupationSelect from './OccupationSelect';
import { SkillLevelSelect } from "../../component/Common";
import Hobby from './HobbyButton';
import SubmitButton from './SubmitButton';
import { Wrapper } from './styled';
import { FormControl } from "../Common";


class Register extends Component {

    constructor(props) {
        super(props);
        
        this.state = {

            badminton_level: 1,
            occupation:'1'
       
        };


        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


      }

      componentDidMount() {
        this.props.getlevellist()
        this.props.getoccupationlist()
    }

    handleOnChange = (element, e) => {
        //element.scrollIntoView();
        if (element == "frequency") {
            if (e.target.value !== "") {
                var frequency = {type:e.target.value, values: 1}
                this.setState({ frequency: frequency })
            }else{
                this.setState({ frequency: {}})
            }
        }
        else {
            this.setState({ [element]: e.target.value })
        }
    }



    
      handleInputChange(event) {
      
        // 從 event object 拿到 target
        const target = event.target;
        
        // 從 target.type 可以知道欄位的 type
        // 或從 target.value 取出輸入的欄位值
        const value = target.value;
        // 從 target.name 得到該欄位設定的 name
        const name = target.name;
       
        // 分別更新不同 name 欄位的 state
        this.setState({
          [name]: value
        });
      }

      handleSubmit = (e) => {
        // alert(this.state.account);
        e.preventDefault();

         const Body = {
            name: this.state.name,
            email:this.state.email,
            password:this.state.password,
            // country_code:'886',
            phone:this.state.phone,
            badminton_level:this.state.badminton_level,
            occupation:this.state.occupation,
            //hobby:this.state.hobby
            hobby:[2,3,4]
            };

         this.props.onFetchRegister(Body)
        
    }





    render() {
        const { data, onSubmit,levels,occupation,Hobby } = this.props
       
        return [(
            <Wrapper>
                 <h1 className="title">會員註冊</h1>
                <form className="main-form" onSubmit={onSubmit}>
                <div className="form-control">
                <label>姓名：</label>
                <input name='name' type="text" value={this.state.name} onChange={this.handleInputChange} placeholder="請輸入您的姓名" />
                </div>
                <div className="form-control">
        <label>E-MAIL：</label>
        <input name='email' type="text" value={this.state.Email} onChange={this.handleInputChange} placeholder="請輸入您的E-MAIL(此為日後登入帳號)" />
            </div>
            <div className="form-control">
        <label>行動電話：</label>
        <input name='phone' type="text" value={this.state.Phone} onChange={this.handleInputChange} placeholder="請輸入您的行動電話" />
    </div>
    <div className="form-control">
        <label>密碼：</label>
        <input name='password' type="text" value={this.state.Password} onChange={this.handleInputChange} placeholder="請輸入6~25英文數字混和密碼" />
    </div>
    <div className="form-control">
        <label>密碼確認：</label>
        <input name='password'  type="text" value={this.state.AuthPassword} onChange={this.handleInputChange} placeholder="請再次輸入您的密碼" />
    </div>
                     <OccupationSelect occupation={this.props.occupation} value={this.state.occupation} onChange={(e) => this.handleOnChange("occupation", e)} />
                     <SkillLevelSelect levels={this.props.levels} value={this.state.badminton_level} onChange={(e) => this.handleOnChange("badminton_level", e)} />
                    <FormControl>
                        {/* <Hobby /> */}
                    </FormControl>
                    <SubmitButton onClick={this.handleSubmit}/>
                    <span className="text">已擁有BonnyLIVE帳號?</span> 
                    <Link className="link" to="/Login" onClick={this.closeSideMenu}>我要登入</Link>
                </form>
              
            </Wrapper>
        )];
    }
}

const mapStateToProps = state => {
    return {
        levels: state.newGorupReducer.levels,
        occupation: state.registerReducer.occupation
    }
};

const mapDispatchToProps = (dispatch) => ({
    onFetchRegister: (Body) => {
        console.log(Body);
        dispatch(fetchRegister(Body)); 
    },
    getlevellist: () => 
    { 
        dispatch(getlevellist()) 
    },
    getoccupationlist: () => 
    { 
        dispatch(getoccupationlist()) 
    } 
    
    

});

export default connect(mapStateToProps,mapDispatchToProps)(Register);
