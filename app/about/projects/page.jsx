'use client'

import React, {useState} from 'react';
import './projects.css'

import {
    RxActivityLog
  } from "react-icons/rx";

import { motion } from 'framer-motion';
import { featureVariants } from '../../../src/utils/animation';


import CountUp from 'react-countup';

const aboutData = [
    {
      title: 'Best Digital Marketing Company in Chennai',
      info: [
        {
          title: 'Small businesses should consider the huge marketplace of prospects online. No small business, no matter how new, should overlook this vast marketplace.',
          
        },
        {
          title: 'The ability to reach a global marketplace and the ability to interact with your prospects can be done only with the best Digital Marketing strategies.',
          
        },
        {
          title: 'Analysis of what exactly they are looking for should be known very well to get more profitable results for your product.',
          
        },
      ],
    },
    {
      title: 'Digital Marketing Agency in Chennai',
      info: [
        {
          title: 'Digital Marketing is the greatest tool to market your products or services in a digital platform and to make your business the biggest hit.',
         
        },
        {
          title: 'Marketing has always been about connecting with your audience in the right place and at the right time.',
          
        },
        {
          title: 'Properly planned and well-targeted digital marketing campaign can reach the right customers at a much lower cost than traditional marketing methods.',
         
        },
      ],
    },
    {
      title: 'Why hunger for Digital Marketing?',
      info: [
        {
          title: 'A team of the best digital marketers is present to have a clear picture of how each asset or tactics work and helps you to reach your goals in a short period of time.',
                 
        },
        {
          title: 'Digital Marketing is an action carried out by the use of numerous digital tactics and channels to connect with customers which in turn helps towards the promotion of your goods and services.',
        
        },
        {
          title: 'Most purchasing decisions are taken online, which gradually creates more hunger for digital marketing.',
          
        },
      ],
    },
  ];


  
  const Page = () => {
    const [index, setIndex] = useState(0);
    console.log(index);
    return (
      <div className="img">
        <div className="wrapper">
        
          
          <div className="container-1">
            <div className="flex-1">
              <motion.h2 
              initial="offscreen"
                            whileInView={"onscreen"}
                            variants={featureVariants}
               className="h2"> 
                Why We Are <span className="text-accent">Best</span> Digital agency
              </motion.h2>
              <motion.p 
               initial="offscreen"
                            whileInView={"onscreen"}
                            variants={featureVariants}
               className="flex-2">
              Weboin is the best platform to bring your product on top of this digital world. We have everything that you need to take your business idea alive, and you can watch your website turn into a profitable online business.
              </motion.p>
      
            <motion.div 
              initial="offscreen"
                            whileInView={"onscreen"}
                            variants={featureVariants}
             className="">
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
                </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
                </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
            </div>
          </motion.div>    
          </div>
            <motion.div 
             initial="offscreen"
                            whileInView={"onscreen"}
                            variants={featureVariants}
             className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
            <div className="flex gap-x-4 xl:gap-x-8 font-serif mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div key={itemIndex} className={`${index === itemIndex && 'text-accent after:w-[100%] after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                  after:bg-white after:absolute after:-bottom-1 after:left-0`} onClick={() => setIndex(itemIndex)}>{item.title}</div>
                )
              })}
            </div>
            <div  className="bg-violet-400/10 py-2 xl:py-8 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start rounded-t-md rounded-b-md">
              {aboutData[index].info.map((item, itemIndex) =>{
                return (
                  <div key={itemIndex} className="bg-violet-400/100 p-4 rounded-t-md rounded-b-md shadow-md w-auto">
                  <RxActivityLog className="h-6 w-6 text-black/100" />
                  <span className="font-bold text-md ml-2">{item.title}</span>
                  </div>
                )
              })}
            </div>
            </motion.div>
          </div>
        </div>
        </div>
    )
  }
  
  export default Page