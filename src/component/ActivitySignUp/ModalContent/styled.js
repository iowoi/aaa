import styled from "styled-components";


export const Wrapper = styled.div`
    select {
        width: 100%;
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
