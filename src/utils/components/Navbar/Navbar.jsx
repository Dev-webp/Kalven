"use client"

import React, { useState } from 'react';
import './Navbar.css';
import {BiMenuAltRight} from 'react-icons/bi';
import {RxCross2} from 'react-icons/rx';
import Image from 'next/image';
// import Link from 'next/link';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const [navStyle, setNavStyle] = useState("");
    const {scrollYProgress} = useScroll();
    useMotionValueEvent (scrollYProgress, "change", (latest) => {
        if (latest > 0.2) {
        setNavStyle("sticky");
        } else {
        setNavStyle("");
        }
        });
  return (
    <div className={`n-wrapper ${navStyle}`}>
     <div className='container'>
        <div className='n-container'>
            <div className='n-logo'>
                {/* <span>Kalven Group Of Limited Liability Company</span> */}
                {/* <Image src='/kalven.png' alt='logo' width={150} height={150}/> */}
            </div>
            <div className='n-right'>
                <div className='n-menu'>
                {/* <Link href="/about" className="n-menu-item">About us</Link> */}

                <Link to='au-wrapper' spy={true} smooth={true}>
                <span className='n-menu-item '>About us</span>
                </Link>
                <Link to='od-wrapper' spy smooth offset={100}>
                <span className='n-menu-item'>Services</span>
                </Link>
                <Link to='pf-wrapper' spy smooth>
                <span className='n-menu-item'>Solutions</span>
                </Link>    
                <Link to='s-wrapper' spy smooth offset={100}>
                <span className='n-menu-item'>What We Do</span>
                </Link>       
                </div>
                <div className='contact-button'>
                    Contact
                </div>
            </div>
        </div>
     </div>
     <div className='nm-container'>
        <span>KALVEN</span>

       {!mobileMenuOpened ? (
        <BiMenuAltRight size={30} onClick={()=> setMobileMenuOpened(true )} />
        ) : (
        <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}

        <div className="nm-menu" style={{ transform: mobileMenuOpened && "translateX(0%)" }}>
        <Link to="au-wrapper" spy={true} smooth={true} onClick={() => setMobileMenuOpened(false)}>
            <span>About us</span>
        </Link>
        <Link to="od-wrapper" spy smooth offset={100} onClick={() => setMobileMenuOpened(false)}>
            <span>Services</span>
        </Link>
        <Link to="pf-wrapper" spy smooth onClick={() => setMobileMenuOpened(false)}>
            <span>Solutions</span>
        </Link>
        <Link to="s-wrapper" spy smooth offset={100} onClick={() => setMobileMenuOpened(false)}>
            <span>For-More</span>
        </Link>
        <div className="m-contact-button">Contact</div>
        </div>

     </div>
    </div>
  )
}

export default Navbar