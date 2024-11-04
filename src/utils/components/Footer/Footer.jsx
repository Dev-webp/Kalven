import React from 'react';
import './Footer.css';
import EmailBox from '../Navbar/EmailBox/EmailBox';
import { Link } from 'react-scroll';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='f-wrapper'>
      <div className='container'>
        <div className='f-container'>
          <span className='title'>CONTACT US!</span>
          <EmailBox />

          {/* Social Media Icons */}
          <div className='social-icons'>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'><FaInstagram size={25} /></a>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'><FaFacebookF size={25} /></a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'><FaTwitter size={25} /></a>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'><FaLinkedinIn size={25} /></a>
          </div>

          <hr/>
          <div className='f-menu'>
            <Link to='h-wrapper' spy={true} smooth={true}><span>Home</span></Link>
            <Link to='au-wrapper' spy={true} smooth={true}><span>About us</span></Link>
            <Link to='od-wrapper' spy smooth offset={100}><span>Services</span></Link>
            <Link to='pf-wrapper' spy smooth><span>Solutions</span></Link>
            <Link to='s-wrapper' spy smooth offset={100}><span>What we do</span></Link>
          </div>

          <hr/>
          
          <a href='https://maps.app.goo.gl/UAyXLn3BN4Lc6drP9' className='text-f' target='_blank' rel='noopener noreferrer'>
              Kalven Group Of Limited Liability Company 
          </a>
          <a href='https://maps.app.goo.gl/UAyXLn3BN4Lc6drP9' className='text-f' target='_blank' rel='noopener noreferrer'>5900 Balcones Drive STE 100, Austin, TX 78731, TRAVIS TEXAS</a>
          <span className='C-f'>
    <a href='tel:+13048143494' className='C-f'>Call: +1 304 814 3494 </a> || 
    <a href='https://wa.me/13322012159' className='W-f' target='_blank' rel='noopener noreferrer'> WhatsApp: +1 332 201 2159</a>
</span>


        </div>
      </div>
    </div>
  )
}
