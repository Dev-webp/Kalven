'use client';

import './page.css';
import { motion, useAnimation } from 'framer-motion';
import dynamic from 'next/dynamic';
import Navbar from '@/src/utils/components/Navbar/Navbar';
import Hero from '@/src/utils/components/Navbar/Hero/Hero';
import AboutUs from '@/src/utils/components/AboutUs/AboutUs';
import Count from '@/src/utils/components/Count/Count';
import OurDiff from '@/src/utils/components/OurDiff/OurDiff';
import Portfolio from '@/src/utils/components/Portfolio/Portfolio';
import WhatWeDo from '@/src/utils/components/WhatWeDo/WhatWeDo';
import Services from '@/src/utils/components/Services/Services';
import { Footer } from '@/src/utils/components/Footer/Footer';

const BrandingVideo = dynamic(() => import('@/src/utils/components/BrandingVideo/BrandingVideo'));
const Video = dynamic(() => import('@/src/utils/components/Video/Video'));

export default function Home() {
  const controls = useAnimation();
  return (
    <motion.div className="app" animate={controls}>
     <Navbar />
     <Hero />
     <BrandingVideo />
     <AboutUs />
     <Count/>
     <motion.div
     onViewportEnter={() =>
      controls.start({
        backgroundColor: "var(--primary-color)",
      })
     }
     onViewportLeave={() =>
      controls.start({
        backgroundColor: "white",
    })
     }
     viewport={{amount: 0.4}}
     >
      <OurDiff />
     </motion.div>
     <Video />
     <Portfolio />

     <motion.div
     onViewportEnter={() =>
      controls.start({
        backgroundColor: "var(--primary-color)",
      })
     }
     onViewportLeave={() =>
      controls.start({
        backgroundColor: "white",
    })
     }
     viewport={{amount: 0.4}}
     >
      <WhatWeDo />
     </motion.div>
     
     <Services />

     <Footer />
    </motion.div>
  );
}
