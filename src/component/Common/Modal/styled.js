import styled from "styled-components";

export const Buttons = styled.div`
    margin: 20px -22px -20px;
    display: flex;
    button {
        background: #fff;
        line-height: 52px;
        width: 50%;
        font-size: 18px;
    }
`;

export const Button = styled.a`
    margin: 20px -22px -20px;
    display: block;
    background: #fff;
    line-height: 52px;
    width: 100%;
    font-size: 18px;
    padding: 0 22px;
    text-align: center;
    border-top: 1px solid;
    &:hover {
        cursor: pointer;
    }
`;

export const LeftButton = styled.button`
    border-bottom-left-radius: 20px;
    border-right: 1px solid #fff;
`;

export const RightButton = styled.button`
    border-bottom-right-radius: 20px;
`;
