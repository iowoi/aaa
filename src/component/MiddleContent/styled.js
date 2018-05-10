import styled from "styled-components";

export const MainWrapper = styled.div`
    background: ${props =>
        props.isIndex
            ? "url('/assets/images/bg.jpg')"
            : "url('/assets/images/bg-inner.jpg')"};
    background-size: cover;
    overflow: hidden;
    padding: 51px 0 100px;
    @media (max-width: 480px) {
        padding: 51px 0 61px;
    }
`;

export const Wrapper = styled.div`
    width: 440px;
    margin: 0 auto;
    height: calc(92vh - 157px);
    margin-top: 4vh;
    margin-bottom: 4vh;
    background: #feffff;
    border-radius: 15px;
    overflow: auto;
    .banner {
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 100%;
        margin: 0px 0 61px;
        height: calc(100vh - 118px);
        border-radius: 0;
        padding-bottom: 100px;
    }
`;
