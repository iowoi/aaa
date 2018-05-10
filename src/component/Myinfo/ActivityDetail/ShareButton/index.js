import React, { Component } from "react";
import { Wrapper } from "./styled";
import { Button } from "../../../Common";

class ShareButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
          copied: false
        }
    }
    
    copyToClipboard() {
      let textField = document.createElement('textarea');
      textField.innerText = this.props.url;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand('copy');
      textField.remove();
      this.setState({copied: true});
      setTimeout(() => this.setState({copied: false}), 2000)
    }

    render() {
      const { url, onClick } = this.props;
      return (
          <Wrapper>
            <div> {url} </div>
            <Button className='btn' onClick={() => this.copyToClipboard()}>
              { this.state.copied == true? 'Copied!!': '複製報名連結(可貼至其他平台方便報名)' }
            </Button>
          </Wrapper>
      );
    }
}

ShareButton.defaultProps = {
  url: "http://www.bonny-badminton.com/x3hid2",
  onClick: () => {}
}

export default ShareButton;
