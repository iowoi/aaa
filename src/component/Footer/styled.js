import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div `
    @media(max-width:480px){
        display: ${props => (props.displayOnMobile ? 'block' : 'none')};
    }
    display: ${props => (props.displayOnMobile ? 'none' : 'block')};
    padding: 17.5px 0;
    background: #DA263C;
    position: fixed;
    width: 100%;
    bottom: 0;
    .nav {
        width: 530px;
        margin: 0 auto;
        a {
            width: calc(20% - 1px);
            display: inline-block;
            text-align: center;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            border-right: 1px solid #fff;
            padding-top: 43px;
            text-decoration: none;
            color: #fff;
            position: relative;
            &:last-child {
                border-right: none;
            }
            img {
                margin: 0 auto;
                position: absolute;
                left: 50%;
                margin: -53px 0 0 -28px;
            }
        }
    }
    @media (max-width: 480px) {
        padding: 0;
        .nav {
            width: 100%;
            a {
                width:20%;
                font-size: 10px;
                img {
                    position: absolute;
                    left: 50%;
                    margin: -42px 0 0 -21px;
                    width: 40px;
                }
            }
        }
    }

`
