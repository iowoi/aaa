import styled from 'styled-components';

export const SliderWrapper = styled.div`
    &.banner-slide {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        overflow: hidden;
        .slick-slide {
            margin-bottom: -5px;
            img {
                width: 100%;
            }
        }
        .slick-dots {
            bottom: 10px;
            li button:before {
                color: #fff;
            }
        }
        @media (max-width: 480px) {
            border-radius: 0px;
        }
    }
`;
