import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
    background: #a5a5a5;
    color: #fff;
    font-size: 12px;
    padding: 10px 5px;
    overflow: hidden;
    .btn {
        color: #fff;
        width: 55px;
        padding: 0;
        background: none;
        border: none;
    }

    .date > div {
        display: inline-block;
        width: calc(42.5% - 32.5px);
        margin: 0 5px;
    }

    .date {
        input {
            width: calc(100% - 12px);
            height: 30px;
            padding: 0 5px;
        }
        .select {
            width: 15%;
            select {
                height: 32px;
                width: 100%;
                position: relative;
                top: -2px;
            }
        }
    }

    .input-button {
        margin: 0 7px;
        width: calc(100% - 150px);
        input {
            width: calc(100% - 80px);
            height: 30px;
        }
        @media (max-width: 375px) {
            width: calc(100% - 190px);
            input {
                width: calc(100% - 80px);
            }
        }
        @media (max-width: 320px) {
            input {
                width: calc(100% - 80px);
            }
        }
    }
    .search-info {
        margin-top: 8px;
        a {
            width: 22%;
        }
        .input-button {
            width: 59%;
        }
        @media (max-width: 320px) {
            a {
                width: 26%;
            }
            .input-button {
                width: 51%;
            }
        }
    }
    .search-info,
    .loc {
        display: -webkit-flex;
        -webkit-flex-wrap: wrap;
        display: flex;
        color: #fff;
        text-decoration: none;
        align-items: center;
    }
    .loc img,
    .loc span,
    .input-button,
    .btn {
        float: left;
    }

    .loc img {
        height: 15px;
        margin-right: 5px;
    }
    .right-date {
        @media (max-width: 480px) {
            margin-left: -100px;
        }
        .react-datepicker__triangle {
            margin-left: 25% !important;
        }
    }
`;
