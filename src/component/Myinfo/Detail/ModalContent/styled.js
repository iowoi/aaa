import styled from "styled-components";

export const Wrapper = styled.div`
    select {
        width: 100%;
    }
    p {
        color: #7b7b7b;
        margin-top: 10px;
        font-size: 14px;
    }
`;

export const TimePickerWrapper = styled.div`
    select {
        width: calc(50% - 4.5px);
        &:first-child {
            margin-right: 5px;
        }
    }
`;

export const LabelWrapper = styled.div`
    button {
        width: 31%;
        margin: 10px 1% 10px;
        background: none;
        border-radius: 20px;
        padding: 10px 0;
        &.active,
        &:hover {
            border: 2px solid #da263c;
            color: #da263c;
            font-weight: 500;
            cursor: pointer;
        }
    }
`;
