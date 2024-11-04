import React, { useState } from 'react';
import './EmailBox.css';
import { LuMail } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { containerVariants } from '@/src/utils/animation';

const EmailBox = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Construct the Google Forms URL with the input email
    const formURL = `https://docs.google.com/forms/d/e/1FAIpQLSdqYC6jd9MP73XK5NxAT0nv38WRg8Fes7JpTsGbdxwP_OtHbA/formResponse`;
    const formData = new FormData();
    formData.append('entry.1984721142', email); // Entry ID from Google Forms

    // Use fetch to submit the form data
    fetch(formURL, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })
      .then(() => {
        setEmail(''); // Clear the input field after submission
        alert('Thank you for your submission!'); // Notify the user
      })
      .catch((error) => {
        console.error('Error submitting the form:', error);
        alert('There was an error. Please try again.'); // Handle error
      });
  };

  return (
    <motion.div 
      initial={{
        width: ".5rem",
        borderRadius: "100",
      }}
      whileInView={{
        width: "70%",
        borderRadius: "999px",
        transition: {
          type: "easeOut",
          duration: 1,
        }
      }}
      className='emailBox'
    >
      <motion.div
        variants={containerVariants(0.6)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once: true
        }}
      >
        <LuMail size={30} color='grey' />
      </motion.div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <motion.input 
          variants={containerVariants(0.7)}
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{
            once: true
          }}
          type='email'
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update state on input change
          required
          className='emailInput' // Keep existing class for styles
        />
        
        <motion.div 
          variants={containerVariants(0.9)}
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{
            once: true
          }}
          className='contactUs'
          onClick={handleSubmit} // Call handleSubmit on div click
          style={{ cursor: 'pointer' }} // Change cursor to pointer
        >
          Get in Touch
        </motion.div>
      </form>
    </motion.div>
  );
};

export default EmailBox;
