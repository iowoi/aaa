import React, { Component } from "react";
import { connect } from "react-redux";
import Account from './AccountInput';
import Password from './LoginPasswordInput';
import { SkillLevelSelect } from "../../component/Common";
import ThirdParty from './ThirdPartyButton';
import SubmitButton from './SubmitButton';
import RegisterButton from './RegisterButton';
import RememberMeClick from './RememberMeClick';
import { Wrapper } from './styled';
import { FormControl } from "../Common";
import {
    fetchlogin
} from "../../actions";



class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {};

        this.state = {
            user: JSON.parse(localStorage.getItem('myData'))
          }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


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
            email: this.state.account,
            password:this.state.password
            };

         this.props.onFetchLogin(Body)
        
    }

    handleclick = (e) => {

        alert("123");
        this.setState({checked: !this.state.checked});
        
    }
   
   
   



    render() {
        const { data, onClick, onUpdateSearch, levels } = this.props;

        return [
            <Wrapper>
                  <form  className="main-form" >
                    <h1 class="title">我要登入</h1>
                    <div className="form-control">
                     <input  name='account' type="text" value={this.state.account} onChange={this.handleInputChange} placeholder="帳號" />
                    </div>
                    <div className="form-control">
                     <input  name='password' type="password" value={this.state.password} onChange={this.handleInputChange} placeholder="密碼" />
                    </div>
                    <SubmitButton  onClick={this.handleSubmit}/>               
                    <RememberMeClick onClick={this.handleclick}/>
                    {/* <FormControl>
                        <ThirdParty />
                    </FormControl> */}
                    <h1 class="Thirdtext">還不是會員嗎?</h1>
                    <RegisterButton />
                    </form>
            </Wrapper>

        ];
    }
}


const mapStateToProps = state => ({
    data: state,
});

const mapDispatchToProps = (dispatch) =>  ({
    onFetchLogin: (Body) => {
        dispatch(fetchlogin(Body))
      }

});

export default  connect(mapStateToProps, mapDispatchToProps)(Login);
