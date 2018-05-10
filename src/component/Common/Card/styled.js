import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
    a {
        display: flex;
        flex: 1 1 auto;
        width: 100%;
        align-items: flex-end;
        color: unset;
        text-decoration: none;
        &:hover {
            opacity: 0.8;
        }
    }
    .act-img {
        img {
            width: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
        width: 95px;
        height: 75px;
        object-fit: fill;
        position: relative;
        overflow: hidden;
        margin: 10px 10px 0 0;
        .type {
            height: 20px;
            position: absolute;
            bottom: 0px;
            width: 100%;
            font-size: 10px;
            color: #fff;
            background: rgba(0, 0, 0, 0.6);
            text-align: center;
        }
    }
    .act-info {
        width: calc(100% - 100px);
        text-align: left;
        margin-right: -10px;
        margin-top: 5px;
        p {
            margin: 0 0 5px;
            font-size: 12px;
        }
        .title {
            font-size: 16px;
            font-weight: bold;
            color: red;
        }
        small {
            display: block;
            font-size: 10px;
        }
        label {
            font-size: 10px;
            color: #666;
            font-weight: 300;
            display: block;
            float: right;
            text-align: center;
            border: 1px solid #ccc;
            margin: 0px 2px 0;
            padding: 1px 5px;
            border-radius: 5px;
        }
    }
`;
