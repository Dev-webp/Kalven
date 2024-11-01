import React from 'react';
import './WhatWeDo.css'
import { whoWeInvest } from '../../data';
import { motion } from 'framer-motion';
import { containerVariants, desVariants, tagVariants, titleVariants } from '../../animation';

const WhatWeDo = () => {
  return (
    <div className='wwd-wrapper'>
        
        <div className='container'>
        <div className='head'>
                        <motion.span 
                         initial="offscreen"
                         whileInView={"onscreen"}
                         variants={tagVariants}
                        className='tag-w'>WHAT WE OFFER</motion.span><br/>
                        <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className='title-w'>Differentiated Solutions</motion.span>
                    </div>
            <div className='wwd-container'>
            
                    
                <div className='wwd-left'>
                    {/* <div className='head'>
                        <motion.span 
                         initial="offscreen"
                         whileInView={"onscreen"}
                         variants={tagVariants}
                        className='tag'>WHAT WE OFFER</motion.span>
                        <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className='title'>Differentiated Solutions</motion.span>
                    </div> */}
                <div className='wwd-features'>
                    {
                        whoWeInvest.map((feature, i)=> (
                            <motion.div 
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={containerVariants(i * 0.05 + 1)}
                            className='wwd-feature' key={i}>
                            <span className='des-w'>{feature.title}</span>
                            <span className='text-w'>{feature.des}</span>
                            </motion.div>
                        ))
                    }
                </div>    
                </div>
                <div className='wwd-right'>
                    <motion.img  
                     initial="offscreen"
                    whileInView={"onscreen"}
                    variants={containerVariants(0.5)}
                    className='img'
                    src='WWD.jpg' alt='person' width={500} height={500}/>
                    {/* <div className='head'>
                        <motion.span 
                         initial="offscreen"
                         whileInView={"onscreen"}
                         variants={tagVariants}
                        className='tag'>
                        Why We Are Best </motion.span>
                        <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className='title'>Digital agency</motion.span>
                    </div>
                <div className='wwd-features'>
                    {
                        whoWeInvest.map((feature, i)=> (
                            <motion.div 
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={containerVariants(i * 0.05 + 1)}
                            className='wwd-feature' key={i}>
                            <span className='des'>{feature.title}</span>
                            <span className='text'>{feature.des}</span>
                            </motion.div>
                        ))
                    }
                </div>     */}
                </div>
                
            </div>
            <hr className='h'/>
        </div>
    </div>
  )
}

export default WhatWeDo