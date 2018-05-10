import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./styled";
import Banner from '../Banner';
//import CoverPhoto from '../CoverPhoto';

export default class Info extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      text:"登入"
    };
  }
  clearLocalStorage = () => {
    localStorage.clear();
    this.setState({ menuOpen: false });
  }

  componentDidMount() {
    const Data =  localStorage.getItem('myData');

    if (Data != null) {
      this.setState({ text: '登出' });
    } else {
      this.setState({ text: '登入' });
    }
  }


    render() {
        const { onclick,login} = this.props;
        return [
      // <CoverPhoto />,
      <Banner />,
    <Wrapper >
      <div className='div'>
          <Link className='text'  to="/myInfo/detail" ><img className="img" src="/assets/icons/arrowJoin.png"  alt=""  /> 個人資料 </Link>
          <hr className='hr'/>
          <Link className='text'  to="/myInfo/hostActivity"><img className="img" src="/assets/icons/arrowJoin.png"  alt=""  /> 我的開團 </Link>
          <hr className='hr'/>
          <Link className='text'  to="/myInfo/joinActivity" ><img className="img" src="/assets/icons/arrowJoin.png"  alt=""  /> 我的報隊 </Link>
          <hr className='hr'/>
          <Link className='text'  to="/Register" ><img className="img" src="/assets/icons/arrowJoin.png"  alt=""  /> 我的聊天訊息 </Link>
          <hr className='hr'/>
          <Link className='text'  to="/Register"><img className="img" src="/assets/icons/arrowJoin.png"  alt=""  /> 我的通知 </Link>
          <hr className='hr'/>
          <Link className='text'  to="/Register" ><img className="img" src="/assets/icons/arrowJoin.png"  alt=""  /> 我的追蹤 </Link>
          <hr className='hr'/>
          <Link className='text'  to="/Login"   onClick={this.clearLocalStorage}><img className="img" src="./assets/icons/arrowJoin.png"  alt=""  /> {this.state.text} </Link>
          <hr className='hr'/>
      </div>
    </Wrapper>
        ];
    }
}
