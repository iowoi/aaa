import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderWrapper } from './styled.js';
export default class Banner extends React.Component {
    render() {
        var settings = {
            autoplay: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const { data, className } = this.props;
        return (
            <SliderWrapper className={className}>
                <Slider {...settings}>
                    {data.map((item, i) => (
                        <div key={i}>
                            <img src={item.url} alt={item.name} />
                        </div>
                    ))}
                </Slider>
            </SliderWrapper>
        );
    }
}

Banner.defaultProps = {
    data: []
};
