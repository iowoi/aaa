import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    input,
    button {
        display: flex;
    }
    button {
        margin-left: -3px;
        border: none;
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        color: #fff;
        background: #2f82bf;
        img {
        position: relative;
        top: 2px;
        margin-right: 5px;
    }
`;
