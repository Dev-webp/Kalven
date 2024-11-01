'use client'

import React from 'react';
import './services.css';
import { ourDiffFeatures } from '../../../src/utils/data';
import Image from 'next/image';
import {motion} from 'framer-motion';
import { containerVariants, desVariants, tagVariants, titleVariants } from '../../../src/utils/animation';

const OurDiff = () => {
  return (
    <div className='img'>
    <div className='od-wrapper'>
        <div className='container'>
            <div className='od-container'>
                <div className='od-head'>
                    <motion.span
                    variants={tagVariants} 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className='ti'>SERVICES</motion.span>
                    <motion.span 
                     initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='title'>Digital Marketing Services - WEBOIN</motion.span>
                    <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='tex'
                    >Digital Marketing is any action carried out by the use of numerous digital tactics and channels to connect with customers which in turn helps towards the promotion of your goods and services.</motion.span>
                  
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
                            <span className='sec-title'>{feature.title}</span>
                            <span className='text'>{feature.des}</span>
                        </motion.div>
                        )
                    }
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
                            <span className='sec-title'>{feature.title}</span>
                            <span className='text'>{feature.des}</span>
                        </motion.div>
                        )
                    }
                </div>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default OurDiff