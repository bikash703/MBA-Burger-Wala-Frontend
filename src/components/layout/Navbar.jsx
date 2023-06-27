import React from 'react';
import {IoFastFoodOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom';
import {FaUser} from 'react-icons/fa'
import {FiShoppingCart,FiLogIn} from 'react-icons/fi'
import { motion } from 'framer-motion';

const Navbar = ({isAuth=false}) => {
  return (
    <nav>
      <motion.div initial={{x:'-100%'}} whileInView={{x:0}} >
        <IoFastFoodOutline />
      </motion.div>
      <div>
        <Link to={'/'} initial={{x:'-100%'}} animate={{x:0}} >Home</Link>
        <Link to={'/contact'} initial={{x:'-100%'}} animate={{x:0}} >Contact</Link>
        <Link to={'/about'} initial={{x:'-100%'}} animate={{x:0}} >About</Link>
        <Link to={'/cart'} initial={{x:'-100%'}} animate={{x:0}} > <FiShoppingCart /> </Link>
        <Link to={isAuth? '/me' : '/login'} initial={{x:'-100%'}} animate={{x:0}} > {isAuth? <FaUser/>:<FiLogIn/>}  </Link>
      </div>
    </nav>
  )
}

export default Navbar
