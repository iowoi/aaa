import React from "react";
import styled from "styled-components";

export const Wrapper = styled.header`
    text-align: center;
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 57px;
    .logo {
        margin-top: 7px;
        position: absolute;
        left: 50%;
        margin-left: -91.5px;
    }
    .btn {
        width: 30px;
        height: 30px;
        background: #fff;
    }
    .navbar {
        background: #da263c;
        color: #fff;
        overflow: hidden;
        height: 57px;
    }

    .navbar a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }

    .navbar a.more {
        float: right;
        position: relative;
        top: 4px;
    }

    .navbar ul {
        margin: 8px 0 0 0;
        list-style: none;
    }
`;

export const SideNav = styled.div`
    height: 100vh;
    width: ${props => (props.menuOpen ? "350px" : 0)};
    background-color: #f9fafb;
    overflow-x: hidden;
    padding-top: 20px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    -webkit-box-shadow: 15px 3px 73px -27px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 15px 3px 73px -27px rgba(0, 0, 0, 0.7);
    box-shadow: 15px 3px 73px -27px rgba(0, 0, 0, 0.7);
    a {
        text-decoration: none;
        font-size: 16px;
        font-family: Microsoft JhengHei;
        cursor:pointer;
        color: #da263c;
        display: block;
        transition: 0.3s;
        margin: 0 35px;
        border-bottom: 1px solid #da263c;
        position: relative;
        line-height: 70px;
        img {
            position: absolute;
            left: 0px;
            top: 12px;
        }
        .btn-close {
            position: absolute;
            top: 0;
            right: 22px;
            font-size: 36px;
            margin-left: 50px;
        }
        &:hover {
            font-weight:bold;
        }
    }
    @media (max-width: 480px) {
        width: ${props => (props.menuOpen ? "80%" : 0)};
    }
    @media (max-width: 320px) {
        width: ${props => (props.menuOpen ? "100%" : 0)};
        padding-top: 22px;
        a {
            line-height: 65px;
            img {
                left: 1px;
                top: 8px;
            }
        }
    }
`;
export const HamburgerIcon = styled.div`
    width: 30px;
    height: 22px;
    position: relative;
    display: block;
    padding: 0;
    top: 3px;
    .line {
        display: block;
        background: #ecf0f1;
        width: 30px;
        height: 4px;
        position: absolute;
        left: 0;
        border-radius: 4px;
        transition: all 0.4s;
        -webkit-transition: all 0.4s;
        -moz-transition: all 0.4s;
        &.line-1 {
            top: 0;
        }
        &.line-2 {
            top: 50%;
        }
        &.line-3 {
            top: 100%;
        }
    }
    &.active {
        .line-1 {
            transform: translateY(10.5px) translateX(0) rotate(45deg);
            -webkit-transform: translateY(10.5px) translateX(0) rotate(45deg);
            -moz-transform: translateY(10.5px) translateX(0) rotate(45deg);
        }
        .line-2 {
            opacity: 0;
        }
        .line-3 {
            transform: translateY(-11.5px) translateX(0) rotate(-45deg);
            -webkit-transform: translateY(-11.5px) translateX(0) rotate(-45deg);
            -moz-transform: translateY(-11.5px) translateX(0) rotate(-45deg);
        }
    }
`;
