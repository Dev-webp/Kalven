"use client";

import React from 'react';
import './page-about.css';
import { features } from '../../src/utils/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, desVariants, tagVariants, titleVariants } from '../../src/utils/animation';

const AboutUs = () => {
  return (
    <div className='about-wrapper'>
        <div className='about-container'>
            <div className='about-support-section'>
                <motion.div 
                 initial="offscreen"
                 whileInView={"onscreen"}
                 variants={containerVariants(0.3)}
                className='about-support'>
                <div>
                    <span className='about-title'>We Partner to<span className='about-highlight'>Deliver</span></span>
                    </div>

                    <div className='about-text-content'>
                        <span className='about-text'>
                        KALVEN IT GROUP is a customer-centric transformational global IT solutions and services partner. 
                        </span>
                        <span className='about-text'>
                        We have a proven track record in delivering battle-tested consulting, technology, and outsourcing services to address our clients’ evolving and complex digital transformation challenges. 
                        </span>
                        <span className='about-text'>
                        We harness business-centric, innovative frameworks and solutions to help clients achieve unprecedented performance levels and revenue growth at optimized costs. 
                        </span>
                        <span className='about-text'>
                        Recognized as one of the fastest-growing IT services firms globally, YASH has complemented its robust organic growth with strategic ‘tuck-in’ acquisitions.
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs;
