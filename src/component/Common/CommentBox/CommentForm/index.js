import React, { Component } from "react";
import { Wrapper } from "./styled"

class CommentForm extends Component {
    constructor(props) {
      super(props);
      this.message = React.createRef()
    }
    
    componentDidUpdate(prevProps) {
      const messageRef = this.message.current;
      const { value, onChange } = this.props;
      if (prevProps.value != this.props.value && this.props.value.trim() != '') {
        messageRef.value = `@${value} ${messageRef.value}`;

        onChange(messageRef.value)
      }
      if (this.props.value == " ") {
        messageRef.value = ""
      } 
    }

    onFocus() {
      setTimeout( ()=> {
        let message = this.message.current;
        let footer = document.getElementById("footer");
        let { top: messageTop, height: messageHeight } = message.getBoundingClientRect();
        let { top: footerTop, height: footerHeight } = footer.getBoundingClientRect();
        let bottomLine = messageTop + messageHeight;

        if ((messageTop < footerTop && footerTop < bottomLine) || (footerTop+footerHeight) < messageTop){
          footer.style.display = 'none'
        }

        let el = document.getElementsByClassName("input-button")[0].firstElementChild
        if(el.scrollIntoViewIfNeeded){
          el.scrollIntoViewIfNeeded()
        }else{
          el.scrollIntoView()
        }
      }, 500)
    }

    onBlur() {
      let footer = document.getElementById("footer")
      footer.style.display = 'block'
    }

    render() {
        const { name, options, input, onChange, onClick } = this.props;
        
        return (
            <Wrapper className="input-button">
                <input type="text" ref={this.message} {...input} onChange={(e) => onChange(e.target.value)} onFocus={() => this.onFocus()} onBlur={() => this.onBlur()}/>
                <button onClick={onClick}>
                    送出
                </button>
            </Wrapper>
        );
    }
}

CommentForm.defaultProps = {
    label: "",
    onChange: null,
    error: null,
    onClick: null,
    value: ''
};

export default CommentForm;
