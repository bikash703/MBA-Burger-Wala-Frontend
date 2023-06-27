import React from 'react';
import { motion } from 'framer-motion';
import burger from '../../assests/burger2.png';

const Contact = () => {
  return (
    <section className='contact'>
        <motion.form initial={{x:'-100%',opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.3}}>
        <h2>Contact Us</h2>
            <input type="text" placeholder='Enter Name' />
            <input type="email" placeholder='Enter Email' />
            <textarea placeholder='Message...' cols="30" rows="3"></textarea>
            <button type='submit'>Submit</button>
        </motion.form>
        <motion.div className='formBorder' initial={{x:'100%',opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.3}}>
            <motion.div initial={{x:'25%' ,y:'-100%',opacity:0}} animate={{x:'25%',y:'-50%',opacity:1}} transition={{delay:1}}>
            <img src={burger} alt="burger" />
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Contact
