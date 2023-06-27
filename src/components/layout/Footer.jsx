import React from 'react';
import {AiFillYoutube,AiFillInstagram,AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  return (
   <footer>
    <div>
        <h2>MBA Burger Wala</h2>
        <p>We are trying to give you the best taste possible</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <strong>All right received @mbaburgerwala</strong>
    </div>
    <aside>
        <h3>Follow Us</h3>
        <a href="www.youtube.come"> <AiFillYoutube/> </a>
        <a href="www.instogram.com"><AiFillInstagram/> </a>
        <a href="www.github.com"><AiFillGithub/> </a>
    </aside>
   </footer>
  )
}

export default Footer
