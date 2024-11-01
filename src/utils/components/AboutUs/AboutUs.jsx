"use client"

import React from 'react';
import './AboutUs.css';
import { features } from '../../data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, desVariants, tagVariants, titleVariants } from '../../animation';
import ParticlesContainer from '../ParticlesContainer';
import { Link, animateScroll as scroll } from 'react-scroll';

const AboutUs = () => {
  return (
    <div className='au-wrapper'>
        <div className='container'>
            <div className='au-container'>
            
                <div className='au-head'>
                    <motion.span 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className='tag'>ABOUT US</motion.span>
                    <motion.span 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='title'>
                    {" "} 
                    Get more than what you think from 
                    <br /><span className='cont'>KALVEN IT CONSULTANCY SERVICE</span></motion.span>
                    <motion.span 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className='des'>We lead change from the frontlines</motion.span>
                </div>
                    
                <div className='au-blocks'>
                    <div className='au-block'>
                        <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className='sec-title'></motion.span>
                        <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className='text'>the best platform to bring your product.</motion.span>
                        <div className='block-features'>
                            {
                                features.slice(0, 3).map((feature, i)=> (
                                    <motion.div 
                                     initial="offscreen"
                                     whileInView={"onscreen"}
                                     variants={containerVariants((i+1)*0.1)}
                                    className='block-feature' key={i}>
                                        <Image src={feature.icon} alt='feature' width={60} height={60}/>
                                        <span>{feature.title}</span>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='au-block'>
                    <motion.span 
                     initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='sec-title'></motion.span>
                        <motion.span 
                         initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className='text'>Our ideas, creativity & thoughtful executions.</motion.span>
                        <div className='block-features'>
                            {
                                features.slice(3, 6).map((feature, i)=> (
                                    <motion.div 
                                     initial="offscreen"
                                     whileInView={"onscreen"}
                                     variants={containerVariants((i+1)*0.1)}
                                    className='block-feature' key={i}>
                                        <Image src={feature.icon} alt='feature' width={60} height={60}/>
                                        <span>{feature.title}</span>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div>
                    
                </div>

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
                    KALVEN IT GROUP is a leading technology integrator specializing in helping clients reimagine operating models,competitiveness enhance , optimize costs, foster exceptional stakeholder experiences and drive business transformation.
                    </span>
                        <span className='text'>
                        With our unique global approach, we consultatively partner clients across geographies as a robust local provider while allowing them to take advantage of our market-leading portfolio of technology services, solutions, and products globally.
                        </span>
                        <span className='text'>
                        As a Partner of Choice for 75 Fortune500 corporations, we foster long-term strategic relationships with clients across Manufacturing, Lifesciences, BFSI, Mining, and Healthcare, among others.
                        </span>
                    </div>
                </motion.div>

            </div>
        </div>
    </div>
  )
}

export default AboutUs