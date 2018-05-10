import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;

    input,
    button {
        display: flex;
    }
    
    input {
      flex: 1;
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
