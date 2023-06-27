import React from 'react'
import MenuCard from './MenuCard.jsx';
import burgerSrc1 from '../../assests/burger1.png';
import burgerSrc2 from '../../assests/burger2.png';
import burgerSrc3 from '../../assests/burger3.png';

const Menu = () => {
  const addToCartHandler = (itemNum)=>{

  }
  return (
    <section id='menu'>
      <h1>Menu</h1>
      <div>
        <MenuCard itemNum={1} burgerSrc={burgerSrc1} price={200} delay={0.1} title={'Cheese Burger'} handler={addToCartHandler} />
        <MenuCard itemNum={2} burgerSrc={burgerSrc2} price={500} delay={0.5} title={'Veg Cheese Burger'} handler={addToCartHandler}/>
        <MenuCard itemNum={3} burgerSrc={burgerSrc3} price={800} delay={0.8} title={'Burger With French Fries '} handler={addToCartHandler}/>
      </div>
    </section>
  )
}

export default Menu
