import styled from "styled-components";

export const Wrapper = styled.div`
    background: ${props =>
        props.isIndex
            ? "url('/assets/images/bg.jpg')"
            : ""};
    background-size: cover;
    overflow: hidden;
    margin-top: 57px;
    min-height: calc(100vh - 57px);
    @media (max-width: 480px) {
        min-height: calc(100vh - 57px);
        margin-top: 57px;
        background: ${props =>
          props.isIndex
            ? "url('/assets/images/bg-m.jpg')"
            : ""};
        background-repeat: no-repeat;
        background-size: contain;
    }
`;

export const Buttons = styled.div`
    width: 65%;
    position: absolute;
    bottom: 0vh;
    left: 17.5%;
    a {
        width: 24.25%;
        height: 20vh;
        margin-right: 1%;
        display: inline-block;
        background-size: cover;
        background-position: center center;
        &:nth-child(1) {
            background-image: url("/assets/images/Button1.png");
        }
        &:nth-child(2) {
            background-image: url("/assets/images/Button2.png");
        }
        &:nth-child(3) {
            background-image: url("/assets/images/Button3.png");
        }
        &:nth-child(4) {
            background-image: url("/assets/images/Button4.png");
            margin-right: 0;
        }
        &:last-child {
            width: 100%;
            height: unset;
            img {
                width: 100%;
            }
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: unset;
        a {
            width: 50%;
            height: 100px;
            margin-right: 0px;
            display: list-item;
            list-style: none;
            float: left;
            background-size: contain;
            background-position: center center;
            &:nth-child(1) {
                background-image: url("/assets/images/MB-Button1.png");
            }
            &:nth-child(2) {
                background-image: url("/assets/images/MB-Button2.png");
            }
            &:nth-child(3) {
                background-image: url("/assets/images/MB-Button3.png");
            }
            &:nth-child(4) {
                background-image: url("/assets/images/MB-Button4.png");
                margin-right: 0;
            }
            &:last-child {
                height: 48px;
                img {
                    width: 150%;
                    position: fixed;
                    left: -30%;
                    bottom: 0;
                }
            }
        }
    }
`;
