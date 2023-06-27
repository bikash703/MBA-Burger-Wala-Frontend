import React from 'react';
import { motion } from 'framer-motion';
// import me from '../../assests/founder.webp';
import me from '../../assests/founder2.jpg';


const Founder = () => {
const option = {
    initial:{
        x:'-100%',
        opacity:0
    },
    whileInView:{
        x:0,
        opacity:1
    }
}

  return (
    <section className='founder'>
        <motion.div {...option}>
            <img src={me} alt="founder" />
            <h3>Bikash Majhi</h3>
            <p>Hey,Everyone I am Bikash Majhi the founder of MBA burger wala <br />
            Our aim is to create the most Tasty burger on planet</p>
        </motion.div>
    </section>
  )
}

export default Founder
