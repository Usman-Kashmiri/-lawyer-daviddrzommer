import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sliderImg from '../../assets/images/banner.jpg'
import './banner.css'

const BannerSlider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='d-flex justify-content-center align-items-end slider-container'>
            <Carousel autoPlay={false} controls={false} activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliderImg}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliderImg}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliderImg}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className='slider-caption-container container-fluid row position-absolute text-center justify-content-center align-items-center'>
            <div className='slider-caption col-12 col-lg-6 mb-lg-5 mb-2'>
                <h3 className='text-white'>YOUR LEGAL SOLUTION STARTS HERE</h3>
                <h1 className='text-white'>THE GREATEST & STRONGER FIRM YOU CAN TRUST</h1>
                <button className='py-lg-2 py-1 px-3 px-lg-5'>REQUEST A FREE CONSULTATION</button>
            </div>
            </div>
        </div>
    )
}

export default BannerSlider
