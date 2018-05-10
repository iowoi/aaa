import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 10px 30px;
    h2 {
        margin: 0 0 10px;
    }
`;

export const List = styled.div`
    button {
        padding: 0px 15px;
        position: relative;
        display: block;
        line-height: 40px;
        width: 100%;
        text-align: left;
        border: none;
        border-bottom: 1px #ccc solid;
        font-size: 14px;
        outline: none;
        background: #fff;
        &:hover {
            opacity: 0.8;
            cursor: pointer;
        }
        &:disabled {
            &:hover {
                opacity: 1;
                cursor: default;
            }
            &::after {
                content: "";
            }
        }
        img {
            position: relative;
            top: 6px;
            margin-right: 20px;
        }
        &:last-child {
            border: none;
        }
        &::after {
            content: url('/assets/icons/arrowJoin.png');
            position: absolute;
            right: 15px;
            top: 2px;
        }
        span {
            &::after {
                content: '、';
            }
            &:last-child {
                &::after {
                    content: '';
                }
            }
        }
    }
}
`;
