'use client'

import React from 'react';
import './OurDiff.css';
import { ourDiffFeatures } from '../../data';
import Image from 'next/image';
import {motion} from 'framer-motion';
import { containerVariants, desVariants, tagVariants, titleVariants } from '../../animation';

const OurDiff = () => {
  return (
    <div className='od-wrapper'>
        <div className='container'>
            <div className='od-container'>
                <div className='od-head'>
                    <motion.span
                    variants={tagVariants} 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className='tag-s'>SERVICES</motion.span>
                    <motion.span 
                     initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='title-s'>IT CONSULTANCY SERVICE- KALVEN GROUPS</motion.span>
                    <motion.span 
                     initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className='text-s'>Our IT consultancy services leverage cutting-edge technologies and expert insights to empower your organization. We provide tailored solutions that optimize processes, enhance security, and drive digital transformation to meet your business objectives.</motion.span>
                </div>

                <div className='od-features'>
                    {
                        ourDiffFeatures.map((feature, i) => 
                        <motion.div 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={containerVariants((i+1)*0.1)}
                        key={i} className='od-feature'>
                            <Image src={feature.icon} alt='feature' width={128} height={128}/>
                            <span className='sec-title-s'>{feature.title}</span>
                            <span className='text-s'>{feature.des}</span>
                        </motion.div>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurDiff