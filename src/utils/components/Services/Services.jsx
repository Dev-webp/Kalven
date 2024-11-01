import React from 'react';
import './Services.css';
import SlickSlider from './SlickSlider';

const Services = () => {
  return (
    <div className='s-wrapper'>
        <div className='container'>
            <div className='s-container'>
                <div className='s-head'>
                    <span className='tag'>Testimonials</span>
                    <span className='title'>Digital Transformation Services, Data Analytics & Insights</span>
                    <span className='des'>What people say about us</span>
                </div>
            </div>

            <SlickSlider />
        </div>
    </div>
  )
}

export default Services