import React, { Component } from "react";
import SlickSlider from 'react-slick'
import "slick-carousel/slick/slick.css";
import EStore from '../images/Slider/vector/estore.webp'
import EPayment from '../images/Slider/vector/epayment.webp'
import Shopping from '../images/Slider/vector/shopping.webp'
import {SlickContainer, UnikSlideContainer, UnikSliderImage, UnikTestimonial} from '../styles/tsx/Slider/SliderStyle'
import '../styles/css/Slider/slick-slider.css'


const images = [
    {
        id: 1,
        src: EStore,
        alt: "Image 1",
        testimonial : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor donec sit habitant mi, imperdiet cursus eu, porttitor mauris. Aenean ultrices arcu quisque tempus, aliquam. Sed dignissim faucibus quam elit sit in et a. Ut nam morbi suspendisse lacus varius sit amet. Nulla quis congue mi eu sagittis. A aliquam, diam nisl, ligula sed. Convallis morbi in mi ornare elit ut',
    },
    {
        id: 2,
        src: EPayment,
        alt: "Image 2 ",
        testimonial : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor donec sit habitant mi, imperdiet cursus eu, porttitor mauris. Aenean ultrices arcu quisque tempus, aliquam. Sed dignissim faucibus quam elit sit in et a. Ut nam morbi suspendisse lacus varius sit amet. Nulla quis congue mi eu sagittis. A aliquam, diam nisl, ligula sed. Convallis morbi in mi ornare elit ut',

    },
    {
        id: 3,
        src: Shopping,
        alt: "Image 3",
        testimonial : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor donec sit habitant mi, imperdiet cursus eu, porttitor mauris. Aenean ultrices arcu quisque tempus, aliquam. Sed dignissim faucibus quam elit sit in et a. Ut nam morbi suspendisse lacus varius sit amet. Nulla quis congue mi eu sagittis. A aliquam, diam nisl, ligula sed. Convallis morbi in mi ornare elit ut',

    }
];

export default class SliderComponent extends Component {
    render() {
        const settings = {
            fade: true,
            cssEase: 'linear',
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            dotsClass: "button__bar",
        };
        return (
            <SlickContainer>

                <SlickSlider {...settings}>
                    {images.map((item) => (
                        <UnikSlideContainer key={item.id}>
                            <UnikSliderImage src={item.src}  alt={item.alt} />
                            <UnikTestimonial>{item.testimonial}</UnikTestimonial>
                        </UnikSlideContainer>
                    ))}
                </SlickSlider>
            </SlickContainer>

        );
    }
}