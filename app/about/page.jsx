"use client"

import React from 'react';
import './AboutUs.css';
import { features } from '../../src/utils/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, desVariants, tagVariants, titleVariants } from '../../src/utils/animation';


const AboutUs = () => {
  return (
    <div className='au-wrapper'>
        <div className='container'>
            <div className='au-container'>
                <motion.div 
                 initial="offscreen"
                 whileInView={"onscreen"}
                 variants={containerVariants(0.3)}
                className='au-support'>
                <div>
                    <span className='te'>We Partner to<span className='de'>Deliver</span></span>
                    </div>

                    <div className='text-a'>
                        <span className='text'>
                        KALVEN IT GROUP is a customer-centric transformational global IT solutions and services partner. 
                        </span>
                        <span className='text'>
                        We have a proven track record in delivering battle-tested consulting, technology, and outsourcing services to address our clients’ evolving and complex digital transformation challenges. 
                        </span>
                        <span className='text'>
                        We harness business-centric, innovative frameworks and solutions to help clients achieve unprecedented performance levels and revenue growth at optimized costs. 
                        </span>
                        <span className='text'>
                        Recognized as one of the fastest-growing IT services firms globally, YASH has complemented its robust organic growth with strategic ‘tuck-in’ acquisitions.
                        </span>
                    </div>
                </motion.div>

            </div>
        </div>
        
    </div>
  )
}

export default AboutUs