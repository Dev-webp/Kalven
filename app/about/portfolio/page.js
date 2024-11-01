"use client"

import React from 'react';
import './portfolio.css';
import { hitFeatures } from '../../../src/utils/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, desVariants, tagVariants, titleVariants } from '../../../src/utils/animation';
const Portfolio = () => {
    const featureVariants = {
        "offscreen":{
            scale: 0.5
        },
        "onscreen": {
            scale: 1,
            transition: {
                type: "spring",
                duration: 1.5,
                
            }
        }
    }
  return (
    <div className='pf-wrapper'>
        <div className='container'>
            <div className='pf-container'>
                <div className='pf-head'>
                <span></span>
                    <motion.span 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className='tag'>Portfolio</motion.span>
                    <motion.span 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='title'>Why We Are Best Digital agency</motion.span>
                </div>

                <div className='pf-features'>
                    {
                        hitFeatures.map((feature, i)=> (
                            <motion.div 
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={featureVariants}
                            className='pf-feature' 
                            key={i}>
                                <motion.div 
                                initial={{ opacity: 0, x: -100}}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition:{
                                        type: "easeIn",
                                        duration: 1,
                                        delay: .7
                                    }
                                }}
                                className='detail'>
                                    <span className='des'>0{i+1}</span>
                                    <span className='sec-title'>{feature.title}</span>
                                    <span className='text'>{feature.des}</span>
                                </motion.div>

                            <div className='icon'>
                                <Image 
                                src={feature.icon}
                                alt='' 
                                width={128} 
                                height={128} 
                                style={{translate: "50% 0rem"}}
                                />
                            </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio