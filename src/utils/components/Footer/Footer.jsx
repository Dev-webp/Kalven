import React from 'react';
import './Footer.css';
import EmailBox from '../Navbar/EmailBox/EmailBox';
import { Link } from 'react-scroll';

export const Footer = () => {
  return (
    <div className='f-wrapper'>
        <div className='container'>
            <div className='f-container'>
                <span className='title'>Contact Us!</span>
                <EmailBox />

                <hr/>
                <div className='f-menu'>
                    <Link to='h-wrapper' spy={true} smooth={true}><span>Home</span></Link>
                    <Link to='au-wrapper' spy={true} smooth={true}><span>About us</span></Link>
                    <Link to='od-wrapper' spy smooth offset={100}><span>Services</span></Link>
                    <Link to='pf-wrapper' spy smooth><span>Solutions</span></Link>
                    <Link to='s-wrapper' spy smooth offset={100}><span>What we do</span></Link>
                </div>

                <hr/>

                <span className='text-f'>Kalven Group Of Limited Liability Company</span>
                <span className='text-f'>5900 Balcones Drive STE 100, Austin, TX 78731, TRAVIS TEXAS</span>
                <span className='C-f'>Call :+1 304 814 3494 ||<span className='W-f'> WhatsApp: +1 332 201 2159</span></span>
            </div>
        </div>
    </div>
  )
}
