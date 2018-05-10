import React, { Component } from "react";
import { Wrapper } from "./styled";
class ImageUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: null
        }
        this.handleFileUpload = this.handleFileUpload.bind(this)
    }
    handleFileUpload (e) {
        this.setState({
            fileName : e.target.value.split( '\\' ).pop()
        })
    }
    render() {
        const { name, input, onChange, onClick } = this.props;
        const { fileName } = this.state
        return (
            <Wrapper className="img-uploader">
                <label>上傳照片：</label>
                <input type="text" {...input} disabled value={fileName} className="fileNames"/>
                <div className="upload-btn-wrapper">
                    <label>
                        <img src="./assets/icons/search.png" alt="" />
                        上傳
                    </label>
                    <input type="file" onChange={this.handleFileUpload} />
                </div>
                <p className="hint">
                    您可上傳2400(寬) x
                    400(高)像素以內、檔案大小2mb以下的JPG、GIF、PNG圖片
                </p>
            </Wrapper>
        );
    }
}

ImageUploader.defaultProps = {
    label: "",
    onChange: null,
    error: null,
    onClick: null
};

export default ImageUploader;
