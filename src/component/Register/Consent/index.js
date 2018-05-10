import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { LeftButton, RightButton, Buttons, Button } from "./styled";

const customStyles = {
    content: {
        top: "100%",
        left: "100%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "320px",
        borderRadius: "20px",
        maxHeight: "calc(92vh - 197px)",
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.25)"
        }
    }
};

export default class ModalBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    };

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        console.log("afterOpenModal");
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    handleSubmit = () => {
        this.props.onClick();
        this.setState({ modalIsOpen: false });
    };

    render() {
        const {
            btnClass,
            btnText,
            modalContent,
            title,
            onClick,
            btnTheme,
            text1,
            noButton,
            notButtonStyle,
            noLeftButton
        } = this.props;

        return [
            noButton ? (
                <div style={notButtonStyle} onClick={this.openModal}>
                    {btnText} {this.props.children}
                </div>
            ) : (
                <button onClick={this.openModal} className={btnClass} key="0">
                    {btnText} {this.props.children}
                </button>
            ),
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
                key="1"
            >
                <h2 style={{ textAlign: "center" }}>{title}</h2>
                {modalContent}
                {btnTheme === "two" ? (

                        <Buttons onClick={this.handleSubmit}>
                            {text1 ? text1 : "同意"}
                        </Buttons>

                ) : (
                    <Button onClick={this.closeModal}>取消</Button>
                )}
            </Modal>
        ];
    }
}

ModalBox.defaultProps = {
    title: null,
    btnClass: null,
    btnText: null,
    btnTheme: "two",
    modalContent: null,
    onSubmit: () => {}
};
