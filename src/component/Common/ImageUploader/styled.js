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
    background-color: #EBEBEB
    padding: 5px 30px 5px 30px
    margin-left: -15px
    input{
        display: flex;
    }
    
    .hint {
        font-weight: normal;
        color: #a5a5a5;
        width: 95%;
    }
    input[type=file] {
        font-size: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }
    .upload-btn-wrapper {
        position: relative;
        overflow: hidden;
        display: inline-block;
        label {
            margin-left: -3px;
            border: none;
            border-top-right-radius: 0.25rem;
            border-bottom-right-radius: 0.25rem;
            color: #fff;
            background: #2f82bf;
            padding: 7.5px 10px;
            margin: 0 0 0 -3px;
            img {
                position: relative;
                top: 2px;
                margin-right: 5px;
            }
        }
    }

    .upload-btn-wrapper input[type=file] {
        font-size: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }
`;
