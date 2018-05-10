import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from './styled';

class RememberMeClick extends Component {

    handleclick = (e) => {

        alert("123");
      
        
    }

    render() {
        const { name, input, onChange, onClick,checked } = this.props;
      return (
          <Wrapper>
        <div>
        <label>
<input type="checkbox"onClick={this.handleCheck} defaultChecked={this.checked}/>
 <span className="cktext">記住我</span>
        </label>
        <Link className="Forget" to="/Register">忘記密碼?</Link>
        </div>

        </Wrapper>
      );
    }
  }
  
  RememberMeClick.defaultProps = {
    label: "",
    onChange: null,
    error: null,
    onClick: null
  };
  
  export default RememberMeClick;
  
