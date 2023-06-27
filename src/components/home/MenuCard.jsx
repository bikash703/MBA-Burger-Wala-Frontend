import React from 'react';
import { motion } from 'framer-motion';

const MenuCard = ({itemNum,burgerSrc,title,price,handler,delay=0}) => {
  return (
    <motion.div  className='menucard'  
    initial={{x:'-100%',opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay,}}
     > 
      <div>
        Item {itemNum}
      </div>
      <main>
        <img src={burgerSrc} alt={itemNum} />
        <h5>₹ {price}</h5>
        <p>{title}</p>
        <button onClick={()=>handler(itemNum)}>Buy now</button>
      </main>
    </motion.div>
  )
}

export default MenuCard
